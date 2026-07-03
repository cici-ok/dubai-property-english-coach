const STORAGE_KEYS = {
  auth: "dubaiEnglishCoach.auth",
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

function buildExpandedLessons() {
  const scenarios = [
    ["lead_budget", "Lead qualification", "客户只问价格，先问预算范围", "Customer", "How much is it?", "The price depends on the unit type and availability. May I know your budget range and whether you are looking to buy or rent?", "price depends on 用来避免报死价；budget range 比 your budget 更礼貌。", "May I know your budget range?", "May I know / your BUdget range", "budget range", "预算范围"],
    ["lead_area", "Lead qualification", "客户问哪个区域好，先判断用途", "Customer", "Which area is best?", "It depends on your purpose. Are you buying for investment or personal use?", "It depends on your purpose 很自然，先把推荐区域变成需求判断。", "Are you buying for investment or personal use?", "Are you BUYing / for inVESTment / or PERsonal use", "purpose", "用途"],
    ["lead_whatsapp", "Lead qualification", "把客户引导到 WhatsApp 继续沟通", "Customer", "Send me details.", "Sure. Could you share your WhatsApp number so I can send the details and understand your requirements better?", "understand your requirements better 能体现先收集需求，不像硬推销。", "Could you share your WhatsApp number?", "Could you SHARE / your WHATSapp number", "requirements", "需求"],
    ["lead_old", "Lead follow-up", "跟进很久前的老线索", "Customer", "I commented a while ago.", "Hi, not sure if you are still looking, but I noticed your old comment on a Dubai property video. Are you still considering Dubai property?", "not sure if you are still looking 适合老线索，不会显得唐突。", "Are you still considering Dubai property?", "Are you STILL / considering / Dubai PROperty", "still looking", "还在找"],
    ["lead_rent", "Rental lead", "租房客户先问入住时间", "Customer", "I need a 1-bedroom for rent.", "Sure. When are you planning to move in, and which area do you prefer?", "租房先问 move in 时间和区域，后面再聊预算。", "When are you planning to move in?", "When are you PLANning / to MOVE in", "move in", "入住"],
    ["lead_short_term", "Rental lead", "短租客户问日期和人数", "Customer", "Do you have short-term rentals?", "For short-term rentals, may I know your check-in date, length of stay, and how many people will stay?", "短租重点是日期、入住时长、人数。", "May I know your check-in date?", "May I KNOW / your CHECK-in date", "length of stay", "入住时长"],
    ["agent_video_deadline", "Agent collaboration", "催 agent 按时发视频", "Agent", "I will send it later.", "Thanks. Could you please send it before 5 PM Dubai time? We need it for tomorrow's lead follow-up.", "Could you please 加截止时间和用途，催促但不生硬。", "Could you please send it before 5 PM Dubai time?", "Could you PLEASE / SEND it / before FIVE PM", "deadline", "截止时间"],
    ["agent_availability", "Agent collaboration", "确认房源是否还在", "Agent", "The client asked about this unit.", "Could you please confirm if the unit is still available and share the latest price?", "available 和 latest price 是跟 agent 核实房源最常用的组合。", "Is the unit still available?", "Is the UNIT / still aVAILable", "available", "可售/可租"],
    ["agent_lead_status", "Agent collaboration", "问线索进展", "Agent", "I spoke with the client.", "Thanks. Could you share the latest status and the next step for this lead?", "latest status + next step 是运营跟进最核心的表达。", "Could you share the latest status?", "Could you SHARE / the LAtest status", "next step", "下一步"],
    ["agent_viewing", "Agent collaboration", "确认看房时间", "Agent", "The client wants a viewing.", "Great. Has the client confirmed the viewing time, or do we still need to follow up?", "confirmed the viewing time 是确认看房时间的自然说法。", "Has the client confirmed the viewing time?", "Has the CLIent / conFIRMED / the VIEWing time", "viewing", "看房"],
    ["agent_call", "Agent collaboration", "和 agent 约短会", "Agent", "We have several new leads.", "Could we schedule a quick call tomorrow Dubai time to align on these new leads?", "align on 表示同步，不是很正式但工作里自然。", "Could we schedule a quick call?", "Could we SCHEDule / a QUICK call", "align on", "同步"],
    ["agent_materials", "Agent collaboration", "让 agent 补齐楼盘素材", "Agent", "What materials do you need?", "Could you send the property video, floor plan, starting price, and payment plan?", "素材需求要一次讲清，不只说 send materials。", "Could you send the floor plan and payment plan?", "Could you SEND / the FLOOR plan / and PAYment plan", "floor plan", "户型图"],
    ["partner_intro", "Business partnership", "介绍我们不是中介持房源", "Partner", "What does your company do?", "We focus on generating and qualifying Dubai property leads, then matching suitable leads with partner agents.", "generating and qualifying leads 能准确表达业务定位。", "We focus on qualifying Dubai property leads.", "We FOcus on / QUALifying / Dubai property LEADS", "qualify leads", "筛选线索"],
    ["partner_commission", "Business partnership", "问分佣模式", "Partner", "How do we work on commission?", "How do you usually structure commission for referred leads?", "structure commission 比 talk about commission 更商务自然。", "How do you structure commission?", "How do you STRUCture / comMISsion", "commission", "佣金"],
    ["partner_shared", "Business partnership", "先从共享线索开始合作", "Partner", "Can you give us exclusive leads?", "We can start with shared leads first and review the conversion quality before discussing exclusivity.", "先 shared leads，再看 conversion quality，避免过早承诺独家。", "Let's review conversion quality first.", "Let's reVIEW / conVERsion quality / first", "exclusivity", "独家"],
    ["partner_quality", "Business partnership", "讨论线索质量", "Partner", "What kind of clients do you have?", "Most leads are from Dubai property content. We usually qualify their budget, purpose, unit type, and preferred area first.", "讲清线索来源和筛选字段，可信度更高。", "We qualify their budget and purpose first.", "We QUALify / their BUdget / and PURpose first", "lead quality", "线索质量"],
    ["project_location", "Project introduction", "介绍楼盘位置", "Client", "Where is the project located?", "The project is located in JVC, with convenient access to main roads and nearby communities.", "located in + access to 是介绍位置最稳的结构。", "The project is located in JVC.", "The PROject / is loCAted in / JVC", "located in", "位于"],
    ["project_price", "Project introduction", "介绍起价但不报死", "Client", "What is the price?", "Prices start from 750k AED, depending on unit size and current availability.", "depending on unit size and availability 可以避免价格说死。", "Prices start from 750k AED.", "PRIces / start from / seven fifty K AED", "starting price", "起价"],
    ["project_payment", "Project introduction", "解释付款计划", "Client", "Is there a payment plan?", "Yes, the project offers a flexible payment plan, so buyers do not need to pay the full amount upfront.", "upfront 是一次性 upfront payment 的常用词。", "It offers a flexible payment plan.", "It OFFers / a FLEXible / PAYment plan", "upfront", "预先一次性"],
    ["project_handover", "Project introduction", "讲交房时间", "Client", "When is the handover?", "The expected handover is in 2027. We should confirm the latest timeline with the developer before sharing final details.", "expected handover 比 guaranteed handover 更稳妥。", "The expected handover is in 2027.", "The exPECted / HANDover / is in twenty twenty seven", "handover", "交房"],
    ["project_roi", "Project introduction", "回答投资回报但不保证", "Client", "Can you guarantee ROI?", "I cannot guarantee ROI, but we can compare rental demand, entry price, and similar projects in the area.", "不能保证收益，用 compare rental demand 转成分析。", "I cannot guarantee ROI.", "I CANnot / guaranTEE / ROI", "rental demand", "租赁需求"],
    ["project_developer", "Project introduction", "介绍开发商", "Client", "Who is the developer?", "The developer is the company responsible for building and delivering the project. We should also check their past handover record.", "past handover record 是评估开发商常用表达。", "We should check their past handover record.", "We should CHECK / their past HANDover record", "developer", "开发商"],
    ["content_script", "Content operations", "和 agent 沟通拍摄脚本", "Agent", "What should I record?", "Please record the entrance, living room, kitchen, bedroom, balcony view, amenities, and the building exterior.", "房源视频要具体列镜头，不只说 record everything。", "Please record the balcony view and amenities.", "Please reCORD / the BALcony view / and aMENities", "amenities", "配套设施"],
    ["content_caption", "Content operations", "写视频文案要自然", "Team", "Can you write a caption?", "Here is a simple caption: 1-bedroom in JVC with a flexible payment plan and easy access to main roads.", "caption 要短，先放户型、区域、付款计划和交通。", "Easy access to main roads.", "EAzy access / to MAIN roads", "caption", "文案"],
    ["content_missing", "Content operations", "素材不完整时补问", "Agent", "I sent the video.", "Thanks. Could you also send the floor plan and the latest starting price? We need them before posting.", "also send 是补问素材最自然。", "Could you also send the floor plan?", "Could you ALso / send the FLOOR plan", "posting", "发布"],
    ["team_update", "Daily work", "给团队同步进展", "Team", "Any updates today?", "Quick update: we received three new leads, one client asked for a viewing, and two leads need follow-up tomorrow.", "Quick update 是团队同步里很自然的开头。", "Quick update: we received three new leads.", "QUICK update / we reCEIVED / three new LEADS", "follow-up", "跟进"],
    ["team_blocker", "Daily work", "说明当前卡点", "Team", "Why is this delayed?", "The main blocker is that we are still waiting for the latest property video and price confirmation from the agent.", "main blocker 是讲卡点的自然表达。", "The main blocker is price confirmation.", "The MAIN blocker / is PRICE confirmation", "blocker", "卡点"],
    ["team_priority", "Daily work", "确认优先级", "Team", "Which task first?", "Should we prioritize lead follow-up first, or content posting for today's property video?", "prioritize 是工作里问优先级最常见的词。", "Should we prioritize lead follow-up first?", "Should we PRIoritize / lead FOLLOW-up first", "prioritize", "优先处理"],
    ["client_busy", "Client follow-up", "客户说现在忙", "Client", "I am busy now.", "No worries. When would be a better time for me to follow up with you?", "No worries 非常日常，不会有压力。", "When would be a better time to follow up?", "When would be / a BETter time / to FOLLOW up", "no worries", "没关系"],
    ["client_budget_low", "Client follow-up", "客户预算偏低", "Client", "My budget is 400k AED.", "Thanks for sharing. Options may be limited at that budget, but I can still understand your preferred area and purpose first.", "预算低时不直接否定，先说 options may be limited。", "Options may be limited at that budget.", "OPtions / may be LIMited / at that BUdget", "limited", "有限"],
    ["client_compare", "Client follow-up", "客户在比较项目", "Client", "I am comparing a few projects.", "That makes sense. What are your main priorities, price, location, payment plan, or handover timeline?", "That makes sense 很自然，先认同再问比较维度。", "What are your main priorities?", "What are your MAIN / priORities", "priorities", "优先考虑因素"],
    ["client_not_ready", "Client follow-up", "客户暂时不准备买", "Client", "I am not ready yet.", "That's completely fine. Would you like me to keep you updated when there are suitable Dubai property options?", "keep you updated 是低压力保持联系。", "Would you like me to keep you updated?", "Would you LIKE me / to KEEP you updated", "keep updated", "持续同步"],
    ["whatsapp_voice", "WhatsApp communication", "客户发语音后回复", "Client", "Voice message.", "Thanks for the voice note. Let me confirm: you are looking for a 1-bedroom for investment, around 900k AED, correct?", "Let me confirm 用来复述确认需求。", "Let me confirm your requirements.", "Let me conFIRM / your reQUIREments", "voice note", "语音消息"],
    ["whatsapp_follow", "WhatsApp communication", "轻量跟进未回复", "Client", "No reply.", "Hi, just checking in. Are you still considering Dubai property, or should I follow up later?", "just checking in 是轻量跟进，不压迫。", "Just checking in.", "Just CHECKing in", "checking in", "跟进问候"],
    ["whatsapp_docs", "WhatsApp communication", "发送资料前说明内容", "Client", "Send me details on WhatsApp.", "Sure. I will send the project location, starting price, payment plan, and handover timeline for your review.", "for your review 是发送资料时自然的结尾。", "I will send it for your review.", "I will SEND it / for your reVIEW", "for your review", "供你查看"],
    ["objection_fee", "Client objection", "客户问是否收费", "Client", "Do I need to pay you?", "No, you do not need to pay us for understanding your requirements. If there is any future cost, we will explain it clearly first.", "先澄清不会为了了解需求收费，避免误解。", "We will explain it clearly first.", "We will exPLAIN it / CLEARly first", "cost", "费用"],
    ["objection_trust", "Client objection", "客户不信任时降低防备", "Client", "How do I know this is real?", "I understand your concern. We can first discuss your requirements, and you can verify any project details before making decisions.", "I understand your concern 是处理不信任的自然开头。", "You can verify the project details first.", "You can VERify / the PROject details first", "verify", "核实"],
  ];

  return Object.fromEntries(
    scenarios.map(([id, tag, title, sourceRole, source, model, breakdown, phrase, parts, vocabTerm, vocabMeaning]) => [
      id,
      {
        tag,
        title,
        context: "来自迪拜房产运营日常工作沟通，适合碎片化学习和检测。",
        sourceRole,
        source,
        model,
        breakdown,
        pronunciation: {
          phrase,
          hint: "先按短语读，不要逐词蹦；重点词稍微放慢。",
          parts,
          tip: "读完后可以点“读示范回复”，跟读整句语气。",
        },
        vocab: [
          [vocabTerm, vocabMeaning],
          ["follow up", "跟进"],
          ["confirm", "确认"],
          ["suitable", "合适的"],
          ["available", "可用/可售/可租"],
        ],
        sentences: [
          [phrase, "本场景最常用表达"],
          ["Could you confirm the latest details?", "请对方确认最新信息"],
          ["Let me understand your requirements first.", "先了解需求"],
          ["I will follow up with you shortly.", "稍后跟进"],
        ],
        drills: [
          [model, "完整示范回复"],
          ["Could you share more details?", "请求更多信息"],
          ["Let me check and get back to you.", "先核实再回复"],
          ["What would be the best next step?", "确认下一步"],
        ],
        mistake: "不要硬翻中文，也不要过早承诺房源、价格、收益或结果。",
        usage: phrase,
        examTask: "AI 扮演真实工作沟通对象。你要用自然英文继续推进对话，并守住业务边界。",
        checklist: [
          ["自然", "表达像日常 WhatsApp/工作沟通"],
          ["推进", "问清下一步或关键需求"],
          ["边界", "不虚构房源，不承诺收益"],
        ],
        daily: `学会一句：${phrase}`,
        examRounds: [source, "Can you explain a bit more?", "What should we do next?", "Can you send me the details?"],
        feedback: "注意表达要自然、具体、可推进；不要用生硬直译或夸张销售话术。",
      },
    ]),
  );
}

Object.assign(lessons, buildExpandedLessons());

let lessonOrder = Object.keys(lessons);

let currentLessonIndex = 0;
let currentModule = lessonOrder[currentLessonIndex];
let currentStage = "learn";
let currentRound = 0;
let examAnswers = [];
let examMessages = [];
let examLessonIds = [];
let remoteSyncTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const ids = {
  moduleHead: $("#moduleHead"),
  loginView: $("#loginView"),
  appShell: $("#appShell"),
  loginForm: $("#loginForm"),
  loginEmail: $("#loginEmail"),
  loginPassword: $("#loginPassword"),
  loginButton: $("#loginButton"),
  loginError: $("#loginError"),
  logoutButton: $("#logoutButton"),
  openTeacher: $("#openTeacher"),
  closeTeacher: $("#closeTeacher"),
  teacherBackdrop: $("#teacherBackdrop"),
  adminBackdrop: $("#adminBackdrop"),
  closeAdmin: $("#closeAdmin"),
  userName: $("#userName"),
  lessonPosition: $("#lessonPosition"),
  lessonCategory: $("#lessonCategory"),
  libraryCount: $("#libraryCount"),
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
  learnView: $("#learnView"),
  examView: $("#examView"),
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
  roundLabel: $("#roundLabel"),
  examChat: $("#examChat"),
  replyBox: $("#replyBox"),
  submitRound: $("#submitRound"),
  resetExam: $("#resetExam"),
  examFeedback: $("#examFeedback"),
  coachInput: $("#coachInput"),
  generateCase: $("#generateCase"),
  coachResult: $("#coachResult"),
  examHistory: $("#examHistory"),
  exportData: $("#exportData"),
  importData: $("#importData"),
  prevLesson: $("#prevLesson"),
  nextLesson: $("#nextLesson"),
  adminNav: $("#adminNav"),
  createUserForm: $("#createUserForm"),
  newUserName: $("#newUserName"),
  newUserPassword: $("#newUserPassword"),
  createUserButton: $("#createUserButton"),
  adminMessage: $("#adminMessage"),
  userList: $("#userList"),
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

function authState() {
  return readJson(STORAGE_KEYS.auth, null);
}

function authHeaders() {
  const auth = authState();
  return auth?.token ? { authorization: `Bearer ${auth.token}` } : {};
}

function getCurrentLessonId() {
  refreshLessonOrder();
  const safeIndex = ((currentLessonIndex % lessonOrder.length) + lessonOrder.length) % lessonOrder.length;
  currentLessonIndex = safeIndex;
  currentModule = lessonOrder[safeIndex];
  return currentModule;
}

function getCurrentLesson() {
  return lessons[getCurrentLessonId()];
}

function createPersonalLesson(item) {
  const raw = item.raw || item.input || item.title || "个人学习案例";
  const content = item.content || item.summary || "";
  const id = item.id || `personal-${btoa(unescape(encodeURIComponent(raw))).replaceAll("=", "").slice(0, 18)}`;
  return {
    id,
    tag: "Personal library",
    title: item.title || `个人知识点：${raw.slice(0, 24)}`,
    context: "来自 AI 老师解析，已经加入你的个人学习库。",
    sourceRole: /[\u4e00-\u9fff]/.test(raw) ? "You" : "Work message",
    source: raw,
    model: item.recommended || content.slice(0, 220) || "Open the teacher result to review this case.",
    breakdown: item.explanation || item.summary || "这是你在工作里遇到的问题，适合转成个人知识点反复学习。",
    pronunciation: {
      phrase: item.phrase || item.recommended || "Could you please confirm the latest details?",
      hint: "个人案例先跟读推荐表达，再回到原始工作场景里使用。",
      parts: item.parts || "Could you please / confirm / the latest details",
      tip: "如果句子较长，先拆成 2-3 个短语读。",
    },
    vocab: item.vocab || [
      ["confirm", "确认"],
      ["latest details", "最新信息"],
      ["follow up", "跟进"],
    ],
    sentences: item.sentences || [
      [item.recommended || "Could you please confirm the latest details?", "个人案例推荐表达"],
      ["Let me check and get back to you.", "先核实再回复"],
    ],
    drills: item.drills || [
      [item.recommended || "Could you please confirm the latest details?", "直接可用"],
      ["Could you share a bit more context?", "让对方补充背景"],
    ],
    mistake: item.mistake || "不要逐字硬翻，优先使用工作聊天里自然、清楚、礼貌的表达。",
    usage: item.usage || item.recommended || "Could you please confirm the latest details?",
    examTask: "AI 扮演与你这个个人案例相关的工作对象。你要用自然英文完成多轮沟通。",
    checklist: [
      ["自然", "不用生硬直译"],
      ["清楚", "讲明需求、时间或下一步"],
      ["业务", "贴合迪拜房产运营场景"],
    ],
    daily: `学会个人案例：${item.title || raw.slice(0, 20)}`,
    examRounds: [raw, "Can you reply in a natural way?", "What should we do next?", "Can you make it clearer?"],
    feedback: "个人案例检测重点：表达是否自然、是否清楚、是否适合真实工作沟通。",
    personal: true,
  };
}

function hydratePersonalLessons() {
  const cases = readJson(STORAGE_KEYS.cases, []);
  cases.forEach((item) => {
    const lesson = item.lesson || createPersonalLesson(item);
    lessons[lesson.id] = lesson;
  });
  refreshLessonOrder();
}

function refreshLessonOrder() {
  lessonOrder = Object.keys(lessons);
}

function getAppState() {
  return {
    cases: readJson(STORAGE_KEYS.cases, []),
    examLogs: readJson(STORAGE_KEYS.examLogs, []),
    progress: readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] }),
  };
}

