/* eslint-disable */
// Who We Are + founders

function FounderCard({ idx, initials, name, role, bio, focus }) {
  return (
    <div className="founder-card reveal" data-cursor="hover">
      <div className="founder-mug" aria-hidden="true">
        <div className="founder-mug-grid" />
        <span className="founder-initials">{initials}</span>
        <span className="founder-tag chip">founder · 0{idx}</span>
      </div>
      <div className="founder-body">
        <div className="founder-meta">
          <span className="eyebrow" style={{ "--no-dot": 1 }}>{role}</span>
        </div>
        <h3 className="founder-name h-3">{name}</h3>
        <p className="founder-bio">{bio}</p>
        <ul className="founder-focus">
          {focus.map((f) => <li key={f}>{f}</li>)}
        </ul>
      </div>
    </div>
  );
}

function WhoWeAre() {
  return (
    <section id="studio" data-screen-label="02 Who We Are" className="who">
      <div className="container">
        <div className="section-head reveal">
          <div className="meta">
            <span className="meta-num">02 — studio</span>
            <span className="meta-tag">who we are</span>
          </div>
          <div>
            <h2 className="h-section">
              Two builders, <em className="serif">one</em> studio,
              <br />any idea you can describe.
            </h2>
            <p className="lede">
              We are creative developers, problem solvers and designers focused on
              the moment an idea becomes real. Together we help individuals,
              startups and teams turn rough sketches into shipped digital products.
            </p>
          </div>
        </div>

        <div className="founders">
          <FounderCard
            idx={1}
            initials="A.M"
            name="Alessio Marini"
            role="design + brand"
            bio="Spent a decade designing for studios in Milan and Berlin before falling for the loop between code and craft. Leads brand systems, UI and the visual half of the studio."
            focus={["interface design", "brand systems", "motion direction", "creative review"]}
          />
          <FounderCard
            idx={2}
            initials="N.R"
            name="Nora Rinaldi"
            role="engineering + systems"
            bio="Ex-product engineer who has shipped tools for fintech, media and AI startups. Owns architecture, performance and the unglamorous parts that keep the lights on."
            focus={["full-stack engineering", "platform architecture", "AI integration", "automation"]}
          />
        </div>

        <div className="who-pillars">
          {[
            { k: "approach", v: "Small team, full ownership. We are the people who pitch, design, build and ship — no handoffs, no agency middle layer." },
            { k: "method", v: "Strategy and craft as one loop. We move from idea to interface to working software in weeks, not quarters." },
            { k: "promise", v: "If you can describe it, we can prototype it. If it works in a prototype, we can ship it for real." },
          ].map((p, i) => (
            <div key={p.k} className={`who-pillar reveal delay-${i + 1}`}>
              <span className="chip">{p.k}</span>
              <p>{p.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.WhoWeAre = WhoWeAre;
