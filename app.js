const STORAGE_KEYS = {
  cases: "dubaiEnglishCoach.cases",
  examLogs: "dubaiEnglishCoach.examLogs",
  progress: "dubaiEnglishCoach.progress",
};

const lessons = {
  lead: {
    tag: "TikTok lead",
    title: "客户说 interested，先判断买租和户型",
    context: "评论区客户只说感兴趣，目标是让客户回复买租、预算、户型和区域。",
    sourceRole: "Customer",
    source: "Interested. Please send details.",
    model:
      "Hi! Just saw your comment on TikTok. Are you looking to buy or rent in Dubai? What kind of unit are you interested in, studio, 1-bedroom, or 2-bedroom?",
    breakdown:
      "Are you looking to buy or rent 先判断买租；what kind of unit 用来问户型，比 what house 更贴近迪拜公寓沟通。",
    pronunciation: {
      phrase: "May I know your budget range and preferred area?",
      hint: "May I know 连读成 may-ai-know；budget 重音在 bu；preferred 重音在 ferred。",
      parts: "May I know / your BUdget range / and preFERRED area",
      tip: "读的时候不要一个词一个词蹦出来，先把 May I know 读成一个小块，再停顿。",
    },
    vocab: [
      ["unit", "房源单位、户型"],
      ["budget range", "预算范围"],
      ["preferred area", "偏好的区域"],
      ["investment", "投资"],
      ["personal use", "自住"],
      ["move-in timeline", "入住时间"],
    ],
    sentences: [
      ["Are you looking to buy or rent?", "先判断买还是租"],
      ["May I know your budget range?", "礼貌询问预算"],
      ["Which area do you prefer in Dubai?", "询问区域偏好"],
      ["Is it for investment or personal use?", "判断投资还是自住"],
    ],
    drills: [
      ["Could you share your budget range?", "换一种方式问预算"],
      ["Which area are you considering?", "问客户考虑哪个区域"],
      ["Are you buying for investment or personal use?", "更直接判断用途"],
      ["When are you planning to move or invest?", "问时间线"],
      ["I can help understand your requirements first.", "先收集需求，不承诺房源"],
    ],
    mistake:
      "不要一上来发一大段楼盘介绍。客户只说 interested 时，第一目标是拿到 buy/rent、预算、户型、区域。",
    usage:
      "May I know your budget range and preferred area? 适合客户第一次回复后使用，语气比 What is your budget 更自然。",
    examTask:
      "AI 扮演客户。你要在多轮对话里问清买租、预算、户型、区域和用途，不能承诺具体房源。",
    checklist: [
      ["需求", "问清 buy/rent、预算、户型、区域"],
      ["用途", "判断 investment / personal use"],
      ["边界", "不说 I have this unit 或承诺房源"],
    ],
    daily: "学会一句：May I know your budget range and preferred area?",
    examRounds: [
      "Customer: Interested. Please send details.",
      "Customer: I want to buy, maybe around 900k AED. Do you have 1-bedroom options?",
      "Customer: It is for investment. Which area would you suggest?",
      "Customer: Can you send me something on WhatsApp?",
    ],
    feedback:
      "第一轮要先问 buy/rent、预算、户型、区域；客户说投资后，不要承诺收益，可以说 rental demand / suitable area / budget range；最后引导 WhatsApp 跟进。",
  },
  agent: {
    tag: "Agent collaboration",
    title: "和迪拜 agent 约会议、要素材、跟进线索",
    context: "运营要推动合作 agent 给视频、确认房源信息、同步客户进展，语气要清楚但不强硬。",
    sourceRole: "Agent",
    source: "I will send the video later.",
    model:
      "Thanks. Could you please send it before 5 PM Dubai time? We plan to use it for tomorrow's lead follow-up.",
    breakdown:
      "Could you please 是礼貌催促；before 5 PM Dubai time 明确截止时间；lead follow-up 说明业务用途。",
    pronunciation: {
      phrase: "Could you please send it before 5 PM Dubai time?",
      hint: "Could you 常读成 could-ju；please 轻轻拉长；before 重音在 fore。",
      parts: "Could you please / SEND it / before FIVE PM / Dubai time",
      tip: "催对方时语速不要太快，please 和 before 之间留一点停顿，会更礼貌。",
    },
    vocab: [
      ["schedule a call", "约电话/会议"],
      ["lead follow-up", "线索跟进"],
      ["property video", "房源视频"],
      ["Dubai time", "迪拜时间"],
      ["latest status", "最新进展"],
      ["viewing", "看房"],
    ],
    sentences: [
      ["Could we schedule a quick call?", "约一个短会"],
      ["Could you share the latest lead status?", "问线索进展"],
      ["Please send the property video before 5 PM Dubai time.", "催视频并给截止时间"],
      ["Has the client confirmed the viewing time?", "确认客户是否约好看房"],
    ],
    drills: [
      ["Could you send the latest property video today?", "催素材"],
      ["Please confirm if the unit is still available.", "确认房源是否还在"],
      ["Could we align on the next step for this lead?", "同步下一步"],
      ["Can you update me after you speak with the client?", "让 agent 回传进展"],
      ["Let's schedule a quick call in Dubai time.", "约短会"],
    ],
    mistake:
      "不要只说 send me video。和 agent 沟通要说明截止时间和用途，对方更容易配合。",
    usage:
      "Could you share the latest lead status? 适合问合作 agent 客户有没有回复、是否已约看房、下一步怎么推进。",
    examTask:
      "AI 扮演迪拜 agent。你要确认素材截止时间、线索进展、会议安排和下一步跟进。",
    checklist: [
      ["时间", "明确 before 5 PM Dubai time"],
      ["用途", "说明用于 lead follow-up"],
      ["推进", "问 latest lead status 和 next step"],
    ],
    daily: "学会一句：Could you share the latest lead status?",
    examRounds: [
      "Agent: I will send the property video later.",
      "Agent: The client asked for a 2-bedroom. I am not sure about the budget yet.",
      "Agent: Can we schedule a quick call tomorrow to discuss the new leads?",
      "Agent: Should I follow up with this client today?",
    ],
    feedback:
      "和 agent 沟通要明确 deadline、用途和下一步；约会议时要加 Dubai time；问线索进展时用 latest lead status。",
  },
  partner: {
    tag: "Business partnership",
    title: "和新合作伙伴谈合作方式和线索分配",
    context: "新伙伴沟通重点是说清我们做线索收集和清洗，对方负责具体房源和成交。",
    sourceRole: "Partner",
    source: "How do you work with agents?",
    model:
      "We focus on generating and qualifying Dubai property leads. After we understand the client's needs, we can pass suitable leads to partner agents for follow-up.",
    breakdown:
      "generating and qualifying leads 表示获取并筛选线索；pass suitable leads 表示转交合适线索。",
    pronunciation: {
      phrase: "We focus on generating and qualifying Dubai property leads.",
      hint: "focus on 会连读；generating 重音在 ge；qualifying 重音在 qua。",
      parts: "We FOcus on / GEnerating and QUAlifying / Dubai PROperty leads",
      tip: "商务介绍要稳一点，focus on 后面停顿，再讲我们具体做什么。",
    },
    vocab: [
      ["qualify leads", "筛选/判断线索质量"],
      ["partner agent", "合作经纪人"],
      ["commission model", "佣金模式"],
      ["shared leads", "共享线索"],
      ["exclusive leads", "独家线索"],
      ["conversion quality", "转化质量"],
    ],
    sentences: [
      ["We focus on generating and qualifying leads.", "说明我们负责获客和筛选"],
      ["Partner agents handle property details and follow-up.", "说明合作方负责房源和跟进"],
      ["What commission model do you usually work with?", "询问分佣方式"],
      ["We can start with shared leads first.", "先从共享线索合作开始"],
    ],
    drills: [
      ["We mainly handle lead generation and qualification.", "说明我们做线索"],
      ["Partner agents handle property details and closing.", "说明分工"],
      ["We can test the cooperation with shared leads first.", "先试合作"],
      ["How do you usually structure commission?", "问佣金方式"],
      ["Let's review conversion quality before discussing exclusivity.", "独家先不承诺"],
    ],
    mistake:
      "不要说 we have many properties。我们的定位是线索服务，不要把自己说成持有房源的中介。",
    usage:
      "What commission model do you usually work with? 适合商务合作阶段问对方常用分佣方式。",
    examTask:
      "AI 扮演新合作伙伴。你要说明合作定位、线索分配、是否独家和佣金方式。",
    checklist: [
      ["定位", "说清 generating and qualifying leads"],
      ["分工", "partner agents 负责后续跟进"],
      ["商务", "询问 commission model，不轻易承诺独家"],
    ],
    daily: "学会一句：What commission model do you usually work with?",
    examRounds: [
      "Partner: How do you usually work with agents?",
      "Partner: Do you provide exclusive leads or shared leads?",
      "Partner: What kind of clients do you usually have?",
      "Partner: How do you want to handle commission?",
    ],
    feedback:
      "商务合作要先讲清定位：我们做线索生成和筛选，partner agent 负责房源和跟进；独家不要过早承诺，先 shared leads 看 conversion quality。",
  },
  project: {
    tag: "Project introduction",
    title: "介绍楼盘时讲清位置、价格、付款计划",
    context: "楼盘介绍不要堆形容词，先讲客户最关心的区域、户型、起价、付款计划和交房。",
    sourceRole: "Client",
    source: "Can you tell me more about this project?",
    model:
      "This project is located in JVC. It offers studio and 1-bedroom units, with prices starting from 750k AED and a flexible payment plan.",
    breakdown:
      "located in 讲位置；prices starting from 表示起价；flexible payment plan 表示灵活付款计划。",
    pronunciation: {
      phrase: "Prices start from 750k AED with a flexible payment plan.",
      hint: "prices start from 可以连起来读；flexible 重音在 flex；payment plan 两个词都要清楚。",
      parts: "PRices start from / seven hundred fifty K AED / with a FLEXible / PAYment PLAN",
      tip: "数字部分慢一点，750k AED 要让客户听清楚。",
    },
    vocab: [
      ["located in", "位于"],
      ["starting from", "起价"],
      ["payment plan", "付款计划"],
      ["handover", "交房"],
      ["rental demand", "租赁需求"],
      ["developer", "开发商"],
    ],
    sentences: [
      ["The project is located in JVC.", "说明位置"],
      ["Prices start from 750k AED.", "说明起价"],
      ["It offers a flexible payment plan.", "说明付款计划"],
      ["It can be suitable for investment or personal use.", "说明投资或自住"],
    ],
    drills: [
      ["The project is located in a fast-growing area.", "讲区域潜力"],
      ["The starting price depends on unit size and availability.", "避免报死价"],
      ["The payment plan is flexible for investors.", "讲付款计划"],
      ["The handover date is expected in 2027.", "讲交房时间"],
      ["I cannot guarantee ROI, but we can compare rental demand.", "不保证收益"],
    ],
    mistake:
      "不要只说 luxury、amazing、best deal。优先讲区域、价格、户型、付款计划、交房时间。",
    usage:
      "It is suitable for both investment and personal use. 适合总结项目既可投资也可自住。",
    examTask:
      "AI 扮演客户。你要介绍项目位置、户型、起价、付款计划、交房，并避免保证收益。",
    checklist: [
      ["信息", "讲 location、unit type、starting price、payment plan"],
      ["边界", "不能 guarantee ROI"],
      ["下一步", "引导客户说预算或投资目标"],
    ],
    daily: "学会一句：Prices start from 750k AED with a flexible payment plan.",
    examRounds: [
      "Client: Can you tell me more about this project?",
      "Client: Is this project good for investment?",
      "Client: What is the starting price and payment plan?",
      "Client: When is the handover?",
    ],
    feedback:
      "楼盘介绍要按 location、unit type、starting price、payment plan、handover 讲；投资问题不能 guarantee ROI，要用 rental demand 和 area potential。",
  },
};

