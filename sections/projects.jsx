/* eslint-disable */
// Projects showcase — interactive switcher

const { useState: useStateProj } = React;

const PROJECTS = [
  {
    id: "ecommerce",
    client: "E-Commerce App",
    title: "A full e-commerce experience, web and mobile.",
    year: "2025",
    tags: ["Web", "Mobile", "E-Commerce"],
    liveUrl: "#", // → remplace par le vrai lien
    screenshot: null, // → remplace par le chemin de l'image ex: "screenshots/ecommerce.png"
    summary: "A complete e-commerce platform built for a seamless shopping experience — product catalog, cart, payments and order management, all in one.",
    metrics: [
      { v: "Web", l: "& mobile" },
      { v: "Full", l: "stack build" },
      { v: "Live", l: "product" },
    ],
    palette: ["oklch(0.78 0.18 50)", "oklch(0.58 0.16 50)", "oklch(0.18 0.01 55)"],
  },
  {
    id: "madrassti",
    client: "Madrassti",
    title: "A digital platform reimagining how students learn.",
    year: "2025",
    tags: ["EdTech", "Platform", "Web"],
    liveUrl: "#", // → remplace par le vrai lien
    screenshot: null, // → remplace par le chemin de l'image
    summary: "Madrassti is an educational digital platform connecting students and instructors. Built for accessibility, engagement and real learning outcomes.",
    metrics: [
      { v: "EdTech", l: "platform" },
      { v: "Web", l: "app" },
      { v: "Live", l: "product" },
    ],
    palette: ["oklch(0.72 0.18 245)", "oklch(0.52 0.16 245)", "oklch(0.18 0.01 250)"],
  },
  {
    id: "profnum",
    client: "Prof Num",
    title: "A professional digital mobile application.",
    year: "2024",
    tags: ["Mobile", "App", "Professional"],
    liveUrl: "#", // → remplace par le vrai lien
    screenshot: null, // → remplace par le chemin de l'image
    summary: "A professional digital tool delivered as a mobile application — built to solve a real workflow problem and designed for daily use.",
    metrics: [
      { v: "Mobile", l: "application" },
      { v: "iOS", l: "& Android" },
      { v: "Shipped", l: "product" },
    ],
    palette: ["oklch(0.72 0.18 295)", "oklch(0.52 0.16 295)", "oklch(0.18 0.01 290)"],
  },
  {
    id: "reabiliti",
    client: "Reabiliti",
    title: "An industrial platform for rehabilitation management.",
    year: "2024",
    tags: ["Industrial", "Platform", "Web"],
    liveUrl: "#", // → remplace par le vrai lien
    screenshot: null, // → remplace par le chemin de l'image
    summary: "Reabiliti is an industrial project tackling rehabilitation management with a digital solution — streamlining processes that were previously manual and fragmented.",
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
  if (p.screenshot) {
    return (
      <div className="proj-mock" aria-hidden="true">
        <div className="proj-mock-chrome">
          <span /><span /><span />
          <span className="proj-mock-url">{p.client.toLowerCase().replace(/\s+/g, "")}</span>
        </div>
        <div className="proj-mock-surface" style={{ padding: 0, overflow: "hidden" }}>
          <img src={p.screenshot} alt={p.client} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>
    );
  }
  return (
    <div className="proj-mock" aria-hidden="true">
      <div className="proj-mock-chrome">
        <span /><span /><span />
        <span className="proj-mock-url">{p.client.toLowerCase().replace(/\s+/g, "")}</span>
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
              A selection of projects we built from scratch. Each one started
              as an idea and ended as a live digital product.
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
            </button>
          ))}
        </div>

        <div className="proj-stage reveal" key={p.id}>
          <ProjectMock p={p} />
          <div className="proj-info">
            <div className="proj-info-head">
              <span className="chip">{p.year}</span>
              {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <h3 className="h-3 proj-title">{p.title}</h3>
            <p className="proj-summary">{p.summary}</p>

            <div className="proj-before-after">
              <div className="proj-ba">
                <span className="proj-ba-label">before</span>
                <p>Spreadsheets, scattered docs, hand-cranked handoffs. Growth bottlenecked by the founder.</p>
              </div>
              <div className="proj-ba">
                <span className="proj-ba-label">after</span>
                <p>One surface, one source of truth, automated where it matters and editorial where it counts.</p>
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

            <div className="proj-cta-row" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {p.liveUrl && p.liveUrl !== "#" ? (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary proj-cta" data-cursor="hover">
                  View live <span className="arrow"><Arrow /></span>
                </a>
              ) : (
                <span className="btn btn-primary proj-cta is-disabled" style={{ opacity: 0.4, cursor: "default" }}>
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
