/* eslint-disable */
const { useEffect: useEffectApp, useState: useStateApp, useRef: useRefApp } = React;

// ---- Custom cursor
function Cursor() {
  const dot = useRefApp(null);
  const ring = useRefApp(null);
  useEffectApp(() => {
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;
    const onMove = (e) => { x = e.clientX; y = e.clientY; };
    const onDown = () => ring.current && ring.current.classList.add("click");
    const onUp = () => ring.current && ring.current.classList.remove("click");
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor], a, button");
      if (!t) { ring.current && ring.current.classList.remove("hover"); return; }
      ring.current && ring.current.classList.add("hover");
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    let raf;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}

// ---- Loading screen
function Loader({ onDone }) {
  const [p, setP] = useStateApp(0);
  const [stage, setStage] = useStateApp("loading"); // loading -> fading -> gone
  useEffectApp(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 11 + 5;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setP(100);
        setTimeout(() => { setStage("fading"); onDone && onDone(); }, 300);
        setTimeout(() => setStage("gone"), 1000);
        return;
      }
      setP(Math.min(100, v));
    }, 80);
    return () => clearInterval(id);
  }, []);
  if (stage === "gone") return null;
  return (
    <div className={`loader ${stage === "fading" ? "done" : ""}`} style={{ "--p": p / 100 }}>
      <div className="loader-num">{String(Math.floor(p)).padStart(3, "0")}</div>
      <div className="loader-bar" />
      <div className="loader-tag">loading studio · {p < 30 ? "warming up" : p < 70 ? "compositing" : "ready"}</div>
    </div>
  );
}

// ---- Nav
function Nav() {
  const [shrunk, setShrunk] = useStateApp(false);
  useEffectApp(() => {
    const on = () => setShrunk(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="nav" data-shrunk={shrunk}>
      <div className="nav-inner">
        <a href="#hero" className="nav-brand" data-cursor="hover">
          <span className="nav-brand-dot" />
          studio digital
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#studio">Studio</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#projects">Work</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#vision">Vision</a>
        </div>
        <a href="#contact" className="nav-cta" data-cursor="hover">Start a project</a>
      </div>
    </div>
  );
}

// ---- Reveal on scroll: arm elements below initial viewport, release on intersect
function useReveal() {
  useEffectApp(() => {
    const vh = window.innerHeight;
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top > vh * 0.9) el.classList.add("armed");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal.armed").forEach((el) => io.observe(el));
    // Safety net — release everything after 4s no matter what
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal.armed").forEach((el) => el.classList.add("in"));
    }, 4000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

// ---- Marquee divider
function Marquee() {
  const items = ["websites", "platforms", "branding", "ui · ux", "ai integration", "automation", "startup MVPs", "design systems", "creative direction"];
  const row = (key) => (
    <div className="marquee-track" key={key}>
      {items.map((s, i) => <span key={i} className="marquee-item">{s}</span>)}
    </div>
  );
  return (
    <div className="marquee" aria-hidden="true">
      {row("a")}
      {row("b")}
    </div>
  );
}

// ---- Background
function BgCanvas() {
  return (
    <div className="bg-canvas">
      <div className="bg-grid" />
      <div className="bg-noise" />
    </div>
  );
}

// ---- App root
function App() {
  const [loaded, setLoaded] = useStateApp(false);
  useReveal();

  // Smooth scroll
  useEffectApp(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <BgCanvas />
      <Cursor />
      <Loader onDone={() => setLoaded(true)} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhoWeAre />
        <Services />
        <Projects />
        <Process />
        <Vision />
        <Contact />
      </main>
      <Footer />
      {window.StudioTweaks ? <window.StudioTweaks /> : null}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