let currentModule = "lead";
let currentStage = "learn";
let currentRound = 0;
let examAnswers = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const ids = {
  moduleHead: $("#moduleHead"),
  moduleTag: $("#moduleTag"),
  moduleTitle: $("#moduleTitle"),
  moduleContext: $("#moduleContext"),
  sourceRole: $("#sourceRole"),
  sourceLine: $("#sourceLine"),
  modelLine: $("#modelLine"),
  breakdown: $("#breakdown"),
  vocabList: $("#vocabList"),
  sentenceList: $("#sentenceList"),
  mistake: $("#mistake"),
  usage: $("#usage"),
  drillList: $("#drillList"),
  pronunciationPhrase: $("#pronunciationPhrase"),
  pronunciationHint: $("#pronunciationHint"),
  pronunciationParts: $("#pronunciationParts"),
  pronunciationTip: $("#pronunciationTip"),
  learnView: $("#learnView"),
  examView: $("#examView"),
  coachView: $("#coachView"),
  examTitle: $("#examTitle"),
  examTask: $("#examTask"),
  examChecklist: $("#examChecklist"),
  dailyCard: $("#dailyCard"),
  dailyCopy: $("#dailyCopy"),
  todayGoal: $("#todayGoal"),
  todayTitle: $("#todayTitle"),
  learnedCount: $("#learnedCount"),
  examCount: $("#examCount"),
  caseCount: $("#caseCount"),
  markLearned: $("#markLearned"),
  examCard: $("#examCard"),
  roundLabel: $("#roundLabel"),
  examChat: $("#examChat"),
  replyBox: $("#replyBox"),
  submitRound: $("#submitRound"),
  resetExam: $("#resetExam"),
  examFeedback: $("#examFeedback"),
  coachInput: $("#coachInput"),
  generateCase: $("#generateCase"),
  coachResult: $("#coachResult"),
  savedCaseCard: $("#savedCaseCard"),
  savedCount: $("#savedCount"),
  savedCases: $("#savedCases"),
  examHistory: $("#examHistory"),
  exportData: $("#exportData"),
  importData: $("#importData"),
  clearCases: $("#clearCases"),
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function renderList(target, rows) {
  target.innerHTML = rows.map(([term, meaning]) => `<li><strong>${escapeHtml(term)}</strong><span>${escapeHtml(meaning)}</span></li>`).join("");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function renderLesson() {
  const lesson = lessons[currentModule];
  ids.moduleTag.textContent = lesson.tag;
  ids.moduleTitle.textContent = lesson.title;
  ids.moduleContext.textContent = lesson.context;
  ids.sourceRole.textContent = lesson.sourceRole;
  ids.sourceLine.textContent = lesson.source;
  ids.modelLine.textContent = lesson.model;
  ids.breakdown.textContent = lesson.breakdown;
  ids.pronunciationPhrase.textContent = lesson.pronunciation.phrase;
  ids.pronunciationHint.textContent = lesson.pronunciation.hint;
  ids.pronunciationParts.textContent = lesson.pronunciation.parts;
  ids.pronunciationTip.textContent = lesson.pronunciation.tip;
  ids.mistake.textContent = lesson.mistake;
  ids.usage.textContent = lesson.usage;
  ids.dailyCopy.textContent = lesson.daily;
  renderList(ids.vocabList, lesson.vocab);
  renderList(ids.sentenceList, lesson.sentences);
  renderList(ids.drillList, lesson.drills);
  renderProgress();
}

function renderExamSetup() {
  const lesson = lessons[currentModule];
  ids.examTitle.textContent = `${lesson.title}：多轮考试`;
  ids.examTask.textContent = lesson.examTask;
  renderList(ids.examChecklist, lesson.checklist);
  currentRound = 0;
  examAnswers = [];
  ids.replyBox.value = "";
  ids.submitRound.textContent = "提交本轮";
  ids.examFeedback.textContent = "连续完成几轮后，系统会统一指出问题。";
  renderExamChat();
}

function renderExamChat() {
  const lesson = lessons[currentModule];
  ids.roundLabel.textContent = `Round ${Math.min(currentRound + 1, lesson.examRounds.length)} / ${lesson.examRounds.length}`;
  ids.examChat.innerHTML = lesson.examRounds
    .slice(0, currentRound + 1)
    .map((prompt, index) => {
      const answer = examAnswers[index];
      const answerHtml = answer ? `<p class="chat-line user">You: ${escapeHtml(answer)}</p>` : "";
      return `<p class="chat-line bot">${escapeHtml(prompt)}</p>${answerHtml}`;
    })
    .join("");
}

function renderStage() {
  const isLearn = currentStage === "learn";
  const isExam = currentStage === "exam";
  const isCoach = currentStage === "coach";
  ids.moduleHead.hidden = isCoach;
  ids.learnView.hidden = !isLearn;
  ids.examView.hidden = !isExam;
  ids.coachView.hidden = !isCoach;
  ids.dailyCard.hidden = !isLearn;
  ids.examCard.hidden = !isExam;
  ids.savedCaseCard.hidden = false;
  if (isExam) renderExamSetup();
  renderProgress();
}

function renderSavedCases() {
  const cases = readJson(STORAGE_KEYS.cases, []);
  ids.savedCount.textContent = `${cases.length} 个`;
  ids.savedCases.innerHTML = cases.length
    ? cases
        .slice(0, 4)
        .map((item) => `<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.summary)}</span></article>`)
        .join("")
    : "<p>还没有保存案例。</p>";
  renderProgress();
}

function renderExamHistory() {
  const logs = readJson(STORAGE_KEYS.examLogs, []);
  ids.examHistory.innerHTML = logs.length
    ? logs
        .slice(0, 3)
        .map((item) => {
          const lesson = lessons[item.module] || {};
          const date = item.createdAt ? item.createdAt.slice(0, 10) : "";
          return `<article><strong>${escapeHtml(lesson.title || item.module)}</strong><span>${escapeHtml(date)} · ${escapeHtml(item.summary || "已完成多轮考试")}</span></article>`;
        })
        .join("")
    : "<p>还没有考试记录。</p>";
}

function renderProgress() {
  const progress = readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] });
  const cases = readJson(STORAGE_KEYS.cases, []);
  const logs = readJson(STORAGE_KEYS.examLogs, []);
  const learnedModules = Object.keys(progress.learned || {}).length;
  ids.learnedCount.textContent = `${learnedModules}/4`;
  ids.examCount.textContent = `${logs.length}`;
  ids.caseCount.textContent = `${cases.length}`;
  const doneToday = Boolean(progress.learned?.[currentModule]?.lastDate === todayKey());
  ids.markLearned.textContent = doneToday ? "今天已学完" : "标记今天学完";
  ids.markLearned.disabled = doneToday;
  ids.todayTitle.textContent = doneToday ? "今天这课已完成" : "今天先学这一句";
  ids.todayGoal.textContent = logs.length ? "学 1 课 + 复盘 1 条" : "学 1 课 + 考 1 轮";
  renderExamHistory();
}

