/* eslint-disable */
// Projects showcase — interactive switcher

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
    before: "Paper registers, scattered spreadsheets, WhatsApp calls for every parent update. Each report card season was a three-day manual ordeal.",
    after: "Automated report cards, real-time attendance, integrated billing, and a parent portal. 320+ students and 22 teachers managed on one platform.",
    metrics: [
      { v: "320+", l: "students managed" },
      { v: "22", l: "teachers" },
      { v: "3,000+", l: "bulletins generated" },
    ],
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
    summary: "SID Hub is a Smart Document Intelligence platform — upload PDFs, search with precision, and query your documents through JBot, an integrated AI assistant that answers instantly.",
    before: "Documents scattered across folders and email threads. Finding a specific clause or data point meant opening dozens of files manually.",
    after: "One hub: upload, search, and ask questions in natural language. JBot gives instant answers from any document in the library.",
    metrics: [
      { v: "AI", l: "search engine" },
      { v: "JBot", l: "AI assistant" },
      { v: "Web", l: "SaaS platform" },
    ],
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
    summary: "Outpost is a multi-store mobile marketplace — browse partner stores, order from any URL, track shipments in real time, and shop from anywhere in the world from one app.",
    before: "Shopping from multiple stores meant juggling separate apps, accounts, and delivery trackers. No unified experience.",
    after: "One app: browse stores, order from any URL, track shipments live, and manage all orders in a single clean interface.",
    metrics: [
      { v: "Mobile", l: "iOS app" },
      { v: "Multi", l: "store marketplace" },
      { v: "Live", l: "shipment tracking" },
    ],
    palette: ["oklch(0.78 0.12 60)", "oklch(0.58 0.10 55)", "oklch(0.16 0.01 50)"],
  },
  {
    id: "gestdoc",
    client: "GestDoc Académique",
    title: "A mobile app for managing academic documents by year and level.",
    year: "2025",
    tags: ["Mobile", "React Native", "Education"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/doc.PNG",
    summary: "GestDoc Académique is a React Native + Expo + Firebase mobile app — students log in, access their academic resources organized by year (2022–2025) and level (L1–L3, M1–M2), and find any course instantly.",
    before: "Courses scattered across USB drives, WhatsApp groups, and email threads. No structured access, no search, no organization.",
    after: "One app: 142 documents, 8 modules, and 23 favourites — organized by academic year and level, accessible in seconds.",
    metrics: [
      { v: "142", l: "documents" },
      { v: "5", l: "screens built" },
      { v: "L1→M2", l: "level navigation" },
    ],
    palette: ["oklch(0.55 0.20 255)", "oklch(0.40 0.18 265)", "oklch(0.12 0.015 245)"],
  },
  {
    id: "tum",
    client: "TUM",
    title: "Industrial time usage model with AI-powered analysis.",
    year: "2025",
    tags: ["Industrial", "AI", "Web"],
    liveUrl: "#",
    live: false,
    screenshot: "assets/ChatGPT%20Image%2029%20mai%202026%2C%2014_06_57.png",
    summary: "TUM (Time Usage Model) is an industrial web platform for tracking daily activity, identifying performance bottlenecks with AI-powered Root Cause Analysis, and exporting structured reports to Excel.",
    before: "Time tracking done manually in spreadsheets, no visibility on root causes, no automated reporting. Decisions made on incomplete data.",
    after: "One platform: daily activity logs, AI-generated RCA insights, quick actions, BI dashboard, and one-click Excel export.",
    metrics: [
      { v: "AI", l: "RCA analysis" },
      { v: "BI", l: "dashboard" },
      { v: "Excel", l: "export" },
    ],
    palette: ["oklch(0.70 0.16 175)", "oklch(0.50 0.14 180)", "oklch(0.13 0.010 175)"],
    metrics: [
      { v: "Industrial", l: "sector" },
      { v: "Web", l: "platform" },
      { v: "Shipped", l: "product" },
    ],
    palette: ["oklch(0.72 0.18 175)", "oklch(0.52 0.16 175)", "oklch(0.18 0.01 175)"],
  },
];

