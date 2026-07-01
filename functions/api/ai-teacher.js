const DEFAULTS = {
  opencodeBaseUrl: "https://opencode.ai/zen/v1",
  opencodeModel: "deepseek-v4-flash-free",
  gptsapiBaseUrl: "https://api.gptsapi.net/v1",
  gptsapiModel: "gpt-4.1-mini",
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function cors(response) {
  const next = new Response(response.body, response);
  next.headers.set("access-control-allow-origin", "*");
  next.headers.set("access-control-allow-methods", "POST, OPTIONS");
  next.headers.set("access-control-allow-headers", "content-type");
  return next;
}

function routes(env, task, quality) {
  const free = {
    provider: "opencode",
    baseUrl: env.OPENCODE_BASE_URL || DEFAULTS.opencodeBaseUrl,
    apiKey: env.OPENCODE_API_KEY,
    model: env.OPENCODE_FREE_MODEL || DEFAULTS.opencodeModel,
  };
  const paid = {
    provider: "gptsapi",
    baseUrl: env.GPTAPI_BASE_URL || DEFAULTS.gptsapiBaseUrl,
    apiKey: env.GPTSAPI_API_KEY || env.GPTAPI_API_KEY,
    model: env.GPTAPI_QUALITY_MODEL || DEFAULTS.gptsapiModel,
  };
  if (quality === "high") return [paid, free];
  if (task === "exam_feedback") return [free, paid];
  return [free, paid];
}

function systemPrompt() {
  return [
    "你是迪拜房产业务英语老师，服务对象是做迪拜房产运营的中文用户。",
    "学习目标：围绕迪拜房产线索、楼盘介绍、agent 协作、新伙伴商务合作来学英语。",
    "输出要短、清楚、实用。不要虚构房源，不要承诺收益，不要说我们自己持有房源。",
    "如果用户输入中文，先生成自然英文，再解释为什么这么说。",
    "如果用户输入英文，先解释中文意思，再拆重点词和业务语气。",
  ].join("\n");
}

function userPrompt(payload) {
  if (payload.task === "exam_feedback") {
    return [
      "请根据以下多轮应用考试，给中文反馈，并给一版更自然的英文表达建议。",
      "输出格式：",
      "1. 总体评价",
      "2. 主要问题",
      "3. 推荐表达",
      "4. 下次练习重点",
      "",
      `场景：${payload.module || ""}`,
      `评分点：${JSON.stringify(payload.checklist || [])}`,
      `AI 提问：${JSON.stringify(payload.rounds || [])}`,
      `用户回答：${JSON.stringify(payload.answers || [])}`,
    ].join("\n");
  }

  return [
    "请把下面内容生成一个工作英语学习案例。",
    "输出格式：",
    "1. 推荐英文/中文意思",
    "2. 为什么这么说",
    "3. 重点词汇",
    "4. 工作场景案例",
    "5. 可练习对话",
    "",
    `用户输入：${payload.input || ""}`,
  ].join("\n");
}

async function callOpenAICompatible(route, messages) {
  if (!route.apiKey) throw new Error(`${route.provider} key missing`);

  const response = await fetch(`${route.baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${route.apiKey}`,
    },
    body: JSON.stringify({
      model: route.model,
      messages,
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${route.provider} ${response.status}: ${text.slice(0, 300)}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error(`${route.provider} returned empty content`);
  return {
    provider: route.provider,
    model: route.model,
    content,
  };
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return cors(new Response(null, { status: 204 }));
  if (request.method !== "POST") return cors(json({ error: "Method not allowed" }, 405));

  let payload;
  try {
    payload = await request.json();
  } catch {
    return cors(json({ error: "Invalid JSON" }, 400));
  }

  const messages = [
    { role: "system", content: systemPrompt() },
    { role: "user", content: userPrompt(payload) },
  ];

  const errors = [];
  for (const route of routes(env, payload.task, payload.quality)) {
    try {
      const result = await callOpenAICompatible(route, messages);
      return cors(json({ ...result, fallback: false }));
    } catch (error) {
      errors.push(error.message);
    }
  }

  return cors(json({
    provider: "local",
    model: "template-fallback",
    fallback: true,
    content: "",
    errors,
  }));
}
