import { useState } from 'react'
import {
  ArrowDownRight, ArrowUpRight, BrainCircuit, Check,
  ChevronDown, ChevronLeft, ChevronRight, Command, Copy, DatabaseZap, ExternalLink, GitBranch,
  Layers3, Mail, MapPin, Menu, Phone, Sparkles, X,
} from 'lucide-react'

const email = 'lxy99219921@163.com'
const phone = '18322534151'

const projects = [
  {
    number: '01',
    type: 'AI RESEARCH TOOL',
    period: '2026.03 — 2026.06',
    title: 'PaperRAG',
    subtitle: '让每一个学术回答，都能回到原文。',
    description: '面向科研中的论文问答与引用溯源需求，设计本地文献优先、外部证据按需补全的 Agentic RAG 研究助手。',
    tags: ['Agentic RAG', 'LangGraph', 'MCP', '引用溯源'],
    className: 'paper',
  },
  {
    number: '02',
    type: 'AI × CREATIVE BUILD',
    period: '2026.06 — 2026.09',
    title: '地牢 100',
    subtitle: '把复杂想法，快速变成可玩的系统。',
    description: '以 Codex 为 AI Coding 主生产力，从 0 到 1 交付回合制 Roguelike 游戏 Demo，验证 AI 辅助复杂系统原型开发。',
    tags: ['Vibe Coding', 'Godot 4.7', '系统策划', '原型验证'],
    className: 'dungeon',
  },
  {
    number: '03',
    type: 'AI PRODUCTIVITY AGENT',
    period: '2025.07 — 2025.09',
    title: 'AI 日报助手',
    subtitle: '把分散的信息，整理成清晰的一天。',
    description: '针对消息、待办等多端信息分散造成的每日规划耗时，设计轻量化效率工具与自动生成工作流。',
    tags: ['Dify Workflow', 'Qwen2', 'PRD', '效率工具'],
    className: 'daily',
  },
]

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="李泫邑，返回首页"><span className="brand-mark">L<span>X</span>Y</span><span className="brand-name">李泫邑 <i>/</i> AI Product</span></a>
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header shell">
    <Brand />
    <button className="mobile-menu" aria-label={open ? '关闭菜单' : '打开菜单'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="主导航">
      <a href="#about" onClick={close}>关于我</a><a href="#work" onClick={close}>精选项目</a><a href="#strengths" onClick={close}>个人优势</a>
    </nav>
    <a className="header-contact" href="#contact">联系我</a>
  </header>
}

function OrbitArt() {
  return <div className="orbit-art" aria-hidden="true">
    <div className="orbit-halo" />
    <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
    <div className="orbit-core"><div className="core-inner"><Sparkles size={46} strokeWidth={1.1} /></div></div>
    <div className="orbit-dot dot-one" /><div className="orbit-dot dot-two" /><div className="orbit-dot dot-three" />
    <span className="orbit-caption caption-one">DISCOVER / DEFINE</span>
    <span className="orbit-caption caption-two">BUILD / VALIDATE</span>
    <div className="orbit-cross cross-one">+</div><div className="orbit-cross cross-two">+</div>
  </div>
}

function Hero() {
  return <section className="hero" id="top">
    <Header />
    <div className="hero-grid shell">
      <div className="hero-copy">
        <div className="availability"><span className="live-dot" /> 2027 届 · AI 产品方向 · 可实习</div>
        <h1>从一个需求，<br />走向一个<span className="hero-title-line">可用的<span className="title-accent">产品<span className="accent-point">.</span></span></span></h1>
        <div className="hero-actions"><a className="button button-text" href="#about">认识我 <ArrowDownRight size={19} /></a><a className="button button-primary" href="#work">查看我的作品 <ArrowDownRight size={20} /></a></div>
      </div>
      <OrbitArt />
    </div>
    <div className="hero-bottom shell"><span>AI PRODUCT PORTFOLIO <i>© 2026</i></span><a href="#about">向下探索 <ChevronDown size={16} /></a><span>BEIJING · CHINA</span></div>
  </section>
}

function SectionHead({ overline, title, aside }) {
  return <div className="section-head"><div><p className="section-overline">{overline}</p><h2>{title}</h2></div>{aside && <p className="section-aside">{aside}</p>}</div>
}

