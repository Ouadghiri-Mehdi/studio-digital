/* eslint-disable */
// Hero section

const { useEffect, useState } = React;

function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    upd();
    const id = setInterval(upd, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" data-screen-label="01 Hero" className="hero">

      <div className="hero-bg-num" aria-hidden="true">01</div>

      <div className="container hero-wrap">

        {/* ── Top meta bar ── */}
        <div className="hero-head">
          <span className="hero-label">
            <span className="hero-pulse" />
            Nexora Studio · Digital Innovation Studio
          </span>
          <span className="hero-label hero-label-hide">
            {time} · Available worldwide
          </span>
        </div>

        {/* ── Two-column body ── */}
        <div className="hero-body">

          <h1 className="hero-title reveal in">
            We build<br />
            digital products<br />
            for <em className="hero-em">ambitious</em><br />
            founders.
          </h1>

          <div className="hero-side">
            <p className="hero-sub reveal in delay-1">
              Nexora Studio is a two-person digital innovation studio.
              We design and build websites, mobile apps, platforms,
              and AI-powered solutions — from idea to live product,
              available worldwide.
            </p>

            <div className="hero-cta reveal in delay-2">
              <a href="#projects" className="btn btn-primary" data-cursor="hover">
                Explore our work <span className="arrow"><Arrow /></span>
              </a>
              <a href="#contact" className="btn btn-ghost" data-cursor="hover">
                Start a project <span className="arrow"><Arrow /></span>
              </a>
            </div>

            <div className="hero-chips reveal in delay-3">
              {["Web", "Mobile", "Platforms", "AI", "Branding"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

        </div>

        {/* ── Stats row ── */}
        <div className="hero-foot reveal in delay-4">
          {[
            { v: "4+", l: "projects shipped" },
            { v: "2",  l: "founders" },
            { v: "3",  l: "industries" },
            { v: "∞",  l: "ideas" },
          ].map((m) => (
            <div key={m.l} className="hero-metric">
              <div className="hero-metric-v">{m.v}</div>
              <div className="hero-metric-l">{m.l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

window.Hero  = Hero;
window.Arrow = Arrow;
