import { useEffect, useState } from "react";

// ============================================================
// HEARTLAND PROSPERITY ADVISORS — VACATION PAGE
// Single-page sendoff. No chatbot. No API. No navigation.
// ============================================================

const COLORS = {
  navy: "#1a2942",
  navyDark: "#0f1b2e",
  cream: "#f5f1e8",
  creamLight: "#faf7f0",
  ochre: "#a8843a",
  ochreLight: "#c9a05a",
  text: "#2a2620",
  textMuted: "#5a5448",
  border: "#d8d0bf",
  postcardEdge: "#e8dcc0",
  stamp: "#8a2630",
};

const FONTS = {
  serif: "'Source Serif Pro', 'Georgia', 'Times New Roman', serif",
  sans: "'Helvetica Neue', 'Arial', sans-serif",
  handwriting: "'Caveat', 'Bradley Hand', 'Comic Sans MS', cursive",
  typewriter: "'Special Elite', 'Courier New', monospace",
};

// Logo from the original site, preserved
function HeartlandLogo({ size = 40, dark = false }) {
  const color = dark ? COLORS.navy : COLORS.cream;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="68" rx="28" ry="4" fill={color} opacity="0.35"/>
      <path d="M 40 65 L 40 42" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <path d="M 40 50 L 32 56 M 40 48 L 48 54 M 40 44 L 30 50 M 40 44 L 50 50"
        stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      <circle cx="40" cy="32" r="20" fill={color}/>
      <circle cx="28" cy="36" r="12" fill={color}/>
      <circle cx="52" cy="36" r="12" fill={color}/>
      <circle cx="34" cy="22" r="10" fill={color}/>
      <circle cx="46" cy="22" r="10" fill={color}/>
    </svg>
  );
}