function applyAppState(state) {
  if (!state) return;
  if (Array.isArray(state.cases)) writeJson(STORAGE_KEYS.cases, state.cases);
  if (Array.isArray(state.examLogs)) writeJson(STORAGE_KEYS.examLogs, state.examLogs);
  if (state.progress) writeJson(STORAGE_KEYS.progress, state.progress);
  hydratePersonalLessons();
}

async function loadRemoteState() {
  try {
    const response = await fetch("/api/state", { headers: authHeaders() });
    if (!response.ok) return;
    const data = await response.json();
    applyAppState(data.state);
  } catch (error) {
    console.warn(error);
  }
}

function syncRemoteState() {
  clearTimeout(remoteSyncTimer);
  remoteSyncTimer = setTimeout(async () => {
    try {
      await fetch("/api/state", {
        method: "POST",
        headers: { "content-type": "application/json", ...authHeaders() },
        body: JSON.stringify({ state: getAppState() }),
      });
    } catch (error) {
      console.warn(error);
    }
  }, 300);
}

async function renderAuth() {
  const auth = authState();
  const isLoggedIn = Boolean(auth?.token);
  ids.loginView.hidden = isLoggedIn;
  ids.appShell.hidden = !isLoggedIn;
  ids.openTeacher.hidden = !isLoggedIn;
  const isAdmin = auth?.user?.role === "admin";
  ids.userName.textContent = auth?.user?.name ? `Hi, ${auth.user.name}` : "今日建议";
  $$(".admin-only").forEach((item) => {
    item.hidden = !isAdmin;
  });
  if (isLoggedIn) {
    await loadRemoteState();
    hydratePersonalLessons();
    renderLesson();
    renderStage();
    renderProgress();
    if (isAdmin) loadUsers();
  }
}

