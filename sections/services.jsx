/* eslint-disable */
// Services — interactive list/grid hybrid

const { useState: useStateSvc } = React;

const SERVICES = [
  { id: "web", num: "01", title: "Website Development", short: "Fast, modern sites built to convert and impress.", details: "Marketing sites, portfolios, landing pages and editorial experiences. Built for speed, SEO and ease of editing — with design that earns attention." },
  { id: "mobile", num: "02", title: "Mobile Applications", short: "Native and cross-platform apps that people actually use.", details: "iOS and Android apps built with React Native or Flutter. From MVP to full product — clean UI, smooth performance, real-world tested." },
  { id: "uiux", num: "03", title: "UI / UX Design", short: "Interfaces grounded in clarity and intent.", details: "From user flows and wireframes to complete design systems. We design in the medium the product will live in — and we make sure it ships." },
  { id: "platforms", num: "04", title: "Digital Platforms", short: "Real software built for real workflows.", details: "Dashboards, SaaS, internal tools, marketplaces and e-commerce platforms. Auth, billing, real-time — the hard parts done right." },
  { id: "brand", num: "05", title: "Branding & Identity", short: "Marks, systems and stories that last.", details: "Naming, logo, typography, color systems and brand guidelines. We build identities that work across every touchpoint." },
  { id: "startup", num: "06", title: "Startup Building", short: "From idea to live product, end-to-end.", details: "We embed with founders: idea validation, brand, product design, engineering and launch. Your first technical co-founder." },
  { id: "auto", num: "07", title: "Automation & AI", short: "Smart systems that do the work for you.", details: "Workflow automation, AI integration, intelligent features — designed like real products, not demos. Less manual work, more leverage." },
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
              Seven services, <em className="serif">one</em> studio brain.
            </h2>
            <p className="lede">
              Pick a single capability or hand us a whole problem. We move
              between brand, design and engineering as the work demands.
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
