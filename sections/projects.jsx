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
    before: "Paper registers, scattered spreadsheets, WhatsApp calls for every parent update.",
    after: "320+ students, 22 teachers, 3,000+ bulletins generated — automated, bilingual, live.",
    metrics: [{ v: "320+", l: "students" }, { v: "22", l: "teachers" }, { v: "3,000+", l: "bulletins" }],
    palette: ["oklch(0.72 0.18 245)", "oklch(0.52 0.16 245)", "oklch(0.18 0.01 250)"],
  },
  {
    id: "sidhub",
    client: "SID Hub",
    title: "AI-powered document management with intelligent search.",
    year: "2025",
    tags: ["AI", "Web", "SaaS"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/gf.png",
    summary: "Smart Document Intelligence Hub — upload PDFs, search with precision, and query your documents through JBot, an integrated AI assistant that answers instantly from any file in your library.",
    before: "Documents scattered across folders and emails. Finding one specific clause meant opening dozens of files.",
    after: "One hub: upload, smart search, and AI-powered Q&A. Any answer from any document in seconds.",
    metrics: [{ v: "AI", l: "search" }, { v: "JBot", l: "assistant" }, { v: "Web", l: "SaaS" }],
    palette: ["oklch(0.55 0.18 245)", "oklch(0.40 0.16 255)", "oklch(0.13 0.015 240)"],
  },
  {
    id: "outpost",
    client: "Outpost",
    title: "A mobile marketplace connecting buyers and stores worldwide.",
    year: "2025",
    tags: ["Mobile", "iOS", "Marketplace"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/outpost.png",
    summary: "Outpost is a multi-store mobile marketplace — browse partner stores, order from any URL, and track shipments in real time. One app for the entire shopping experience.",
    before: "Shopping across multiple stores meant juggling separate apps, accounts, and delivery trackers.",
    after: "One clean app: browse stores, order from any URL, track shipments live, manage all orders.",
    metrics: [{ v: "iOS", l: "app" }, { v: "Multi", l: "store" }, { v: "Live", l: "tracking" }],
    palette: ["oklch(0.78 0.12 60)", "oklch(0.58 0.10 55)", "oklch(0.16 0.01 50)"],
  },
  {
    id: "gestdoc",
    client: "GestDoc Académique",
    title: "A React Native app for managing academic resources by level.",
    year: "2025",
    tags: ["Mobile", "React Native", "Education"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/doc.PNG",
    summary: "GestDoc Académique is a React Native + Expo + Firebase mobile app — students log in, access their resources organized by academic year and level (L1→M2), and find any course instantly.",
    before: "Courses scattered across USB drives, WhatsApp groups, and emails. No search, no structure.",
    after: "142 documents, 8 modules, hierarchical navigation by year and level — all in one clean app.",
    metrics: [{ v: "142", l: "documents" }, { v: "5", l: "screens" }, { v: "L1→M2", l: "levels" }],
    palette: ["oklch(0.55 0.20 255)", "oklch(0.40 0.18 265)", "oklch(0.12 0.015 245)"],
  },
  {
    id: "tum",
    client: "TUM Platform",
    title: "Industrial time usage model with AI-powered root cause analysis.",
    year: "2025",
    tags: ["Industrial", "AI", "Web"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/ChatGPT%20Image%2029%20mai%202026%2C%2014_06_57.png",
    summary: "TUM (Time Usage Model) is an industrial web platform for tracking daily activity, identifying performance bottlenecks through AI-generated Root Cause Analysis, and exporting structured reports to Excel.",
    before: "Time tracking done manually in spreadsheets, no root cause visibility, decisions made on incomplete data.",
    after: "Daily activity logs, AI RCA insights, BI dashboard, and one-click Excel export — all connected.",
    metrics: [{ v: "AI", l: "RCA analysis" }, { v: "BI", l: "dashboard" }, { v: "Excel", l: "export" }],
    palette: ["oklch(0.70 0.16 175)", "oklch(0.50 0.14 180)", "oklch(0.13 0.010 175)"],
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
