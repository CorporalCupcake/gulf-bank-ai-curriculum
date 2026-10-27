// Gulf Bank AI Curriculum — shared lesson helpers.
// Exposes window.L with maths, SVG and animation utilities, and builds the contents rail.
(function () {
  const L = {};

  // ---------- Maths ----------
  // Abramowitz–Stegun 7.1.26 erf approximation, max error ~1.5e-7.
  L.erf = function (x) {
    const s = Math.sign(x); x = Math.abs(x);
    const t = 1 / (1 + 0.3275911 * x);
    const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
    return s * y;
  };
  L.normCdf = (x, mu = 0, sd = 1) => 0.5 * (1 + L.erf((x - mu) / (sd * Math.SQRT2)));
  L.normPdf = (x, mu = 0, sd = 1) => Math.exp(-0.5 * ((x - mu) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI));
  L.sigmoid = z => 1 / (1 + Math.exp(-z));
  L.logit = p => Math.log(p / (1 - p));
  L.clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  L.lerp = (a, b, t) => a + (b - a) * t;
  L.range = (a, b, n) => Array.from({ length: n }, (_, i) => a + (b - a) * i / (n - 1));

  // ---------- Formatting ----------
  L.fmtInt = v => Math.round(v).toLocaleString("en-US");
  L.fmtPct = (v, d = 1) => (100 * v).toFixed(d) + "%";
  L.fmtAED = v => "AED " + Math.round(v).toLocaleString("en-US");

  // ---------- SVG ----------
  const NS = "http://www.w3.org/2000/svg";
  L.svg = function (tag, attrs = {}, parent) {
    const el = document.createElementNS(NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(el);
    return el;
  };
  L.scale = (d0, d1, r0, r1) => v => r0 + (v - d0) / (d1 - d0) * (r1 - r0);
  L.path = pts => pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join("");

  // ---------- Motion ----------
  L.reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Tween a number from a to b, calling fn(value) each frame. Respects reduced motion.
  L.tween = function (a, b, ms, fn, done) {
    if (L.reduced || ms <= 0) { fn(b); if (done) done(); return; }
    const t0 = performance.now();
    const ease = t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    function step(now) {
      const t = Math.min(1, (now - t0) / ms);
      fn(a + (b - a) * ease(t));
      if (t < 1) requestAnimationFrame(step); else if (done) done();
    }
    requestAnimationFrame(step);
  };

  // ---------- Range inputs bound to outputs ----------
  L.bind = function (id, fmt, onInput) {
    const input = document.getElementById(id);
    const out = document.querySelector(`output[for="${id}"]`);
    const update = () => { if (out) out.textContent = fmt(+input.value); };
    input.addEventListener("input", () => { update(); onInput(+input.value); });
    update();
    return { input, set(v) { input.value = v; update(); } };
  };

  // ---------- Contents rail + scrollspy ----------
  function buildRail() {
    const rail = document.querySelector(".rail ol");
    const mobile = document.querySelector(".mobile-toc .reveal .ans");
    const parts = [...document.querySelectorAll("section.part")];
    if (!parts.length) return;
    let html = "";
    parts.forEach(p => {
      const h = p.querySelector(".part-head h2");
      html += `<li><a href="#${p.id}">${h.textContent}</a></li>`;
      p.querySelectorAll("h3.sub[id]").forEach(s => { html += `<li class="sub"><a href="#${s.id}">${s.textContent}</a></li>`; });
    });
    if (rail) rail.innerHTML = html;
    if (mobile) mobile.innerHTML = `<ol style="padding-left:1.2em;display:grid;gap:6px">${parts.map(p => `<li><a href="#${p.id}">${p.querySelector(".part-head h2").textContent}</a></li>`).join("")}</ol>`;
    if (!rail) return;
    const links = [...rail.querySelectorAll("a")];
    const targets = links.map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    let queued = false;
    const spy = () => {
      queued = false;
      let current = targets[0];
      for (const t of targets) if (t.getBoundingClientRect().top < window.innerHeight * 0.3) current = t;
      links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + current.id));
    };
    window.addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(spy); } }, { passive: true });
    spy();
  }
  document.addEventListener("DOMContentLoaded", buildRail);

  window.L = L;
})();
