/* eslint-disable */
// Hero section — Nova.Studio inspired layout

const { useEffect, useState } = React;

function Hero() {
  return (
    <section id="hero" data-screen-label="01 Hero" className="hero">
      <div className="container hero-wrap">

        {/* ── Badge ── */}
        <div className="hero-badge reveal in">
          <span className="hero-badge-dot" />
          Nexora Studio · Digital Innovation · 2025
        </div>

        {/* ── Title ── */}
        <h1 className="hero-title reveal in delay-1">
          Transforming ideas into<br />
          <em className="hero-em">digital</em> experiences.
        </h1>

        {/* ── Sub ── */}
        <p className="hero-sub reveal in delay-2">
          We build websites, mobile apps, platforms and AI-powered solutions —<br className="hero-br" />
          for founders and ambitious teams shaping what comes next.
        </p>

        {/* ── CTAs ── */}
        <div className="hero-cta reveal in delay-3">
          <a href="#projects" className="btn btn-accent" data-cursor="hover">
            Explore our work <span className="arrow"><Arrow /></span>
          </a>
          <a href="#contact" className="btn btn-ghost" data-cursor="hover">
            Start a project <span className="arrow"><Arrow /></span>
          </a>
        </div>

        {/* ── Stats ── */}
        <div className="hero-foot reveal in delay-4">
          {[
            { v: "4+", l: "Projects Shipped" },
            { v: "2×", l: "Founders, Full-Stack" },
            { v: "∞",  l: "Ideas Welcome" },
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

window.Hero = Hero;
