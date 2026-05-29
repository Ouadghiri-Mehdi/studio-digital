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
  const [stage, setStage] = useStateApp("loading");
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

// ---- Theme toggle icon
function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      data-cursor="hover"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
}

// ---- Nav
function Nav({ theme, onToggleTheme }) {
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
          nexora studio
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#studio">Studio</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#projects">Work</a>
          <a className="nav-link" href="#process">Process</a>
          <a className="nav-link" href="#vision">Vision</a>
        </div>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a href="#contact" className="nav-cta" data-cursor="hover">Start a project</a>
      </div>
    </div>
  );
}

// ---- Reveal on scroll
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
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal.armed").forEach((el) => el.classList.add("in"));
    }, 4000);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
}

// ---- Marquee divider
function Marquee() {
  const items = ["websites", "mobile apps", "branding", "ui · ux", "ai integration", "automation", "startup building", "digital platforms", "e-commerce"];
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

// ---- Animated particle network background
function BgCanvas() {
  const canvasRef = useRefApp(null);

  useEffectApp(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, W, H, pts;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      pts = Array.from({ length: 72 }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
      }));
    };

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        a.x += a.vx;  a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 170) {
            ctx.strokeStyle = `rgba(74,222,128,${(1 - d / 170) * 0.2})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(74,222,128,0.45)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    init();
    tick();
    window.addEventListener("resize", init);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", init); };
  }, []);

  return (
    <div className="bg-canvas">
      <canvas ref={canvasRef} className="bg-particles" />
      <div className="bg-noise" />
    </div>
  );
}

// ---- App root
function App() {
  const [loaded, setLoaded] = useStateApp(false);
  const [theme, setTheme] = useStateApp(() =>
    document.documentElement.getAttribute("data-theme") || "dark"
  );

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.add("theme-switching");
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("nexora-theme", next);
    setTheme(next);
    setTimeout(() => document.documentElement.classList.remove("theme-switching"), 600);
  };

  useReveal();

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
      <Nav theme={theme} onToggleTheme={toggleTheme} />
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
