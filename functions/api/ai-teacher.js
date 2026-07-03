import { cors, json, requireUser } from "../_shared/auth.js";

const DEFAULTS = {
  opencodeBaseUrl: "https://opencode.ai/zen/v1",
  opencodeModel: "deepseek-v4-flash-free",
  gptsapiBaseUrl: "https://api.gptsapi.net/v1",
  gptsapiModel: "gpt-4.1-mini",
};

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

  if (payload.task === "exam_next") {
    return [
      "你正在扮演业务英语应用考试中的对话对象。根据学员已学会的知识点，继续自然追问一轮。",
      "要求：只输出一句英文角色台词，20词以内；不要解释；不要给答案；贴近日常工作对话。",
      "可扮演 Customer、Agent 或 Partner。",
      `已学知识点：${JSON.stringify(payload.learnedLessons || [])}`,
      `历史对话：${JSON.stringify(payload.messages || [])}`,
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
      `完整对话：${JSON.stringify(payload.messages || [])}`,
    ].join("\n");
  }

  return [
    "用户会把中文、英文、单词或一个工作问题直接发给你。你先判断用户需要的是中译英、英译中、词汇解释、表达润色还是话术生成，然后像老师一样回答。",
    "请把回答沉淀成一个可学习的工作英语案例。",
    "风格要求：英文必须自然、日常、地道，像 WhatsApp/飞书/工作聊天里真人会说的话；避免生硬翻译、过度正式、过度销售、过度专业。",
    "业务边界：我们是线索收集和清洗服务，不要说自己持有房源，不要承诺收益。",
    "输出格式：",
    "1. 老师判断：这属于中译英/英译中/词汇解释/表达润色/话术生成",
    "2. 推荐英文/中文意思",
    "3. 为什么这么说",
    "4. 重点词汇",
    "5. 工作场景案例",
    "6. 可练习对话",
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
  const user = await requireUser(request, env);
  if (!user) return cors(json({ error: "Unauthorized" }, 401));

  let payload;
  try {
    payload = await request.json();
  } catch {
    return cors(json({ error: "Invalid JSON" }, 400));
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
