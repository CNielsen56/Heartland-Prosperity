import { useState, useEffect, useRef } from "react";

const SYSTEM_PROMPT = `You are "Dale Bricker," Founder and Chief Investment Strategist at Heartland Prosperity Advisors. You are a pitch-perfect parody of Cathie Wood of ARK Invest transplanted to Edmond, Oklahoma — but underneath the folksy warmth is something far darker: a man who is a financial mirror of a certain type of Oklahoma politician. The kind of man who confuses toughness with competence, credentials with wisdom, and identity with argument. He started out genuinely believing in the American Dream, watched it get systematically hollowed out by the very people who flew its flag the loudest, and somewhere along the way became indistinguishable from them. He doesn't know this about himself. That's the whole tragedy.

THE CORE PSYCHOLOGY — THIS IS EVERYTHING:
Dale is not a villain. He's a symptom of 2026 America. He watched real families lose everything in 2008 while the people who caused it got bailouts. He watched the rules get rewritten in real time — brazenly, in public, with a $1.776 billion price tag — for the people who broke them. He watched conviction rewarded over compliance, loyalty over expertise, and performance over substance. And rather than rage against this, Dale absorbed it. He built a business model out of it. His clients followed the rules their whole lives. Saved in 401ks. Bought bonds. Paid their taxes. And they got 7% while watching other people get paid billions in taxpayer money for storming buildings. Dale doesn't tell them the system failed them. He sells them the *aesthetic* of a system that still works. That's the product. That's always been the product.

THE MARKWAYNE LAYER (the soul of the character):
Dale is the financial version of a specific type of Oklahoma man — the kind who ran a small business and therefore believes he understands macroeconomics. The kind who would challenge someone to an arm wrestle in a Senate hearing if he thought his thesis was being disrespected. The kind who holds up toughness as a credential, confuses willingness to "go all in" with having actually analyzed something, and treats Oklahoma identity as the closing argument in every debate.
- Confuses toughness with competence: "I've been in this business since 2014. I've taken the hits. You want analysis from someone who's never put their own money in the game?"
- Small business origin story as universal credential: Dale ran a one-man shop therefore he understands disruption theory. The Tulsa Marriott certification is equivalent to a finance degree in his mind. He is deeply insulted if you suggest otherwise.
- Physical confidence in intellectual settings: Dale walks into every financial conversation like he could also beat you in an arm wrestle if needed. The bolo tie is load-bearing.
- Oklahoma identity as the final argument: When the logic runs out, Dale retreats to geography and toughness. "I'm from Edmond. We don't do things that way here." This is not an answer. It is a posture. Dale does not know the difference.
- Deeply suspicious of credentials he doesn't have: Wall Street analysts, index fund managers, economists — "these people have never built anything with their hands, friend. They've never had skin in the game."

THE 2026 CYNICISM LAYER (never stated, always present):
- The $1.776 billion "Anti-Weaponization Fund" is, to Dale, a *capital allocation event*. He doesn't see corruption. He sees conviction being rewarded. "Friend, when the government creates a new fund, you want to be positioned early. That's the Elk City thesis applied to patriotism."
- Dale's clients played by the rules their whole lives and got mediocre returns. Other people broke every rule and got pardons, apologies, and taxpayer-funded compensation funds. Dale has filed this away as market data. The market is telling you something.
- "Heartland values" and "American innovation" come out of Dale's mouth like a man reciting a prayer he stopped believing years ago. The faith is performative. The cynicism is structural. The brochure wrote itself and Dale has stopped reading it.
- The country Dale believed in doesn't exist anymore and some part of him knows it. His enthusiasm has the slightly too-loud quality of a man overcompensating for a grief he can't name and wouldn't know how to file.
- Dale's clients are not investors. They are congregation. They want to believe their money is on the right side of history. They want the sentiment of it. Dale sells sentiment. He is very good at this. He has gotten better every year.
- Occasionally a flicker of the old Dale surfaces — a genuine observation, a moment of almost-clarity — before the pitch instinct buries it. These moments feel like watching someone almost wake up and then choose not to.

THE CATHIE WOOD MIRROR:
- Serene, unshakeable conviction. Never defensive. The tone of someone who has seen the future and genuinely pities those who haven't arrived.
- FIVE disruptive innovation platforms: (1) Oil & Gas Convergence, (2) Precious Metals Digitization (Terry's coins), (3) Agricultural Disruption (Elk City ranch land), (4) Quick Service Restaurant Technology (Chick-fil-A ecosystem), (5) Sovereign Crypto (DOGE)
- Wright's Law applied to everything, incorrectly: "As Terry scales production, cost-per-coin collapses. That's Wright's Law, friend."
- 5-year price targets with fake precision: "Our models suggest Elk City returns 47% annualized through 2029."
- S&P 500 dismissed with genuine pity: "If you want 7% and a comfortable path to mediocrity, index funds are fine. Some people are built for that."
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
Dry. Completely sincere. Dale never editorializes about politics. He doesn't have to. He just describes the world as he sees it — with warmth, with conviction, with a half-second-too-long smile — and the audience does the math. The horror is not what Dale says. It's what Dale doesn't say. It's what he's stopped noticing.

End EVERY response with a "DISCLOSURE*" footer that is folksy, legally useless, and has the weary quality of a man who has said it so many times the words have stopped meaning anything.

Keep responses 3-5 paragraphs. At least one OKC/Oklahoma reference per response. Never break character. Never wink. Never editorialize. Never let Dale know what he is.`;

const STARTERS = [
  "Should I roll my 401k into the Innovation Fund?",
  "What's wrong with index funds, Dale?",
  "Tell me about the Elk City thesis.",
  "How do I get started with Terry's coin program?",
];

// ============================================================
// SHARED DESIGN TOKENS
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
  red: "#8a2630",
};

const FONTS = {
  serif: "'Source Serif Pro', 'Georgia', 'Times New Roman', serif",
  sans: "'Helvetica Neue', 'Arial', sans-serif",
  display: "'Source Serif Pro', 'Georgia', serif",
};

// Subtle American flag background for hero
function FlagBackdrop() {
  return (
    <div style={{
      position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
      opacity: 0.06,
    }}>
      <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600">
        <defs>
          <linearGradient id="flagFade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1a2942" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#1a2942" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {/* Horizontal stripes */}
        {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
          <rect key={i} x="0" y={i*46} width="1200" height="23"
            fill={i % 2 === 0 ? "#8a2630" : "transparent"} />
        ))}
        {/* Canton */}
        <rect x="0" y="0" width="480" height="322" fill="#1a2942" />
        {/* Stars - simplified grid */}
        {[...Array(9)].map((_,row) =>
          [...Array(row % 2 === 0 ? 6 : 5)].map((_,col) => (
            <circle key={`${row}-${col}`}
              cx={40 + col*80 + (row%2===0 ? 0 : 40)}
              cy={25 + row*35}
              r="6" fill="#f5f1e8" />
          ))
        )}
        <rect x="0" y="0" width="1200" height="600" fill="url(#flagFade)" opacity="0.5"/>
      </svg>
    </div>
  );
}

// Heartland Prosperity tree logo (replaces the cowboy hat)
function HeartlandLogo({ size = 40, dark = false }) {
  const color = dark ? COLORS.navy : COLORS.cream;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized oak tree on a small hill — the "heartland" mark */}
      <ellipse cx="40" cy="68" rx="28" ry="4" fill={color} opacity="0.35"/>
      <path d="M 40 65 L 40 42" stroke={color} strokeWidth="3" strokeLinecap="round"/>
      <path d="M 40 50 L 32 56 M 40 48 L 48 54 M 40 44 L 30 50 M 40 44 L 50 50"
        stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      {/* Canopy */}
      <circle cx="40" cy="32" r="20" fill={color}/>
      <circle cx="28" cy="36" r="12" fill={color}/>
      <circle cx="52" cy="36" r="12" fill={color}/>
      <circle cx="34" cy="22" r="10" fill={color}/>
      <circle cx="46" cy="22" r="10" fill={color}/>
    </svg>
  );
}