function About() {
  return <section className="about section" id="about"><div className="shell">
    <p className="section-overline about-overline">ABOUT / 个人经历</p>
    <div className="about-grid">
      <div className="portrait-panel"><div className="portrait-frame"><img src="/portrait.jpeg" alt="李泫邑的肖像照" /></div></div>
      <div className="about-content"><div className="about-intro"><span className="small-kicker">HELLO, I'M XUANYI</span><h3>在技术可行性与<br />用户真实需求之间，<br /><span>找到值得做的事。</span></h3><p>现就读于中国科学院大学工程科学学院，研究方向为大数据与应急决策。<br />我关注 AI Native 产品的落地：从梳理问题、定义体验，到搭建 Agent 工作流与验证效果，在实践中把想法推进到可用的原型。持续探索 AI 能力如何变成可理解、可验证、可交付的产品。</p></div>
        <div className="about-facts"><div><span>现在</span><strong>中国科学院大学 · 硕士在读</strong><small>工业工程与管理 / 2024—2027</small></div><div><span>此前</span><strong>河北工业大学 · 本科</strong><small>工业工程 / 2019—2023</small></div></div>
        <div className="about-contact"><a href={`mailto:${email}`}><Mail size={18} />{email}</a><a href={`tel:${phone}`}><Phone size={17} />{phone}</a><span><MapPin size={17} />北京</span></div>
      </div>
    </div>
  </div></section>
}

function PaperVisual() {
  return <div className="project-visual paper-visual paper-demo">
    <img src="/paper-rag-demo.gif" alt="PaperRAG 论文研究助手的实际操作演示" loading="lazy" />
  </div>
}

const dungeonImages = [
  { src: '/dungeon-gameplay.png', label: '地牢探索与战斗画面' },
  { src: '/dungeon-inventory.png', label: '背包与装备界面' },
]

function DungeonVisual() {
  const [active, setActive] = useState(0)
  const change = (direction) => setActive(current => (current + direction + dungeonImages.length) % dungeonImages.length)

  return <div className="project-visual dungeon-visual dungeon-gallery" aria-label="地牢100游戏截图">
    <div className="dungeon-gallery-frame"><img src={dungeonImages[active].src} alt={dungeonImages[active].label} /></div>
    <div className="dungeon-gallery-controls"><button type="button" onClick={() => change(-1)} aria-label="上一张地牢100截图"><ChevronLeft size={21} /></button><div className="dungeon-gallery-status" aria-live="polite"><span>{dungeonImages[active].label}</span><span>{String(active + 1).padStart(2, '0')} / {String(dungeonImages.length).padStart(2, '0')}</span></div><button type="button" onClick={() => change(1)} aria-label="下一张地牢100截图"><ChevronRight size={21} /></button></div>
  </div>
}

function DailyVisual() {
  return <div className="project-visual daily-visual" aria-label="AI日报助手工作流与日报概念示意图"><div className="daily-orbit" /><div className="daily-flow"><div><Mail size={17} /> 消息</div><span>+</span><div><Check size={17} /> 待办</div><span>+</span><div><Layers3 size={17} /> 信息源</div><span className="flow-arrow">→</span><div className="flow-agent"><Sparkles size={17} /> AI Agent</div></div><div className="daily-sheet"><div className="sheet-top"><span>你的今日简报</span><span>✳ 已整理</span></div><h4>早上好，今天从重要的事开始。</h4><p>已为你整合消息、待办与关注动态，生成今日行动重点。</p><div className="sheet-list"><div><b>01</b><span>优先处理项目评审反馈</span><i /></div><div><b>02</b><span>推进本周产品方案梳理</span><i /></div><div><b>03</b><span>预留时间阅读行业动态</span><i /></div></div></div><div className="daily-metric"><strong>1 min</strong><span>完成每日信息整理</span></div></div>
}

