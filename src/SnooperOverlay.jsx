// SnooperOverlay: plays the active scare theme full screen.
// Do not edit to change themes. Swap src/activeScare.js instead.
// Call triggerScare() from anywhere to fire it.

import { useState, useEffect, useRef } from "react";
import theme from "./activeScare";

const DEFAULTS = {
  effect: "rain",
  glyphs: "01RANDY73013",
  colors: {
    bg: "#000000", glyph: "#2bdc5a", highlight: "#d8ffe0",
    caption: "#e8ffe8", accent: "#4dff7a", muted: "#7fa88a",
  },
  flash: true,
  shake: true,
  lines: [{ text: "Your IP address has been forwarded to Compliance.", at: 3600, style: "big" }],
};

const T = {
  ...DEFAULTS,
  ...theme,
  colors: { ...DEFAULTS.colors, ...(theme.colors || {}) },
  lines: theme.lines && theme.lines.length ? theme.lines : DEFAULTS.lines,
};

const EVENT = "hpa-scare";
const COOKIE = "hpa_scare_seen";
const EFFECT_IN = 400;     // effect layer starts
const PAGE_GONE = 1600;    // effect fully covers page
const DISMISS_DELAY = 1500; // after last line

export function triggerScare() {
  window.dispatchEvent(new Event(EVENT));
}

function alreadySeen() {
  return document.cookie.split("; ").some(c => c.startsWith(COOKIE + "="));
}
function markSeen() {
  // No expiry = session cookie, cleared when the browser closes.
  document.cookie = `${COOKIE}=1; path=/; SameSite=Lax`;
}
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ---------- Effects ----------
// Each effect: (ctx, w, h, colors, glyphs) => { step() }
// To add one: write a function and register it in EFFECTS.
function rain(ctx, w, h, colors, glyphs) {
  const fs = 16;
  const chars = glyphs.split("");
  let drops = Array(Math.ceil(w / fs)).fill(0).map(() => Math.random() * -30);
  return function step() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, w, h);
    ctx.font = fs + "px monospace";
    drops = drops.map((y, i) => {
      ctx.fillStyle = Math.random() < 0.04 ? colors.highlight : colors.glyph;
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
      return y * fs > h && Math.random() > 0.97 ? 0 : y + 1;
    });
  };
}

const EFFECTS = { rain };

// ---------- Component ----------
export default function SnooperOverlay() {
  const [stage, setStage] = useState("off"); // off | glitch | effect | covered
  const [shown, setShown] = useState(0);     // caption lines visible
  const [flash, setFlash] = useState(false);
  const [shake, setShake] = useState(false);
  const [canDismiss, setCanDismiss] = useState(false);
  const canvasRef = useRef(null);
  const timers = useRef([]);
  const raf = useRef(null);

  const clearAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
  };
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const close = () => {
    clearAll();
    setStage("off"); setShown(0); setFlash(false); setShake(false); setCanDismiss(false);
    document.body.style.overflow = "";
  };

  const start = () => {
    if (alreadySeen()) return;
    markSeen();
    clearAll();
    document.body.style.overflow = "hidden";
    const lastAt = Math.max(...T.lines.map(l => l.at));

    if (prefersReducedMotion()) {
      setStage("covered");
      T.lines.forEach((l, i) => later(() => setShown(i + 1), 300 + i * 1200));
      later(() => setCanDismiss(true), 300 + (T.lines.length - 1) * 1200 + DISMISS_DELAY);
      return;
    }

    setStage("glitch");
    later(() => setStage("effect"), EFFECT_IN);
    later(() => setStage("covered"), PAGE_GONE);
    T.lines.forEach((l, i) => later(() => {
      setShown(i + 1);
      if (i === 0) {
        if (T.flash) { setFlash(true); later(() => setFlash(false), 120); }
        if (T.shake) { setShake(true); later(() => setShake(false), 450); }
      }
    }, l.at));
    later(() => setCanDismiss(true), lastAt + DISMISS_DELAY);
  };

  // Listen for triggerScare()
  useEffect(() => {
    window.addEventListener(EVENT, start);
    return () => { window.removeEventListener(EVENT, start); clearAll(); };
  }, []);

  // Run the effect once the canvas is on screen
  useEffect(() => {
    if (stage !== "effect" || prefersReducedMotion()) return;
    const cv = canvasRef.current;
    if (!cv) return;
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    const ctx = cv.getContext("2d");
    const make = EFFECTS[T.effect] || EFFECTS.rain;
    const step = make(ctx, cv.width, cv.height, T.colors, T.glyphs);
    const loop = () => { step(); raf.current = requestAnimationFrame(loop); };
    loop();
  }, [stage]);

  // Escape key closes once allowed
  useEffect(() => {
    if (!canDismiss) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canDismiss]);

  if (stage === "off") return null;

  const styleFor = (s) => {
    if (s === "accent") return { color: T.colors.accent, fontSize: "18px", marginTop: "24px" };
    if (s === "small") return { color: T.colors.muted, fontSize: "13px", marginTop: "14px" };
    return { color: T.colors.caption, fontSize: "clamp(18px, 3.2vw, 28px)", lineHeight: 1.45 };
  };

  const effectVisible = stage === "effect" || stage === "covered";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Notice"
      onClick={() => { if (canDismiss) close(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: stage === "covered" ? T.colors.bg : "transparent",
        backdropFilter: stage === "glitch" ? "blur(1px) hue-rotate(80deg) contrast(1.4)" : "none",
        WebkitBackdropFilter: stage === "glitch" ? "blur(1px) hue-rotate(80deg) contrast(1.4)" : "none",
        transition: "background 1.2s",
        animation: shake ? "hpaShake .45s" : "none",
        cursor: canDismiss ? "pointer" : "default",
        overflow: "hidden",
      }}
    >
      <style>{`@keyframes hpaShake{0%,100%{transform:translate(0)}20%{transform:translate(-8px,4px)}40%{transform:translate(7px,-5px)}60%{transform:translate(-5px,-3px)}80%{transform:translate(4px,5px)}}`}</style>

      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        opacity: effectVisible ? (shown > 0 ? 0.35 : 1) : 0,
        transition: "opacity 1.2s",
      }}/>

      <div style={{
        position: "absolute", inset: 0, background: "#ffffff",
        opacity: flash ? 1 : 0, transition: flash ? "none" : "opacity .5s",
        pointerEvents: "none",
      }}/>

      <div aria-live="assertive" style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "24px", fontFamily: "'Courier New', Courier, monospace",
      }}>
        {T.lines.slice(0, shown).map((l, i) => (
          <div key={i} style={{ maxWidth: "640px", ...styleFor(l.style) }}>{l.text}</div>
        ))}
        {canDismiss && (
          <div style={{
            position: "absolute", bottom: "calc(32px + env(safe-area-inset-bottom, 0px))",
            color: T.colors.muted, fontSize: "12px",
          }}>Tap anywhere to continue</div>
        )}
      </div>
    </div>
  );
}
