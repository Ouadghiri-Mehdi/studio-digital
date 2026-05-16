/* eslint-disable */
// Projects showcase — interactive switcher

const { useState: useStateProj } = React;

const PROJECTS = [
  {
    id: "halo",
    client: "Halo Labs",
    title: "An operating system for indie research teams.",
    year: "2025",
    tags: ["Platform", "AI", "Design System"],
    summary: "Took a Notion-plus-spreadsheets workflow and turned it into a multi-tenant research OS in 14 weeks. Shipped with a custom design system, agent layer and a billing stack.",
    metrics: [
      { v: "−71%", l: "time-to-insight" },
      { v: "3.2×", l: "weekly active use" },
      { v: "14w", l: "to first revenue" },
    ],
    palette: ["oklch(0.72 0.18 245)", "oklch(0.55 0.16 245)", "oklch(0.18 0.01 250)"],
  },
  {
    id: "atelier",
    client: "Atelier Norte",
    title: "Editorial commerce for a 40-year-old furniture house.",
    year: "2025",
    tags: ["Brand", "Web", "CMS"],
    summary: "Rebrand, full digital system and a headless commerce experience that moved them from PDF catalogues to a living, story-led site.",
    metrics: [
      { v: "+248%", l: "qualified inquiries" },
      { v: "0.6s", l: "median LCP" },
      { v: "39", l: "rooms reshot" },
    ],
    palette: ["oklch(0.78 0.13 75)", "oklch(0.55 0.12 75)", "oklch(0.18 0.01 70)"],
  },
  {
    id: "north",
    client: "Northbound",
    title: "Trip planning that feels like writing a letter.",
    year: "2024",
    tags: ["Product", "AI", "Mobile"],
    summary: "A travel concierge app for a small luxury operator. Conversational planning, agent-assisted itineraries and a calm interface that hides the model.",
    metrics: [
      { v: "92%", l: "bookings retained" },
      { v: "4.9★", l: "app store rating" },
      { v: "6", l: "languages live" },
    ],
    palette: ["oklch(0.72 0.18 295)", "oklch(0.55 0.16 295)", "oklch(0.18 0.01 290)"],
  },
  {
    id: "rover",
    client: "Rover Finance",
    title: "Treasury software for founders who hate spreadsheets.",
    year: "2024",
    tags: ["SaaS", "Fintech", "Platform"],
    summary: "From pitch deck to live product. Designed the entire surface, built the engineering and shipped an MVP that closed their seed.",
    metrics: [
      { v: "$4.2M", l: "round closed" },
      { v: "11w", l: "to MVP" },
      { v: "32", l: "design tokens" },
    ],
    palette: ["oklch(0.85 0.16 145)", "oklch(0.55 0.14 145)", "oklch(0.18 0.01 150)"],
  },
];

function ProjectMock({ p }) {
  // Stylized abstract mock — gradient + grid + chrome
  const [a, b, c] = p.palette;
  return (
    <div className="proj-mock" aria-hidden="true">
      <div className="proj-mock-chrome">
        <span /><span /><span />
        <span className="proj-mock-url">{p.client.toLowerCase().replace(/\s+/g, "")}.studio</span>
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
              Recent <em className="serif">transformations</em>.
            </h2>
            <p className="lede">
              A small set of recent ships. Each began as a sentence, a sketch or a
              spreadsheet and ended as a live product.
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

            <a href="#contact" className="btn btn-ghost proj-cta" data-cursor="hover">
              Read the case study <span className="arrow"><Arrow /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