async function login(email, password) {
  ids.loginError.textContent = "";
  ids.loginButton.textContent = "登录中...";
  ids.loginButton.disabled = true;
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "登录失败");
    writeJson(STORAGE_KEYS.auth, data);
    ids.loginPassword.value = "";
    await renderAuth();
  } catch (error) {
    ids.loginError.textContent = error.message;
  } finally {
    ids.loginButton.textContent = "登录";
    ids.loginButton.disabled = false;
  }
}

function logout() {
  localStorage.removeItem(STORAGE_KEYS.auth);
  renderAuth();
}

function renderList(target, rows) {
  target.innerHTML = rows.map(([term, meaning]) => `<li><strong>${escapeHtml(term)}</strong><span>${escapeHtml(meaning)}</span></li>`).join("");
}

function renderSpeakableText(text) {
  const value = String(text);
  const parts = value.match(/[A-Za-z][A-Za-z'-]*|\d+(?:[.,]\d+)?|[^A-Za-z\d]+/g) || [value];
  return parts
    .map((part) => {
      if (/^[A-Za-z][A-Za-z'-]*$/.test(part)) {
        return `<button class="word-chip" type="button" data-speak-text="${escapeHtml(part)}">${escapeHtml(part)}</button>`;
      }
      return escapeHtml(part);
    })
    .join("");
}

function speakButton(text, label = "读句子") {
  return `<button class="inline-speaker" type="button" data-speak-text="${escapeHtml(text)}" aria-label="${escapeHtml(label)}">🔊</button>`;
}

function renderSentenceLine(text) {
  return `<span class="speakable-line">${renderSpeakableText(text)} ${speakButton(text)}</span>`;
}

function renderSpeakableList(target, rows) {
  target.innerHTML = rows
    .map(([term, meaning]) => `<li><strong>${renderSentenceLine(term)}</strong><span>${escapeHtml(meaning)}</span></li>`)
    .join("");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function renderLesson() {
  const lesson = getCurrentLesson();
  const progress = readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] });
  const isLearned = Boolean(progress.learned?.[currentModule]);
  ids.lessonPosition.textContent = `${currentLessonIndex + 1} / ${lessonOrder.length}`;
  ids.lessonCategory.textContent = lesson.tag;
  ids.moduleTag.textContent = lesson.tag;
  ids.moduleTitle.textContent = lesson.title;
  ids.moduleContext.textContent = lesson.context;
  ids.sourceRole.textContent = lesson.sourceRole;
  ids.sourceLine.innerHTML = renderSentenceLine(lesson.source);
  ids.modelLine.innerHTML = renderSentenceLine(lesson.model);
  ids.breakdown.textContent = lesson.breakdown;
  ids.mistake.textContent = lesson.mistake;
  ids.usage.innerHTML = renderSentenceLine(lesson.usage);
  ids.dailyCopy.textContent = lesson.daily;
  renderSpeakableList(ids.vocabList, lesson.vocab);
  renderSpeakableList(ids.sentenceList, lesson.sentences);
  renderSpeakableList(ids.drillList, lesson.drills);
  ids.markLearned.textContent = isLearned ? "已加入考试池" : "标记学会了";
  ids.markLearned.disabled = isLearned;
  renderProgress();
}

function renderExamSetup() {
  const progress = readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] });
  examLessonIds = Object.keys(progress.learned || {}).filter((id) => lessons[id]);
  currentRound = 0;
  examAnswers = [];
  examMessages = [];
  ids.replyBox.value = "";
  ids.submitRound.textContent = "提交本轮";
  ids.submitRound.disabled = examLessonIds.length === 0;
  if (!examLessonIds.length) {
    ids.examTitle.textContent = "先完成学习，再进入检测";
    ids.examTask.textContent = "把学习里的知识点标记“学会了”之后，系统会用这些内容模拟多轮对话。";
    ids.examChecklist.innerHTML = "<li><strong>学习</strong><span>至少标记 1 个知识点学会</span></li>";
    ids.roundLabel.textContent = "未开始";
    ids.examChat.innerHTML = "<p class=\"chat-line bot\">先去学习页标记一个知识点。</p>";
    ids.examFeedback.textContent = "考试只基于你已经学会的内容出题。";
    return;
  }
  const lessonId = examLessonIds.includes(currentModule) ? currentModule : examLessonIds[0];
  const lesson = lessons[lessonId];
  ids.examTitle.textContent = "基于已学内容的多轮检测";
  ids.examTask.textContent = `本轮会从 ${examLessonIds.length} 个已学知识点里模拟真实对话。先从：${lesson.title} 开始。`;
  renderList(ids.examChecklist, lesson.checklist);
  examMessages = [{ role: "assistant", text: lesson.examRounds[0] }];
  ids.examFeedback.textContent = "不要看学习内容，直接用英文回复。AI 会根据你的回复继续追问。";
  renderExamChat();
}

