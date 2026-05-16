/* eslint-disable */
// Process timeline + Vision section

const PROCESS = [
  { n: "01", k: "idea", t: "Idea", d: "A 30-minute call. We listen, we ask the dumb questions, we restate the brief back until it's sharp." },
  { n: "02", k: "strategy", t: "Strategy", d: "Audience, scope, edges. We name what we are not building. We write the story before the screens." },
  { n: "03", k: "design", t: "Design", d: "Brand, system, key surfaces. Designed in the medium it will live in — usually a working prototype, not a deck." },
  { n: "04", k: "develop", t: "Development", d: "Engineering in parallel with design. Real data, real auth, real edge cases from week one." },
  { n: "05", k: "launch", t: "Launch", d: "Ship in public, instrumented, with a calm rollout plan. The site you launch is the site you can maintain." },
  { n: "06", k: "evolution", t: "Evolution", d: "We stay close. Monthly iterations, quarterly reviews and a partnership that gets sharper with time." },
];

function Process() {
  return (
    <section id="process" data-screen-label="05 Process" className="process">
      <div className="container">
        <div className="section-head reveal">
          <div className="meta">
            <span className="meta-num">05 — workflow</span>
            <span className="meta-tag">how we work</span>
          </div>
          <div>
            <h2 className="h-section">
              From a <em className="serif">sentence</em>
              <br />to something live.
            </h2>
            <p className="lede">
              Six stages, repeated as one loop. The shape stays the same whether
              we are building a landing page in two weeks or a platform in two
              quarters.
            </p>
          </div>
        </div>

        <ol className="proc-rail reveal" role="list">
          <div className="proc-line" aria-hidden="true" />
          {PROCESS.map((p, i) => (
            <li key={p.n} className={`proc-node delay-${(i % 4) + 1} reveal`}>
              <div className="proc-node-head">
                <span className="proc-dot" />
                <span className="proc-num">{p.n}</span>
                <span className="proc-key">{p.k}</span>
              </div>
              <h3 className="proc-title">{p.t}</h3>
              <p className="proc-body">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" data-screen-label="06 Vision" className="vision">
      <div className="container">
        <div className="vision-grid">
          <div className="vision-eye reveal">
            <span className="eyebrow">06 — vision</span>
          </div>
          <h2 className="vision-statement reveal delay-1">
            We believe the next decade of software will be made by{" "}
            <em className="serif">small teams with strong taste</em>{" "}
            — people who can hold the whole picture in their head and ship it
            without losing the thread.
            <br /><br />
            Our job is to be one of those teams, and to help you become one.
          </h2>
        </div>

        <div className="vision-trio">
          {[
            { k: "creativity", v: "Treat every brief like it deserves a real answer, not a template." },
            { k: "technology", v: "Pick tools because they help you ship, not because they're loud." },
            { k: "impact", v: "Measure success in what the work made possible, not what it looked like." },
          ].map((b, i) => (
            <div key={b.k} className={`vision-card reveal delay-${i + 1}`}>
              <span className="chip">{b.k}</span>
              <p>{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Process = Process;
window.Vision = Vision;
