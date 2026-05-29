/* eslint-disable */
// Projects showcase — interactive switcher

const { useState: useStateProj } = React;

const PROJECTS = [
  {
    id: "ecommerce",
    client: "E-Commerce App",
    title: "A full e-commerce platform — web and mobile, end to end.",
    year: "2025",
    tags: ["Web", "Mobile", "E-Commerce"],
    liveUrl: "#",
    live: false,
    screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    summary: "A complete online store built for scale — product catalog, cart, payments, and order management designed as a single cohesive experience across web and mobile.",
    before: "Products listed on WhatsApp, payments via wire transfer, orders tracked in a notebook. Scaling was impossible.",
    after: "A full storefront: catalog, cart, checkout, and order history — live on web and mobile, with no manual steps.",
    metrics: [
      { v: "Web", l: "& mobile" },
      { v: "Full", l: "stack build" },
      { v: "Live", l: "product" },
    ],
    palette: ["oklch(0.78 0.18 50)", "oklch(0.58 0.16 50)", "oklch(0.18 0.01 55)"],
  },
  {
    id: "madrastak",
    client: "Madrastak",
    title: "School management SaaS for Mauritanian private schools.",
    year: "2025",
    tags: ["SaaS", "EdTech", "Bilingual"],
    liveUrl: "https://madrastak.net",
    live: true,
    screenshot: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    summary: "Madrastak centralizes everything a private school needs — grades, report cards, attendance, billing, and parent communication — in a bilingual platform purpose-built for Mauritania.",
    before: "Paper registers, scattered spreadsheets, WhatsApp calls for every parent update. Each report card season was a three-day manual ordeal.",
    after: "Automated report cards, real-time attendance, integrated billing, and a parent portal. Over 3,000 bulletins generated in the first year.",
    metrics: [
      { v: "3,000+", l: "bulletins generated" },
      { v: "1,000+", l: "students managed" },
      { v: "94%", l: "attendance tracked" },
    ],
    palette: ["oklch(0.72 0.18 245)", "oklch(0.52 0.16 245)", "oklch(0.18 0.01 250)"],
  },
  {
    id: "profnum",
    client: "Prof Num",
    title: "A mobile tool built for professionals in the field.",
    year: "2024",
    tags: ["Mobile", "iOS", "Android"],
    liveUrl: "#",
    live: false,
    screenshot: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    summary: "Prof Num puts professional-grade workflow tools in a mobile app — built for people who work outside the office and need everything fast, offline-ready, and in their pocket.",
    before: "Multiple apps, paper notes, and long message threads just to manage a normal working day. Time lost to admin was time stolen from clients.",
    after: "One app for scheduling, client records, and daily operations — clean, fast, and designed for the field.",
    metrics: [
      { v: "Mobile", l: "first" },
      { v: "iOS", l: "& Android" },
      { v: "Shipped", l: "product" },
    ],
    palette: ["oklch(0.72 0.18 295)", "oklch(0.52 0.16 295)", "oklch(0.18 0.01 290)"],
  },
  {
    id: "reabiliti",
    client: "Reabiliti",
    title: "Digitizing industrial rehabilitation management.",
    year: "2024",
    tags: ["Industrial", "Platform", "Web"],
    liveUrl: "#",
    live: false,
    screenshot: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    summary: "Reabiliti replaces fragmented paper-based processes in industrial rehabilitation with a unified digital platform — one place for tracking, reporting, and coordination.",
    before: "Patient records in paper files, sessions logged in separate Excel sheets, no live view of progress or outcomes.",
    after: "A unified platform with patient journeys, session logs, and live reporting — always up to date, always accessible.",
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
  const mockUrl = p.liveUrl && p.liveUrl !== "#"
    ? p.liveUrl.replace(/^https?:\/\//, "")
    : `${p.id}.nexora`;

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