function renderExamChat() {
  ids.roundLabel.textContent = `Round ${Math.min(currentRound + 1, 4)} / 4`;
  ids.examChat.innerHTML = examMessages
    .map((message) => {
      const className = message.role === "user" ? "user" : "bot";
      const label = message.role === "user" ? "You: " : "";
      return `<p class="chat-line ${className}">${label}${escapeHtml(message.text)}</p>`;
    })
    .join("");
  ids.examChat.scrollTop = ids.examChat.scrollHeight;
}

function renderStage() {
  const isLearn = currentStage === "learn";
  const isExam = currentStage === "exam";
  ids.moduleHead.hidden = !isLearn;
  ids.learnView.hidden = !isLearn;
  ids.examView.hidden = !isExam;
  ids.dailyCard.hidden = !isLearn;
  if (isExam) renderExamSetup();
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
  refreshLessonOrder();
  const progress = readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] });
  const cases = readJson(STORAGE_KEYS.cases, []);
  const logs = readJson(STORAGE_KEYS.examLogs, []);
  const learnedModules = Object.keys(progress.learned || {}).length;
  ids.libraryCount.textContent = `${lessonOrder.length}`;
  ids.learnedCount.textContent = `${learnedModules}`;
  ids.examCount.textContent = `${logs.length}`;
  ids.caseCount.textContent = `${cases.length}`;
  const learnedCurrent = Boolean(progress.learned?.[currentModule]);
  ids.markLearned.textContent = learnedCurrent ? "已加入考试池" : "标记学会了";
  ids.markLearned.disabled = learnedCurrent;
  ids.todayTitle.textContent = learnedCurrent ? "这个知识点已学会" : "当前知识点";
  ids.todayGoal.textContent = logs.length ? "学 1 课 + 复盘 1 条" : "学 1 课 + 检测 1 轮";
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
  syncRemoteState();
  renderLesson();
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
      hydratePersonalLessons();
      renderLesson();
      renderProgress();
      syncRemoteState();
    } catch {
      ids.dailyCopy.textContent = "导入失败，文件格式不对。";
    }
  };
  reader.readAsText(file);
}