function markCurrentLessonLearned() {
  const progress = readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] });
  const day = todayKey();
  const learned = progress.learned || {};
  const current = learned[currentModule] || { count: 0 };
  learned[currentModule] = {
    count: (current.count || 0) + 1,
    lastDate: day,
    lastTitle: lessons[currentModule].title,
  };
  const streakDates = Array.from(new Set([day, ...(progress.streakDates || [])])).slice(0, 30);
  writeJson(STORAGE_KEYS.progress, { learned, streakDates });
  renderProgress();
}

function exportLearningData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    version: 1,
    cases: readJson(STORAGE_KEYS.cases, []),
    examLogs: readJson(STORAGE_KEYS.examLogs, []),
    progress: readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] }),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `dubai-english-coach-backup-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importLearningData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(reader.result);
      if (Array.isArray(payload.cases)) writeJson(STORAGE_KEYS.cases, payload.cases);
      if (Array.isArray(payload.examLogs)) writeJson(STORAGE_KEYS.examLogs, payload.examLogs);
      if (payload.progress) writeJson(STORAGE_KEYS.progress, payload.progress);
      renderSavedCases();
      renderProgress();
    } catch {
      ids.savedCases.innerHTML = "<p>导入失败，文件格式不对。</p>";
    }
  };
  reader.readAsText(file);
}

function setModule(module) {
  currentModule = module;
  $$(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.module === module));
  renderLesson();
  renderStage();
}

function setStage(stage) {
  currentStage = stage;
  $$(".stage").forEach((button) => button.classList.toggle("active", button.dataset.stage === stage));
  renderStage();
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    ids.pronunciationTip.textContent = "当前浏览器不支持朗读，可以先看拆分读音练习。";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function makeCoachCase(raw) {
  const hasChinese = /[\u4e00-\u9fff]/.test(raw);
  if (hasChinese) {
    return {
      title: "中文转英文：催 agent 发素材",
      summary: "把中文工作意图变成礼貌、清楚、有截止时间的英文。",
      html: `
        <h3>AI 生成的学习案例</h3>
        <p><strong>你的中文：</strong>${escapeHtml(raw)}</p>
        <p><strong>推荐英文：</strong>Could you please send the property video before 5 PM Dubai time? We need it for tomorrow's lead follow-up.</p>
        <p><strong>为什么这么说：</strong>Could you please 更礼貌；before 5 PM Dubai time 给出清楚截止时间；lead follow-up 说明业务用途。</p>
        <p><strong>重点词：</strong>property video = 房源视频；Dubai time = 迪拜时间；lead follow-up = 线索跟进。</p>
        <p><strong>练习对话：</strong>Agent: I will send it later. / You: Thanks. Could you please send it before 5 PM Dubai time?</p>
      `,
    };
  }
  return {
    title: "英文解析：安排快速会议",
    summary: "理解 schedule a quick call 的工作语气，并学习自然回复。",
    html: `
      <h3>AI 生成的学习案例</h3>
      <p><strong>原文：</strong>${escapeHtml(raw)}</p>
      <p><strong>中文意思：</strong>我们明天能不能快速通个电话，讨论一下新的线索？</p>
      <p><strong>重点词：</strong>schedule = 安排时间；quick call = 简短电话/会议；new leads = 新线索。</p>
      <p><strong>语气解释：</strong>Can we schedule... 是自然的工作沟通表达，因为它直接说明要安排会议。</p>
      <p><strong>你可以这样回：</strong>Sure, tomorrow works for me. What time would be convenient for you in Dubai time?</p>
    `,
  };
}

function markdownToHtml(text) {
  return escapeHtml(text)
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";
      if (/^\d+\.\s/.test(trimmed)) {
        return `<p><strong>${trimmed.replace(/^\d+\.\s/, "")}</strong></p>`;
      }
      return `<p>${trimmed}</p>`;
    })
    .join("");
}

async function callAiTeacher(payload) {
  const endpoints = [
    window.AI_TEACHER_ENDPOINT,
    "/.netlify/functions/ai-teacher",
    "/api/ai-teacher",
  ].filter(Boolean);
  const errors = [];
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`${endpoint} ${response.status}`);
      return response.json();
    } catch (error) {
      errors.push(error.message);
    }
  }
  throw new Error(`AI request failed: ${errors.join(" / ")}`);
}

async function makeCoachCaseWithAi(raw) {
  const localCase = makeCoachCase(raw);
  try {
    const result = await callAiTeacher({
      task: "coach_case",
      quality: "standard",
      input: raw,
    });
    if (result.content) {
      return {
        title: localCase.title,
        summary: `${result.provider} / ${result.model}`,
        html: `<h3>AI 生成的学习案例</h3>${markdownToHtml(result.content)}`,
      };
    }
  } catch (error) {
    console.warn(error);
  }
  return localCase;
}

function saveCase(item) {
  const cases = readJson(STORAGE_KEYS.cases, []);
  const next = [{ ...item, createdAt: new Date().toISOString() }, ...cases].slice(0, 20);
  writeJson(STORAGE_KEYS.cases, next);
  renderSavedCases();
}

async function submitExamRound() {
  const lesson = lessons[currentModule];
  const text = ids.replyBox.value.trim();
  if (!text) {
    ids.examFeedback.textContent = "先写这一轮英文回复，再提交。";
    return;
  }
  examAnswers[currentRound] = text;
  ids.replyBox.value = "";

  if (currentRound < lesson.examRounds.length - 1) {
    currentRound += 1;
    renderExamChat();
    ids.examFeedback.textContent = "已记录这一轮。继续回复下一轮。";
    return;
  }

  renderExamChat();
  ids.submitRound.textContent = "已完成";
  ids.examFeedback.textContent = "正在生成 AI 总结反馈...";
  let feedbackText = lesson.feedback;
  try {
    const result = await callAiTeacher({
      task: "exam_feedback",
      quality: "standard",
      module: currentModule,
      checklist: lesson.checklist,
      rounds: lesson.examRounds,
      answers: examAnswers,
    });
    feedbackText = result.content || lesson.feedback;
    ids.examFeedback.textContent = `总结反馈：${feedbackText}`;
  } catch (error) {
    console.warn(error);
    ids.examFeedback.textContent = `总结反馈：${feedbackText}`;
  }
  const logs = readJson(STORAGE_KEYS.examLogs, []);
  writeJson(
    STORAGE_KEYS.examLogs,
    [
      {
        module: currentModule,
        answers: examAnswers,
        feedback: feedbackText,
        summary: `完成 ${lesson.examRounds.length} 轮`,
        createdAt: new Date().toISOString(),
      },
      ...logs,
    ].slice(0, 30),
  );
  renderProgress();
}

$$(".nav-item").forEach((button) => button.addEventListener("click", () => setModule(button.dataset.module)));
$$(".stage").forEach((button) => button.addEventListener("click", () => setStage(button.dataset.stage)));
$$(".quick-prompt").forEach((button) => {
  button.addEventListener("click", () => {
    ids.coachInput.value = button.dataset.sample;
  });
});
$$(".speak-button").forEach((button) => {
  button.addEventListener("click", () => {
    const lesson = lessons[currentModule];
    const text = button.dataset.speak === "model" ? lesson.model : lesson.pronunciation.phrase;
    speakText(text);
  });
});

ids.submitRound.addEventListener("click", submitExamRound);
ids.resetExam.addEventListener("click", renderExamSetup);
ids.markLearned.addEventListener("click", markCurrentLessonLearned);
ids.exportData.addEventListener("click", exportLearningData);
ids.importData.addEventListener("change", () => importLearningData(ids.importData.files[0]));
ids.generateCase.addEventListener("click", async () => {
  const raw = ids.coachInput.value.trim();
  if (!raw) {
    ids.coachResult.innerHTML = "<h3>先输入内容</h3><p>可以粘贴英文，也可以直接写中文问题。</p>";
    return;
  }
  ids.generateCase.textContent = "生成中...";
  ids.generateCase.disabled = true;
  ids.coachResult.innerHTML = "<h3>AI 老师正在分析</h3><p>正在按模型规则选择低成本模型，失败时会自动使用本地兜底。</p>";
  const item = await makeCoachCaseWithAi(raw);
  ids.generateCase.textContent = "生成学习案例";
  ids.generateCase.disabled = false;
  ids.coachResult.innerHTML = `${item.html}<button id="saveGeneratedCase" type="button">保存到我的案例</button>`;
  $("#saveGeneratedCase").addEventListener("click", () => saveCase(item));
});
ids.clearCases.addEventListener("click", () => {
  writeJson(STORAGE_KEYS.cases, []);
  renderSavedCases();
});

renderLesson();
renderStage();
renderSavedCases();
renderProgress();
