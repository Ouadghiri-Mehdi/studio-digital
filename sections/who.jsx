/* eslint-disable */
// Who We Are + founders

function FounderCard({ idx, photo, initials, name, role, bio, focus }) {
  return (
    <div className="founder-card reveal" data-cursor="hover">
      <div className="founder-mug">
        {photo ? (
          <>
            <img src={photo} alt={name} className="founder-photo" />
            <div className="founder-photo-overlay" />
          </>
        ) : (
          <>
            <div className="founder-mug-grid" />
            <span className="founder-initials">{initials}</span>
          </>
        )}
        <span className="founder-tag chip">founder · 0{idx}</span>
      </div>
      <div className="founder-body">
        <div className="founder-meta">
          <span className="eyebrow">{role}</span>
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
              Two engineers, <em className="serif">one</em> studio,
              <br />any idea you can describe.
            </h2>
            <p className="lede">
              We are full-stack engineers obsessed with the moment an idea becomes real.
              At Nexora Studio, we help founders and teams turn rough concepts into
              shipped digital products — powered by AI, built with precision.
            </p>
          </div>
        </div>

        <div className="founders">
          <FounderCard
            idx={1}
            photo="assets/mehdi.png"
            initials="M.O"
            name="Mehdi Ouadghiri"
            role="full-stack · AI & automation"
            bio="Full-stack engineer with a strong focus on AI-powered systems and automation. Leads product architecture, backend and frontend development — and brings innovation and creativity to every solution built."
            focus={["Full-Stack Development", "AI & Automation", "Innovation", "Creativity"]}
          />
          <FounderCard
            idx={2}
            photo="assets/fall.png"
            initials="A.F"
            name="Ahmed Fall"
            role="full-stack · AI development"
            bio="Full-stack engineer specialized in AI development and innovative digital creation. Builds scalable systems and crafts the experiences that turn ambitious ideas into live, working products."
            focus={["Full-Stack Development", "AI Development", "Innovation", "Creation"]}
          />
        </div>

        <div className="who-pillars">
          {[
            { k: "approach", v: "Two full-stack engineers with full ownership. We pitch, architect, build and ship — no handoffs, no agency layer, just us and the product." },
            { k: "method", v: "From idea to AI-powered system to live product. We move fast without cutting corners, in weeks not quarters." },
            { k: "promise", v: "If you can describe it, we can build it. Web, mobile, platform or AI integration — we make ideas real." },
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
