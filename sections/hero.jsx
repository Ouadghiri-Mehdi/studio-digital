/* eslint-disable */
// Hero — editorial layout

const { useEffect, useRef, useState } = React;

function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const upd = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }));
    };
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" data-screen-label="01 Hero" className="hero">

      {/* Giant background number */}
      <div className="hero-bg-num" aria-hidden="true">01</div>

      <div className="container hero-wrap">

        {/* ── Top meta bar ── */}
        <div className="hero-head">
          <span className="hero-label">01 — Digital Innovation Studio</span>
          <span className="hero-label">
            <span className="hero-time-dot" />
            {time} · Available worldwide
          </span>
        </div>

        {/* ── Main title ── */}
        <h1 className="hero-title">
          <span className="hero-line reveal in">We turn</span>
          <span className="hero-line reveal in delay-1">
            ideas into{" "}
            <em className="hero-em">digital</em>
          </span>
          <span className="hero-line hero-line-dim reveal in delay-2">
            products<span className="hero-dot">.</span>
          </span>
        </h1>

        {/* ── Chips + CTA ── */}
        <div className="hero-divide reveal in delay-3">
          <div className="hero-tags">
            {["Web", "Mobile", "Platforms", "AI", "Branding"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <div className="hero-cta-pair">
            <a href="#projects" className="btn btn-ghost" data-cursor="hover">
              See our work <span className="arrow"><Arrow /></span>
            </a>
            <a href="#contact" className="btn btn-primary" data-cursor="hover">
              Start a project <span className="arrow"><Arrow /></span>
            </a>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="hero-foot reveal in delay-4">
          {[
            { v: "4+", l: "projects shipped" },
            { v: "2", l: "founders" },
            { v: "3", l: "industries" },
            { v: "∞", l: "ideas" },
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
      <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

window.Hero = Hero;
window.Arrow = Arrow;
