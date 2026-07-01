const MODEL_POLICY = {
  free: {
    provider: "opencode",
    baseUrl: process.env.OPENCODE_BASE_URL || "https://opencode.ai/zen/v1",
    apiKey: process.env.OPENCODE_API_KEY,
    model: process.env.OPENCODE_FREE_MODEL || "deepseek-v4-flash-free",
  },
  paid: {
    provider: "gptsapi",
    baseUrl: process.env.GPTAPI_BASE_URL || "https://api.gptsapi.net/v1",
    apiKey: process.env.GPTSAPI_API_KEY || process.env.GPTAPI_API_KEY,
    model: process.env.GPTAPI_QUALITY_MODEL || "gpt-4.1-mini",
  },
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

function pickRoute(task, quality) {
  if (quality === "high") return [MODEL_POLICY.paid, MODEL_POLICY.free];
  if (task === "exam_feedback") return [MODEL_POLICY.free, MODEL_POLICY.paid];
  return [MODEL_POLICY.free, MODEL_POLICY.paid];
}

function systemPrompt() {
  return [
    "你是迪拜房产业务英语老师，服务对象是不懂技术、做运营的中文用户。",
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
  if (!route.apiKey) {
    throw new Error(`${route.provider} key missing`);
  }

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

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON" });
  }

  const messages = [
    { role: "system", content: systemPrompt() },
    { role: "user", content: userPrompt(payload) },
  ];

  const routes = pickRoute(payload.task, payload.quality);
  const errors = [];
  for (const route of routes) {
    try {
      const result = await callOpenAICompatible(route, messages);
      return json(200, { ...result, fallback: false });
    } catch (error) {
      errors.push(error.message);
    }
  }

  return json(200, {
    provider: "local",
    model: "template-fallback",
    fallback: true,
    content: "",
    errors,
  });
};