// SVG illustration: Dale walking away from camera toward the beach, two briefcases
function DalePostcardIllustration() {
  return (
    <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}>
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5d29a"/>
          <stop offset="40%" stopColor="#f0bc7a"/>
          <stop offset="100%" stopColor="#e89a52"/>
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a8fa8"/>
          <stop offset="100%" stopColor="#3d6b85"/>
        </linearGradient>
        <linearGradient id="sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d4a8"/>
          <stop offset="100%" stopColor="#c9a878"/>
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fff5d0" stopOpacity="1"/>
          <stop offset="60%" stopColor="#f8d878" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#f5c050" stopOpacity="0"/>
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="600" height="240" fill="url(#sky)"/>
      {/* Sun */}
      <circle cx="450" cy="160" r="80" fill="url(#sun)"/>
      <circle cx="450" cy="160" r="32" fill="#fff5d0" opacity="0.9"/>

      {/* Distant clouds */}
      <ellipse cx="120" cy="100" rx="55" ry="10" fill="#fdf2d8" opacity="0.7"/>
      <ellipse cx="220" cy="80" rx="35" ry="7" fill="#fdf2d8" opacity="0.6"/>
      <ellipse cx="540" cy="90" rx="40" ry="8" fill="#fdf2d8" opacity="0.55"/>

      {/* Sea */}
      <rect x="0" y="220" width="600" height="80" fill="url(#sea)"/>
      {/* Sea highlights */}
      <path d="M 0 235 Q 100 232 200 235 T 400 235 T 600 235" stroke="#a8c5d8" strokeWidth="1.5" fill="none" opacity="0.6"/>
      <path d="M 0 250 Q 120 247 240 250 T 480 250 T 600 250" stroke="#a8c5d8" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M 0 270 Q 80 268 160 270 T 320 270 T 480 270 T 600 270" stroke="#fdf2d8" strokeWidth="0.8" fill="none" opacity="0.4"/>

      {/* Sun reflection on water */}
      <ellipse cx="450" cy="225" rx="60" ry="3" fill="#fff5d0" opacity="0.6"/>
      <ellipse cx="450" cy="240" rx="40" ry="2" fill="#fff5d0" opacity="0.4"/>

      {/* Sand */}
      <path d="M 0 300 Q 200 295 300 305 T 600 300 L 600 400 L 0 400 Z" fill="url(#sand)"/>

      {/* Palm tree on left */}
      <g transform="translate(60, 180)">
        {/* Trunk */}
        <path d="M 25 0 Q 22 60 28 130 Q 30 145 33 155" stroke="#6b4a2a" strokeWidth="6" fill="none" strokeLinecap="round"/>
        {/* Trunk segments */}
        <path d="M 22 30 L 30 32 M 21 60 L 30 62 M 23 90 L 31 92 M 25 115 L 33 116" stroke="#4a3318" strokeWidth="1" opacity="0.5"/>
        {/* Fronds */}
        <path d="M 25 0 Q 5 -10 -20 -5 Q -8 0 0 8" fill="#3a5a2a" opacity="0.95"/>
        <path d="M 25 0 Q 50 -12 75 -2 Q 60 4 50 10" fill="#3a5a2a" opacity="0.95"/>
        <path d="M 25 0 Q 15 -20 -5 -28 Q 5 -15 12 -8" fill="#2a4a1a" opacity="0.95"/>
        <path d="M 25 0 Q 38 -22 60 -25 Q 48 -12 40 -5" fill="#2a4a1a" opacity="0.95"/>
        <path d="M 25 0 Q 24 -22 28 -38 Q 30 -22 32 -10" fill="#4a6a3a" opacity="0.95"/>
      </g>

      {/* Dale — walking away, viewed from behind */}
      {/* Position him slightly right of center, walking toward the water */}
      <g transform="translate(280, 240)">
        {/* Shadow on sand */}
        <ellipse cx="20" cy="120" rx="35" ry="4" fill="#000" opacity="0.18"/>

        {/* Right leg (back) — straight, just stepped */}
        <path d="M 28 80 L 32 122" stroke="#1a2942" strokeWidth="10" strokeLinecap="round"/>
        {/* Left leg (forward) — slightly bent */}
        <path d="M 12 80 Q 8 100 14 122" stroke="#1a2942" strokeWidth="10" strokeLinecap="round"/>

        {/* Shoes */}
        <ellipse cx="32" cy="123" rx="7" ry="3" fill="#1a1a1a"/>
        <ellipse cx="14" cy="123" rx="7" ry="3" fill="#1a1a1a"/>

        {/* Torso — navy blazer from behind */}
        <path d="M 0 30 L 8 25 L 32 25 L 40 30 L 38 85 L 2 85 Z" fill="#1a2942"/>
        {/* Blazer center seam */}
        <line x1="20" y1="30" x2="20" y2="85" stroke="#0f1b2e" strokeWidth="0.5" opacity="0.5"/>
        {/* Blazer shoulder seams */}
        <line x1="8" y1="25" x2="6" y2="40" stroke="#0f1b2e" strokeWidth="0.5" opacity="0.5"/>
        <line x1="32" y1="25" x2="34" y2="40" stroke="#0f1b2e" strokeWidth="0.5" opacity="0.5"/>
        {/* Collar */}
        <path d="M 14 25 L 20 30 L 26 25" stroke="#0f1b2e" strokeWidth="0.5" fill="none" opacity="0.6"/>

        {/* Arms holding briefcases */}
        {/* Left arm */}
        <path d="M 4 35 Q -2 60 -5 80" stroke="#1a2942" strokeWidth="9" strokeLinecap="round" fill="none"/>
        {/* Right arm */}
        <path d="M 36 35 Q 42 60 45 80" stroke="#1a2942" strokeWidth="9" strokeLinecap="round" fill="none"/>

        {/* Hands */}
        <circle cx="-5" cy="82" r="3.5" fill="#c9a07a"/>
        <circle cx="45" cy="82" r="3.5" fill="#c9a07a"/>

        {/* LEFT briefcase — leather, with HPA initials */}
        <g transform="translate(-22, 82)">
          <rect x="0" y="0" width="34" height="26" rx="2" fill="#5a3a1a" stroke="#3a2510" strokeWidth="0.8"/>
          {/* Handle */}
          <path d="M 12 0 Q 12 -4 17 -4 Q 22 -4 22 0" stroke="#3a2510" strokeWidth="1.2" fill="none"/>
          {/* Latches */}
          <rect x="6" y="11" width="3" height="2" fill="#b08a4a"/>
          <rect x="25" y="11" width="3" height="2" fill="#b08a4a"/>
          {/* HPA monogram tag */}
          <rect x="13" y="15" width="8" height="6" rx="0.5" fill="#a8843a" opacity="0.8"/>
          <text x="17" y="20" textAnchor="middle" fontSize="3.5" fontFamily="serif"
            fontWeight="bold" fill="#1a2942">HPA</text>
        </g>

        {/* RIGHT briefcase — slightly larger, money visible at the corner */}
        <g transform="translate(28, 82)">
          <rect x="0" y="0" width="38" height="28" rx="2" fill="#5a3a1a" stroke="#3a2510" strokeWidth="0.8"/>
          <path d="M 14 0 Q 14 -4 19 -4 Q 24 -4 24 0" stroke="#3a2510" strokeWidth="1.2" fill="none"/>
          <rect x="7" y="12" width="3" height="2" fill="#b08a4a"/>
          <rect x="28" y="12" width="3" height="2" fill="#b08a4a"/>
          {/* HPA tag */}
          <rect x="14" y="16" width="9" height="6" rx="0.5" fill="#a8843a" opacity="0.8"/>
          <text x="18.5" y="21" textAnchor="middle" fontSize="3.5" fontFamily="serif"
            fontWeight="bold" fill="#1a2942">HPA</text>

          {/* Slightly ajar — a hint of cash peeking out the top */}
          <rect x="2" y="-1" width="34" height="3" fill="#5a3a1a"/>
          <rect x="5" y="-2.5" width="6" height="3" fill="#7a9a5a" stroke="#3a5a2a" strokeWidth="0.3"/>
          <rect x="13" y="-2.5" width="6" height="3" fill="#7a9a5a" stroke="#3a5a2a" strokeWidth="0.3"/>
          <rect x="21" y="-2.5" width="6" height="3" fill="#7a9a5a" stroke="#3a5a2a" strokeWidth="0.3"/>
          <rect x="29" y="-2.5" width="5" height="3" fill="#7a9a5a" stroke="#3a5a2a" strokeWidth="0.3"/>
        </g>

        {/* Head — back of head, dark hair */}
        <ellipse cx="20" cy="14" rx="11" ry="13" fill="#c9a07a"/>
        <path d="M 9 10 Q 10 0 20 -2 Q 30 0 31 10 Q 31 18 28 22 L 12 22 Q 9 18 9 10 Z" fill="#3a2a18"/>
        {/* Neck */}
        <rect x="16" y="22" width="8" height="5" fill="#c9a07a"/>
      </g>

      {/* Footprints in the sand behind Dale */}
      <g opacity="0.4">
        <ellipse cx="270" cy="370" rx="4" ry="2.5" fill="#8a6a3a" transform="rotate(-15 270 370)"/>
        <ellipse cx="260" cy="385" rx="4" ry="2.5" fill="#8a6a3a" transform="rotate(-15 260 385)"/>
        <ellipse cx="245" cy="378" rx="4" ry="2.5" fill="#8a6a3a" transform="rotate(-12 245 378)"/>
        <ellipse cx="232" cy="392" rx="4" ry="2.5" fill="#8a6a3a" transform="rotate(-12 232 392)"/>
      </g>

      {/* Distant sailboat */}
      <g transform="translate(120, 240)" opacity="0.7">
        <path d="M 0 8 L 0 -12 L 8 8 Z" fill="#fdf2d8"/>
        <line x1="0" y1="-12" x2="0" y2="10" stroke="#3a2a18" strokeWidth="0.8"/>
        <path d="M -3 10 L 11 10 L 9 13 L -1 13 Z" fill="#3a2a18"/>
      </g>

      {/* Seagulls */}
      <path d="M 350 100 Q 354 96 358 100 Q 362 96 366 100" stroke="#1a2942" strokeWidth="1.2" fill="none" opacity="0.6"/>
      <path d="M 390 130 Q 393 127 396 130 Q 399 127 402 130" stroke="#1a2942" strokeWidth="1" fill="none" opacity="0.5"/>
      <path d="M 180 145 Q 183 142 186 145 Q 189 142 192 145" stroke="#1a2942" strokeWidth="1" fill="none" opacity="0.5"/>
    </svg>
  );
}

