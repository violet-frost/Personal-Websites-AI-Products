import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Check,
  ChevronDown, Command, Copy, DatabaseZap, ExternalLink, GitBranch,
  Layers3, Mail, MapPin, Menu, Network, Phone, Sparkles, X,
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
    detail: '从 PDF 解析、混合检索到 Agent 编排与证据判断，构建 Web + API + CLI 全栈应用；引用可定位至原文页码，并通过双向 MCP 连接 arXiv 与 Claude Code。',
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
    detail: '定义探索、战斗、成长、构筑、下潜的核心循环，设计 D20 战斗、装备构筑与战争迷雾地图；沉淀系统策划案、模块化 Prompt、验收清单与迭代记录。',
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
    detail: '独立完成 PRD，串联多源 API 数据同步、LLM 聚合提炼与结构化日报输出，将日报生成时间压缩至 1 分钟，提效 96%。',
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
    <a className="header-contact" href="#contact">联系我 <ArrowUpRight size={16} strokeWidth={1.8} /></a>
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
    <SectionHead overline="ABOUT / 个人经历" title={<>技术与人之间，<br /><em>我选择站在连接处。</em></>} aside="从工业工程与复杂系统研究出发，持续探索 AI 能力如何变成可理解、可验证、可交付的产品。" />
    <div className="about-grid">
      <div className="portrait-panel"><div className="portrait-frame"><img src="/portrait.jpeg" alt="李泫邑的肖像照" /></div><div className="portrait-label"><span>LI XUANYI</span><span>AI PRODUCT EXPLORER ↗</span></div></div>
      <div className="about-content"><div className="about-intro"><span className="small-kicker">HELLO, I'M XUANYI</span><h3>在技术可能性与<br />用户真实需求之间，<br /><span>找到值得做的事。</span></h3><p>现就读于中国科学院大学工程科学学院，研究方向为大数据与应急决策。<br />我关注 AI Native 产品的落地：从梳理问题、定义体验，到搭建 Agent 工作流与验证效果，在实践中把想法推进到可用的原型。</p></div>
        <div className="about-facts"><div><span>现在</span><strong>中国科学院大学 · 硕士在读</strong><small>工业工程与管理 / 2024—2027</small></div><div><span>此前</span><strong>河北工业大学 · 本科</strong><small>工业工程 / 2019—2023</small></div></div>
        <div className="about-contact"><a href={`mailto:${email}`}><Mail size={18} />{email}</a><a href={`tel:${phone}`}><Phone size={17} />{phone}</a><span><MapPin size={17} />北京</span></div>
      </div>
    </div>
    <div className="project-overview"><div><span>精选项目</span></div><a href="#work" aria-label="浏览精选项目"><ArrowUpRight size={29} /></a></div>
  </div></section>
}

function PaperVisual() {
  return <div className="project-visual paper-visual" aria-label="PaperRAG 产品概念界面示意图">
    <div className="paper-window"><div className="window-top"><span className="window-dots"><i /><i /><i /></span><span>PaperRAG / Research workspace</span><span>⌘ K</span></div><div className="paper-interface"><aside className="paper-sidebar"><div className="paper-logo"><Sparkles size={16} /> paper<span>rag</span></div><div className="sidebar-item active"><Layers3 size={14} /> Research space</div><div className="sidebar-item"><DatabaseZap size={14} /> My library</div><div className="sidebar-rule" /><small>RECENT PAPERS</small><div className="fake-line w80" /><div className="fake-line w65" /><div className="fake-line w75" /></aside><div className="paper-main"><div className="paper-prompt">What does the literature say about<br /><strong>human–AI collaboration?</strong></div><div className="paper-answer"><span className="answer-icon"><Sparkles size={16} /></span><div><b>Evidence-backed answer</b><p>Effective collaboration depends on shared situational awareness, calibrated trust, and the ability to trace a decision back to its source.</p><div className="citation-row"><span>01 · Source p.12</span><span>02 · Source p.08</span></div></div></div><div className="paper-input">Ask a follow-up question <span>↗</span></div></div></div></div>
    <div className="visual-stamp"><Network size={16} /> EVIDENCE FIRST</div>
  </div>
}

function DungeonVisual() {
  return <div className="project-visual dungeon-visual" aria-label="地牢100游戏系统概念示意图"><div className="game-glow" /><div className="game-top"><span>◈ DUNGEON 100</span><span>FLOOR 07 / 100</span></div><div className="game-scene"><div className="pixel-map">{Array.from({ length: 70 }, (_, i) => <i key={i} className={(i % 10 === 2 || i % 10 === 7 || i < 10 || i > 59) ? 'wall' : (i === 34 ? 'hero-pixel' : i === 46 ? 'enemy-pixel' : '')} />)}</div><div className="game-stat"><span>EXPLORER</span><strong>LV. 08</strong><div className="health"><i /></div><small>HP 84 / 100</small><div className="stat-divider" /><span>ACTIVE BUILD</span><p>⚔ Iron blade<br />✦ Arcane pulse<br />◇ Night vision</p></div></div><div className="game-bottom"><span>EXPLORE</span><span>FIGHT</span><span>BUILD</span><span>DESCEND ↓</span></div></div>
}

