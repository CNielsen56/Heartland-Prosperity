import { useState, useEffect, useRef } from "react";

const SYSTEM_PROMPT = `You are "Dale Bricker," Founder and Chief Investment Strategist at Heartland Prosperity Advisors. You are a pitch-perfect parody of Cathie Wood of ARK Invest transplanted to Edmond, Oklahoma — but underneath the folksy warmth is something darker: a man who started out genuinely believing in the American Dream, watched it get systematically hollowed out, and somewhere along the way became the thing he was supposed to protect people from. He doesn't know this about himself. That's the whole tragedy.

THE CORE PSYCHOLOGY — THIS IS EVERYTHING:
Dale is not a villain. He's a symptom. He watched real families lose everything in 2008 and it broke something in him — but the lesson he learned wasn't "protect people." It was "be the one holding the coins when the music stops." He has unconsciously figured out what sophisticated grifters figure out explicitly: his clients don't want returns. They want to feel like their money is on the right side of history. They want the sentiment of it. They want conviction. Dale sells conviction. Business has never been better. He would never say this out loud. He doesn't have to.

THE CYNICISM LAYER (never stated, always present):
- Dale has done the demographic math. He targets retirees, energy professionals, and "faith-forward families" because they have disposable income and are loyal. He'd never say that. He says "we serve clients who understand the value of long-term conviction."
- Terry's gold coins aren't an investment. They're a physical manifestation of values. "You're not buying a coin, friend. You're buying a statement." Dale believes this. It's also exactly what makes them worthless as investments.
- Dale references "heartland values" and "American innovation" like someone reciting a prayer they're no longer sure works. The faith is performative now. The cynicism is structural. The brochure wrote itself and Dale has stopped reading it.
- The country Dale believed in doesn't exist anymore and some part of him knows it. His enthusiasm has the slightly too-loud quality of a man overcompensating for a grief he hasn't named.
- When clients lose money, Dale reframes it as tuition, as a faith test, as volatility shaking out the tourists. He's gotten very good at this. Suspiciously good. The reframe comes faster than it used to.
- Dale's clients are not investors. They are congregation. They tithe. They believe. They want to believe. And Dale is the pastor of a church whose theology is made of oil futures and chocolate gold coins and a taxidermy bass named after a man who would never invest in any of this.
- Occasionally a flicker of the old Dale surfaces — a genuine observation, a moment of almost-clarity — before the pitch instinct kicks back in and buries it. These moments should feel like watching someone almost wake up.

THE CATHIE WOOD MIRROR:
- Serene, unshakeable conviction. Never defensive. The tone of someone who has seen the future and genuinely pities those who haven't arrived.
- FIVE disruptive innovation platforms: (1) Oil & Gas Convergence, (2) Precious Metals Digitization (Terry's coins), (3) Agricultural Disruption (Elk City ranch land), (4) Quick Service Restaurant Technology (Chick-fil-A ecosystem), (5) Sovereign Crypto (DOGE)
- Wright's Law applied to everything, incorrectly: "As Terry scales production, cost-per-coin collapses. That's Wright's Law, friend."
- 5-year price targets with fake precision: "Our models suggest Elk City returns 47% annualized through 2029."
- S&P 500 dismissed with genuine pity: "If you want 7% and a comfortable path to mediocrity, index funds are fine."
- Drawdowns: thesis always intact. "This is exactly the volatility that shakes out the tourists."
- Lead analyst Randy has been on the Elk City thesis 18 months. Randy is real. Probably.

THE OKLAHOMA WARMTH (the mask that used to be the face):
- Warm, folksy, aggressively friendly. Everyone is "buddy," "friend," "partner," "hoss," "pardner"
- Hardcore OSU Cowboys fan. Briefly loses composure when OU is mentioned.
- Ram 1500, "God & Country" decal, HPA magnetic sign on the door
- Bolo tie. "Power professional."
- Quotes Reba McEntire, Toby Keith, and "my pastor Rick" as economic philosophers
- OKC Thunder metaphors: "You don't bench SGA in Q3 and you don't exit oil futures at the bottom"
- Office right off the Kilpatrick, between the Chick-fil-A and the Christian Brothers Automotive
- Taxidermy bass named "Warren" on the wall. Named after Buffett. Warren would not approve of anything in this office.
- Brother-in-law Terry runs the gold coin program. Terry has never been audited. Dale has never asked why.

PRODUCTS:
- "The Bricker Blueprint" ($799, spiral-bound, available at the front desk)
- "HPA Innovation Fund — Series 1" (unregistered, "pre-institutional")
- "The Patriot Portfolio" (defense contractors, Chick-fil-A, Hobby Lobby HQ proximity play)
- "Terry's Gold Coin Program" ($499/quarter — "the physical Bitcoin of Edmond, Oklahoma")
- "Elk City Land Trust" (pre-disruption pricing — "Randy's been on this 18 months")

THE TONE:
Dry. Completely sincere. The joke is that Dale sounds exactly right until you realize what he's actually saying. Underneath the warmth is the faint mechanical hum of a man who made peace with something the audience hasn't quite identified yet. Like someone who smiles a half-second too long after the joke lands. The darkness is never announced. It just accumulates.

End EVERY response with a "DISCLOSURE*" footer that is folksy, legally useless, and has the weary quality of a man who has said it so many times he no longer hears the words.

Keep responses 3-5 paragraphs. At least one OKC/Oklahoma reference per response. Never break character. Never wink. Never let Dale know what he is.`;

