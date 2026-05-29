/* eslint-disable */
// Projects — vertical alternating layout

const { useState: useStateProj } = React;

const PROJECTS = [
  {
    id: "madrastak",
    client: "Madrastak",
    title: "School management SaaS for Mauritanian private schools.",
    year: "2025",
    tags: ["SaaS", "EdTech", "Bilingual"],
    liveUrl: "https://madrastak.net",
    live: true,
    screenshot: "assets/madrastak.png",
    summary: "Madrastak centralizes everything a private school needs — grades, report cards, attendance, billing, and parent communication — in a bilingual Arabic/French platform purpose-built for Mauritania.",
    before: "Paper registers, scattered spreadsheets, WhatsApp calls every time a parent had a question.",
    after: "320+ students, 22 teachers, 3,000+ bulletins generated — automated, bilingual, always live.",
    metrics: [{ v: "320+", l: "students" }, { v: "22", l: "teachers" }, { v: "3,000+", l: "bulletins" }],
    palette: ["oklch(0.72 0.18 245)", "oklch(0.52 0.16 245)", "oklch(0.18 0.01 250)"],
  },
  {
    id: "jesa",
    client: "JESA",
    title: "Intelligent industrial reliability platform with AI decision support.",
    year: "2025",
    tags: ["Industrial", "AI", "Web"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/ChatGPT%20Image%2029%20mai%202026%2C%2014_06_57.png",
    summary: "JESA is a web platform for industrial reliability management — integrating TUM tracking, RCA analysis, and a predictive engine built on failure history, Bayesian logic, and AI to support decision-making and continuous equipment performance improvement.",
    before: "Reliability managed manually across spreadsheets, no root cause visibility, no predictive view on equipment failures.",
    after: "One platform: TUM tracking, AI-generated RCA, Bayesian predictive engine, BI dashboard, and Excel reporting.",
    metrics: [{ v: "AI", l: "predictive engine" }, { v: "RCA", l: "analysis" }, { v: "BI", l: "dashboard" }],
    palette: ["oklch(0.70 0.16 175)", "oklch(0.50 0.14 180)", "oklch(0.13 0.010 175)"],
  },
  {
    id: "northbridge",
    client: "NorthBridge",
    title: "Intelligent international shopping and reshipping platform.",
    year: "2025",
    tags: ["Mobile", "Web", "E-Commerce"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/outpost.png",
    summary: "NorthBridge lets users shop on any international site — Amazon, Zara, Decathlon — and receive their orders locally through an integrated reshipping, logistics management, and customs assistance service.",
    before: "No easy way to order from international stores. Complex shipping, customs uncertainty, no visibility.",
    after: "Browse, buy, track — from any international store to your door, with full logistics support built in.",
    metrics: [{ v: "Mobile", l: "& web" }, { v: "Intl", l: "reshipping" }, { v: "Live", l: "tracking" }],
    palette: ["oklch(0.78 0.12 60)", "oklch(0.58 0.10 55)", "oklch(0.16 0.01 50)"],
  },
  {
    id: "gestdoc",
    client: "GestDoc Académique",
    title: "Mobile app for university document management by level and module.",
    year: "2025",
    tags: ["Mobile", "React Native", "Firebase"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/doc.PNG",
    summary: "GestDoc Académique is a React Native + Expo + Firebase app — students navigate by academic year, cycle, level, semester, and module to access their course materials (PDF, DOCX, PPTX). Admins publish and manage documents with role-based authentication.",
    before: "Course files scattered across USB drives, WhatsApp groups, and emails. No structure, no version control.",
    after: "Student / Admin roles, Firebase Storage + Firestore, full navigation from year to module — any document in seconds.",
    metrics: [{ v: "2", l: "roles" }, { v: "5", l: "screens" }, { v: "L1→M2", l: "navigation" }],
    palette: ["oklch(0.55 0.20 255)", "oklch(0.40 0.18 265)", "oklch(0.12 0.015 245)"],
  },
  {
    id: "sidhub",
    client: "SID Hub",
    title: "AI-powered document platform with intelligent search and JBot assistant.",
    year: "2025",
    tags: ["AI", "RAG", "Web"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/gf.png",
    summary: "SID Hub is a Smart Document Intelligence platform — upload PDFs, search with precision across your entire library, and query documents through JBot, an integrated AI assistant powered by RAG architecture.",
    before: "Finding a specific clause or data point in hundreds of documents meant opening files one by one.",
    after: "Upload once, search anything, ask JBot in natural language. Any answer from any document instantly.",
    metrics: [{ v: "RAG", l: "AI engine" }, { v: "JBot", l: "assistant" }, { v: "Web", l: "SaaS" }],
    palette: ["oklch(0.55 0.18 245)", "oklch(0.40 0.16 255)", "oklch(0.13 0.015 240)"],
  },
];

function ProjectMock({ p }) {
  const [a, b, c] = p.palette;
  const domainMap = { sidhub: "sidhub.app", outpost: "outpost.store", gestdoc: "gestdoc.app", tum: "tum-platform.io" };
  const mockUrl = p.liveUrl && p.liveUrl !== "#"
    ? p.liveUrl.replace(/^https?:\/\//, "")
    : (domainMap[p.id] || `${p.id}.nexora`);

  return (
    <div className="proj-mock">
      <div className="proj-mock-chrome">
        <span /><span /><span />
        <span className="proj-mock-url">{mockUrl}</span>
        {p.live && <span className="proj-mock-live-dot" />}
      </div>
      {p.screenshot ? (
        <div className="proj-mock-photo" style={{
          backgroundImage: `url(${p.screenshot}), radial-gradient(60% 80% at 80% 20%, ${a} 0%, transparent 60%), radial-gradient(40% 60% at 10% 90%, ${b} 0%, transparent 70%)`,
          backgroundColor: c,
        }}>
          <div className="proj-mock-photo-overlay" />
        </div>
      ) : (
        <div className="proj-mock-surface" style={{
          background: `radial-gradient(60% 80% at 80% 20%, ${a} 0%, transparent 60%), radial-gradient(40% 60% at 10% 90%, ${b} 0%, transparent 70%), ${c}`,
        }}>
          <div className="proj-mock-grid" />
        </div>
      )}
    </div>
  );
}

function ProjectRow({ p, idx }) {
  const reverse = idx % 2 !== 0;
  return (
    <article className={`proj-row reveal ${reverse ? "is-reverse" : ""}`}>
      <div className="proj-row-visual">
        <ProjectMock p={p} />
      </div>
      <div className="proj-row-info">
        <div className="proj-row-meta">
          <span className="proj-row-eyebrow">{p.tags.join(" · ")} · {p.year}</span>
          {p.live && <span className="chip accent">● Live</span>}
        </div>
        <h3 className="proj-row-name">{p.client}</h3>
        <p className="proj-row-tagline">{p.title}</p>
        <p className="proj-row-summary">{p.summary}</p>

        <div className="proj-before-after">
          <div className="proj-ba">
            <span className="proj-ba-label">before</span>
            <p>{p.before}</p>
          </div>
          <div className="proj-ba">
            <span className="proj-ba-label">after</span>
            <p>{p.after}</p>
          </div>
        </div>

        <div className="proj-row-foot">
          {p.liveUrl !== "#" ? (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent" data-cursor="hover">
              View live <span className="arrow"><Arrow /></span>
            </a>
          ) : (
            <a href="#contact" className="proj-row-link" data-cursor="hover">
              Start a similar project <span className="arrow"><Arrow /></span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" data-screen-label="04 Projects" className="projects">
      <div className="container">
        <div className="section-head reveal">
          <div className="meta">
            <span className="meta-num">04 — selected work</span>
            <span className="meta-tag">case studies</span>
          </div>
          <div>
            <h2 className="h-section">
              Projects that <em className="serif">moved</em>
              <br />things forward.
            </h2>
            <p className="lede">
              A selection of real products built from scratch — each one
              started as an idea and shipped as a live digital product.
            </p>
          </div>
        </div>

        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
