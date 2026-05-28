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
              We are creative developers and designers obsessed with the moment
              an idea becomes real. At Nexora Studio, we help individuals,
              startups and teams turn rough concepts into shipped digital products —
              web, mobile and beyond.
            </p>
          </div>
        </div>

        <div className="founders">
          <FounderCard
            idx={1}
            initials="M.O"
            name="Mehdi Ouadghiri"
            role="engineering + product"
            bio="Full-stack developer with a passion for building digital products that solve real problems. Leads engineering, product architecture and the technical direction of the studio."
            focus={["full-stack development", "mobile applications", "platform architecture", "startup building"]}
          />
          <FounderCard
            idx={2}
            initials="A.F"
            name="Ahmed Fall"
            role="design + brand"
            bio="Digital designer focused on crafting interfaces that are both beautiful and functional. Leads UI/UX, brand systems and the visual identity of every project we ship."
            focus={["UI/UX design", "brand identity", "design systems", "creative direction"]}
          />
        </div>

        <div className="who-pillars">
          {[
            { k: "approach", v: "Small team, full ownership. We are the people who pitch, design, build and ship — no handoffs, no agency middle layer." },
            { k: "method", v: "From idea to interface to working software. We move fast without cutting corners, in weeks not quarters." },
            { k: "promise", v: "If you can describe it, we can build it. Web, mobile, platform or brand — we make ideas real." },
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