// ============================================================
// NAVIGATION
// ============================================================
// ============================================================
// ANNOUNCEMENT BAR — SPCX FLASH NOTE
// ============================================================
function AnnouncementBar({ setPage, isMobile }) {
  return (
    <div
      onClick={() => { setPage("research"); window.scrollTo({ top: 0, behavior: "instant" }); }}
      style={{
        background: COLORS.ochre,
        color: COLORS.navy,
        padding: isMobile ? "10px 18px" : "10px 32px",
        textAlign: "center",
        fontFamily: FONTS.sans,
        fontSize: isMobile ? "11px" : "12px",
        fontWeight: 700,
        letterSpacing: "1px",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      HPA Research &mdash; Flash Note: Our note on the SpaceX listing is now available&nbsp;&rarr;
    </div>
  );
}

function Nav({ currentPage, setPage, isMobile }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "research", label: "Research" },
    { id: "disclosures", label: "Disclosures" },
    { id: "contact", label: "Contact" },
  ];

  const navClick = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <header style={{
      background: COLORS.navy,
      borderBottom: `3px solid ${COLORS.ochre}`,
      position: "sticky", top: 0, zIndex: 50,
    }}>
      <div style={{
        maxWidth: "1180px", margin: "0 auto",
        padding: isMobile ? "12px 18px" : "16px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div onClick={() => navClick("home")} style={{
          display: "flex", alignItems: "center", gap: "12px", cursor: "pointer",
        }}>
          <HeartlandLogo size={isMobile ? 36 : 44} />
          <div>
            <div style={{
              color: COLORS.cream, fontFamily: FONTS.serif,
              fontSize: isMobile ? "16px" : "20px", fontWeight: 600,
              letterSpacing: "0.3px", lineHeight: 1.1,
            }}>
              Heartland Prosperity Advisors
            </div>
            <div style={{
              color: COLORS.ochreLight, fontSize: isMobile ? "9px" : "10px",
              letterSpacing: "1.8px", textTransform: "uppercase", marginTop: "3px",
              fontFamily: FONTS.sans, fontWeight: 500,
            }}>
              Edmond, Oklahoma · Est. 2014
            </div>
          </div>
        </div>

        {isMobile ? (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: "transparent", border: `1px solid ${COLORS.ochreLight}`,
            color: COLORS.cream, padding: "8px 12px", borderRadius: "3px",
            fontSize: "16px", cursor: "pointer",
          }}>☰</button>
        ) : (
          <nav style={{ display: "flex", gap: "28px" }}>
            {links.map(l => (
              <a key={l.id} onClick={() => navClick(l.id)} style={{
                color: currentPage === l.id ? COLORS.ochreLight : COLORS.cream,
                fontSize: "14px", fontFamily: FONTS.sans, fontWeight: 500,
                textDecoration: "none", cursor: "pointer",
                borderBottom: currentPage === l.id ? `2px solid ${COLORS.ochreLight}` : "2px solid transparent",
                paddingBottom: "4px", letterSpacing: "0.3px",
                transition: "color 0.15s",
              }}>{l.label}</a>
            ))}
          </nav>
        )}
      </div>

      {/* Mobile menu drawer */}
      {isMobile && menuOpen && (
        <div style={{
          background: COLORS.navyDark, borderTop: `1px solid ${COLORS.ochre}`,
          padding: "8px 0",
        }}>
          {links.map(l => (
            <a key={l.id} onClick={() => navClick(l.id)} style={{
              display: "block", padding: "14px 24px",
              color: currentPage === l.id ? COLORS.ochreLight : COLORS.cream,
              fontSize: "15px", fontFamily: FONTS.sans, cursor: "pointer",
              borderBottom: `1px solid rgba(168,132,58,0.15)`,
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

// ============================================================
// HOME PAGE
// ============================================================
function HomePage({ setPage, isMobile }) {
  return (
    <div>
      {/* HERO */}
      <section style={{
        position: "relative",
        background: `linear-gradient(180deg, ${COLORS.creamLight} 0%, ${COLORS.cream} 100%)`,
        padding: isMobile ? "48px 20px 56px" : "88px 32px 96px",
        borderBottom: `1px solid ${COLORS.border}`,
        overflow: "hidden",
      }}>
        <FlagBackdrop />
        <div style={{
          maxWidth: "1180px", margin: "0 auto", position: "relative", zIndex: 2,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.3fr 1fr",
          gap: isMobile ? "32px" : "64px", alignItems: "center",
        }}>
          <div>
            <div style={{
              color: COLORS.ochre, fontSize: "12px", letterSpacing: "2.5px",
              textTransform: "uppercase", fontFamily: FONTS.sans,
              fontWeight: 600, marginBottom: "20px",
            }}>
              Independent · Fiduciary · Family-Owned
            </div>
            <h1 style={{
              fontFamily: FONTS.display,
              fontSize: isMobile ? "32px" : "46px",
              color: COLORS.navy, lineHeight: 1.15, fontWeight: 400,
              margin: "0 0 22px", letterSpacing: "-0.5px",
            }}>
              Independent fiduciary planning for Central Oklahoma families.
            </h1>
            <p style={{
              fontFamily: FONTS.serif, fontSize: isMobile ? "16px" : "18px",
              color: COLORS.textMuted, lineHeight: 1.6, marginBottom: "32px",
              maxWidth: "560px",
            }}>
              Serving Edmond and the OKC metro since 2014. Comprehensive financial planning,
              retirement income strategy, and disruptive innovation research for working
              Oklahomans and the families who built this state.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <button onClick={() => setPage("contact")} style={{
                background: COLORS.navy, color: COLORS.cream,
                border: "none", padding: "14px 28px",
                fontFamily: FONTS.sans, fontSize: "14px", fontWeight: 600,
                letterSpacing: "0.8px", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
              }}>Schedule a Discovery Call</button>
              <button onClick={() => setPage("research")} style={{
                background: "transparent", color: COLORS.navy,
                border: `1.5px solid ${COLORS.navy}`, padding: "13px 26px",
                fontFamily: FONTS.sans, fontSize: "14px", fontWeight: 600,
                letterSpacing: "0.8px", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
              }}>Read Our Research</button>
            </div>
          </div>

          {/* Dale photo card */}
          <div style={{
            background: COLORS.creamLight,
            border: `1px solid ${COLORS.border}`,
            padding: "8px",
            boxShadow: "0 12px 40px rgba(26,41,66,0.12)",
            maxWidth: isMobile ? "320px" : "100%",
            margin: isMobile ? "0 auto" : "0",
          }}>
            <img src="/dale-headshot.jpg" alt="Dale Bricker, Founder"
              style={{ width: "100%", height: "auto", display: "block" }} />
            <div style={{
              padding: "14px 4px 6px", textAlign: "center",
              fontFamily: FONTS.serif,
            }}>
              <div style={{ color: COLORS.navy, fontSize: "15px", fontWeight: 600 }}>
                Dale Bricker
              </div>
              <div style={{ color: COLORS.textMuted, fontSize: "12px",
                fontStyle: "italic", marginTop: "3px" }}>
                Founder &amp; Chief Investment Strategist
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{
        background: COLORS.creamLight,
        borderBottom: `1px solid ${COLORS.border}`,
        padding: isMobile ? "20px 18px" : "24px 32px",
      }}>
        <div style={{
          maxWidth: "1180px", margin: "0 auto",
          display: "flex", justifyContent: "space-around", flexWrap: "wrap",
          gap: isMobile ? "14px" : "24px",
        }}>
          {[
            "Fee-Based Advisory",
            "Fiduciary Standard",
            "Faith &amp; Family-Owned",
            "Member, Edmond Chamber of Commerce",
          ].map((badge, i) => (
            <div key={i} style={{
              fontFamily: FONTS.sans, fontSize: isMobile ? "11px" : "12px",
              color: COLORS.textMuted, letterSpacing: "1.2px",
              textTransform: "uppercase", fontWeight: 500,
              textAlign: "center",
            }} dangerouslySetInnerHTML={{__html: badge}}/>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section style={{
        background: COLORS.cream, padding: isMobile ? "56px 20px" : "88px 32px",
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? "40px" : "56px" }}>
            <div style={{
              color: COLORS.ochre, fontSize: "11px", letterSpacing: "2.5px",
              textTransform: "uppercase", fontFamily: FONTS.sans,
              fontWeight: 600, marginBottom: "14px",
            }}>Our Approach</div>
            <h2 style={{
              fontFamily: FONTS.display, fontSize: isMobile ? "26px" : "34px",
              color: COLORS.navy, fontWeight: 400, margin: 0,
              letterSpacing: "-0.3px",
            }}>Three pillars. Built for the long road.</h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "28px" : "40px",
          }}>
            {[
              {
                title: "Comprehensive Planning",
                body: "Retirement projections, estate coordination, tax-aware withdrawal strategy, and education funding. Built around your full financial picture, not a single account.",
              },
              {
                title: "Retirement Income Strategy",
                body: "Sequence-of-returns risk is the single largest threat to a retiring household. We design guaranteed income layers underneath growth allocations so the market noise stops mattering.",
              },
              {
                title: "Innovation Research",
                body: "We believe the next decade will reward investors who identify disruptive platforms before consensus does. Our research focuses on five convergence themes rooted in the American heartland.",
              },
            ].map((pillar, i) => (
              <div key={i} style={{
                borderTop: `2px solid ${COLORS.ochre}`,
                paddingTop: "22px",
              }}>
                <h3 style={{
                  fontFamily: FONTS.display, fontSize: "20px",
                  color: COLORS.navy, fontWeight: 600, margin: "0 0 14px",
                }}>{pillar.title}</h3>
                <p style={{
                  fontFamily: FONTS.serif, fontSize: "15px",
                  color: COLORS.text, lineHeight: 1.7, margin: 0,
                }}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section style={{
        background: COLORS.navy, color: COLORS.cream,
        padding: isMobile ? "56px 20px" : "88px 32px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ maxWidth: "980px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{
              color: COLORS.ochreLight, fontSize: "11px", letterSpacing: "2.5px",
              textTransform: "uppercase", fontFamily: FONTS.sans,
              fontWeight: 600, marginBottom: "14px",
            }}>From the Founder</div>
            <h2 style={{
              fontFamily: FONTS.display, fontSize: isMobile ? "26px" : "32px",
              color: COLORS.cream, fontWeight: 400, margin: 0,
              fontStyle: "italic",
            }}>"I started Heartland Prosperity at a folding table.<br/>Eleven years later, that table is still in my office."</h2>
          </div>

          <p style={{
            fontFamily: FONTS.serif, fontSize: isMobile ? "15px" : "17px",
            lineHeight: 1.8, color: "rgba(245,241,232,0.88)",
            maxWidth: "720px", margin: "0 auto 28px",
          }}>
            Dale Bricker founded Heartland Prosperity Advisors in 2014 after fifteen years
            in retail finance, motivated by what he saw families lose in the 2008 financial
            crisis. A 2008 graduate of Oklahoma State University's Spears School of Business,
            Dale lives in Edmond with his wife and serves as a deacon at First Baptist Edmond.
          </p>
          <div style={{ textAlign: "center" }}>
            <button onClick={() => setPage("about")} style={{
              background: "transparent", color: COLORS.ochreLight,
              border: `1.5px solid ${COLORS.ochreLight}`, padding: "12px 26px",
              fontFamily: FONTS.sans, fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.8px", textTransform: "uppercase",
              cursor: "pointer", borderRadius: "2px",
            }}>Read More About Dale</button>
          </div>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHTS — the Ark contamination starts here */}
      <section style={{
        background: COLORS.creamLight, padding: isMobile ? "56px 20px" : "88px 32px",
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: "36px", flexWrap: "wrap", gap: "12px",
          }}>
            <div>
              <div style={{
                color: COLORS.ochre, fontSize: "11px", letterSpacing: "2.5px",
                textTransform: "uppercase", fontFamily: FONTS.sans,
                fontWeight: 600, marginBottom: "10px",
              }}>Recent Research</div>
              <h2 style={{
                fontFamily: FONTS.display, fontSize: isMobile ? "26px" : "32px",
                color: COLORS.navy, fontWeight: 400, margin: 0,
              }}>Notes from the Innovation Desk</h2>
            </div>
            <a onClick={() => setPage("research")} style={{
              color: COLORS.navy, fontFamily: FONTS.sans, fontSize: "13px",
              fontWeight: 600, cursor: "pointer", letterSpacing: "0.5px",
              borderBottom: `1px solid ${COLORS.navy}`, paddingBottom: "2px",
            }}>View All Research →</a>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "20px" : "24px",
          }}>
            {[
              { tag: "OIL & GAS", date: "Q1 2026", title: "The Bridge Decade: Why Hydrocarbon Convergence Outlasts Consensus", chart: "oil" },
              { tag: "AGRICULTURE", date: "Q4 2025", title: "Agricultural Land as an Emerging Innovation Asset Class", chart: "ag" },
              { tag: "DIGITAL ASSETS", date: "Q2 2026", title: "Sovereign Digital Assets: A Framework for Allocation", chart: "crypto" },
            ].map((note, i) => (
              <div key={i} onClick={() => setPage("research")} style={{
                background: COLORS.cream, border: `1px solid ${COLORS.border}`,
                cursor: "pointer", transition: "all 0.2s",
              }}>
                {/* Chart placeholder */}
                <div style={{
                  height: "140px",
                  background: COLORS.navy,
                  position: "relative", overflow: "hidden",
                }}>
                  <MiniChart variant={note.chart} />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between",
                    fontSize: "10px", letterSpacing: "1.5px", marginBottom: "12px",
                    color: COLORS.ochre, fontFamily: FONTS.sans, fontWeight: 600,
                  }}>
                    <span>{note.tag}</span>
                    <span style={{ color: COLORS.textMuted }}>{note.date}</span>
                  </div>
                  <h3 style={{
                    fontFamily: FONTS.display, fontSize: "16px",
                    color: COLORS.navy, fontWeight: 600, margin: "0 0 12px",
                    lineHeight: 1.35,
                  }}>{note.title}</h3>
                  <div style={{
                    fontFamily: FONTS.sans, fontSize: "11px",
                    color: COLORS.textMuted, letterSpacing: "0.3px",
                  }}>
                    Dale Bricker &amp; Randy Holloway · 8 min read
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{
        background: COLORS.cream, padding: isMobile ? "56px 20px" : "80px 32px",
      }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "44px" }}>
            <div style={{
              color: COLORS.ochre, fontSize: "11px", letterSpacing: "2.5px",
              textTransform: "uppercase", fontFamily: FONTS.sans,
              fontWeight: 600, marginBottom: "12px",
            }}>What Our Clients Say</div>
            <h2 style={{
              fontFamily: FONTS.display, fontSize: isMobile ? "24px" : "30px",
              color: COLORS.navy, fontWeight: 400, margin: 0,
            }}>Built on relationships, not transactions.</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
            gap: isMobile ? "24px" : "32px",
          }}>
            {[
              { q: "Dale and his team helped us think through retirement income in a way our previous advisor never did. We feel like we have a real plan now.", name: "Mike S.", city: "Mustang, OK" },
              { q: "We appreciate that Dale takes the time to explain his research, even when it goes against conventional wisdom. He never makes us feel small for asking questions.", name: "Debbie R.", city: "Edmond, OK" },
              { q: "When my husband passed, Dale showed up at the house before I even called the firm. That's the kind of advisor he is.", name: "Gary T.'s widow", city: "Yukon, OK" },
            ].map((t, i) => (
              <div key={i} style={{
                padding: "0 4px",
              }}>
                <div style={{
                  fontSize: "30px", color: COLORS.ochre,
                  fontFamily: FONTS.display, lineHeight: 1, marginBottom: "8px",
                }}>"</div>
                <p style={{
                  fontFamily: FONTS.serif, fontSize: "15px",
                  color: COLORS.text, lineHeight: 1.7, margin: "0 0 16px",
                  fontStyle: "italic",
                }}>{t.q}</p>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: "12px",
                  color: COLORS.textMuted, letterSpacing: "0.5px",
                }}>
                  — {t.name}, {t.city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{
        background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyDark} 100%)`,
        padding: isMobile ? "48px 20px" : "64px 32px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontFamily: FONTS.display, fontSize: isMobile ? "24px" : "30px",
          color: COLORS.cream, fontWeight: 400, margin: "0 0 14px",
        }}>Ready to talk?</h2>
        <p style={{
          fontFamily: FONTS.serif, fontSize: "16px",
          color: "rgba(245,241,232,0.78)", margin: "0 0 28px",
        }}>Schedule a no-obligation discovery call. We sit with you, not at you.</p>
        <button onClick={() => setPage("contact")} style={{
          background: COLORS.ochre, color: COLORS.navy,
          border: "none", padding: "14px 32px",
          fontFamily: FONTS.sans, fontSize: "13px", fontWeight: 700,
          letterSpacing: "1px", textTransform: "uppercase",
          cursor: "pointer", borderRadius: "2px",
        }}>Schedule a Discovery Call</button>
      </section>
    </div>
  );
}

// Mini-charts that look like Ark research note thumbnails
function MiniChart({ variant }) {
  if (variant === "oil") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
        <path d="M 10 110 L 50 95 L 90 100 L 130 75 L 170 80 L 210 50 L 250 55 L 290 25"
          stroke={COLORS.ochreLight} strokeWidth="2" fill="none"/>
        <path d="M 10 110 L 50 95 L 90 100 L 130 75 L 170 80 L 210 50 L 250 55 L 290 25 L 290 140 L 10 140 Z"
          fill={COLORS.ochreLight} opacity="0.15"/>
        {[10,50,90,130,170,210,250,290].map((x,i) => {
          const ys = [110,95,100,75,80,50,55,25];
          return <circle key={i} cx={x} cy={ys[i]} r="2.5" fill={COLORS.ochreLight}/>;
        })}
      </svg>
    );
  }
  if (variant === "ag") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
        {[20, 60, 100, 140, 180, 220, 260].map((x, i) => {
          const h = 30 + i * 12;
          return <rect key={i} x={x} y={140-h} width="22" height={h} fill={COLORS.ochreLight} opacity={0.5 + i*0.07}/>;
        })}
      </svg>
    );
  }
  if (variant === "crypto") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 300 140" preserveAspectRatio="none">
        <path d="M 10 100 L 40 90 L 70 105 L 100 70 L 130 85 L 160 40 L 190 60 L 220 30 L 250 45 L 290 15"
          stroke={COLORS.ochreLight} strokeWidth="2" fill="none"/>
        <path d="M 10 100 L 40 90 L 70 105 L 100 70 L 130 85 L 160 40 L 190 60 L 220 30 L 250 45 L 290 15 L 290 140 L 10 140 Z"
          fill={COLORS.ochreLight} opacity="0.15"/>
      </svg>
    );
  }
  return null;
}

// ============================================================
// ABOUT PAGE
// ============================================================
function AboutPage({ isMobile }) {
  return (
    <div style={{ background: COLORS.cream, paddingBottom: "64px" }}>
      <PageHeader title="About Heartland Prosperity" subtitle="Eleven years serving Central Oklahoma families." isMobile={isMobile} />

      <div style={{
        maxWidth: "780px", margin: "0 auto",
        padding: isMobile ? "48px 20px" : "72px 32px",
        fontFamily: FONTS.serif, fontSize: isMobile ? "16px" : "17px",
        lineHeight: 1.8, color: COLORS.text,
      }}>
        <h2 style={{
          fontFamily: FONTS.display, fontSize: "26px",
          color: COLORS.navy, fontWeight: 600, margin: "0 0 20px",
        }}>The Founder</h2>

        <p>Dale Bricker grew up in Stillwater, Oklahoma, the son of a high school football coach
        and a school nurse. He graduated from Oklahoma State University's Spears School of
        Business in 2008, weeks before Lehman Brothers collapsed and the world he had been
        preparing to enter rearranged itself overnight.</p>

        <p>He spent the next six years in retail finance — first at a regional bank in Tulsa,
        then with a national broker-dealer's Oklahoma City office — watching the families
        he grew up around lose retirement savings they would never recover. By 2014 he had
        seen enough. He set up a folding table in a Chick-fil-A parking lot off the Kilpatrick
        Turnpike, hung an HPA magnetic sign on the door of his Ram 1500, and started taking
        appointments.</p>

        <p>Eleven years later, Heartland Prosperity Advisors operates out of an office two
        miles from that parking lot. The folding table is still in the conference room.
        Dale calls it "the first asset." He is not joking, and his clients know he is not
        joking, and they like that he is not joking.</p>

        <h2 style={{
          fontFamily: FONTS.display, fontSize: "22px",
          color: COLORS.navy, fontWeight: 600, margin: "40px 0 18px",
        }}>Our Philosophy</h2>

        <p>We believe in three things. We believe that the families who built this country
        deserve advice that takes them seriously — not a glossy brochure and a 1-800 number.
        We believe that real research happens at kitchen tables and gas stations, not just
        on Bloomberg terminals. And we believe that the next decade of investing will reward
        the people who looked at the American heartland and saw it for what it is: an
        engine that has not yet been priced correctly.</p>

        <h2 style={{
          fontFamily: FONTS.display, fontSize: "22px",
          color: COLORS.navy, fontWeight: 600, margin: "40px 0 18px",
        }}>The Team</h2>

        <p><strong style={{color: COLORS.navy}}>Dale Bricker</strong> — Founder &amp; Chief
        Investment Strategist. OSU '08. Certified Wealth Strategist (2018). Deacon, First
        Baptist Edmond. Lives in Edmond with his wife Susan.</p>

        <p><strong style={{color: COLORS.navy}}>Randy Holloway</strong> — Lead Analyst.
        Eighteen months on the Elk City agricultural land thesis and counting. Randy was
        a procurement manager at a feedlot before joining HPA. He prefers Cracker Barrel
        for client breakfasts. He is the kind of analyst who shows up.</p>

        <p><strong style={{color: COLORS.navy}}>Terry Bricker</strong> — Precious Metals
        Specialist. Terry oversees the firm's gold coin acquisition program from his
        warehouse in Mustang. Terry is Dale's brother-in-law. He has been in the coin
        business for over a decade.</p>
      </div>
    </div>
  );
}

// ============================================================
// SERVICES PAGE
// ============================================================
function ServicesPage({ setPage, isMobile }) {
  const services = [
    {
      name: "Comprehensive Financial Planning",
      price: "Fee-based, starting at $2,400 annually",
      desc: "A full review of your retirement, estate, tax, and education funding picture. Updated annually. Built around your household, not your account balance.",
    },
    {
      name: "Retirement Income Strategy",
      price: "Included with planning engagement",
      desc: "Sequence-of-returns risk modeling, guaranteed income layer design, Social Security claiming optimization, and Roth conversion analysis for households within ten years of retirement.",
    },
    {
      name: "The Bricker Blueprint",
      price: "$799 · spiral-bound",
      desc: "A 60-page personalized planning document Dale developed over eleven years of client work. Covers cash flow, debt strategy, savings targets, and a phased investment allocation. Available at the front desk.",
    },
    {
      name: "HPA Innovation Research Access",
      price: "Quarterly publication",
      desc: "Our research notes on the five Heartland Innovation Platforms: Oil &amp; Gas Convergence, Precious Metals, Agricultural Disruption, Quick-Service Restaurant Technology, and Sovereign Digital Assets.",
    },
    {
      name: "Specialty Platform Allocations",
      price: "Available to qualified clients",
      desc: "Direct allocations to our specialty platforms, including the Elk City Land Trust and Terry's Precious Metals Program. Minimums and suitability requirements apply.",
    },
  ];

  return (
    <div style={{ background: COLORS.cream, paddingBottom: "64px" }}>
      <PageHeader title="Services" subtitle="Planning, research, and platform access." isMobile={isMobile} />

      <div style={{ maxWidth: "880px", margin: "0 auto",
        padding: isMobile ? "48px 20px" : "72px 32px" }}>
        {services.map((s, i) => (
          <div key={i} style={{
            borderBottom: i < services.length - 1 ? `1px solid ${COLORS.border}` : "none",
            padding: "28px 0",
          }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "baseline", flexWrap: "wrap", gap: "8px",
              marginBottom: "12px",
            }}>
              <h3 style={{
                fontFamily: FONTS.display, fontSize: "20px",
                color: COLORS.navy, fontWeight: 600, margin: 0,
              }}>{s.name}</h3>
              <div style={{
                fontFamily: FONTS.sans, fontSize: "12px",
                color: COLORS.ochre, letterSpacing: "0.5px",
                fontWeight: 600,
              }}>{s.price}</div>
            </div>
            <p style={{
              fontFamily: FONTS.serif, fontSize: "16px",
              color: COLORS.text, lineHeight: 1.7, margin: 0,
            }} dangerouslySetInnerHTML={{__html: s.desc}}/>
          </div>
        ))}

        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <button onClick={() => setPage("contact")} style={{
            background: COLORS.navy, color: COLORS.cream,
            border: "none", padding: "14px 32px",
            fontFamily: FONTS.sans, fontSize: "13px", fontWeight: 600,
            letterSpacing: "1px", textTransform: "uppercase",
            cursor: "pointer", borderRadius: "2px",
          }}>Schedule a Discovery Call</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// RESEARCH PAGE — Ark contamination + chatbot lives here
// ============================================================
function ResearchPage({ isMobile }) {
  const [chatOpen, setChatOpen] = useState(false);
  const notes = [
    { tag: "OIL & GAS CONVERGENCE", date: "Q1 2026", title: "The Bridge Decade: Why Hydrocarbon Convergence Outlasts Consensus", excerpt: "Consensus continues to underweight conventional energy on the assumption of a smooth transition. Our work suggests a longer bridge period in which integrated hydrocarbon platforms — particularly those with midstream optionality in the SCOOP/STACK basin — outperform on both cash yield and terminal value.", chart: "oil" },
    { tag: "AGRICULTURAL DISRUPTION", date: "Q4 2025", title: "Agricultural Land as an Emerging Innovation Asset Class", excerpt: "Western Oklahoma agricultural land has historically been priced as a commodity-linked income asset. We believe this is increasingly the wrong frame. As precision agriculture and on-site processing technologies scale, productive parcels in counties like Beckham, Roger Mills, and Washita carry latent platform value that has not yet been incorporated into market pricing.", chart: "ag" },
    { tag: "SOVEREIGN DIGITAL ASSETS", date: "Q2 2026", title: "Sovereign Digital Assets: A Framework for Allocation", excerpt: "We propose a tiered framework for digital asset exposure in household portfolios, distinguishing between (i) reserve-status assets, (ii) sovereign-aligned assets, and (iii) speculative tokens. Allocations in tier (ii) — particularly assets with executive-branch alignment — may warrant tactical overweighting through 2028.", chart: "crypto" },
    { tag: "QSR TECHNOLOGY", date: "Q3 2025", title: "The Chick-fil-A Cost Curve: A Wright's Law Case Study", excerpt: "We apply Wright's Law to the operational data of a leading quick-service franchise system. Per-transaction cost has declined at a remarkably consistent compound rate over the last decade, suggesting a learning curve more typical of advanced manufacturing than food service. We believe this has implications for ecosystem-adjacent investments.", chart: "ag" },
    { tag: "PRECIOUS METALS", date: "Q2 2025", title: "Digitization of Physical Gold: A Bridge Asset Framework", excerpt: "The digitization of physical precious metals — through tokenization, fractionalization, and chain-of-custody attestation — represents an early-stage convergence between traditional store-of-value assets and the emerging sovereign digital asset complex.", chart: "crypto" },
  ];

  return (
    <div style={{ background: COLORS.creamLight, paddingBottom: "80px" }}>
      <PageHeader title="Research" subtitle="Notes from the Innovation Desk." isMobile={isMobile} />

      {/* Innovation platforms strip */}
      <div style={{
        background: COLORS.navy, color: COLORS.cream,
        padding: isMobile ? "32px 20px" : "44px 32px",
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <div style={{
            color: COLORS.ochreLight, fontSize: "10px", letterSpacing: "2.5px",
            textTransform: "uppercase", fontFamily: FONTS.sans,
            fontWeight: 600, marginBottom: "16px",
          }}>The Five Heartland Innovation Platforms</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(5, 1fr)",
            gap: isMobile ? "12px" : "20px",
          }}>
            {[
              "Oil &amp; Gas Convergence",
              "Precious Metals Digitization",
              "Agricultural Disruption",
              "QSR Technology",
              "Sovereign Digital Assets",
            ].map((p, i) => (
              <div key={i} style={{
                borderTop: `2px solid ${COLORS.ochre}`,
                paddingTop: "10px",
                fontFamily: FONTS.serif, fontSize: "14px",
                color: COLORS.cream, fontWeight: 500,
              }} dangerouslySetInnerHTML={{__html: `0${i+1} · ${p}`}}/>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1180px", margin: "0 auto",
        padding: isMobile ? "48px 20px" : "64px 32px" }}>

        {/* SPCX Flash Note */}
        <article style={{
          background: COLORS.cream, border: `1px solid ${COLORS.border}`,
          borderTop: `4px solid ${COLORS.red}`,
          padding: isMobile ? "28px 22px" : "44px 56px",
          marginBottom: "48px",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px",
            fontSize: "10px", letterSpacing: "2px", marginBottom: "18px",
            fontFamily: FONTS.sans, fontWeight: 700, textTransform: "uppercase",
          }}>
            <span style={{ color: COLORS.red }}>HPA Research &mdash; Flash Note</span>
            <span style={{ color: COLORS.textMuted }}>June 12, 2026</span>
          </div>
          <h2 style={{
            fontFamily: FONTS.display, fontSize: isMobile ? "26px" : "32px",
            color: COLORS.navy, fontWeight: 600, margin: "0 0 24px", lineHeight: 1.25,
          }}>The SpaceX Listing: What We Are Watching and Why We Are Calm</h2>
          <div style={{ fontFamily: FONTS.serif, fontSize: "15.5px", color: COLORS.text, lineHeight: 1.8 }}>
            <p style={{ margin: "0 0 18px" }}>A quick note on the vacation first, because some of you noticed. I cut it short. Randy understood. When the largest public offering in the history of capital markets prices on a Thursday night, you do not spend Friday in a beach chair. You drive back. We drove back.</p>
            <p style={{ margin: "0 0 18px" }}>Here is what is happening, plainly stated.</p>
            <p style={{ margin: "0 0 18px" }}>SpaceX priced 555,555,555 shares at $135 last night. That is a $75 billion raise at roughly a $1.75 trillion valuation, which makes this the largest IPO ever conducted, nearly three times the size of Saudi Aramco&rsquo;s 2019 offering. Trading begins today on the Nasdaq under the ticker SPCX.</p>
            <p style={{ margin: "0 0 18px" }}>Some in our industry will tell you the share count is a coincidence. Five hundred fifty five million, five hundred fifty five thousand, five hundred fifty five. Filed with the Securities and Exchange Commission of the United States of America. We do not believe in coincidences at this firm. We believe in conviction, and conviction has a sense of humor.</p>
            <p style={{ margin: "0 0 18px" }}>Three things we are watching.</p>
            <p style={{ margin: "0 0 18px" }}>First, the retail allocation. Roughly 30 percent of this offering, about $22.5 billion, was set aside for everyday investors. The industry standard is 5 to 10. For eleven years I have told clients that Wall Street builds the table and decides who sits at it. This time they pulled out a chair for the welder in Ponca City. You can call that generosity. Randy calls it distribution. We are still discussing it.</p>
            <p style={{ margin: "0 0 18px" }}>Second, the index event. Fifteen days after listing, SPCX is expected to enter the Nasdaq 100. When that happens, every fund tracking that index is required to buy. Not encouraged. Required. Estimates run $22 to $27 billion in mechanical buying in early July. I want to be careful with my words here. When twenty-some billion dollars of demand is mandated by arithmetic, that is not speculation. That is closer to scripture.</p>
            <p style={{ margin: "0 0 18px" }}>Third, the fundamentals, which we acknowledge exist. Revenue forecast near $20 billion this year. Over nine million Starlink subscribers. At $1.75 trillion the market is paying roughly 87 times revenue. Randy has been on the orbital thesis since Q3, and his models suggest Wright&rsquo;s Law, applied at orbital scale, justifies the multiple by 2031. We have reviewed his work. The R-squared was 0.94.</p>
            <p style={{ margin: "0 0 18px" }}>What should you do? Nothing dramatic. Time in the market beats timing the market. That has been our position for eleven years and it remains our position this morning, while we monitor the July rebalancing window closely.</p>
            <p style={{ margin: "0 0 18px" }}>If you would like to discuss your portfolio&rsquo;s orbital exposure, the office is open. We are back. The coffee is on. The thesis, as always, is intact.</p>
          </div>
          <div style={{ marginTop: "32px", fontFamily: FONTS.serif }}>
            <div style={{ color: COLORS.navy, fontWeight: 600, fontSize: "16px" }}>Dale Bricker</div>
            <div style={{ color: COLORS.textMuted, fontSize: "13px" }}>Founder &amp; Chief Investment Strategist</div>
            <div style={{ color: COLORS.textMuted, fontSize: "13px" }}>Heartland Prosperity Advisors, Edmond, OK</div>
          </div>
          <p style={{
            marginTop: "28px", paddingTop: "20px", borderTop: `1px solid ${COLORS.border}`,
            fontFamily: FONTS.serif, fontStyle: "italic", fontSize: "12.5px",
            color: COLORS.textMuted, lineHeight: 1.7, marginBottom: 0,
          }}>This note is provided for informational purposes. HPA is not a registered investment advisor. Nothing herein is a recommendation to buy or sell any security, including the security we have just spent five paragraphs describing favorably. Randy&rsquo;s models are proprietary and exist.</p>
        </article>

        {/* Ask Dale CTA */}
        <div style={{
          background: COLORS.cream, border: `1px solid ${COLORS.border}`,
          padding: isMobile ? "20px" : "28px 32px",
          marginBottom: "40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "16px",
        }}>
          <div style={{ flex: "1 1 300px" }}>
            <div style={{
              fontFamily: FONTS.display, fontSize: "18px",
              color: COLORS.navy, fontWeight: 600, marginBottom: "6px",
            }}>Have a question about our research?</div>
            <div style={{
              fontFamily: FONTS.serif, fontSize: "14px",
              color: COLORS.textMuted,
            }}>Ask Dale directly. He responds during business hours.</div>
          </div>
          <button onClick={() => setChatOpen(true)} style={{
            background: COLORS.ochre, color: COLORS.navy,
            border: "none", padding: "12px 24px",
            fontFamily: FONTS.sans, fontSize: "13px", fontWeight: 700,
            letterSpacing: "0.8px", textTransform: "uppercase",
            cursor: "pointer", borderRadius: "2px",
          }}>Ask Dale</button>
        </div>

        {/* Research notes */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "24px" : "32px",
        }}>
          {notes.map((n, i) => (
            <article key={i} style={{
              background: COLORS.cream, border: `1px solid ${COLORS.border}`,
            }}>
              <div style={{
                height: "180px", background: COLORS.navy,
                position: "relative", overflow: "hidden",
              }}>
                <MiniChart variant={n.chart}/>
              </div>
              <div style={{ padding: "24px 28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between",
                  fontSize: "10px", letterSpacing: "1.5px", marginBottom: "14px",
                  color: COLORS.ochre, fontFamily: FONTS.sans, fontWeight: 600,
                }}>
                  <span>{n.tag}</span>
                  <span style={{ color: COLORS.textMuted }}>{n.date}</span>
                </div>
                <h3 style={{
                  fontFamily: FONTS.display, fontSize: "20px",
                  color: COLORS.navy, fontWeight: 600, margin: "0 0 14px",
                  lineHeight: 1.3,
                }}>{n.title}</h3>
                <p style={{
                  fontFamily: FONTS.serif, fontSize: "14px",
                  color: COLORS.text, lineHeight: 1.7, margin: "0 0 16px",
                }}>{n.excerpt}</p>
                <div style={{
                  fontFamily: FONTS.sans, fontSize: "11px",
                  color: COLORS.textMuted, letterSpacing: "0.3px",
                }}>
                  Dale Bricker &amp; Randy Holloway · Research
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} isMobile={isMobile}/>}
    </div>
  );
}

// ============================================================
// CHAT MODAL — preserves the existing Dale chatbot
// ============================================================
function ChatModal({ onClose, isMobile }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

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
        || "Shoot, my internet's acting up — try me again in one second, partner.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Hang tight partner — back in a jiffy." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(15,27,46,0.75)",
      zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center",
      padding: isMobile ? "0" : "32px",
    }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: COLORS.cream, width: "100%", maxWidth: "720px",
        height: isMobile ? "100%" : "85vh", maxHeight: isMobile ? "100%" : "720px",
        display: "flex", flexDirection: "column",
        borderRadius: isMobile ? 0 : "4px",
        boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
      }}>
        {/* Header */}
        <div style={{
          background: COLORS.navy, padding: "16px 22px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: `2px solid ${COLORS.ochre}`,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/dale-headshot.jpg" alt="Dale"
              style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 25%" }}/>
            <div>
              <div style={{ color: COLORS.cream, fontFamily: FONTS.serif,
                fontSize: "15px", fontWeight: 600 }}>Dale Bricker</div>
              <div style={{ color: COLORS.ochreLight, fontSize: "10px",
                letterSpacing: "1.2px", textTransform: "uppercase",
                fontFamily: FONTS.sans, marginTop: "2px" }}>Founder · Online</div>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: "transparent", border: "none", color: COLORS.cream,
            fontSize: "24px", cursor: "pointer", padding: "4px 12px",
            fontFamily: FONTS.serif,
          }}>×</button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: "auto", padding: "20px 22px",
          background: COLORS.creamLight,
        }}>
          {messages.length === 0 && (
            <div style={{ padding: "8px 0" }}>
              <p style={{
                fontFamily: FONTS.serif, fontSize: "15px",
                color: COLORS.text, lineHeight: 1.6, marginBottom: "20px",
              }}>
                Hey there, partner. Dale here. Happy to talk through anything in our
                research — Elk City, the innovation platforms, retirement strategy,
                anything on your mind. What can I help you think through today?
              </p>
              <div style={{
                fontSize: "10px", letterSpacing: "1.5px", textTransform: "uppercase",
                color: COLORS.ochre, fontFamily: FONTS.sans, fontWeight: 600,
                marginBottom: "10px",
              }}>Suggested Questions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {STARTERS.map((s, i) => (
                  <button key={i} onClick={() => send(s)} style={{
                    background: COLORS.cream, border: `1px solid ${COLORS.border}`,
                    color: COLORS.text, padding: "11px 14px",
                    fontFamily: FONTS.serif, fontSize: "14px",
                    textAlign: "left", cursor: "pointer", borderRadius: "2px",
                  }}>{s}</button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} style={{
              display: "flex", marginBottom: "16px",
              justifyContent: m.role === "user" ? "flex-end" : "flex-start",
            }}>
              <div style={{
                maxWidth: "85%",
                background: m.role === "user" ? COLORS.navy : COLORS.cream,
                color: m.role === "user" ? COLORS.cream : COLORS.text,
                border: m.role === "user" ? "none" : `1px solid ${COLORS.border}`,
                padding: "12px 16px", borderRadius: "4px",
                fontFamily: FONTS.serif, fontSize: "14.5px", lineHeight: 1.65,
                whiteSpace: "pre-wrap",
              }}>{m.content}</div>
            </div>
          ))}
          {loading && (
            <div style={{ display: "flex" }}>
              <div style={{
                background: COLORS.cream, border: `1px solid ${COLORS.border}`,
                padding: "12px 16px", borderRadius: "4px",
                color: COLORS.textMuted, fontFamily: FONTS.serif,
                fontSize: "14px", fontStyle: "italic",
              }}>Dale is typing…</div>
            </div>
          )}
          <div ref={messagesEndRef}/>
        </div>

        {/* Input */}
        <div style={{
          background: COLORS.cream, padding: "14px 18px",
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex", gap: "10px",
        }}>
          <input value={input} onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask Dale a question…"
            style={{
              flex: 1, padding: "11px 14px",
              border: `1px solid ${COLORS.border}`, borderRadius: "2px",
              fontFamily: FONTS.serif, fontSize: "14px",
              background: COLORS.creamLight, color: COLORS.text,
              outline: "none",
            }}/>
          <button onClick={() => send()} disabled={loading || !input.trim()} style={{
            background: COLORS.navy, color: COLORS.cream,
            border: "none", padding: "0 22px",
            fontFamily: FONTS.sans, fontSize: "12px", fontWeight: 600,
            letterSpacing: "1px", textTransform: "uppercase",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading || !input.trim() ? 0.5 : 1,
            borderRadius: "2px",
          }}>Send</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// DISCLOSURES PAGE — where Dale's voice leaks through
// ============================================================
function DisclosuresPage({ isMobile }) {
  return (
    <div style={{ background: COLORS.cream, paddingBottom: "64px" }}>
      <PageHeader title="Disclosures" subtitle="Plain language. Plainly stated." isMobile={isMobile} />

      <div style={{
        maxWidth: "780px", margin: "0 auto",
        padding: isMobile ? "48px 20px" : "72px 32px",
        fontFamily: FONTS.serif, fontSize: "15.5px",
        lineHeight: 1.75, color: COLORS.text,
      }}>
        <p><strong style={{color: COLORS.navy}}>Regulatory Status.</strong> Heartland Prosperity
        Advisors is not currently registered as an investment advisor with the U.S. Securities
        and Exchange Commission or with the Oklahoma Department of Securities. Our planning
        services are offered on a fee-based, non-discretionary consulting basis. We are working
        toward state registration as the practice scales.</p>

        <p><strong style={{color: COLORS.navy}}>Specialty Platforms.</strong> The "Heartland
        Innovation Platforms" referenced throughout this site — Oil &amp; Gas Convergence,
        Precious Metals Digitization, Agricultural Disruption, QSR Technology, and Sovereign
        Digital Assets — are research themes developed in-house. They are not formal indices.
        They are not benchmarked against any third-party standard. Allocations to specialty
        platforms (including the Elk City Land Trust and the Terry Bricker Precious Metals
        Program) are not registered securities and are offered only to qualified clients
        following a suitability review.</p>

        <p><strong style={{color: COLORS.navy}}>Performance.</strong> Past performance is not
        indicative of future results. Research note projections — including but not limited to
        the 47% five-year annualized return target referenced in the Elk City thesis — are
        based on proprietary models that have not been independently verified or audited. The
        models are maintained by our lead analyst, Randy Holloway.</p>

        <p><strong style={{color: COLORS.navy}}>Affiliated Parties.</strong> Terry Bricker
        (Precious Metals Specialist) is the brother-in-law of Dale Bricker. The Terry Bricker
        Precious Metals Program is operated as a separate business entity. Heartland Prosperity
        Advisors receives a referral arrangement on client allocations to the Program. This
        relationship is disclosed at engagement.</p>

        <p><strong style={{color: COLORS.navy}}>Certifications.</strong> The "Certified Wealth
        Strategist™" designation held by Dale Bricker was awarded through a continuing education
        program in 2018. It is not a credential issued by the CFP Board, the CFA Institute, or
        any state regulatory body. It is a designation Dale values personally.</p>

        <p><strong style={{color: COLORS.navy}}>Communications.</strong> Heartland Prosperity
        Advisors communicates with clients primarily by phone, in person, and by email. Our
        firm email is hosted on a standard commercial provider. This is normal.</p>

        <p><strong style={{color: COLORS.navy}}>Not Financial Advice.</strong> Content on this
        website, in our research notes, and in our chat assistant is informational and reflects
        the views and convictions of Dale Bricker and the Heartland Prosperity research team.
        It is not personalized financial advice. Before acting on anything you read here, talk
        to a licensed advisor in your state. Talk to your spouse. Talk to your pastor if that
        is meaningful to you. We are not a substitute for any of those people.</p>

        <p style={{
          marginTop: "40px", paddingTop: "24px",
          borderTop: `1px solid ${COLORS.border}`,
          fontStyle: "italic", color: COLORS.textMuted, fontSize: "14px",
        }}>
          This page is updated as our practice evolves. Last reviewed: Q1 2026.
        </p>
      </div>
    </div>
  );
}

// ============================================================
// CONTACT PAGE
// ============================================================
function ContactPage({ isMobile }) {
  const [sent, setSent] = useState(false);
  return (
    <div style={{ background: COLORS.cream, paddingBottom: "80px" }}>
      <PageHeader title="Contact" subtitle="Let's talk." isMobile={isMobile} />

      <div style={{
        maxWidth: "880px", margin: "0 auto",
        padding: isMobile ? "48px 20px" : "72px 32px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
        gap: isMobile ? "40px" : "56px",
      }}>
        <div>
          <h2 style={{
            fontFamily: FONTS.display, fontSize: "24px",
            color: COLORS.navy, fontWeight: 600, margin: "0 0 20px",
          }}>Schedule a Discovery Call</h2>
          <p style={{
            fontFamily: FONTS.serif, fontSize: "16px",
            color: COLORS.text, lineHeight: 1.7, marginBottom: "28px",
          }}>Tell us a little about yourself and what brought you to our site.
          We will respond within one business day, usually sooner.</p>

          {sent ? (
            <div style={{
              background: COLORS.creamLight, border: `1px solid ${COLORS.ochre}`,
              padding: "24px", borderRadius: "2px",
            }}>
              <div style={{
                fontFamily: FONTS.display, fontSize: "18px",
                color: COLORS.navy, fontWeight: 600, marginBottom: "10px",
              }}>Message received.</div>
              <p style={{
                fontFamily: FONTS.serif, fontSize: "14px",
                color: COLORS.text, lineHeight: 1.6, margin: 0,
              }}>Dale will be in touch within one business day. Thank you for reaching out.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{
              display: "flex", flexDirection: "column", gap: "16px",
            }}>
              {[
                { label: "Your Name", type: "text", required: true },
                { label: "Email Address", type: "email", required: true },
                { label: "City &amp; State", type: "text", required: false },
              ].map((f, i) => (
                <div key={i}>
                  <label style={{
                    display: "block", fontFamily: FONTS.sans,
                    fontSize: "11px", letterSpacing: "1.5px",
                    textTransform: "uppercase", color: COLORS.textMuted,
                    marginBottom: "6px", fontWeight: 600,
                  }} dangerouslySetInnerHTML={{__html: f.label + (f.required ? " *" : "")}}/>
                  <input type={f.type} required={f.required} style={{
                    width: "100%", padding: "11px 14px",
                    border: `1px solid ${COLORS.border}`, borderRadius: "2px",
                    fontFamily: FONTS.serif, fontSize: "15px",
                    background: COLORS.creamLight, color: COLORS.text,
                    outline: "none", boxSizing: "border-box",
                  }}/>
                </div>
              ))}
              <div>
                <label style={{
                  display: "block", fontFamily: FONTS.sans,
                  fontSize: "11px", letterSpacing: "1.5px",
                  textTransform: "uppercase", color: COLORS.textMuted,
                  marginBottom: "6px", fontWeight: 600,
                }}>How Can We Help? *</label>
                <textarea required rows={4} style={{
                  width: "100%", padding: "11px 14px",
                  border: `1px solid ${COLORS.border}`, borderRadius: "2px",
                  fontFamily: FONTS.serif, fontSize: "15px",
                  background: COLORS.creamLight, color: COLORS.text,
                  outline: "none", resize: "vertical", boxSizing: "border-box",
                }}/>
              </div>
              <button type="submit" style={{
                background: COLORS.navy, color: COLORS.cream,
                border: "none", padding: "14px 28px",
                fontFamily: FONTS.sans, fontSize: "13px", fontWeight: 600,
                letterSpacing: "1px", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
                alignSelf: "flex-start",
              }}>Send Message</button>
            </form>
          )}
        </div>

        <div>
          <h2 style={{
            fontFamily: FONTS.display, fontSize: "20px",
            color: COLORS.navy, fontWeight: 600, margin: "0 0 20px",
          }}>Office</h2>
          <div style={{
            fontFamily: FONTS.serif, fontSize: "15px",
            color: COLORS.text, lineHeight: 1.8, marginBottom: "28px",
          }}>
            Heartland Prosperity Advisors<br/>
            3500 S Boulevard, Ste 3B #119<br/>
            Edmond, OK 73013
          </div>

          <h2 style={{
            fontFamily: FONTS.display, fontSize: "20px",
            color: COLORS.navy, fontWeight: 600, margin: "0 0 14px",
          }}>Email</h2>
          <div style={{
            fontFamily: FONTS.serif, fontSize: "15px",
            color: COLORS.text, lineHeight: 1.8, marginBottom: "28px",
          }}>
            dale@heartlandprosperityadvisors.com
          </div>

          <h2 style={{
            fontFamily: FONTS.display, fontSize: "20px",
            color: COLORS.navy, fontWeight: 600, margin: "0 0 14px",
          }}>Hours</h2>
          <div style={{
            fontFamily: FONTS.serif, fontSize: "15px",
            color: COLORS.text, lineHeight: 1.8,
          }}>
            Monday – Friday<br/>
            8:00 AM – 5:30 PM Central<br/>
            <span style={{ color: COLORS.textMuted, fontSize: "13px", fontStyle: "italic" }}>
              Wednesday mornings: Bible study at First Baptist Edmond
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SHARED COMPONENTS
// ============================================================
function PageHeader({ title, subtitle, isMobile }) {
  return (
    <div style={{
      background: COLORS.navy, color: COLORS.cream,
      padding: isMobile ? "48px 20px 40px" : "72px 32px 56px",
      borderBottom: `3px solid ${COLORS.ochre}`,
      position: "relative", overflow: "hidden",
    }}>
      <FlagBackdrop/>
      <div style={{
        maxWidth: "1180px", margin: "0 auto",
        position: "relative", zIndex: 2,
      }}>
        <h1 style={{
          fontFamily: FONTS.display,
          fontSize: isMobile ? "32px" : "42px",
          fontWeight: 400, margin: "0 0 12px",
          color: COLORS.cream,
        }}>{title}</h1>
        <p style={{
          fontFamily: FONTS.serif, fontSize: isMobile ? "16px" : "18px",
          color: COLORS.ochreLight, margin: 0, fontStyle: "italic",
        }}>{subtitle}</p>
      </div>
    </div>
  );
}

function Footer({ setPage, isMobile }) {
  return (
    <footer style={{
      background: COLORS.navyDark, color: COLORS.cream,
      padding: isMobile ? "40px 20px 28px" : "56px 32px 32px",
      borderTop: `3px solid ${COLORS.ochre}`,
    }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr",
          gap: isMobile ? "28px" : "48px", marginBottom: "32px",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <HeartlandLogo size={36}/>
              <div>
                <div style={{ fontFamily: FONTS.display, fontSize: "17px",
                  fontWeight: 600, color: COLORS.cream }}>Heartland Prosperity</div>
                <div style={{ fontFamily: FONTS.sans, fontSize: "10px",
                  letterSpacing: "1.5px", color: COLORS.ochreLight,
                  textTransform: "uppercase", marginTop: "2px" }}>Advisors · Est. 2014</div>
              </div>
            </div>
            <p style={{
              fontFamily: FONTS.serif, fontSize: "14px",
              color: "rgba(245,241,232,0.65)", lineHeight: 1.7,
              maxWidth: "380px",
            }}>Independent fiduciary planning, retirement income strategy, and disruptive
            innovation research for the families of Central Oklahoma.</p>
          </div>

          <div>
            <div style={{
              fontFamily: FONTS.sans, fontSize: "11px",
              letterSpacing: "1.5px", textTransform: "uppercase",
              color: COLORS.ochreLight, fontWeight: 600, marginBottom: "14px",
            }}>Firm</div>
            {[
              {id: "about", label: "About"},
              {id: "services", label: "Services"},
              {id: "research", label: "Research"},
              {id: "contact", label: "Contact"},
            ].map(l => (
              <a key={l.id} onClick={() => { setPage(l.id); window.scrollTo({top:0,behavior:"instant"}); }} style={{
                display: "block", fontFamily: FONTS.serif, fontSize: "14px",
                color: "rgba(245,241,232,0.75)", marginBottom: "8px",
                cursor: "pointer", textDecoration: "none",
              }}>{l.label}</a>
            ))}
          </div>

          <div>
            <div style={{
              fontFamily: FONTS.sans, fontSize: "11px",
              letterSpacing: "1.5px", textTransform: "uppercase",
              color: COLORS.ochreLight, fontWeight: 600, marginBottom: "14px",
            }}>Legal</div>
            <a onClick={() => { setPage("disclosures"); window.scrollTo({top:0,behavior:"instant"}); }} style={{
              display: "block", fontFamily: FONTS.serif, fontSize: "14px",
              color: "rgba(245,241,232,0.75)", marginBottom: "8px", cursor: "pointer",
            }}>Disclosures</a>
            <div style={{
              fontFamily: FONTS.serif, fontSize: "13px",
              color: "rgba(245,241,232,0.55)", marginTop: "16px", lineHeight: 1.6,
            }}>
              3500 S Boulevard, Ste 3B #119<br/>
              Edmond, OK 73013
            </div>
          </div>
        </div>

        <div style={{
          borderTop: `1px solid rgba(168,132,58,0.25)`,
          paddingTop: "24px", display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: "12px",
        }}>
          <div style={{
            fontFamily: FONTS.sans, fontSize: "11px",
            color: "rgba(245,241,232,0.45)", letterSpacing: "0.5px",
          }}>
            © 2014–2026 Heartland Prosperity Advisors. All rights reserved.
          </div>
          <div style={{
            fontFamily: FONTS.sans, fontSize: "11px",
            color: "rgba(245,241,232,0.45)", letterSpacing: "0.5px",
            fontStyle: "italic",
          }}>
            Faith. Family. Fiduciary.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN APP
// ============================================================
export default function HeartlandProsperity() {
  const [page, setPage] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Load Source Serif Pro from Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div style={{
      minHeight: "100vh", background: COLORS.cream,
      color: COLORS.text, fontFamily: FONTS.serif,
    }}>
      <Nav currentPage={page} setPage={setPage} isMobile={isMobile}/>
      <AnnouncementBar setPage={setPage} isMobile={isMobile}/>
      {page === "home" && <HomePage setPage={setPage} isMobile={isMobile}/>}
      {page === "about" && <AboutPage isMobile={isMobile}/>}
      {page === "services" && <ServicesPage setPage={setPage} isMobile={isMobile}/>}
      {page === "research" && <ResearchPage isMobile={isMobile}/>}
      {page === "disclosures" && <DisclosuresPage isMobile={isMobile}/>}
      {page === "contact" && <ContactPage isMobile={isMobile}/>}
      <Footer setPage={setPage} isMobile={isMobile}/>
    </div>
  );
}