function DailyVisual() {
  return <div className="project-visual daily-visual" aria-label="AI日报助手工作流与日报概念示意图"><div className="daily-orbit" /><div className="daily-flow"><div><Mail size={17} /> 消息</div><span>+</span><div><Check size={17} /> 待办</div><span>+</span><div><Layers3 size={17} /> 信息源</div><span className="flow-arrow">→</span><div className="flow-agent"><Sparkles size={17} /> AI Agent</div></div><div className="daily-sheet"><div className="sheet-top"><span>你的今日简报</span><span>✳ 已整理</span></div><h4>早上好，今天从重要的事开始。</h4><p>已为你整合消息、待办与关注动态，生成今日行动重点。</p><div className="sheet-list"><div><b>01</b><span>优先处理项目评审反馈</span><i /></div><div><b>02</b><span>推进本周产品方案梳理</span><i /></div><div><b>03</b><span>预留时间阅读行业动态</span><i /></div></div></div><div className="daily-metric"><strong>1 min</strong><span>完成每日信息整理</span></div></div>
}

function Projects() {
  const [expanded, setExpanded] = useState(null)
  return <section className="work section" id="work"><div className="shell"><p className="section-overline work-overline">SELECTED WORK / 精选项目</p><p className="work-intro">覆盖学术研究助手、AI 协作游戏开发与个人效率 Agent，关注从需求洞察到落地交付的完整链路。</p>
    <div className="projects-list">{projects.map((project, index) => <article className={`project-card ${project.className}`} key={project.number}><div className="project-info"><div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.period}</span></div><div className="project-copy"><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><p className="project-desc">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><button className="project-more" onClick={() => setExpanded(expanded === index ? null : index)} aria-expanded={expanded === index}>{expanded === index ? '收起项目概要' : '查看项目概要'} <ArrowUpRight size={19} /></button></div>{index === 0 ? <PaperVisual /> : index === 1 ? <DungeonVisual /> : <DailyVisual />}{expanded === index && <div className="project-detail"><strong>项目概要</strong><p>{project.detail}</p></div>}</article>)}</div>
    <p className="visual-note">项目配图为基于简历内容绘制的概念示意，详细案例与真实截图将在后续版本补充。</p>
  </div></section>
}

const strengths = [
  { icon: BrainCircuit, title: 'AI 产品理解', en: 'AI PRODUCT THINKING', text: '理解 LLM、Agent、RAG 与 Function Calling 的核心机制，能从能力边界出发设计真实可用的产品场景。', note: '从技术能力到用户价值' },
  { icon: GitBranch, title: '从 0 到 1 交付', en: 'BUILD & SHIP', text: '有 Agent 工作流与复杂系统原型实践，能拆解任务、编写 PRD、建立验收标准，并推动方案进入可运行状态。', note: '从模糊想法到可验证原型' },
  { icon: DatabaseZap, title: '数据与系统思维', en: 'DATA & SYSTEMS', text: '以工业工程和复杂系统研究为基础，使用 Python、SQL 与数据分析方法理解问题、定位瓶颈、衡量效果。', note: '用证据做判断' },
  { icon: Command, title: '内容与沟通', en: 'STORY & COMMUNICATION', text: '曾负责校园媒体内容与活动策划，能够把复杂概念讲清楚，让产品价值在跨团队协作中被看见。', note: '让不同角色形成共识' },
]

function Strengths() {
  return <section className="strengths section" id="strengths"><div className="shell"><SectionHead overline="WHAT I BRING / 个人优势" title={<>不只理解 AI，<br /><em>更理解怎么把它做好。</em></>} /><div className="strength-grid">{strengths.map(({ icon: Icon, title, en, text, note }) => <article className="strength-card" key={title}><div className="strength-top"><span className="strength-icon"><Icon size={30} strokeWidth={1.5} /></span><ArrowUpRight size={20} strokeWidth={1.5} /></div><div><small>{en}</small><h3>{title}</h3><p>{text}</p></div><div className="strength-note"><span />{note}</div></article>)}</div><div className="strength-bottom"><span>ALWAYS CURIOUS, ALWAYS BUILDING.</span><span>继续探索 AI 产品的下一种可能 <ArrowRight size={18} /></span></div></div></section>
}

function Contact() {
  const [copied, setCopied] = useState(false)
  async function copyEmail() { try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2500) } catch { window.location.href = `mailto:${email}` } }
  return <footer className="contact" id="contact"><div className="contact-glow" /><div className="shell contact-shell"><div className="contact-top"><Brand light /><span>OPEN TO AI PRODUCT OPPORTUNITIES <i /></span></div><div className="contact-main"><p>下一次对话，也许就是新项目的起点。</p><h2>一起做点<br /><em>有意义的事<span>.</span></em></h2><div className="contact-actions"><a className="button button-white" href={`mailto:${email}`}>发送邮件 <ArrowUpRight size={20} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={19} /> : <Copy size={19} />}{copied ? '已复制邮箱' : '复制邮箱地址'}</button></div></div><div className="contact-bottom"><div><a href={`mailto:${email}`}>{email} <ArrowUpRight size={17} /></a><a href={`tel:${phone}`}>{phone} <ArrowUpRight size={17} /></a></div><span>李泫邑 © 2026</span><a href="#top">回到顶部 ↑</a></div></div></footer>
}

export default function App() { return <><Hero /><main><About /><Projects /><Strengths /></main><Contact /></> }