function Projects() {
  const [expanded, setExpanded] = useState(null)
  return <section className="work section" id="work"><div className="shell"><p className="section-overline work-overline">SELECTED WORK / 精选项目</p><p className="work-intro">覆盖学术研究助手Agent、AI 协作游戏开发与个人效率工作流，关注从需求洞察到落地交付的完整链路。</p>
    <div className="projects-list">{projects.map((project, index) => <article className={`project-card ${project.className}`} key={project.number}><div className="project-info"><div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.period}</span></div><div className="project-copy"><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-desc">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><button className="project-more" onClick={() => setExpanded(expanded === index ? null : index)} aria-expanded={expanded === index}>{expanded === index ? '收起项目概要' : '查看项目概要'}</button></div>{index === 0 ? <PaperVisual /> : index === 1 ? <DungeonVisual /> : <DailyVisual />}{expanded === index && (index === 0 ? <PaperRagDetail /> : index === 1 ? <DungeonDetail /> : <DailyDetail />)}</article>)}</div>
  </div></section>
}

const paperFeatures = [
  ['理解论文结构的 PDF 解析', '通过 Docling 和 PyMuPDF 保留章节、页码、表格、图片、标题和阅读顺序，对文本过少的扫描件自动尝试 OCR。'],
  ['面向论文的混合检索', '融合稠密向量与 BM25，并使用 RRF 合并结果；可选 BGE 重排、HyDE 和父子分块扩展。'],
  ['多阶段研究 Agent', 'LangGraph 负责编排对话摘要、意图分类、问题拆分、证据判断、并行检索、反思、重试和最终综合。'],
  ['按需补充外部证据', '本地文献无法支撑问题时，Agent 可以调用内置 arXiv MCP Server，下载数量受限的开放 PDF，并只在当前会话中检索它们。'],
  ['可以核对的回答', '本地引用和外部引用分开呈现，保留论文、页码和章节信息，点击后可以直接在右侧预览 PDF。'],
  ['跨会话隔离', '临时论文的元数据和页面保存在 PostgreSQL，语义分块保存在独立的 Milvus Collection，所有查询都强制带上 session_id。'],
  ['文献库管理', '网页端支持上传、搜索、预览和删除永久文献。'],
  ['双向 MCP', 'PaperRAG 既能作为 MCP Client 调用学术工具，也能作为带令牌保护的只读 MCP Server，把自己的文献能力提供给其他 Agent。'],
  ['网页、API 与 CLI 共用内核', 'React 页面、FastAPI 接口和调试 CLI 使用同一套存储、检索与 Agent 实现。'],
]

const paperModules = [
  ['backend/agent', 'LangGraph 状态、节点与路由，外部研究闭环、结构化输出和持久化临时语料'],
  ['backend/rag', 'PDF 解析、节点生成、分块、Embedding、混合检索、重排、缓存和 Milvus 适配'],
  ['backend/app', 'FastAPI 生命周期、SSE Chat、配置、会话、文件、研究接口、引用补全和 PostgreSQL Store'],
  ['backend/mcp_servers', '内置 arXiv MCP Server 与对外 PaperRAG Library MCP Server'],
  ['backend/cli.py', '健康检查、解析、索引、检索、问答、文件和会话命令'],
  ['frontend/src', '聊天、文献库、上传、设置、研究状态、引用分组和 PDF 预览'],
]

const paperMetrics = [
  { title: '问答与引用表现', rows: [
    ['Claim Coverage', '79.17%', '要点覆盖率'], ['Citation Precision', '73.66%', '有效引用比例'],
    ['Citation Recall', '76.85%', '引用证据覆盖率'], ['测试完成率', '100%', '完整回答比例'],
  ] },
  { title: '检索性能', rows: [
    ['Paper Recall@5', '70.00%', '前 5 项论文命中率'], ['Page Recall@5', '64.86%', '前 5 项目标页覆盖率'],
    ['平均检索延迟', '389 ms', '单次平均耗时'], ['P95 检索延迟', '426 ms', '95% 请求耗时上限'],
  ] },
  { title: 'Agent 能力', rows: [
    ['外部证据判断 Precision', '100%', '外部检索判断准确率'], ['外部证据判断 Recall', '100%', '外部检索需求识别率'],
    ['外部证据判断 F1', '100%', '判断综合得分'], ['工具选择准确率', '85%', '正确选择工具比例'],
    ['不必要的外部工具调用率', '0%', '错误触发比例'],
  ] },
]

function PaperRagDetail() {
  return <div className="project-detail paper-detail">
    <strong className="detail-label">项目概要</strong>
    <div className="paper-detail-content">
      <p className="paper-detail-lead">一个重视证据的论文研究 Agent：先阅读你的本地文献库，必要时再搜索外部论文，并让答案中的每条引用都可以回到原文核对。</p>
      <p>PaperRAG 把结构化 PDF 知识库和 Agentic RAG 工作流放在了一起。它可以基于永久文献库回答问题；当本地证据不足时，也可以自主调用学术 MCP 工具，临时下载并阅读开放论文，再带着页级引用继续推理。</p>
      <p>永久文献库和临时研究语料彼此独立。外部论文只属于发起检索的那次对话，会自动过期，也不会在用户不知情的情况下进入正式文献库。</p>
      <section className="paper-detail-section"><h4>核心能力</h4><div className="paper-feature-grid">{paperFeatures.map(([title, body]) => <div className="paper-feature" key={title}><h5>{title}</h5><p>{body}</p></div>)}</div></section>
      <section className="paper-detail-section"><h4>系统架构</h4><div className="paper-architecture"><div><span>产品界面</span><b>React + Vite + Tailwind</b><small>HTTP / SSE</small></div><div><span>应用与工具服务</span><b>FastAPI 应用</b><small>Streamable HTTP MCP Server · search_library / read_paper / retrieve_chunks</small></div><div><span>研究决策</span><b>LangGraph 研究 Agent</b><small>内置 arXiv MCP Server · 引用与研究过程可观测信息 · 混合 Retriever · PostgreSQL Checkpointer</small></div><div><span>数据存储</span><b>PostgreSQL + Milvus</b><small>会话、文件、检查点、临时论文元数据与页面；永久库父子分块、按会话隔离的临时分块</small></div></div></section>
      <section className="paper-detail-section"><h4>模块职责</h4><div className="paper-module-list">{paperModules.map(([path, duty]) => <div key={path}><code>{path}</code><p>{duty}</p></div>)}</div></section>
      <section className="paper-detail-section"><h4>实验结果</h4><div className="paper-metric-grid">{paperMetrics.map(group => <div className="paper-metric-card" key={group.title}><h5>{group.title}</h5><div className="paper-metric-head"><span>指标</span><span>结果</span><span>说明</span></div>{group.rows.map(([name, value, note]) => <div className="paper-metric-row" key={name}><span>{name}</span><b>{value}</b><span>{note}</span></div>)}</div>)}</div></section>
    </div>
  </div>
}

const dungeonFeatures = [
  ['回合制探索', '移动、视野与战斗以玩家动作为节奏推进；能量系统让速度更快的怪物获得更频繁的行动机会。'],
  ['程序化地牢', '基于 BSP 生成房间与走廊，支持地下城、竞技场等布局，并通过世界规划串联多层地下城。'],
  ['D20 战斗', '包含攻击掷骰、伤害计算、抗性、近战与远程机制，以及不同伤害类型和状态效果。'],
  ['怪物行为', '行为树支持攻击、恐惧、好奇和被动等决策，并结合寻路与阵营关系决定行动。'],
  ['库存与装备', '模块化装备插槽、容器层级和拖放式库存界面，装备会影响战斗属性与能力。'],
  ['生存与状态', '营养水平影响愈合和生存；状态效果具有持续时间与强度，并可改变角色行为和能力。'],
  ['战场交互', '阴影投射计算视野，战争迷雾区分当前可见与曾经探索区域；可投掷物品支持范围伤害。'],
  ['数据驱动', '物品和怪物由 assets/data/ 下的 CSV 定义，经工厂类生成游戏对象。'],
  ['调试与预览', 'Godot 内置地图生成器预览工具，以及图块、物品资源浏览工具，便于调整参数和检查素材。'],
]

const dungeonSystems = [
  ['世界管理', 'src/world.gd', '集中管理游戏状态、回合进展、玩家与怪物行动、系统更新、地图生成及关卡过渡。'],
  ['回合制引擎', 'src/world.gd · src/actions/', '将玩家输入与怪物决策转为动作；按玩家行动、怪物行动、系统更新、视野更新的顺序推进。'],
  ['地图生成', 'src/map_generators/ · src/world_plan.gd', '配置 BSP 地牢生成参数，生成房间、走廊与内容，并规划多层地图。'],
  ['战斗系统', 'src/combat.gd · src/damage.gd', '处理 D20 掷骰、伤害与抗性、近远程战斗、状态效果和范围伤害。'],
  ['怪物系统', 'src/monster_ai.gd · src/monster.gd', '以行为树、寻路和阵营关系驱动怪物决策。'],
  ['装备与物品', 'src/equipment.gd · src/item.gd', '维护装备槽位、层级物品和拖放式库存；装备影响角色属性。'],
  ['视觉与渲染', 'src/map.gd · src/map_renderer.gd', '实现视场、战争迷雾、图块与精灵渲染，以及战斗交互效果。'],
  ['状态与营养', 'src/status_effect.gd · src/nutrition.gd', '管理状态效果的持续时间和强度，以及营养对治疗与生存的影响。'],
  ['用户界面', 'src/modals.gd · scenes/ui/', '以模态堆栈和异步确认交互组织界面，提供库存、装备、HUD 与状态信息。'],
]

const dungeonFlow = [
  ['输入', '玩家输入 → 创建动作 → 世界管理器处理'],
  ['回合', '执行动作 → 怪物 AI → 系统更新 → 视野更新'],
  ['渲染', '世界状态 → 地图渲染器 → 视觉效果 → 界面更新'],
  ['数据', 'CSV 文件 → 工厂类 → 游戏对象'],
]

function DungeonDetail() {
  return <div className="project-detail paper-detail dungeon-detail">
    <strong className="detail-label">项目概要</strong>
    <div className="paper-detail-content">
      <p className="paper-detail-lead">以动作驱动的回合制 Roguelike：探索程序化地牢，在视野、战斗、装备与生存系统之间做决策。</p>
      <p>项目将地图生成、怪物行为、D20 战斗、库存装备与状态系统拆为独立模块；数据由 CSV 驱动，游戏状态统一交由世界管理器协调。</p>
      <section className="paper-detail-section"><h4>已实现功能</h4><div className="paper-feature-grid">{dungeonFeatures.map(([title, body]) => <div className="paper-feature" key={title}><h5>{title}</h5><p>{body}</p></div>)}</div></section>
      <section className="paper-detail-section"><h4>系统架构</h4><div className="dungeon-system-grid">{dungeonSystems.map(([title, path, body]) => <div className="paper-feature" key={title}><h5>{title}</h5><code>{path}</code><p>{body}</p></div>)}</div></section>
      <section className="paper-detail-section"><h4>数据流</h4><div className="dungeon-flow">{dungeonFlow.map(([title, body], index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><h5>{title}</h5><p>{body}</p></div>)}</div></section>
      <section className="paper-detail-section"><h4>项目目录</h4><pre className="project-file-tree"><code>{`地牢100/
   ├─ project.godot
   ├─ README.md
   ├─ export_presets.cfg
   ├─ art/
   ├─ assets/
   │  ├─ data/
   │  ├─ fonts/
   │  ├─ generated/
   │  ├─ icons/
   │  ├─ particles/
   │  ├─ shaders/
   │  ├─ textures/fx/
   │  └─ ui/
   │     ├─ styles/
   │     └─ variants/
   ├─ scenes/
   │  ├─ actor/
   │  ├─ debug/
   │  ├─ fx/
   │  ├─ game/
   │  ├─ menu/
   │  └─ ui/
   ├─ src/
   │  ├─ actions/
   │  │  └─ effects/
   │  ├─ map_generators/
   │  └─ resources/
   └─ tests/`}</code></pre></section>
      <section className="paper-detail-section"><h4>当前尚未包含</h4><div className="dungeon-pending"><span>卷轴、魔杖、戒指与护身符</span><span>商店与经济</span><span>任务与目标</span></div></section>
    </div>
  </div>
}

const dailyFeatures = [
  ['多源信息汇集', '同步消息、待办及关注信息源，集中处理分散的每日输入。'],
  ['重点提炼', '将原始内容整理为简明摘要、待办提醒和行动重点，减少逐条阅读与手动归纳。'],
  ['结构化输出', '以固定版式生成今日简报，让用户快速查看和使用整理结果。'],
  ['人工核对', '在交付前保留核对环节，避免将信息缺失或模型推断写成确定事实。'],
]

const dailySteps = ['多源 API 数据同步', '信息清理与归并', 'Dify Workflow 调用 Qwen2 聚合提炼', '生成结构化日报', '用户核对']

function DailyDetail() {
  return <div className="project-detail paper-detail daily-detail">
    <strong className="detail-label">项目概要</strong>
    <div className="paper-detail-content">
      <p className="paper-detail-lead">把分散在消息、待办和关注信息源中的内容，整理成一份可直接使用的今日简报。</p>
      <p>AI 日报助手面向每天需要花时间收集信息、梳理工作重点的用户。项目通过多源 API 同步数据，使用 Dify Workflow 串联信息整理与生成流程，并由 Qwen2 提炼待处理事项和重要动态，输出结构化日报，帮助用户快速确定当天的行动重点。</p>
      <section className="paper-detail-section"><h4>核心能力</h4><div className="paper-feature-grid">{dailyFeatures.map(([title, body]) => <div className="paper-feature" key={title}><h5>{title}</h5><p>{body}</p></div>)}</div></section>
      <section className="paper-detail-section"><h4>工作流程</h4><ol className="daily-workflow">{dailySteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></section>
      <section className="paper-detail-section"><h4>项目结果</h4><p>项目中独立完成 PRD，并设计从数据同步到日报输出的工作流。按现有项目描述，日报生成时间压缩至 <strong>1 分钟</strong>，效率提升 <strong>96%</strong>。</p></section>
      <section className="paper-detail-section"><h4>项目目录</h4><pre className="project-file-tree"><code>{`ai-daily-report-web/
├── .github/
│   └── workflows/
│       └── daily-report.yml    # GitHub Actions 定时任务
├── reports/                     # 日报存储目录
│   └── ai-daily-report-YYYY-MM-DD.md
├── scripts/
│   └── generate_report.py      # 日报生成脚本
├── src/
│   ├── app/                    # Next.js 页面
│   │   ├── page.tsx           # 首页
│   │   ├── archive/           # 历史日报
│   │   ├── search/            # 搜索页面
│   │   └── report/[date]/     # 日报详情
│   └── lib/
│       └── reports.ts         # 日报处理逻辑
├── package.json
└── README.md`}</code></pre></section>
    </div>
  </div>
}

const strengths = [
  { icon: BrainCircuit, title: 'AI 产品理解', en: 'AI PRODUCT THINKING', text: '理解 LLM、Agent、RAG 与 Function Calling 的核心机制，能从能力边界出发设计真实可用的产品场景。', note: '从技术能力到用户价值' },
  { icon: GitBranch, title: '从 0 到 1 交付', en: 'BUILD & SHIP', text: '有 Agent 工作流与复杂系统原型实践，能拆解任务、编写 PRD、建立验收标准，并推动方案进入可运行状态。', note: '从模糊想法到可验证原型' },
  { icon: DatabaseZap, title: '数据与系统思维', en: 'DATA & SYSTEMS', text: '以工业工程和复杂系统研究为基础，使用 Python、SQL 与数据分析方法理解问题、定位瓶颈、衡量效果。', note: '用证据做判断' },
  { icon: Command, title: '内容与沟通', en: 'STORY & COMMUNICATION', text: '曾负责校园媒体内容与活动策划，能够把复杂概念讲清楚，让产品价值在跨团队协作中被看见。', note: '让不同角色形成共识' },
]

function Strengths() {
  return <section className="strengths section" id="strengths"><div className="shell"><SectionHead overline="WHAT I BRING / 个人优势" title={<>不只理解 AI，<br /><em>更理解怎么把它做好。</em></>} /><div className="strength-grid">{strengths.map(({ icon: Icon, title, en, text, note }) => <article className="strength-card" key={title}><div className="strength-top"><span className="strength-icon"><Icon size={30} strokeWidth={1.5} /></span><ArrowUpRight size={20} strokeWidth={1.5} /></div><div><small>{en}</small><h3>{title}</h3><p>{text}</p></div><div className="strength-note"><span />{note}</div></article>)}</div><div className="strength-bottom"><span>ALWAYS CURIOUS, ALWAYS BUILDING.</span></div></div></section>
}

function Contact() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() { try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2500) } catch { window.location.href = `mailto:${email}` } }
  return <footer className="contact" id="contact"><div className="contact-glow" /><div className="shell contact-shell"><div className="contact-top"><Brand light /><span>OPEN TO AI PRODUCT OPPORTUNITIES <i /></span></div><div className="contact-main"><p>下一次对话，也许就是新项目的起点。</p><h2>一起做点<br /><em>有意义的事<span>.</span></em></h2><div className="contact-actions"><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={19} /> : <Copy size={19} />}{copied ? '已复制邮箱' : '复制邮箱地址'}</button></div></div><div className="contact-bottom"><div><a href={`mailto:${email}`}>{email} <ArrowUpRight size={17} /></a><a href={`tel:${phone}`}>{phone} <ArrowUpRight size={17} /></a></div><span>李泫邑 © 2026</span><a href="#top">回到顶部 ↑</a></div></div></footer>
}

export default function App() { return <><Hero /><main><About /><Projects /><Strengths /></main><Contact /></> }