function moveLesson(direction) {
  currentLessonIndex = (currentLessonIndex + direction + lessonOrder.length) % lessonOrder.length;
  currentModule = lessonOrder[currentLessonIndex];
  renderLesson();
  renderStage();
}

function setStage(stage) {
  currentStage = stage;
  $$(".stage").forEach((button) => button.classList.toggle("active", button.dataset.stage === stage));
  $$("[data-stage-jump]").forEach((button) => button.classList.toggle("active", button.dataset.stageJump === stage));
  renderStage();
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    ids.dailyCopy.textContent = "当前浏览器不支持朗读。";
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
      raw,
      recommended: "Could you please send the property video before 5 PM Dubai time? We need it for tomorrow's lead follow-up.",
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
    raw,
    recommended: "Sure, tomorrow works for me. What time would be convenient for you in Dubai time?",
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
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json", ...authHeaders() },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`${endpoint} ${response.status}`);
      return response.json();
    } catch (error) {
      errors.push(error.message);
    } finally {
      clearTimeout(timer);
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
      const recommended = result.content
        .split("\n")
        .map((line) => line.trim())
        .find((line) => line && !/^\d+\./.test(line))
        ?.replace(/^["“]|["”]$/g, "");
      return {
        title: localCase.title,
        summary: `${result.provider} / ${result.model}`,
        raw,
        content: result.content,
        recommended,
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
  const lesson = item.lesson || createPersonalLesson(item);
  const exists = cases.some((caseItem) => (caseItem.lesson?.id || caseItem.id) === lesson.id);
  if (exists) return false;
  lessons[lesson.id] = lesson;
  const next = [{ ...item, id: lesson.id, lesson, createdAt: new Date().toISOString() }, ...cases].slice(0, 200);
  writeJson(STORAGE_KEYS.cases, next);
  refreshLessonOrder();
  syncRemoteState();
  renderLesson();
  renderProgress();
  return true;
}

function learnedLessonSummaries() {
  const progress = readJson(STORAGE_KEYS.progress, { learned: {}, streakDates: [] });
  return Object.keys(progress.learned || {})
    .filter((id) => lessons[id])
    .map((id) => ({
      id,
      type: lessons[id].tag,
      title: lessons[id].title,
      task: lessons[id].examTask,
      checklist: lessons[id].checklist,
      usefulSentences: lessons[id].sentences.map(([sentence]) => sentence),
    }));
}

async function submitExamRound() {
  const learned = learnedLessonSummaries();
  const text = ids.replyBox.value.trim();
  if (!text) {
    ids.examFeedback.textContent = "先写这一轮英文回复，再提交。";
    return;
  }
  if (!learned.length) {
    ids.examFeedback.textContent = "先去学习页标记至少一个知识点学会。";
    return;
  }
  examAnswers.push(text);
  examMessages.push({ role: "user", text });
  ids.replyBox.value = "";
  renderExamChat();

  if (currentRound < 3) {
    ids.submitRound.disabled = true;
    ids.examFeedback.textContent = "AI 正在根据你的回复继续追问...";
    let nextPrompt = "";
    try {
      const result = await callAiTeacher({
        task: "exam_next",
        quality: "standard",
        learnedLessons: learned,
        messages: examMessages,
      });
      nextPrompt = result.content || "";
    } catch (error) {
      console.warn(error);
    }
    if (!nextPrompt) {
      const fallbackLesson = lessons[examLessonIds[currentRound % examLessonIds.length] || currentModule];
      nextPrompt = fallbackLesson.examRounds[Math.min(currentRound + 1, fallbackLesson.examRounds.length - 1)];
    }
    examMessages.push({ role: "assistant", text: nextPrompt.replace(/^["']|["']$/g, "") });
    currentRound += 1;
    renderExamChat();
    ids.examFeedback.textContent = "继续用英文回复下一轮。";
    ids.submitRound.disabled = false;
    return;
  }

  renderExamChat();
  ids.submitRound.textContent = "已完成";
  ids.submitRound.disabled = true;
  ids.examFeedback.textContent = "正在生成 AI 总结反馈...";
  let feedbackText = "整体能完成对话，但要注意问清需求、不要承诺房源或收益，并让表达更自然。";
  try {
    const result = await callAiTeacher({
      task: "exam_feedback",
      quality: "standard",
      module: "learned-pool",
      checklist: learned.flatMap((item) => item.checklist || []),
      rounds: examMessages.filter((item) => item.role === "assistant").map((item) => item.text),
      answers: examAnswers,
      messages: examMessages,
    });
    feedbackText = result.content || feedbackText;
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
        module: examLessonIds.join(","),
        answers: examAnswers,
        messages: examMessages,
        feedback: feedbackText,
        summary: "完成 4 轮动态对话",
        createdAt: new Date().toISOString(),
      },
      ...logs,
    ].slice(0, 30),
  );
  syncRemoteState();
  renderProgress();
}

async function loadUsers() {
  if (!authState()?.token || authState()?.user?.role !== "admin") return;
  try {
    const response = await fetch("/api/admin/users", { headers: authHeaders() });
    if (!response.ok) throw new Error("无法读取用户列表");
    const data = await response.json();
    ids.userList.innerHTML = (data.users || [])
      .map((user) => `<article><strong>${escapeHtml(user.name || user.email)}</strong><span>${escapeHtml(user.role)} · ${escapeHtml(user.created_at || "")}</span></article>`)
      .join("") || "<p>还没有学员。</p>";
  } catch (error) {
    ids.userList.innerHTML = `<p>${escapeHtml(error.message)}</p>`;
  }
}

async function createUser(username, password) {
  ids.adminMessage.textContent = "";
  ids.createUserButton.textContent = "保存中...";
  ids.createUserButton.disabled = true;
  try {
    const response = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "content-type": "application/json", ...authHeaders() },
      body: JSON.stringify({ email: username, name: username, password, role: "user" }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "创建失败");
    ids.adminMessage.textContent = "账号已创建或已重置密码。";
    ids.newUserName.value = "";
    ids.newUserPassword.value = "";
    await loadUsers();
  } catch (error) {
    ids.adminMessage.textContent = error.message;
  } finally {
    ids.createUserButton.textContent = "创建 / 重置账号";
    ids.createUserButton.disabled = false;
  }
}

$$("[data-stage-jump]").forEach((button) => button.addEventListener("click", () => setStage(button.dataset.stageJump)));
$$(".stage").forEach((button) => button.addEventListener("click", () => setStage(button.dataset.stage)));
$$(".quick-prompt").forEach((button) => {
  button.addEventListener("click", () => {
    ids.coachInput.value = button.dataset.sample;
  });
});
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-speak-text]");
  if (!target) return;
  speakText(target.dataset.speakText || target.textContent);
});