export default function HeartlandVacation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Load fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Caveat:wght@400;600&family=Special+Elite&display=swap";
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch (e) {} };
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: `radial-gradient(ellipse at center, ${COLORS.cream} 0%, #e8dcc0 100%)`,
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: isMobile ? "32px 16px" : "48px 32px",
      fontFamily: FONTS.serif,
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle paper texture via SVG noise overlay */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
        pointerEvents: "none", opacity: 0.08, mixBlendMode: "multiply" }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2"/>
          <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.1  0 0 0 1 0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"/>
      </svg>

      {/* Header — small, restrained */}
      <div style={{
        display: "flex", alignItems: "center", gap: "12px",
        marginBottom: isMobile ? "28px" : "40px",
        position: "relative", zIndex: 2,
      }}>
        <HeartlandLogo size={isMobile ? 36 : 44} dark/>
        <div>
          <div style={{
            fontFamily: FONTS.serif, fontSize: isMobile ? "17px" : "21px",
            color: COLORS.navy, fontWeight: 600, letterSpacing: "0.3px",
            lineHeight: 1.1,
          }}>
            Heartland Prosperity Advisors
          </div>
          <div style={{
            fontSize: isMobile ? "9px" : "10px", letterSpacing: "1.8px",
            textTransform: "uppercase", color: COLORS.ochre,
            fontFamily: FONTS.sans, fontWeight: 600, marginTop: "3px",
          }}>
            Edmond, Oklahoma · Est. 2014
          </div>
        </div>
      </div>

      {/* The Postcard */}
      <div style={{
        width: "100%", maxWidth: isMobile ? "100%" : "720px",
        background: COLORS.creamLight,
        border: `1px solid ${COLORS.postcardEdge}`,
        boxShadow: `
          0 1px 0 ${COLORS.postcardEdge},
          0 24px 60px rgba(26,41,66,0.18),
          0 8px 20px rgba(26,41,66,0.10)
        `,
        position: "relative", zIndex: 2,
        transform: isMobile ? "none" : "rotate(-0.6deg)",
        transition: "transform 0.3s ease",
      }}>
        {/* Postcard top — illustration */}
        <div style={{
          background: "#f0bc7a",
          aspectRatio: "3 / 2",
          borderBottom: `3px double ${COLORS.postcardEdge}`,
          position: "relative",
        }}>
          <DalePostcardIllustration/>

          {/* "Postcard" stamp watermark in corner */}
          <div style={{
            position: "absolute", top: "12px", right: "12px",
            border: `1.5px solid ${COLORS.navy}`,
            padding: "4px 10px",
            fontFamily: FONTS.sans, fontSize: "9px",
            letterSpacing: "1.5px", textTransform: "uppercase",
            color: COLORS.navy, fontWeight: 600,
            background: "rgba(245,241,232,0.7)",
            transform: "rotate(4deg)",
          }}>
            Postcard
          </div>
        </div>

        {/* Postcard body */}
        <div style={{
          padding: isMobile ? "24px 24px 32px" : "40px 48px 48px",
          position: "relative",
        }}>
          {/* Headline */}
          <div style={{
            textAlign: "center", marginBottom: isMobile ? "20px" : "28px",
          }}>
            <div style={{
              color: COLORS.ochre, fontSize: "11px", letterSpacing: "3px",
              textTransform: "uppercase", fontFamily: FONTS.sans,
              fontWeight: 600, marginBottom: "12px",
            }}>
              A Note from the Founder
            </div>
            <h1 style={{
              fontFamily: FONTS.serif,
              fontSize: isMobile ? "30px" : "44px",
              color: COLORS.navy, fontWeight: 400,
              margin: 0, lineHeight: 1.1,
              letterSpacing: "-0.5px",
              fontStyle: "italic",
            }}>
              Gone fishin'.
            </h1>
          </div>

          {/* The "handwritten" body */}
          <div style={{
            fontFamily: FONTS.handwriting,
            fontSize: isMobile ? "20px" : "24px",
            color: "#2a3a52",
            lineHeight: 1.5,
            maxWidth: "520px", margin: "0 auto",
          }}>
            <p style={{ margin: "0 0 14px" }}>
              Hey partner,
            </p>
            <p style={{ margin: "0 0 14px" }}>
              Dale is on vacation for the foreseeable future. Randy's coming
              with. Terry too. We packed light. Just a couple things from the office.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              The thesis is INTACT.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              See ya later, partner.
            </p>
            <p style={{ margin: "0", textAlign: "right",
              fontStyle: "italic", color: COLORS.navy }}>
              — Dale
            </p>
          </div>

          {/* Disclosures, deliberately printed footer */}
          <div style={{
            marginTop: isMobile ? "32px" : "48px",
            paddingTop: "20px",
            borderTop: `1px dashed ${COLORS.border}`,
            fontFamily: FONTS.typewriter,
            fontSize: isMobile ? "10px" : "11px",
            lineHeight: 1.7,
            color: COLORS.textMuted,
            textAlign: "center",
          }}>
            <div style={{ marginBottom: "10px",
              fontSize: isMobile ? "9px" : "10px", letterSpacing: "1.5px",
              textTransform: "uppercase", color: COLORS.navy, fontWeight: 700,
              fontFamily: FONTS.sans,
            }}>
              Disclosure*
            </div>
            <p style={{ margin: "0 0 8px" }}>
              Heartland Prosperity Advisors has entered an indefinite period of
              non-operation. No new client engagements are being accepted. Existing
              communications will not be returned.
            </p>
            <p style={{ margin: "0 0 8px" }}>
              The Five Heartland Innovation Platforms remain, in our view,
              compelling long-duration opportunities. Past performance is not
              indicative of future results. Future performance is not indicative
              of past results either, friend.
            </p>
            <p style={{ margin: 0, fontStyle: "italic" }}>
              Compliance is a mindset. So is sin.
            </p>
          </div>
        </div>
      </div>

      {/* Soft footer */}
      <div style={{
        marginTop: isMobile ? "32px" : "48px",
        fontFamily: FONTS.sans, fontSize: "11px",
        color: COLORS.textMuted, letterSpacing: "1px",
        textTransform: "uppercase", textAlign: "center",
        position: "relative", zIndex: 2,
      }}>
        © 2014–2026 Heartland Prosperity Advisors · Faith · Family · Fiduciary
      </div>
    </div>
  );
}
