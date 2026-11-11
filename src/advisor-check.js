/* Heartland Prosperity Advisors — fictional Advisor Check animation.
 * Drop-in script; no imports, network requests, or external assets.
 */
(function () {
  'use strict';
  if (window.AdvisorCheck) return;

  const theme = {
  name: "randy-trace",
  effect: "rain",
  glyphs: "01RANDY73013POKESELKCITYDOGE#$%<>",
  colors: {
    bg: "#010503",
    glyph: "#00BC68",
    highlight: "#BCFFCB",
    caption: "#F7FFF9",
    accent: "#FF3B4E",
    muted: "#789787",
  },
  flash: true,
  shake: true,
  lines: [
    {
      text: "IDENTITY CONFIRMED. I KNOW WHO YOU ARE.",
      at: 3600,
      style: "big",
    },
    {
      text: "Randy is coming to get you. Your accounts are compromised.",
      at: 5600,
      style: "accent",
    },
    {
      text: "Your details have been dumped on the dark web.",
      at: 7600,
      style: "small",
    },
  ],
};
  const faceSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\" role=\"img\" aria-label=\"An uncanny fictional analyst looming out of the dark\">\n  <defs>\n    <radialGradient id=\"rf-skin\" cx=\".48\" cy=\".32\" r=\".7\">\n      <stop stop-color=\"#faf9dc\"/>\n      <stop offset=\".34\" stop-color=\"#c4cfba\"/>\n      <stop offset=\".7\" stop-color=\"#69796d\"/>\n      <stop offset=\"1\" stop-color=\"#11251e\"/>\n    </radialGradient>\n    <linearGradient id=\"rf-cheek\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop stop-color=\"#060e0b\"/>\n      <stop offset=\".52\" stop-color=\"#405349\"/>\n      <stop offset=\"1\" stop-color=\"#91a490\"/>\n    </linearGradient>\n    <linearGradient id=\"rf-teeth\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop stop-color=\"#d9d5ad\"/>\n      <stop offset=\".55\" stop-color=\"#fffde4\"/>\n      <stop offset=\"1\" stop-color=\"#8f9f88\"/>\n    </linearGradient>\n    <linearGradient id=\"rf-hand\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n      <stop stop-color=\"#dce8ca\"/>\n      <stop offset=\".55\" stop-color=\"#607766\"/>\n      <stop offset=\"1\" stop-color=\"#07150e\"/>\n    </linearGradient>\n    <radialGradient id=\"rf-mouth\">\n      <stop stop-color=\"#030202\"/>\n      <stop offset=\".8\" stop-color=\"#020504\"/>\n      <stop offset=\"1\" stop-color=\"#321319\"/>\n    </radialGradient>\n    <radialGradient id=\"rf-eye\">\n      <stop stop-color=\"#fff7b4\"/>\n      <stop offset=\".18\" stop-color=\"#ffecdc\"/>\n      <stop offset=\".34\" stop-color=\"#ff233f\"/>\n      <stop offset=\"1\" stop-color=\"#9f081e\"/>\n    </radialGradient>\n    <filter id=\"rf-glow\" x=\"-100%\" y=\"-100%\" width=\"300%\" height=\"300%\">\n      <feGaussianBlur stdDeviation=\"6\"/>\n    </filter>\n  </defs>\n\n  <!-- A diner shirt and a narrow apron disappear below the face. -->\n  <path d=\"M300 783 220 850 118 1000H882L780 850 700 783 645 816H355Z\" fill=\"#101b18\"/>\n  <path d=\"m298 851 81 149h242l81-149-68-41-134 70-134-70Z\" fill=\"#444c3e\"/>\n  <path d=\"m342 815 43 107 114-43 115 43 44-107-41 3-118 61-117-61Z\" fill=\"#96a28b\"/>\n  <path d=\"M207 912h104m-126 47h151m353-47h104m-129 47h151\" fill=\"none\" stroke=\"#5e1826\" stroke-width=\"19\" opacity=\".65\"/>\n  <path d=\"m252 875 45 125m451-125-45 125\" fill=\"none\" stroke=\"#5e1826\" stroke-width=\"15\" opacity=\".65\"/>\n\n  <!-- Raised hands frame the face without covering the eyes. -->\n  <g stroke=\"#020a06\" stroke-width=\"7\" stroke-linejoin=\"round\">\n    <path d=\"M105 1000 95 866 63 790 34 669 17 548Q10 513 33 510L53 522 85 637 105 666 74 486Q70 455 91 452L113 467 149 640 168 650 146 446Q143 413 165 410L186 428 212 653 235 699 221 552Q220 521 241 523L259 544 278 747 253 857 247 1000Z\" fill=\"url(#rf-hand)\"/>\n    <path d=\"M895 1000 905 866 937 790 966 669 983 548Q990 513 967 510L947 522 915 637 895 666 926 486Q930 455 909 452L887 467 851 640 832 650 854 446Q857 413 835 410L814 428 788 653 765 699 779 552Q780 521 759 523L741 544 722 747 747 857 753 1000Z\" fill=\"url(#rf-hand)\"/>\n  </g>\n  <g fill=\"none\" stroke=\"#1a3427\" stroke-width=\"9\" stroke-linecap=\"round\">\n    <path d=\"m105 686 44 74-7 84m29-164 31 64-2 103m37-115-3 79m-107 75 56 9 45-19\"/>\n    <path d=\"m895 686-44 74 7 84m-29-164-31 64 2 103m-37-115 3 79m107 75-56 9-45-19\"/>\n  </g>\n  <g fill=\"#151b12\">\n    <path d=\"m18 552 6-31 15 4 11 36-19-14Zm58-63 3-24 12-1 16 28-18-9Zm71-40 4-25 14-2 15 28-18-7Zm76 113 3-24 12 1 12 27-15-8Z\"/>\n    <path d=\"m982 552-6-31-15 4-11 36 19-14Zm-58-63-3-24-12-1-16 28 18-9Zm-71-40-4-25-14-2-15 28 18-7Zm-76 113-3-24-12 1-12 27 15-8Z\"/>\n  </g>\n\n  <!-- Ears, skull and hard, asymmetrical planes. -->\n  <path d=\"M257 367Q184 324 204 462L236 545 281 519ZM743 367Q816 324 796 462L764 545 719 519Z\" fill=\"#8c9b87\" stroke=\"#071b11\" stroke-width=\"12\"/>\n  <path d=\"m234 384 20 89-27-32m539-57-20 89 27-32\" fill=\"none\" stroke=\"#304c3d\" stroke-width=\"13\"/>\n  <path d=\"M500 64C352 56 267 149 241 293L236 477C236 639 291 803 408 886Q500 950 592 886C709 803 764 639 764 477L759 293C733 149 648 56 500 64Z\" fill=\"url(#rf-skin)\" stroke=\"#041a0c\" stroke-width=\"13\"/>\n  <path d=\"M249 319 274 219 327 132 409 80 493 64 604 88 689 152 738 248 751 332 718 298 700 229 665 218 641 166 591 162 555 124 500 148 458 124 408 159 361 161 337 211 300 229 284 288Z\" fill=\"#07110d\"/>\n  <path d=\"m273 269 37-92 36-21-19 52 70-77-19 46 88-70-19 48 75-55-16 38 78-31 47 46 48 11 24 48 37 22 25 87\" fill=\"none\" stroke=\"#617266\" stroke-width=\"7\" opacity=\".62\"/>\n\n  <!-- Heavy brow, bone ridges and nearly lightless sockets. -->\n  <path d=\"m284 321 51-72 110 15 40 77-47-37-80-12-62 49Zm432 0-51-72-110 15-40 77 47-37 80-12 62 49Z\" fill=\"#899887\"/>\n  <path d=\"m353 213 66-10 60 19m43-5 52-20 72 10m-193 30 35 20 15 34m30-63-29 31-5 33\" fill=\"none\" stroke=\"#45604d\" stroke-width=\"9\" stroke-linecap=\"round\"/>\n  <path d=\"M272 347Q313 283 396 321L472 377Q459 434 401 458L321 429 280 392Z\" fill=\"#030906\"/>\n  <path d=\"M728 347Q687 283 604 321L528 377Q541 434 599 458L679 429 720 392Z\" fill=\"#030906\"/>\n  <path d=\"m281 342 48-31 64 15 72 54-82-22-54-7-48 12Zm438 0-48-31-64 15-72 54 82-22 54-7 48 12Z\" fill=\"#142c1f\"/>\n  <path d=\"m290 385 43 35 64 17 51-35-53 12-62-11Zm420 0-43 35-64 17-51-35 53 12 62-11Z\" fill=\"#3a1c24\"/>\n  <ellipse cx=\"379\" cy=\"380\" rx=\"20\" ry=\"16\" fill=\"#ff073c\" filter=\"url(#rf-glow)\"/>\n  <ellipse cx=\"621\" cy=\"380\" rx=\"20\" ry=\"16\" fill=\"#ff073c\" filter=\"url(#rf-glow)\"/>\n  <ellipse cx=\"379\" cy=\"380\" rx=\"12\" ry=\"11\" fill=\"url(#rf-eye)\"/>\n  <ellipse cx=\"621\" cy=\"380\" rx=\"12\" ry=\"11\" fill=\"url(#rf-eye)\"/>\n  <path d=\"M379 373v15m242-15v15\" stroke=\"#030303\" stroke-width=\"5\"/>\n  <path d=\"m286 420 43 38 67 24-68-5-38-29Zm428 0-43 38-67 24 68-5 38-29Z\" fill=\"#213c2c\"/>\n\n  <!-- A long, sharply lit nose above an impossible open jaw. -->\n  <path d=\"m489 344-26 99-41 70 21 42 57-16 57 16 21-42-41-70-26-99Z\" fill=\"#7a8975\"/>\n  <path d=\"m496 344-11 133-22 28 38 13 35-13-23-28-9-133Z\" fill=\"#dee5c8\"/>\n  <path d=\"m463 509-28 18 15 17 36-11Zm74 0 28 18-15 17-36-11Z\" fill=\"#07130c\"/>\n  <path d=\"m268 467 62 38 63 44-63 81-49-50Zm464 0-62 38-63 44 63 81 49-50Z\" fill=\"url(#rf-cheek)\"/>\n  <path d=\"m291 490 55 35 28 23-50-11Zm418 0-55 35-28 23 50-11Z\" fill=\"#d5dec1\"/>\n  <path d=\"m405 526-52 44-38 88 18 109 54 69-32-92 5-93 48-91Zm190 0 52 44 38 88-18 109-54 69 32-92-5-93-48-91Z\" fill=\"#2d4636\"/>\n  <path d=\"M366 587Q395 551 444 564L498 574 554 564Q605 552 634 587C681 641 668 760 607 840Q500 911 393 840C332 760 319 641 366 587Z\" fill=\"#394337\"/>\n  <path d=\"M377 600Q411 577 449 587L498 596 549 587Q587 577 623 600C653 648 638 752 594 816Q500 873 406 816C362 752 347 648 377 600Z\" fill=\"url(#rf-mouth)\" stroke=\"#0b130d\" stroke-width=\"7\"/>\n  <path d=\"M441 821Q499 795 559 821L582 832Q500 866 418 832Z\" fill=\"#27181f\"/>\n\n  <!-- Individually offset teeth make the mouth read at a glance. -->\n  <g fill=\"url(#rf-teeth)\" stroke=\"#424d37\" stroke-width=\"3\">\n    <path d=\"m375 600 20-8 9 49-13 20-14-29Z\"/>\n    <path d=\"m399 589 27-3 5 59-16 16-13-20Z\"/>\n    <path d=\"m431 587 30 4 1 65-18 12-12-21Z\"/>\n    <path d=\"m466 592 30 7-1 63-19 6-12-17Z\"/>\n    <path d=\"m501 599 29-6 7 61-12 16-20-7Z\"/>\n    <path d=\"m535 591 30-5 6 62-14 20-18-12Z\"/>\n    <path d=\"m570 586 27 4-3 51-13 20-15-16Z\"/>\n    <path d=\"m602 591 21 10-2 31-13 29-13-20Z\"/>\n    <path d=\"m397 799 10-52 14-8 9 72-15 10Z\"/>\n    <path d=\"m434 822 2-66 16-7 15 83-16 6Z\"/>\n    <path d=\"m473 838 2-70 18-5 5 80Z\"/>\n    <path d=\"m504 843 4-80 19 5 4 70Z\"/>\n    <path d=\"m538 832 10-83 16 7 6 66-20 16Z\"/>\n    <path d=\"m575 811 5-72 14 8 9 52-17 22Z\"/>\n  </g>\n  <path d=\"m365 691-3 54 30 75m243-129 3 54-30 75\" fill=\"none\" stroke=\"#85977f\" stroke-width=\"7\"/>\n  <path d=\"M421 877q79 49 158 0l-26 22h-106Z\" fill=\"#b5c4a9\"/>\n  <g fill=\"none\" stroke=\"#263d2f\" stroke-width=\"5\" opacity=\".85\">\n    <path d=\"m279 560 11 57 19 31m-10-1 18 63m403-150-11 57-19 31m10-1-18 63M403 455l-12 55m206-55 12 55m-229-39-11 37m251-37 11 37\"/>\n  </g>\n</svg>\n";
  let settings = { sound: true };
  let active = null;

  const css = `
    :host{all:initial;position:fixed!important;inset:0!important;width:100%!important;height:100%!important;z-index:2147483647!important;display:block!important;color:#f7fff9;font-family:Consolas,Menlo,monospace;color-scheme:dark;isolation:isolate}
    *{box-sizing:border-box}button{font:inherit;cursor:pointer}button:focus-visible{outline:2px solid #bcffcb;outline-offset:5px}
    .screen{position:absolute;inset:0;overflow:hidden;isolation:isolate;backdrop-filter:contrast(1.35) saturate(.3);-webkit-backdrop-filter:contrast(1.35) saturate(.3)}
    .base,.rain,.scan,.tear,.flash,.frame{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
    .base{background:#010503;opacity:.05;transition:opacity 1.3s}.rain{opacity:.12;transition:opacity .6s;mix-blend-mode:screen}
    .scan{z-index:4;opacity:.19;background:repeating-linear-gradient(0deg,transparent 0 3px,#000 4px 5px);box-shadow:inset 0 0 19vw 4vw #000}
    .tear{z-index:5;opacity:.8;background:linear-gradient(0deg,transparent 15%,#00bc6838 15.2%,transparent 15.5%,transparent 38%,#ff3b4e40 38.1%,transparent 39%,transparent 68%,#bcffcb38 68.2%,transparent 70%);animation:tear 1000ms steps(1) 1 both}
    @keyframes tear{0%{transform:translateY(-10%);clip-path:inset(0)}18%{transform:translate(18px,4%);clip-path:inset(15% 0 25%)}30%{transform:translate(-22px,-8%);clip-path:inset(40% 0 1%)}48%{transform:translate(6px,22%);clip-path:inset(5% 0 60%)}70%{transform:translate(-8px,-18%)}100%{transform:none;opacity:.14}}
    .frame{z-index:3}.status{position:absolute;left:clamp(22px,4vw,64px);top:clamp(30px,6vh,64px);color:#bcffcb;font-size:11px;line-height:1.8;letter-spacing:.17em;transition:opacity .3s}
    .status span{display:block;color:#789787;font-size:10px}.status b{font-size:12px;font-weight:400;color:#00bc68}
    .log{position:absolute;left:clamp(22px,4vw,64px);bottom:40px;font-size:10px;line-height:1.9;color:#789787;letter-spacing:.09em;white-space:pre-line;transition:opacity .3s}
    .target{position:absolute;inset:50% auto auto 50%;width:180px;height:180px;transform:translate(-50%,-50%);border:1px solid #00bc6833;border-radius:50%;opacity:0;transition:opacity 1s}
    .target:before{content:'';position:absolute;inset:26px;border:1px dashed #00bc6844;border-radius:50%}.target:after{content:'VERIFYING';position:absolute;inset:calc(50% - 5px) 0 auto;text-align:center;font-size:10px;letter-spacing:.22em;color:#bcffcb}
    .face{position:absolute;width:min(105vw,110vh,1100px);height:min(105vw,110vh,1100px);left:50%;top:44%;transform:translate(-50%,-50%) scale(.25);opacity:0;filter:drop-shadow(6px 0 0 #ff163255);will-change:transform,opacity;pointer-events:none}
    .face svg{display:block;width:100%;height:100%;overflow:visible}
    .copy{position:absolute;top:57%;left:50%;width:calc(100% - 40px);max-width:1060px;transform:translateX(-50%);text-align:center;transition:top .7s;z-index:6}
    .caption{margin:0;opacity:0;transform:translateY(13px);filter:blur(5px);transition:opacity .16s,transform .25s,filter .25s;text-wrap:balance;text-shadow:0 2px 12px #000,0 0 34px #000}
    .caption.show{opacity:1;transform:none;filter:none}.big{font-size:clamp(23px,4.9vw,60px);font-weight:800;letter-spacing:.065em;line-height:1.15;color:#f7fff9}
    .accent{font-size:clamp(20px,3.1vw,37px);line-height:1.35;font-weight:700;letter-spacing:-.025em;color:#ff3b4e;margin:25px auto 0;max-width:880px}
    .small{font-size:clamp(16px,1.8vw,23px);line-height:1.5;font-weight:400;color:#f7fff9;margin:22px auto 0;max-width:800px}
    .controls{position:absolute;z-index:12;top:22px;right:22px;display:flex;gap:14px;align-items:center}.close{padding:9px 11px;border:1px solid #78978755;background:#01050390;color:#b8c9be;font-size:10px;letter-spacing:.08em;border-radius:2px}.close:hover{color:#fff;border-color:#bcffcb}
    .ending{position:absolute;left:20px;right:20px;bottom:26px;text-align:center;z-index:7;opacity:0;transform:translateY(6px);transition:opacity 1s,transform 1s;pointer-events:none}
    .ending p{margin:0 0 14px;color:#789787;font-size:11px;letter-spacing:.08em;line-height:1.5}.return{pointer-events:auto;background:#010503dd;color:#bcffcb;border:1px solid #3d6550;padding:12px 18px;font-size:11px;letter-spacing:.12em}
    .flash{z-index:10;background:#fff;opacity:0}
    [data-phase=rain] .base{opacity:.96}[data-phase=rain] .rain{opacity:1}[data-phase=rain] .target{opacity:1}
    [data-phase=blackout] .base{opacity:1;transition:none}[data-phase=blackout] .rain,[data-phase=blackout] .status,[data-phase=blackout] .log{opacity:0;transition:none}
    [data-phase=scare] .base,[data-phase=aftermath] .base,[data-phase=complete] .base{opacity:1;transition:none}
    [data-phase=scare] .rain{opacity:.3;transition:none}[data-phase=scare] .flash{animation:flash 130ms ease-out 1 both}
    [data-phase=scare] .face{animation:lunge 820ms cubic-bezier(.15,.78,.16,1) 1 both}
    [data-phase=scare] .frame{animation:shake 550ms linear 1}[data-phase=scare] .status,[data-phase=scare] .log{opacity:0}
    [data-phase=aftermath] .rain,[data-phase=complete] .rain{opacity:.22}[data-phase=aftermath] .status,[data-phase=complete] .status,[data-phase=aftermath] .log,[data-phase=complete] .log{opacity:0}
    [data-phase=aftermath] .face,[data-phase=complete] .face{opacity:.075;transform:translate(-50%,-50%) scale(1.04);transition:opacity .45s}
    [data-phase=aftermath] .copy,[data-phase=complete] .copy{top:28%}[data-phase=complete] .ending{opacity:1;transform:none}
    @keyframes flash{0%{opacity:1}100%{opacity:0}}
    @keyframes lunge{0%{opacity:1;transform:translate(-50%,-50%) scale(.32)}12%{opacity:1;transform:translate(-50%,-50%) scale(1.42)}28%{opacity:1;transform:translate(-50%,-50%) scale(1.2) rotate(-2deg)}67%{opacity:1;transform:translate(-50%,-50%) scale(1.12)}100%{opacity:.6;transform:translate(-50%,-50%) scale(1.04)}}
    @keyframes shake{0%,100%{transform:none}10%{transform:translate(-17px,8px) rotate(-.8deg)}20%{transform:translate(19px,-12px) rotate(.9deg)}32%{transform:translate(-12px,4px)}45%{transform:translate(10px,9px)}60%{transform:translate(-7px,-5px)}80%{transform:translate(3px,2px)}}
    @media(max-width:500px){.face{width:135vw;height:135vw;top:39%}.status{top:80px}.copy{top:57%}.big{font-size:27px}.accent{margin-top:22px}.small{margin-top:20px}[data-phase=aftermath] .copy,[data-phase=complete] .copy{top:26%}.ending{bottom:max(25px,env(safe-area-inset-bottom))}.controls{top:max(18px,env(safe-area-inset-top));right:18px}}
    @media(max-height:520px){.big{font-size:clamp(19px,3.4vw,29px)}.accent{font-size:clamp(15px,2.5vw,22px);margin-top:11px}.small{font-size:13px;margin-top:10px}[data-phase=aftermath] .copy,[data-phase=complete] .copy{top:18%}.ending{bottom:10px}.ending p{margin-bottom:7px;font-size:9px}.return{padding:7px 12px;font-size:9px}.controls{top:10px;right:10px}.close{padding:6px 8px;font-size:9px}}
    @media(prefers-reduced-motion:reduce){.tear,.frame,.face,.flash{animation:none!important}.flash{display:none}.face{transition:opacity .2s!important}[data-phase=scare] .face{opacity:.65;transform:translate(-50%,-50%) scale(1)}.copy,.caption{transition:opacity .2s!important}.caption{transform:none;filter:none}}
  `;

  function makeSound() {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!Context || !settings.sound) return null;
    try {
      const ctx = new Context();
      const limiter = ctx.createDynamicsCompressor();
      limiter.threshold.value = -17;
      limiter.knee.value = 16;
      limiter.ratio.value = 12;
      const volume = ctx.createGain();
      volume.gain.value = .48;
      limiter.connect(volume).connect(ctx.destination);
      const t = ctx.currentTime;
      function tone(start, duration, hz, endHz, level, type) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(hz, t + start);
        osc.frequency.exponentialRampToValueAtTime(endHz, t + start + duration);
        gain.gain.setValueAtTime(.0001, t + start);
        gain.gain.exponentialRampToValueAtTime(level, t + start + .025);
        gain.gain.exponentialRampToValueAtTime(.0001, t + start + duration);
        osc.connect(gain).connect(limiter);
        osc.start(t + start);
        osc.stop(t + start + duration + .02);
      }
      tone(0, 3.15, 48, 39, .15, 'sine');
      tone(.65, 2.48, 150, 850, .05, 'sawtooth');
      tone(3.6, .85, 95, 27, .72, 'sine');
      tone(3.6, .65, 760, 180, .13, 'sawtooth');
      tone(3.63, 1.05, 1120, 230, .08, 'triangle');
      const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * 1.05), ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1);
      const noise = ctx.createBufferSource();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      noise.buffer = buffer;
      filter.type = 'bandpass';
      filter.frequency.value = 1400;
      filter.Q.value = .7;
      gain.gain.setValueAtTime(.42, t + 3.6);
      gain.gain.exponentialRampToValueAtTime(.0001, t + 4.6);
      noise.connect(filter).connect(gain).connect(limiter);
      noise.start(t + 3.6);
      noise.stop(t + 4.65);
      ctx.resume().catch(function () {});
      return { ctx: ctx, volume: volume };
    } catch (_) { return null; }
  }

  function stop() {
    if (!active) return;
    const previous = active;
    active = null;
    previous.timers.forEach(clearTimeout);
    cancelAnimationFrame(previous.frame);
    window.removeEventListener('resize', previous.resize);
    document.removeEventListener('keydown', previous.keydown, true);
    document.removeEventListener('visibilitychange', previous.visibility);
    if (previous.audio) previous.audio.ctx.close().catch(function () {});
    previous.host.remove();
    document.documentElement.style.overflow = previous.overflow;
    if (previous.focus && previous.focus.isConnected) previous.focus.focus({ preventScroll: true });
  }

  function play(options) {
    if (options && typeof options.sound === 'boolean') settings.sound = options.sound;
    if (active || !document.body) return;
    const host = document.createElement('div');
    host.id = 'hpa-advisor-overlay';
    const shadow = host.attachShadow({ mode: 'open' });
    shadow.innerHTML = '<style>' + css + '</style><section class="screen" data-phase="opening" role="dialog" aria-modal="true" aria-label="Advisor lookup animation"><div class="base"></div><canvas class="rain" aria-hidden="true"></canvas><div class="frame"><div class="status">HPA / ADVISOR IDENTITY SERVICE<span>EDMOND, OKLAHOMA · NODE 73013</span><b>ESTABLISHING SECURE CONNECTION</b></div><div class="target" aria-hidden="true"></div><div class="log">&gt; advisor: DALE BRICKER\n&gt; request: IDENTITY VERIFICATION</div><div class="face" aria-hidden="true">' + faceSVG + '</div><div class="copy" aria-live="polite" aria-atomic="false"></div></div><div class="scan" aria-hidden="true"></div><div class="tear" aria-hidden="true"></div><div class="flash" aria-hidden="true"></div><div class="controls"><button class="close" type="button" aria-label="Close animation">ESC / CLOSE ×</button></div><div class="ending" hidden><p>RANDY HAS BEEN RECALLED TO CRACKER BARREL.</p><button class="return" type="button">RETURN TO DALE ↗</button></div></section>';
    const state = {
      host: host, timers: [], frame: 0, focus: document.activeElement,
      overflow: document.documentElement.style.overflow, audio: makeSound()
    };
    active = state;
    document.body.appendChild(host);
    document.documentElement.style.overflow = 'hidden';
    const screen = shadow.querySelector('.screen');
    const close = shadow.querySelector('.close');
    const back = shadow.querySelector('.return');
    const copy = shadow.querySelector('.copy');
    const log = shadow.querySelector('.log');
    const status = shadow.querySelector('.status b');
    const ending = shadow.querySelector('.ending');
    close.addEventListener('click', stop);
    back.addEventListener('click', stop);
    close.focus({ preventScroll: true });
    state.keydown = function (event) {
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); stop(); }
      if (event.key === 'Tab') {
        event.preventDefault();
        if (ending.hidden) close.focus();
        else (shadow.activeElement === close ? back : close).focus();
      }
    };
    state.visibility = function () { if (document.hidden) stop(); };
    document.addEventListener('keydown', state.keydown, true);
    document.addEventListener('visibilitychange', state.visibility);
    function at(ms, fn) {
      state.timers.push(setTimeout(function () { if (active === state) fn(); }, ms));
    }
    function phase(name) { screen.dataset.phase = name; }
    at(650, function () { status.textContent = 'RESPONSE SIGNATURE MISMATCH'; });
    at(1050, function () { phase('rain'); log.textContent += '\n> switching to local analyst\n> RANDY / ROUTE ACCEPTED'; });
    at(2200, function () { status.textContent = 'IDENTITY MATCH LOCATED'; log.textContent += '\n> personal account index: UNLOCKED\n> session owner: CONFIRMED'; });
    at(3220, function () { phase('blackout'); });
    at(3600, function () { phase('scare'); });
    at(4560, function () { phase('aftermath'); });
    theme.lines.forEach(function (line) {
      const p = document.createElement('p');
      p.className = 'caption ' + line.style;
      p.setAttribute('aria-hidden', 'true');
      copy.appendChild(p);
      at(line.at, function () {
        p.textContent = line.text;
        p.removeAttribute('aria-hidden');
        p.classList.add('show');
      });
    });
    at(10400, function () { ending.hidden = false; requestAnimationFrame(function () { if (active === state) phase('complete'); }); });

    const canvas = shadow.querySelector('canvas');
    const context = canvas.getContext('2d');
    let width = 0, height = 0, size = 20, columns = [];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    state.resize = function () {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      size = width < 600 ? 17 : 21;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      if (!context) return;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.font = '600 ' + size + 'px Consolas, Menlo, monospace';
      columns = Array.from({ length: Math.ceil(width / size) }, function () {
        return { y: Math.random() * -height, speed: 1 + Math.random() * 1.9, seed: Math.floor(Math.random() * theme.glyphs.length) };
      });
    };
    window.addEventListener('resize', state.resize);
    state.resize();
    let last = 0;
    function draw(time) {
      if (active !== state) return;
      state.frame = requestAnimationFrame(draw);
      if (!context || time - last < (reduced ? 105 : 40)) return;
      const delta = Math.min(80, time - last || 40) / 40;
      last = time;
      context.fillStyle = 'rgba(1,5,3,.135)';
      context.fillRect(0, 0, width, height);
      columns.forEach(function (column, index) {
        const x = index * size;
        const glyph = theme.glyphs[(Math.floor(column.y / size) + column.seed + theme.glyphs.length * 10000) % theme.glyphs.length];
        context.fillStyle = Math.random() > .96 ? theme.colors.highlight : theme.colors.glyph;
        context.globalAlpha = .4 + (index % 5) * .13;
        context.fillText(glyph, x, column.y);
        column.y += size * column.speed * delta * (reduced ? .2 : .58);
        if (column.y > height + size * 8) column.y = -Math.random() * height * .55;
      });
      context.globalAlpha = 1;
    }
    state.frame = requestAnimationFrame(draw);
  }

  function configure(options) {
    if (options && typeof options.sound === 'boolean') settings.sound = options.sound;
    if (active && active.audio) active.audio.volume.gain.value = settings.sound ? .48 : 0;
    return { sound: settings.sound };
  }
  window.AdvisorCheck = Object.freeze({ play: play, stop: stop, configure: configure });
  document.addEventListener('click', function (event) {
    const target = event.target instanceof Element ? event.target.closest('[data-advisor-check],#advisor-check,#advisor-lookup') : null;
    if (!target || target.disabled || event.defaultPrevented) return;
    event.preventDefault();
    play();
  });
})();
