// SnooperOverlay: fires the Advisor Check animation once per browser session.
// The animation itself lives in advisor-check.js.

import "./advisor-check.js";

const COOKIE = "hpa_scare_seen";

function alreadySeen() {
  return document.cookie.split("; ").some(c => c.startsWith(COOKIE + "="));
}
function markSeen() {
  // No expiry = session cookie, cleared when the browser closes.
  document.cookie = `${COOKIE}=1; path=/; SameSite=Lax`;
}

export function triggerScare() {
  if (alreadySeen()) return;
  if (!window.AdvisorCheck) return;
  markSeen();
  window.AdvisorCheck.play();
}

// Kept so App.jsx doesn't need to change. Renders nothing.
export default function SnooperOverlay() {
  return null;
}