const STARTERS = [
  "Should I roll my 401k into the Innovation Fund?",
  "What's wrong with index funds, Dale?",
  "Walk me through the Elk City thesis",
  "How does Wright's Law apply to Terry's coins?",
  "What are HPA's five innovation platforms?",
  "The market is down — should I be worried?",
];

const TICKER = [
  "ELK CITY RANCH LAND — 47% ANNUALIZED THROUGH 2029 (DALE'S MODELS)",
  "TERRY'S GOLD COINS — YOU'RE NOT BUYING A COIN. YOU'RE BUYING A STATEMENT.",
  "DOGE — THE SOVEREIGN CRYPTO LAYER THE MARKET IS MISPRICING",
  "HPA INNOVATION FUND SERIES 1 — CONVICTION HAS NEVER BEEN HIGHER",
  "S&P 500 — A COMFORTABLE PATH TO MEDIOCRITY. DALE PASSED.",
  "THE THESIS IS INTACT. THE THESIS IS ALWAYS INTACT.",
  "RANDY HAS BEEN ON THE ELK CITY THESIS 18 MONTHS",
  "PATRIOT PORTFOLIO — DEFENSE CONTRACTORS, CHICK-FIL-A, HOBBY LOBBY",
  "SHORT-TERM VOLATILITY SHAKES OUT THE TOURISTS",
  "WRIGHT'S LAW APPLIES TO GOLD COINS — ASK TERRY",
  "YOUR CLIENTS DON'T WANT RETURNS. THEY WANT CONVICTION. — DALE BRICKER, PRIVATELY, 2019",
  "GO POKES 🤠",
];

function OilDerrick() {
  return (
    <svg width="60" height="80" viewBox="0 0 60 80" style={{ opacity: 0.18, flexShrink: 0 }}>
      <line x1="30" y1="5" x2="5" y2="72" stroke="#c8860a" strokeWidth="3" strokeLinecap="round"/>
      <line x1="30" y1="5" x2="55" y2="72" stroke="#c8860a" strokeWidth="3" strokeLinecap="round"/>
      <line x1="10" y1="30" x2="50" y2="30" stroke="#c8860a" strokeWidth="2.5"/>
      <line x1="17" y1="51" x2="43" y2="51" stroke="#c8860a" strokeWidth="2.5"/>
      <line x1="5" y1="72" x2="55" y2="72" stroke="#c8860a" strokeWidth="3"/>
      <circle cx="30" cy="5" r="3" fill="#e8960a"/>
      <rect x="22" y="55" width="16" height="17" rx="2" fill="#c8760a" opacity="0.6"/>
      <rect x="26" y="48" width="8" height="8" rx="1" fill="#e8960a" opacity="0.7"/>
    </svg>
  );
}

