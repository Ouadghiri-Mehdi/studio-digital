/* eslint-disable */
// Services — interactive list/grid hybrid

const { useState: useStateSvc } = React;

const SERVICES = [
  { id: "web", num: "01", title: "Website Development", short: "Fast, accessible sites with motion that earns its keep.", details: "Marketing sites, portfolios and editorial experiences. Next.js, headless CMS, custom CMS, framer for prototypes. Built for speed, SEO and ease of editing." },
  { id: "landing", num: "02", title: "Landing Pages", short: "Conversion pages with story, animation and intent.", details: "One-page launches for products, campaigns and waitlists. Copy, design, build and instrumentation in 2–3 weeks." },
  { id: "uiux", num: "03", title: "UI / UX Design", short: "Interface design grounded in product reality.", details: "From flows and wireframes to fully scoped design systems. We design in code as often as in Figma — and we make sure it ships." },
  { id: "platforms", num: "04", title: "Digital Platforms", short: "Real software for real workflows.", details: "Dashboards, internal tools, marketplaces and SaaS. Auth, billing, multi-tenant, real-time — the unglamorous parts done right." },
  { id: "brand", num: "05", title: "Branding", short: "Names, marks and systems that travel.", details: "Naming, logo, typographic systems, brand guidelines and the moving parts (motion, sound, interaction)." },
  { id: "startup", num: "06", title: "Startup Development", short: "MVP-to-Series-A partner for early-stage teams.", details: "Embedded with founders end-to-end: pitch deck, brand, product design, working MVP, ship plan." },
  { id: "direction", num: "07", title: "Creative Direction", short: "An outside brain for in-house teams.", details: "Fractional creative direction for design teams that need a senior eye on the work, the system and the standard." },
  { id: "auto", num: "08", title: "Automation Systems", short: "Make the dull parts disappear.", details: "Internal automations, ops tooling, workflows that wire your stack together. Less manual work, more leverage." },
  { id: "ai", num: "09", title: "AI Integration", short: "LLM features designed like real product, not demos.", details: "Search, agents, generation, classification — shipped inside real interfaces, evaluated like real software." },
  { id: "idea", num: "10", title: "Idea Transformation", short: "Bring us a rough thought, leave with a working thing.", details: "Workshops, prototyping sprints and rapid validation for founders who have a hunch but no product yet." },
];

function ServiceRow({ s, active, onEnter }) {
  return (
    <li
      className={`svc-row ${active ? "is-active" : ""}`}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      data-cursor="hover"
      tabIndex={0}
    >
      <span className="svc-num">{s.num}</span>
      <span className="svc-title">{s.title}</span>
      <span className="svc-short">{s.short}</span>
      <span className="svc-arrow" aria-hidden="true">
        <Arrow />
      </span>
    </li>
  );
}

function Services() {
  const [active, setActive] = useStateSvc(0);
  const s = SERVICES[active];
  return (
    <section id="services" data-screen-label="03 Services" className="services">
      <div className="container">
        <div className="section-head reveal">
          <div className="meta">
            <span className="meta-num">03 — capabilities</span>
            <span className="meta-tag">what we do</span>
          </div>
          <div>
            <h2 className="h-section">
              Ten services, <em className="serif">one</em> studio brain.
            </h2>
            <p className="lede">
              Pick a single capability or hand us a whole problem. We move
              between brand, product and engineering as the work demands.
            </p>
          </div>
        </div>

        <div className="svc-wrap reveal">
          <ul className="svc-list" role="list">
            {SERVICES.map((srv, i) => (
              <ServiceRow
                key={srv.id}
                s={srv}
                active={i === active}
                onEnter={() => setActive(i)}
              />
            ))}
          </ul>
          <aside className="svc-detail glass">
            <span className="chip svc-detail-tag">{s.num} / {SERVICES.length.toString().padStart(2, "0")}</span>
            <h3 className="h-3 svc-detail-title">{s.title}</h3>
            <p className="svc-detail-body">{s.details}</p>
            <div className="svc-detail-foot">
              <span className="eyebrow">scope · 2–8 weeks</span>
              <a href="#contact" className="svc-detail-cta" data-cursor="hover">
                brief us <Arrow />
              </a>
            </div>
            <div className="svc-detail-orb" aria-hidden="true" />
          </aside>
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
