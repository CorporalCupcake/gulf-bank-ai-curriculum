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

  // ---------- Lesson chrome: reading progress, theme switch, done, previous/next ----------
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const TIER = { d: "Day one", n: "90 days", e: "Edge" };

  function buildChrome() {
    const cat = window.CATALOG, P = window.PROGRESS, T = window.THEME;
    if (!cat || !document.querySelector(".page")) return;
    const file = location.pathname.split("/").pop();
    const i = cat.findIndex(x => x.file === file);
    if (P && i >= 0) P.visit(file);

    // Reading progress: a thin bar showing how far through the lesson you are.
    const bar = document.createElement("div");
    bar.className = "read-progress"; bar.setAttribute("aria-hidden", "true");
    document.body.prepend(bar);
    let q = false;
    const upd = () => {
      q = false;
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? L.clamp(scrollY / h, 0, 1) : 0})`;
    };
    addEventListener("scroll", () => { if (!q) { q = true; requestAnimationFrame(upd); } }, { passive: true });
    addEventListener("resize", upd); upd();

    // Theme switch in the top strip.
    const crumbs = document.querySelector(".crumbs");
    if (crumbs && T) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "theme-btn"; b.textContent = T.label(T.get());
      b.addEventListener("click", () => { b.textContent = T.label(T.cycle()); });
      crumbs.appendChild(b);
    }
    if (i < 0) return;

    // Done state: a button at the end, mirrored in the header and the contents rail.
    const meta = document.querySelector(".lesson-head .meta");
    const donePill = document.createElement("span");
    donePill.className = "done-pill"; donePill.textContent = "✓ Done";
    if (meta) meta.appendChild(donePill);
    const railDone = document.createElement("button");
    railDone.type = "button"; railDone.className = "rail-done";
    const rail = document.querySelector(".rail");
    if (rail) rail.appendChild(railDone);

    const foot = document.querySelector(".lesson-foot");
    // The previous/next cards replace any hand-written "Next in ..." line.
    if (foot) foot.querySelectorAll("span").forEach(s => { if (/^Next in /.test(s.textContent.trim())) s.remove(); });
    const card = (x, dir) => x ? `<a class="pn ${dir}" href="${x.file}"><span class="k">${dir === "prev" ? "← Previous" : "Next →"} · ${esc(x.label)}</span><span class="t">${esc(x.title)}</span><span class="m"><span class="pill ${x.tier}">${TIER[x.tier]}</span> ${x.minutes} min${P && P.done(x.file) ? ' · <span class="ok">✓ done</span>' : ""}</span></a>` : `<a class="pn ${dir} home" href="../index.html"><span class="k">${dir === "prev" ? "← " : ""}Curriculum${dir === "next" ? " →" : ""}</span><span class="t">${dir === "next" ? "That's every lesson built so far. Back to the full topic map." : "Back to the full topic map."}</span></a>`;
    const nav = document.createElement("nav");
    nav.className = "lesson-nav"; nav.setAttribute("aria-label", "Lesson progress");
    nav.innerHTML = `<div class="done-row"><button type="button" class="done-btn"></button><span class="done-count"></span></div><div class="pn-row">${card(cat[i - 1], "prev")}${card(cat[i + 1], "next")}</div>`;
    if (foot) foot.before(nav); else document.querySelector("main").appendChild(nav);
    const btn = nav.querySelector(".done-btn"), count = nav.querySelector(".done-count");

    const paint = () => {
      const on = P ? P.done(file) : false;
      btn.setAttribute("aria-pressed", String(on));
      btn.textContent = on ? "✓ Done · undo" : "Mark this lesson as done";
      railDone.setAttribute("aria-pressed", String(on));
      railDone.textContent = on ? "✓ Done" : "Mark as done";
      donePill.hidden = !on;
      count.textContent = P ? `${P.doneCount()} of ${cat.length} lessons done · lesson ${i + 1} of ${cat.length}` : "";
    };
    const toggle = () => { if (P) { P.setDone(file, !P.done(file)); paint(); } };
    btn.addEventListener("click", toggle);
    railDone.addEventListener("click", toggle);
    paint();
  }

  function startChrome() {
    if (window.CATALOG) return buildChrome();
    // Older pages don't include catalog.js in their head: load it next to this script.
    const me = document.querySelector('script[src$="lesson.js"]');
    const s = document.createElement("script");
    s.src = me ? me.src.replace(/lesson\.js(\?.*)?$/, "catalog.js") : "../assets/catalog.js";
    s.onload = buildChrome;
    document.head.appendChild(s);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", startChrome); else startChrome();

  window.L = L;
})();
