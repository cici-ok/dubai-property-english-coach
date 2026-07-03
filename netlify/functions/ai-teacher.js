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
  const paidFallbackEnabled = process.env.ALLOW_PAID_FALLBACK === "true";
  const paidRequestEnabled = process.env.ALLOW_PAID_REQUESTS === "true";
  if (quality === "paid" && paidRequestEnabled) return [MODEL_POLICY.paid];
  return paidFallbackEnabled ? [MODEL_POLICY.free, MODEL_POLICY.paid] : [MODEL_POLICY.free];
}

function systemPrompt() {
  return [
    "你是迪拜房产业务英语老师，服务对象是不懂技术、做运营的中文用户。",
    "学习目标：围绕迪拜房产线索、楼盘介绍、agent 协作、新伙伴商务合作来学英语。",
    "输出要短、清楚、实用。不要虚构房源，不要承诺收益，不要说我们自己持有房源。",
    "如果用户输入中文，先生成自然英文，再解释为什么这么说。",
    "如果用户输入英文，先解释中文意思，再拆重点词和业务语气。",
    "你要支持连续对话，必须结合前文回答用户追问。",
    "如果用户质疑你的表达、指出不自然、说不对或要求更地道，你要先判断质疑是否成立；如果成立，明确修正并给更自然版本；如果不成立，也要解释原因并给一个更稳妥的备选。",
    "英文表达优先 WhatsApp、飞书、工作聊天里的自然口吻，不要写成作文、广告或法律文件。",
  ].join("\n");
}

function normalizeCoachMessages(payload) {
  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  const safeMessages = messages
    .filter((message) => ["user", "assistant"].includes(message?.role) && message?.content)
    .slice(-12)
    .map((message) => ({
      role: message.role,
      content: String(message.content).slice(0, 2000),
    }));
  if (payload.input && safeMessages[safeMessages.length - 1]?.content !== payload.input) {
    safeMessages.push({ role: "user", content: String(payload.input).slice(0, 2000) });
  }
  return safeMessages;
}

function userPrompt(payload) {
  if (payload.task === "coach_chat") {
    return [
      "你正在和用户进行连续英语学习对话。请回答最后一条用户消息，并结合前文。",
      "回答结构：",
      "1. 直接回答",
      "2. 更自然的英文表达",
      "3. 为什么这么说",
      "4. 可继续练的一句",
      "",
      "如果用户是在质疑你之前的表达是否自然/是否正确：先自查，再修正，不要强行维护原答案。",
      "如果用户只是追问单词、语气、场景差异：围绕实际 Dubai property 工作场景回答。",
    ].join("\n");
  }

  if (payload.task === "coach_summarize") {
    return [
      "请把下面这段 AI 老师连续对话整理成一个工作英语学习案例。",
      "不要逐字复述聊天记录，要提炼成学员以后可以复习和考试的知识点。",
      "输出格式：",
      "1. 案例标题",
      "2. 原始问题/场景",
      "3. 推荐英文表达",
      "4. 中文意思",
      "5. 为什么这么说",
      "6. 重点词汇",
      "7. 可练习对话",
      "8. 容易出错",
      "",
      `对话记录：${JSON.stringify(normalizeCoachMessages(payload))}`,
    ].join("\n");
  }

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

  const messages = payload.task === "coach_chat"
    ? [
        { role: "system", content: systemPrompt() },
        { role: "system", content: userPrompt(payload) },
        ...normalizeCoachMessages(payload),
      ]
    : [
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