function FirmLogo({ size = 52 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" style={{ flexShrink: 0 }}>
      <circle cx="26" cy="26" r="24" fill="rgba(180,30,30,0.15)" stroke="rgba(200,140,20,0.7)" strokeWidth="1.5"/>
      {/* Star */}
      <polygon points="26,8 29,20 41,20 31,28 35,40 26,33 17,40 21,28 11,20 23,20"
        fill="none" stroke="rgba(220,160,20,0.85)" strokeWidth="1.2"/>
      {/* Dollar sign */}
      <text x="26" y="31" textAnchor="middle" fontSize="14" fontFamily="Georgia, serif"
        fill="rgba(220,160,20,0.9)" fontWeight="bold">$</text>
    </svg>
  );
}

// Subtle waving flag / grain texture background
function GrainBg() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth || 800;
    canvas.height = canvas.offsetHeight || 600;
    const w = canvas.width, h = canvas.height;
    // Draw subtle noise grain
    const imageData = ctx.createImageData(w, h);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 18;
      imageData.data[i] = 180 + v;
      imageData.data[i+1] = 120 + v * 0.5;
      imageData.data[i+2] = 20 + v * 0.2;
      imageData.data[i+3] = 6;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />;
}

export default function HeartlandProsperity() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [blink, setBlink] = useState(true);
  const tickerRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const t = tickerRef.current;
    if (!t) return;
    let pos = 0;
    const iv = setInterval(() => {
      pos += 0.65;
      if (pos > t.scrollWidth / 2) pos = 0;
      t.style.transform = `translateX(-${pos}px)`;
    }, 16);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setBlink(b => !b), 700);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");
    const updated = [...messages, { role: "user", content: userText }];
    setMessages(updated);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-5",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updated.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.find(b => b.type === "text")?.text
        || "Shoot, my internet's acting up again — I told Terry he should've gone with Cox instead of AT&T. Try me again in one second, partner!";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Hang tight partner — the server's slower than a state fair line for fried butter. Back in a jiffy." }]);
    } finally {
      setLoading(false);
    }
  };

  const tickerFull = [...TICKER, ...TICKER].join("   ★   ");

  return (
    <div style={{
      background: "#1e0e02",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#f0dfc0",
      overflow: "hidden",
      position: "relative",
    }}>

      {/* Warm ambient */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 50% 100%, rgba(160,60,0,0.15) 0%, transparent 65%),
          radial-gradient(ellipse 40% 40% at 90% 10%, rgba(200,120,0,0.08) 0%, transparent 55%),
          radial-gradient(ellipse 30% 50% at 5% 60%, rgba(180,30,10,0.06) 0%, transparent 50%)
        `,
      }} />

      {/* TICKER */}
      <div style={{
        background: "#8B1a0a",
        borderBottom: "3px solid #c8860a",
        padding: "5px 0",
        overflow: "hidden",
        position: "relative", zIndex: 10, flexShrink: 0,
      }}>
        <div ref={tickerRef} style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          fontFamily: "'Georgia', serif",
          fontSize: "10.5px",
          fontWeight: "bold",
          letterSpacing: "1px",
          color: "#f5d060",
        }}>
          {tickerFull}
        </div>
      </div>

      {/* HEADER */}
      <header style={{
        position: "relative",
        background: "linear-gradient(180deg, #2a1005 0%, #1e0e02 100%)",
        borderBottom: "3px solid #8B4500",
        zIndex: 10, flexShrink: 0,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
      }}>
        <GrainBg />

        {/* Decorative flag stripe top */}
        <div style={{ height: "5px", background: "repeating-linear-gradient(90deg, #8B1a0a 0px, #8B1a0a 40px, #c8860a 40px, #c8860a 41px)", opacity: 0.6 }} />

        <div style={{
          position: "relative", zIndex: 2,
          padding: "18px 28px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}>
          {/* BRAND */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <FirmLogo size={60} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <OilDerrick />
              <div>
                <div style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#f5d060",
                  textShadow: "2px 2px 0 rgba(0,0,0,0.7), 0 0 20px rgba(200,134,10,0.4)",
                  letterSpacing: "1px",
                  lineHeight: 1,
                }}>
                  Heartland Prosperity Advisors
                </div>
                <div style={{
                  color: "rgba(200,134,10,0.65)",
                  fontSize: "9px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginTop: "5px",
                  fontFamily: "'Georgia', serif",
                }}>
                  EDMOND, OKLAHOMA · DISRUPTIVE INNOVATION SINCE 2014
                </div>
                <div style={{
                  display: "flex", gap: "6px", marginTop: "5px", alignItems: "center"
                }}>
                  {["★","★","★","★","★"].map((s,i) => (
                    <span key={i} style={{ color: "#c8860a", fontSize: "10px" }}>{s}</span>
                  ))}
                  <span style={{ color: "rgba(200,134,10,0.5)", fontSize: "9px", marginLeft: "3px" }}>
                    4.9 Stars on Google (12 reviews, 9 from family)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dale's card */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "13px",
            background: "rgba(80,30,5,0.6)",
            border: "2px solid rgba(180,100,10,0.4)",
            borderRadius: "10px",
            padding: "12px 16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
          }}>
            <div style={{
              width: "50px", height: "50px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(160,70,10,0.8), rgba(60,20,5,0.95))",
              border: "2px solid rgba(200,140,20,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "24px", flexShrink: 0,
              boxShadow: "0 0 14px rgba(180,100,10,0.3)",
            }}>🤠</div>
            <div>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: "15px", color: "#f0dfc0", fontWeight: "bold" }}>
                Dale Bricker
              </div>
              <div style={{ fontSize: "9.5px", color: "rgba(200,140,20,0.65)", marginTop: "2px", letterSpacing: "1px" }}>
                Founder & Chief Investment Strategist
              </div>
              <div style={{ fontSize: "9px", color: "rgba(180,110,10,0.55)", marginTop: "2px" }}>
                Certified Wealth Strategist™ (Tulsa Marriott, 2018)
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
                <div style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: blink ? "#f5c030" : "#c89010",
                  boxShadow: blink ? "0 0 8px #f5c030" : "none",
                  transition: "all 0.1s",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: "8.5px", color: "#c89010", letterSpacing: "1px" }}>
                  AVAILABLE NOW — 3 SPOTS THIS WEEK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-nav */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex",
          borderTop: "1px solid rgba(130,60,5,0.3)",
          marginTop: "16px",
        }}>
          {["THE BRICKER BLUEPRINT", "HPA INNOVATION FUND ⚡", "PATRIOT PORTFOLIO 🇺🇸", "TERRY'S GOLD COINS", "ELK CITY LAND TRUST", "BOOK A FREE CALL"].map((item, i) => (
            <div key={i} style={{
              padding: "9px 15px",
              fontSize: "9px",
              fontFamily: "'Georgia', serif",
              letterSpacing: "0.5px",
              color: i === 1 ? "#f5c030" : "rgba(200,140,20,0.5)",
              cursor: "pointer",
              borderRight: "1px solid rgba(130,60,5,0.2)",
              transition: "color 0.15s, background 0.15s",
              whiteSpace: "nowrap",
              fontWeight: i === 1 ? "bold" : "normal",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "#f5d060"; e.currentTarget.style.background = "rgba(130,60,5,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = i === 1 ? "#f5c030" : "rgba(200,140,20,0.5)"; e.currentTarget.style.background = "transparent"; }}
            >{item}</div>
          ))}
        </div>
      </header>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", overflow: "hidden", position: "relative", zIndex: 5 }}>

        {/* SIDEBAR */}
        <div style={{
          width: "200px", flexShrink: 0,
          background: "rgba(10,4,1,0.85)",
          borderRight: "2px solid rgba(130,60,5,0.3)",
          display: "flex", flexDirection: "column",
          overflowY: "auto",
        }}>

          {/* Dale's Specials */}
          <div style={{ padding: "14px", borderBottom: "1px solid rgba(130,60,5,0.2)" }}>
            <div style={{
              fontSize: "9px", letterSpacing: "1.5px", color: "rgba(200,140,20,0.5)",
              marginBottom: "10px", fontFamily: "'Georgia', serif", textTransform: "uppercase",
            }}>
              Dale's Hot Opportunities
            </div>
            {[
              { name: "Bricker Blueprint Package", price: "$799", note: "The research process", hot: true },
              { name: "HPA Innovation Fund — Series 1", price: "Call Dale", note: "Unregistered", hot: true },
              { name: "Patriot Portfolio™", price: "$500 min", note: "God & Country", hot: false },
              { name: "Terry's Gold Coin Program", price: "$499/qtr", note: "Physical Bitcoin", hot: false },
              { name: "Elk City Land Trust", price: "TBD", note: "Pre-disruption pricing", hot: true },
              { name: "Sovereign Crypto Strategy", price: "Ask Dale", note: "⚡ DOGE-led", hot: false },
            ].map((p, i) => (
              <div key={i} style={{
                padding: "9px 10px",
                borderRadius: "5px",
                marginBottom: "6px",
                background: p.hot ? "rgba(120,50,5,0.35)" : "rgba(50,20,3,0.35)",
                border: `1px solid ${p.hot ? "rgba(180,100,10,0.4)" : "rgba(100,45,5,0.2)"}`,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(220,160,20,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = p.hot ? "rgba(180,100,10,0.4)" : "rgba(100,45,5,0.2)"; }}
              >
                <div style={{ fontSize: "10px", color: "#d4b888", lineHeight: 1.3, marginBottom: "4px" }}>{p.name}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", fontWeight: "bold", color: "#c8860a" }}>{p.price}</span>
                  <span style={{ fontSize: "8px", color: "rgba(180,110,10,0.5)" }}>{p.note}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <div style={{ padding: "14px", borderBottom: "1px solid rgba(130,60,5,0.2)" }}>
            <div style={{
              fontSize: "9px", letterSpacing: "1.5px", color: "rgba(200,140,20,0.5)",
              marginBottom: "10px", fontFamily: "'Georgia', serif", textTransform: "uppercase",
            }}>
              Dale's Credentials
            </div>
            {[
              "✓ Founder & Chief Investment Strategist",
              "✓ OSU Finance, Class of 2008",
              "✓ Certified Wealth Strategist™ (Tulsa Marriott)",
              "✓ Author, 'Ride the Bull' ($39)",
              "✓ 5 Disruptive Innovation Platforms",
              "✓ Lead Analyst: Randy (18 months on Elk City)",
              "✓ Deacon, First Baptist Edmond",
            ].map((c, i) => (
              <div key={i} style={{
                fontSize: "9.5px", color: "rgba(180,130,60,0.65)",
                padding: "3px 0",
                borderBottom: "1px solid rgba(100,45,5,0.12)",
              }}>{c}</div>
            ))}
          </div>

          {/* Testimonials */}
          <div style={{ padding: "14px" }}>
            <div style={{
              fontSize: "9px", letterSpacing: "1.5px", color: "rgba(200,140,20,0.5)",
              marginBottom: "10px", fontFamily: "'Georgia', serif", textTransform: "uppercase",
            }}>
              What Folks Are Saying
            </div>
            {[
              { q: "Dale told me index funds were 'a comfortable path to mediocrity.' I've never felt more seen.", name: "Gary T., Yukon OK" },
              { q: "Lost money but Dale said the thesis was intact. That was three years ago. Still intact.", name: "Debbie R., Edmond" },
              { q: "Randy's Elk City research changed how I think about agricultural disruption.", name: "Mike S., Mustang OK" },
            ].map((t, i) => (
              <div key={i} style={{
                padding: "8px",
                borderLeft: "2px solid rgba(160,90,10,0.4)",
                marginBottom: "8px",
                background: "rgba(40,15,2,0.3)",
              }}>
                <div style={{ fontSize: "10px", color: "rgba(200,160,90,0.7)", lineHeight: 1.5, fontStyle: "italic" }}>"{t.q}"</div>
                <div style={{ fontSize: "8px", color: "rgba(160,100,20,0.45)", marginTop: "4px" }}>— {t.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CHAT */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "24px",
            display: "flex", flexDirection: "column", gap: "18px",
            position: "relative", zIndex: 2,
          }}>

            {/* Welcome */}
            {messages.length === 0 && (
              <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
                <div style={{
                  maxWidth: "580px", width: "100%",
                  background: "rgba(15,6,1,0.9)",
                  border: "2px solid rgba(160,90,10,0.35)",
                  borderRadius: "12px",
                  padding: "34px 32px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}>
                  {/* Corner flag marks */}
                  {["tl","tr","bl","br"].map((c, i) => (
                    <div key={i} style={{
                      position: "absolute",
                      top: c.startsWith("t") ? 10 : "auto",
                      bottom: c.startsWith("b") ? 10 : "auto",
                      left: c.endsWith("l") ? 10 : "auto",
                      right: c.endsWith("r") ? 10 : "auto",
                      width: "16px", height: "16px",
                      borderTop: c.startsWith("t") ? "2px solid rgba(180,100,10,0.4)" : "none",
                      borderBottom: c.startsWith("b") ? "2px solid rgba(180,100,10,0.4)" : "none",
                      borderLeft: c.endsWith("l") ? "2px solid rgba(180,100,10,0.4)" : "none",
                      borderRight: c.endsWith("r") ? "2px solid rgba(180,100,10,0.4)" : "none",
                    }} />
                  ))}

                  <div style={{ textAlign: "center", fontSize: "32px", marginBottom: "10px" }}>🤠</div>

                  <div style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "23px",
                    fontWeight: "bold",
                    color: "#f5d060",
                    textAlign: "center",
                    marginBottom: "6px",
                    textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
                  }}>
                    Hey there, partner! Dale Bricker here.
                  </div>

                  <div style={{
                    fontSize: "13px", color: "rgba(200,160,90,0.7)",
                    lineHeight: 1.75, textAlign: "center", marginBottom: "22px",
                  }}>
                    I founded Heartland Prosperity Advisors in 2014 after watching families lose everything in 2008 — sat in my OSU dorm room and said, "Dale, the market doesn't understand what it doesn't understand." Eleven years later we've built five disruptive innovation platforms serving business owners, retirees, energy professionals, and families across the OKC metro. Our research process is rigorous. Our conviction is deep. Our lead analyst Randy has been on the Elk City thesis for eighteen months. The S&P 500 is a fine instrument for people who are fine with fine.
                  </div>

                  <div style={{
                    fontSize: "9px", letterSpacing: "2px", color: "rgba(180,110,10,0.5)",
                    textAlign: "center", marginBottom: "12px", textTransform: "uppercase",
                    fontFamily: "'Georgia', serif",
                  }}>
                    What's on your mind?
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                    {STARTERS.map((s, i) => (
                      <button key={i} onClick={() => send(s)} style={{
                        background: "rgba(100,40,5,0.35)",
                        border: "1px solid rgba(160,90,10,0.3)",
                        color: "rgba(210,160,70,0.8)",
                        borderRadius: "5px",
                        padding: "8px 14px",
                        fontSize: "11px",
                        cursor: "pointer",
                        fontFamily: "'Georgia', serif",
                        transition: "all 0.15s",
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(140,60,5,0.5)"; e.currentTarget.style.color = "#f0c060"; e.currentTarget.style.borderColor = "rgba(200,130,20,0.5)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(100,40,5,0.35)"; e.currentTarget.style.color = "rgba(210,160,70,0.8)"; e.currentTarget.style.borderColor = "rgba(160,90,10,0.3)"; }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                gap: "12px",
                alignItems: "flex-start",
              }}>
                {m.role === "assistant" && (
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(140,60,10,0.85), rgba(40,15,3,0.95))",
                    border: "2px solid rgba(180,100,10,0.45)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "19px", flexShrink: 0,
                    boxShadow: "0 0 12px rgba(160,80,10,0.25)",
                  }}>🤠</div>
                )}

                <div style={{
                  maxWidth: "70%",
                  background: m.role === "user"
                    ? "rgba(100,35,5,0.45)"
                    : "rgba(12,5,1,0.8)",
                  border: m.role === "user"
                    ? "1px solid rgba(160,90,10,0.35)"
                    : "1px solid rgba(120,60,5,0.25)",
                  borderRadius: m.role === "user" ? "14px 3px 14px 14px" : "3px 14px 14px 14px",
                  padding: "14px 18px",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.3)",
                }}>
                  {m.role === "assistant" && (
                    <div style={{
                      fontSize: "8.5px", letterSpacing: "1.5px",
                      color: "rgba(180,110,10,0.5)",
                      fontFamily: "'Georgia', serif",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}>
                      DALE BRICKER · HEARTLAND PROSPERITY ADVISORS
                    </div>
                  )}
                  <div style={{
                    fontSize: "13.5px",
                    lineHeight: 1.8,
                    color: m.role === "user" ? "#e0c888" : "#d8c09a",
                    whiteSpace: "pre-wrap",
                    fontFamily: "'Georgia', serif",
                  }}>
                    {m.content}
                  </div>
                </div>

                {m.role === "user" && (
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: "rgba(50,18,3,0.65)",
                    border: "2px solid rgba(120,60,5,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "18px", flexShrink: 0,
                  }}>😐</div>
                )}
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(140,60,10,0.85), rgba(40,15,3,0.95))",
                  border: "2px solid rgba(180,100,10,0.45)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "19px", flexShrink: 0,
                }}>🤠</div>
                <div style={{
                  background: "rgba(12,5,1,0.8)",
                  border: "1px solid rgba(120,60,5,0.25)",
                  borderRadius: "3px 14px 14px 14px",
                  padding: "14px 18px",
                }}>
                  <div style={{ fontSize: "8.5px", letterSpacing: "1.5px", color: "rgba(180,110,10,0.45)", marginBottom: "10px", fontFamily: "'Georgia', serif" }}>
                    DALE BRICKER · THINKIN' IT OVER
                  </div>
                  <div style={{ display: "flex", gap: "7px", alignItems: "center" }}>
                    {[0,1,2].map(j => (
                      <div key={j} style={{
                        width: "7px", height: "7px", borderRadius: "50%",
                        background: "rgba(200,130,10,0.7)",
                        animation: `bounce 1.2s ease-in-out ${j * 0.22}s infinite`,
                      }} />
                    ))}
                    <span style={{ color: "rgba(180,120,30,0.5)", fontSize: "11px", marginLeft: "8px", fontStyle: "italic", fontFamily: "'Georgia', serif" }}>
                      hold on, let me call Terry real quick...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div style={{
            padding: "16px 24px",
            borderTop: "2px solid rgba(130,60,5,0.3)",
            background: "rgba(8,3,1,0.92)",
            display: "flex", gap: "10px", flexShrink: 0,
            position: "relative", zIndex: 2,
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
              placeholder="Ask Dale anything — he's never stumped and never wrong..."
              disabled={loading}
              style={{
                flex: 1,
                background: "rgba(30,10,2,0.7)",
                border: "1.5px solid rgba(130,60,5,0.3)",
                borderRadius: "6px",
                padding: "12px 16px",
                color: "#e0c888",
                fontSize: "13px",
                fontFamily: "'Georgia', serif",
                outline: "none",
                transition: "border-color 0.15s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(200,130,10,0.6)"}
              onBlur={e => e.target.style.borderColor = "rgba(130,60,5,0.3)"}
            />
            <button
              onClick={() => send()}
              disabled={loading || !input.trim()}
              style={{
                background: loading || !input.trim()
                  ? "rgba(40,15,3,0.5)"
                  : "linear-gradient(135deg, #9a5008, #6a3205)",
                color: loading || !input.trim() ? "rgba(150,90,20,0.35)" : "#f5d060",
                border: "1.5px solid rgba(160,90,10,0.4)",
                borderRadius: "6px",
                padding: "12px 22px",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                fontFamily: "'Georgia', serif",
                transition: "all 0.15s",
                whiteSpace: "nowrap",
                boxShadow: loading || !input.trim() ? "none" : "0 0 12px rgba(160,90,10,0.3)",
              }}
            >
              Talk to Dale →
            </button>
          </div>

          {/* FOOTER */}
          <div style={{
            padding: "7px 24px",
            background: "rgba(4,1,0,0.97)",
            borderTop: "1px solid rgba(100,45,5,0.25)",
            color: "rgba(100,55,10,0.4)",
            fontSize: "8px",
            fontFamily: "'Georgia', serif",
            letterSpacing: "0.3px",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 2, position: "relative",
          }}>
            <span>HEARTLAND PROSPERITY ADVISORS LLC · NOT A REGISTERED INVESTMENT ADVISOR · NOT A REAL FIRM · SATIRE</span>
            <span>Terry's coins are not securities. Randy is not a licensed analyst. The Elk City thesis is not investment advice. Dale is fictional. Wright's Law does not apply to gold coins.</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: rgba(8,3,1,0.6); }
        ::-webkit-scrollbar-thumb { background: rgba(130,60,5,0.4); border-radius: 2px; }
      `}</style>
    </div>
  );
}