ids.submitRound.addEventListener("click", submitExamRound);
ids.resetExam.addEventListener("click", renderExamSetup);
ids.markLearned.addEventListener("click", markCurrentLessonLearned);
ids.prevLesson.addEventListener("click", () => moveLesson(-1));
ids.nextLesson.addEventListener("click", () => moveLesson(1));
ids.exportData.addEventListener("click", exportLearningData);
ids.importData.addEventListener("change", () => importLearningData(ids.importData.files[0]));
ids.loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  login(ids.loginEmail.value.trim(), ids.loginPassword.value);
});
ids.logoutButton.addEventListener("click", logout);
ids.openTeacher.addEventListener("click", () => {
  ids.teacherBackdrop.hidden = false;
  ids.coachInput.focus();
});
ids.closeTeacher.addEventListener("click", () => {
  ids.teacherBackdrop.hidden = true;
});
ids.teacherBackdrop.addEventListener("click", (event) => {
  if (event.target === ids.teacherBackdrop) ids.teacherBackdrop.hidden = true;
});
ids.adminNav.addEventListener("click", async () => {
  ids.adminBackdrop.hidden = false;
  await loadUsers();
});
ids.closeAdmin.addEventListener("click", () => {
  ids.adminBackdrop.hidden = true;
});
ids.adminBackdrop.addEventListener("click", (event) => {
  if (event.target === ids.adminBackdrop) ids.adminBackdrop.hidden = true;
});
ids.generateCase.addEventListener("click", async () => {
  const raw = ids.coachInput.value.trim();
  if (!raw) {
    ids.coachResult.innerHTML = "<h3>先输入内容</h3><p>可以粘贴英文，也可以直接写中文问题。</p>";
    return;
  }
  ids.generateCase.textContent = "老师思考中...";
  ids.generateCase.disabled = true;
  ids.coachResult.innerHTML = "<h3>AI 老师正在分析</h3><p>老师会自动判断是中译英、英译中、解释单词，还是生成工作表达。</p>";
  const item = await makeCoachCaseWithAi(raw);
  ids.generateCase.textContent = "问老师";
  ids.generateCase.disabled = false;
  ids.coachResult.innerHTML = `${item.html}<button id="saveGeneratedCase" type="button">加入我的学习库</button>`;
  const saveButton = $("#saveGeneratedCase");
  saveButton.addEventListener("click", () => {
    const saved = saveCase(item);
    saveButton.textContent = saved ? "已加入学习库" : "已在学习库";
    saveButton.disabled = true;
  });
});
ids.createUserForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createUser(ids.newUserName.value.trim().toLowerCase(), ids.newUserPassword.value);
});

renderAuth();