function ProjectMock({ p }) {
  const [a, b, c] = p.palette;
  const domainMap = { sidhub: "sidhub.app", outpost: "outpost.store", reabiliti: "reabiliti.io", profnum: "profnum.app" };
  const mockUrl = p.liveUrl && p.liveUrl !== "#"
    ? p.liveUrl.replace(/^https?:\/\//, "")
    : (domainMap[p.id] || `${p.id}.nexora`);

  if (p.screenshot) {
    return (
      <div className="proj-mock">
        <div className="proj-mock-chrome">
          <span /><span /><span />
          <span className="proj-mock-url">{mockUrl}</span>
          {p.live && <span className="proj-mock-live-dot" />}
        </div>
        <div
          className="proj-mock-photo"
          style={{
            backgroundImage: `url(${p.screenshot}), radial-gradient(60% 80% at 80% 20%, ${a} 0%, transparent 60%), radial-gradient(40% 60% at 10% 90%, ${b} 0%, transparent 70%)`,
            backgroundColor: c,
          }}
        >
          <div className="proj-mock-photo-overlay" />
        </div>
      </div>
    );
  }

  return (
    <div className="proj-mock" aria-hidden="true">
      <div className="proj-mock-chrome">
        <span /><span /><span />
        <span className="proj-mock-url">{mockUrl}</span>
      </div>
      <div
        className="proj-mock-surface"
        style={{
          background: `radial-gradient(60% 80% at 80% 20%, ${a} 0%, transparent 60%), radial-gradient(40% 60% at 10% 90%, ${b} 0%, transparent 70%), ${c}`,
        }}
      >
        <div className="proj-mock-grid" />
        <div className="proj-mock-card">
          <div className="proj-mock-card-row">
            <span className="proj-mock-pill" style={{ background: a }} />
            <span className="proj-mock-pill" />
          </div>
          <div className="proj-mock-lines">
            <span /><span /><span style={{ width: "60%" }} />
          </div>
          <div className="proj-mock-bars">
            <i style={{ height: "30%" }} />
            <i style={{ height: "55%", background: a }} />
            <i style={{ height: "42%" }} />
            <i style={{ height: "78%", background: a }} />
            <i style={{ height: "60%" }} />
            <i style={{ height: "88%", background: b }} />
            <i style={{ height: "70%" }} />
          </div>
        </div>
        <div className="proj-mock-side">
          <div className="proj-mock-side-card">
            <span className="proj-mock-pill" style={{ background: a, width: 24 }} />
            <span className="proj-mock-lines">
              <span /><span style={{ width: "70%" }} />
            </span>
          </div>
          <div className="proj-mock-side-card">
            <span className="proj-mock-pill" style={{ background: b, width: 24 }} />
            <span className="proj-mock-lines">
              <span /><span style={{ width: "50%" }} />
            </span>
          </div>
          <div className="proj-mock-side-card">
            <span className="proj-mock-pill" style={{ width: 24 }} />
            <span className="proj-mock-lines">
              <span /><span style={{ width: "80%" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useStateProj(0);
  const p = PROJECTS[active];
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
              Our <em className="serif">work</em> speaks.
            </h2>
            <p className="lede">
              Four products built from scratch — each one a real client,
              a real problem, and a real product in the wild.
            </p>
          </div>
        </div>

        <div className="proj-switcher reveal">
          {PROJECTS.map((pr, i) => (
            <button
              key={pr.id}
              className={`proj-tab ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              data-cursor="hover"
            >
              <span className="proj-tab-num">0{i + 1}</span>
              <span className="proj-tab-name">{pr.client}</span>
              {pr.live && <span className="proj-tab-dot" />}
            </button>
          ))}
        </div>

        <div className="proj-stage reveal" key={p.id}>
          <ProjectMock p={p} />
          <div className="proj-info">
            <div className="proj-info-head">
              <span className="chip">{p.year}</span>
              {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              {p.live && <span className="chip accent">● Live</span>}
            </div>

            <h3 className="h-3 proj-title">{p.title}</h3>
            <p className="proj-summary">{p.summary}</p>

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

            <div className="proj-metrics">
              {p.metrics.map((m) => (
                <div key={m.l} className="proj-metric">
                  <div className="proj-metric-v">{m.v}</div>
                  <div className="proj-metric-l">{m.l}</div>
                </div>
              ))}
            </div>

            <div className="proj-cta-row">
              {p.liveUrl && p.liveUrl !== "#" ? (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary proj-cta" data-cursor="hover">
                  View live <span className="arrow"><Arrow /></span>
                </a>
              ) : (
                <span className="btn btn-primary proj-cta is-disabled">
                  Link coming soon
                </span>
              )}
              <a href="#contact" className="btn btn-ghost proj-cta" data-cursor="hover">
                Start a project <span className="arrow"><Arrow /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
