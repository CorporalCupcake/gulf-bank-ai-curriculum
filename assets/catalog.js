// Gulf Bank AI Curriculum — the list of built lessons, in study order.
// The hub uses it for lesson cards and topic links; lessons use it for previous/next and progress.
// To add a lesson: add one entry here. `codes` are the hub topic codes the lesson covers.
window.CATALOG = [
  { file: "f1-vectors-matrices-geometry.html", module: "F1", title: "Vectors, Matrices and the Geometry of Meaning", codes: ["F1.1", "F1.2"], label: "F1.1 – F1.2", tier: "d", star: true, minutes: 45 },
  { file: "f1-gradients-optimisation.html", module: "F1", title: "Gradients, Backpropagation and Optimisation", codes: ["F1.3", "F1.8"], label: "F1.3 · F1.8", tier: "d", minutes: 40 },
  { file: "f1-probability-bayes-distributions.html", module: "F1", title: "Probability, Base Rates and the Shape of Data", codes: ["F1.4", "F1.5"], label: "F1.4 – F1.5", tier: "d", star: true, minutes: 40 },
  { file: "f1-likelihood-entropy.html", module: "F1", title: "Likelihood, Entropy and the Language of Training", codes: ["F1.6", "F1.7"], label: "F1.6 – F1.7", tier: "n", minutes: 45 },
  { file: "f2-uncertainty-intervals-bootstrap.html", module: "F2", title: "How Wrong Might This Number Be? Standard Errors, Intervals and the Bootstrap", codes: ["F2.1", "F2.2"], label: "F2.1 – F2.2", tier: "d", star: true, minutes: 40 },
  { file: "f2-tests-pvalues-power.html", module: "F2", title: "Hypothesis Tests, P-values, Many Comparisons and Power", codes: ["F2.3", "F2.4", "F2.7"], label: "F2.3 · F2.4 · F2.7", tier: "d", minutes: 50 },
  { file: "f2-regression-glms.html", module: "F2", title: "Regression and Generalised Linear Models", codes: ["F2.5"], label: "F2.5", tier: "d", minutes: 50 },
  { file: "f2-confounding-simpson-selection.html", module: "F2", title: "Confounding, Simpson's Paradox and Selection Bias", codes: ["F2.6"], label: "F2.6", tier: "d", star: true, minutes: 40 },
  { file: "f2-survival-analysis.html", module: "F2", title: "Survival Analysis: Time to Default, Churn and Dormancy", codes: ["F2.8"], label: "F2.8", tier: "n", minutes: 40 },
  { file: "f7-precision-recall-thresholds-calibration.html", module: "F7", title: "Precision, Recall, Thresholds and Calibration", codes: ["F7.1", "F7.2", "F7.3", "F7.4"], label: "F7.1 – F7.4", tier: "d", star: true, minutes: 35 },
  { file: "a1-know-your-agent.html", module: "A1", title: "Know Your Agent: How AI Agents Get Permission to Pay", codes: ["A1.1", "A1.2", "A1.3", "A1.4", "A1.5"], label: "A1.1 – A1.5", tier: "n", star: true, fast: true, minutes: 40 }
];

// Per-viewer progress, kept in this browser only. Every access is guarded: storage can be blocked.
window.PROGRESS = (function () {
  const KEY = "gbac.progress.v1";
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const write = s => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* not saved; page still works */ } };
  return {
    done(file) { return !!(read().done || {})[file]; },
    setDone(file, on) { const s = read(); s.done = s.done || {}; if (on) s.done[file] = Date.now(); else delete s.done[file]; write(s); },
    doneCount() { const d = read().done || {}; return window.CATALOG.filter(x => d[x.file]).length; },
    last() { return read().last || null; },
    visit(file) { const s = read(); s.last = file; write(s); }
  };
})();

// Theme: auto (follow the system), light or dark. Stored per viewer.
window.THEME = (function () {
  const KEY = "gbac.theme";
  const get = () => { try { return localStorage.getItem(KEY) || "auto"; } catch (e) { return "auto"; } };
  const apply = t => { if (t === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", t); };
  apply(get());
  return {
    get, apply,
    cycle() { const order = ["auto", "light", "dark"]; const t = order[(order.indexOf(get()) + 1) % 3]; try { localStorage.setItem(KEY, t); } catch (e) {} apply(t); return t; },
    label: t => ({ auto: "Theme: auto", light: "Theme: light", dark: "Theme: dark" })[t]
  };
})();
