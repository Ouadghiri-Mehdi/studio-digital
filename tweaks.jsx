/* eslint-disable */
// Tweaks panel — accent color, type, density, mode

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["oklch(0.72 0.18 245)", "oklch(0.72 0.18 245 / 0.35)"],
  "displayFont": "Space Grotesk",
  "serifFont": "Instrument Serif",
  "density": "regular",
  "showCursor": true,
  "loaderEnabled": true,
  "grain": true
}/*EDITMODE-END*/;

const ACCENT_PRESETS = [
  ["oklch(0.72 0.18 245)", "oklch(0.72 0.18 245 / 0.35)"], // electric blue
  ["oklch(0.74 0.18 145)", "oklch(0.74 0.18 145 / 0.35)"], // signal green
  ["oklch(0.78 0.18 75)",  "oklch(0.78 0.18 75 / 0.35)"],  // amber
  ["oklch(0.72 0.20 25)",  "oklch(0.72 0.20 25 / 0.35)"],  // ember
  ["oklch(0.72 0.20 320)", "oklch(0.72 0.20 320 / 0.35)"], // violet
];

const DISPLAY_FONTS = ["Space Grotesk", "Geist", "DM Sans", "Manrope"];
const SERIF_FONTS = ["Instrument Serif", "Cormorant Garamond", "EB Garamond"];

function StudioTweaks() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent[0]);
    root.style.setProperty("--accent-glow", t.accent[1]);
    root.style.setProperty("--display", `"${t.displayFont}", system-ui, sans-serif`);
    root.style.setProperty("--serif", `"${t.serifFont}", Georgia, serif`);
    const scale = t.density === "comfy" ? 1.1 : t.density === "compact" ? 0.9 : 1;
    root.style.setProperty("font-size", `${16 * scale}px`);
    document.body.classList.toggle("no-cursor", !t.showCursor);
    document.body.classList.toggle("no-grain", !t.grain);
  }, [t]);

  // Inject Google Fonts for any selected non-default font
  React.useEffect(() => {
    const fams = [t.displayFont, t.serifFont];
    fams.forEach((f) => {
      const id = "gf-" + f.replace(/\s+/g, "-");
      if (document.getElementById(id)) return;
      const l = document.createElement("link");
      l.id = id;
      l.rel = "stylesheet";
      l.href = `https://fonts.googleapis.com/css2?family=${f.replace(/\s+/g, "+")}:ital,wght@0,400;0,500;0,600;1,400&display=swap`;
      document.head.appendChild(l);
    });
  }, [t.displayFont, t.serifFont]);

  const { TweaksPanel, TweakSection, TweakColor, TweakSelect, TweakRadio, TweakToggle } = window;

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent" />
      <TweakColor
        label="Glow"
        value={t.accent}
        options={ACCENT_PRESETS}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakSection label="Typography" />
      <TweakSelect
        label="Display"
        value={t.displayFont}
        options={DISPLAY_FONTS}
        onChange={(v) => setTweak("displayFont", v)}
      />
      <TweakSelect
        label="Serif"
        value={t.serifFont}
        options={SERIF_FONTS}
        onChange={(v) => setTweak("serifFont", v)}
      />
      <TweakRadio
        label="Density"
        value={t.density}
        options={["compact", "regular", "comfy"]}
        onChange={(v) => setTweak("density", v)}
      />
      <TweakSection label="Atmosphere" />
      <TweakToggle
        label="Custom cursor"
        value={t.showCursor}
        onChange={(v) => setTweak("showCursor", v)}
      />
      <TweakToggle
        label="Film grain"
        value={t.grain}
        onChange={(v) => setTweak("grain", v)}
      />
    </TweaksPanel>
  );
}

window.StudioTweaks = StudioTweaks;
