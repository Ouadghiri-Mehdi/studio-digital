/* eslint-disable */
// Hero section with animated orb + grid bg

const { useEffect, useRef, useState } = React;

function HeroOrb() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const el = ref.current;
      if (!el) return;
      const dt = (t - start) / 1000;
      const x = Math.sin(dt * 0.3) * 40;
      const y = Math.cos(dt * 0.22) * 30;
      el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="hero-orb-wrap" aria-hidden="true">
      <div ref={ref} className="hero-orb" />
      <div className="hero-orb hero-orb-2" />
    </div>
  );
}

function HeroMetric({ label, value }) {
  return (
    <div className="hero-metric">
      <div className="hero-metric-v">{value}</div>
      <div className="hero-metric-l">{label}</div>
    </div>
  );
}

function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const upd = () => {
      const d = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
      setTime(d.toLocaleTimeString("en-GB", opts));
    };
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" data-screen-label="01 Hero" className="hero">
      <HeroOrb />
      <div className="container hero-grid">
        <div className="hero-corner hero-corner-tl">
          <span className="eyebrow">nexora studio — digital innovation</span>
        </div>
        <div className="hero-corner hero-corner-tr">
          <span className="hero-time"><span className="hero-time-dot" /> available worldwide / {time}</span>
        </div>

        <h1 className="h-display hero-title">
          <span className="reveal in">Transforming</span>
          <span className="reveal in delay-1"><em className="serif">ideas</em> into</span>
          <span className="reveal in delay-2">digital experiences<span className="hero-period">.</span></span>
        </h1>

        <p className="hero-sub reveal in delay-3">
          Nexora Studio — a two-person digital innovation studio building websites,
          mobile apps, platforms and smart digital solutions for founders,
          startups and ambitious teams.
        </p>

        <div className="hero-cta reveal in delay-4">
          <a href="#projects" className="btn btn-primary" data-cursor="hover">
            Explore our work
            <span className="arrow"><Arrow /></span>
          </a>
          <a href="#contact" className="btn btn-ghost" data-cursor="hover">
            Start a project
            <span className="arrow"><Arrow /></span>
          </a>
        </div>

        <div className="hero-foot">
          <HeroMetric value="4+" label="projects shipped" />
          <HeroMetric value="2" label="founders. one studio." />
          <HeroMetric value="3" label="industries served" />
          <HeroMetric value="∞" label="ideas in motion" />
        </div>

        <div className="hero-scroll" aria-hidden="true">
          <span>scroll</span>
          <span className="hero-scroll-line" />
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
