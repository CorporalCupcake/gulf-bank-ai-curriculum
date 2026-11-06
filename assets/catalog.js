// Gulf Bank AI Curriculum — the list of built lessons, in study order.
// The hub uses it for lesson cards and topic links; lessons use it for previous/next and progress.
// To add a lesson: add one entry here. `codes` are the hub topic codes the lesson covers.
window.CATALOG = [
  {file: "f1-vectors-matrices-geometry.html", module: "F1", title: "Vectors, Matrices and the Geometry of Meaning", codes: ["F1.1","F1.2"], label: "F1.1 – F1.2", tier: "d", star: true, minutes: 45},
  {file: "f1-gradients-optimisation.html", module: "F1", title: "Gradients, Backpropagation and Optimisation", codes: ["F1.3","F1.8"], label: "F1.3 · F1.8", tier: "d", minutes: 40},
  {file: "f1-probability-bayes-distributions.html", module: "F1", title: "Probability, Base Rates and the Shape of Data", codes: ["F1.4","F1.5"], label: "F1.4 – F1.5", tier: "d", star: true, minutes: 40},
  {file: "f1-likelihood-entropy.html", module: "F1", title: "Likelihood, Entropy and the Language of Training", codes: ["F1.6","F1.7"], label: "F1.6 – F1.7", tier: "n", minutes: 45},
  {file: "f2-uncertainty-intervals-bootstrap.html", module: "F2", title: "How Wrong Might This Number Be? Standard Errors, Intervals and the Bootstrap", codes: ["F2.1","F2.2"], label: "F2.1 – F2.2", tier: "d", star: true, minutes: 40},
  {file: "f2-tests-pvalues-power.html", module: "F2", title: "Hypothesis Tests, P-values, Many Comparisons and Power", codes: ["F2.3","F2.4","F2.7"], label: "F2.3 · F2.4 · F2.7", tier: "d", minutes: 50},
  {file: "f2-regression-glms.html", module: "F2", title: "Regression and Generalised Linear Models", codes: ["F2.5"], label: "F2.5", tier: "d", minutes: 50},
  {file: "f2-confounding-simpson-selection.html", module: "F2", title: "Confounding, Simpson's Paradox and Selection Bias", codes: ["F2.6"], label: "F2.6", tier: "d", star: true, minutes: 40},
  {file: "f2-survival-analysis.html", module: "F2", title: "Survival Analysis: Time to Default, Churn and Dormancy", codes: ["F2.8"], label: "F2.8", tier: "n", minutes: 40},
  {file: "f3-leakage-point-in-time.html", module: "F3", title: "Point-in-Time Correctness and Leakage", codes: ["F3.1"], label: "F3.1", tier: "d", star: true, minutes: 40},
  {file: "f3-eda-quality-visualisation.html", module: "F3", title: "Exploratory Analysis, Data Quality and Honest Charts", codes: ["F3.2","F3.8"], label: "F3.2 · F3.8", tier: "d", minutes: 45},
  {file: "f3-sql-thinking.html", module: "F3", title: "SQL Thinking: Joins, Windows and Aggregation", codes: ["F3.3"], label: "F3.3", tier: "d", minutes: 45},
  {file: "f3-feature-engineering.html", module: "F3", title: "Feature Engineering: Behaviour, Encoding, Missingness and Scale", codes: ["F3.4","F3.9"], label: "F3.4 · F3.9", tier: "d", minutes: 45},
  {file: "f3-imbalanced-data.html", module: "F3", title: "Imbalanced Data: When the Thing You Want Is Rare", codes: ["F3.5"], label: "F3.5", tier: "d", minutes: 35},
  {file: "f3-experiments-and-writeups.html", module: "F3", title: "Experiments, and Analyses That Survive Review", codes: ["F3.6","F3.7"], label: "F3.6 · F3.7", tier: "d", minutes: 45},
  {file: "f4-bias-variance-and-generalisation.html", module: "F4", title: "Bias, Variance and Generalisation, and the Regression Models That Keep Winning", codes: ["F4.1","F4.2"], label: "F4.1 · F4.2", tier: "d", minutes: 45},
  {file: "f4-decision-trees-random-forests-and.html", module: "F4", title: "Trees, Forests, Boosting and the Art of Holding Them Back", codes: ["F4.3","F4.4"], label: "F4.3 · F4.4", tier: "d", minutes: 45, star: true},
  {file: "f4-cross-validation-including-temporal-splits.html", module: "F4", title: "Honest Validation and Honest Segments: Cross-Validation, Time Splits and Clustering", codes: ["F4.5","F4.6"], label: "F4.5 · F4.6", tier: "d", minutes: 40},
  {file: "f4-anomaly-detection-isolation-forests-autoencoders.html", module: "F4", title: "Anomaly Detection and Dimensionality Reduction: Finding the Odd One Out", codes: ["F4.7","F4.8"], label: "F4.7 · F4.8", tier: "n", minutes: 40},
  {file: "f4-hyperparameter-tuning-grid-random-and.html", module: "F4", title: "Tuning Models Without Fooling Yourself: Search Strategies and the Classic Algorithms", codes: ["F4.9","F4.10"], label: "F4.9 · F4.10", tier: "d", minutes: 40},
  {file: "f5-neurons-layers-and-backpropagation.html", module: "F5", title: "Neural Networks from the Inside: Neurons, Backpropagation and Trainable Depth", codes: ["F5.1","F5.2"], label: "F5.1 · F5.2", tier: "d", minutes: 45},
  {file: "f5-convolutions.html", module: "F5", title: "Convolutions and Recurrence: Finding Patterns in Space and in Time", codes: ["F5.3","F5.4"], label: "F5.3 · F5.4", tier: "n", minutes: 40},
  {file: "f5-attention.html", module: "F5", title: "Attention and Embeddings: How Models Look Things Up and Where Meaning Lives", codes: ["F5.5","F5.6"], label: "F5.5 · F5.6", tier: "d", minutes: 45, star: true},
  {file: "f5-self-supervised-and-contrastive-learning.html", module: "F5", title: "Learning Without Labels, and Generating the Data That Isn't There", codes: ["F5.7","F5.8"], label: "F5.7 · F5.8", tier: "n", minutes: 45},
  {file: "f6-loss-functions-and-what-they.html", module: "F6", title: "Loss Functions, Learning Rates and What Training Really Optimises", codes: ["F6.1","F6.2"], label: "F6.1 · F6.2", tier: "d", minutes: 40},
  {file: "f6-overfitting-dropout-and-data-augmentation.html", module: "F6", title: "Keeping a Model Honest: Overfitting, Dropout, Augmentation, Loss Curves and Low-Precision Training", codes: ["F6.3","F6.4","F6.5"], label: "F6.3 – F6.5", tier: "n", minutes: 40},
  {file: "f7-precision-recall-thresholds-calibration.html", module: "F7", title: "Precision, Recall, Thresholds and Calibration", codes: ["F7.1","F7.2","F7.3","F7.4"], label: "F7.1 – F7.4", tier: "d", star: true, minutes: 35},
  {file: "f7-forecast-and-regression-metrics-mae.html", module: "F7", title: "Scoring Forecasts and Rankings: MAE, RMSE, MAPE, Quantile Loss, NDCG", codes: ["F7.5","F7.6"], label: "F7.5 · F7.6", tier: "d", minutes: 40},
  {file: "f7-drift-monitoring-psi-ks-and.html", module: "F7", title: "Drift, Uncertainty and Stress: Knowing When a Model Has Stopped Being Right", codes: ["F7.7","F7.8","F7.9"], label: "F7.7 – F7.9", tier: "d", minutes: 45},
  {file: "f8-global-versus-local-explanations.html", module: "F8", title: "Explaining a Model: Global Versus Local, and What SHAP Does and Does Not Say", codes: ["F8.1","F8.2"], label: "F8.1 · F8.2", tier: "d", minutes: 40, star: true},
  {file: "f8-partial-dependence-and-ice-plots.html", module: "F8", title: "What Would Change the Answer? Partial Dependence, Counterfactuals and the Limits of Explanation", codes: ["F8.3","F8.4","F8.5"], label: "F8.3 – F8.5", tier: "n", minutes: 45},
  {file: "f9-time-series-and-forecasting.html", module: "F9", title: "Time Series and Graphs: Forecasting What Comes Next, and Seeing Who Is Connected to Whom", codes: ["F9.1","F9.2"], label: "F9.1 · F9.2", tier: "n", minutes: 45, star: true},
  {file: "f9-causal-inference.html", module: "F9", title: "Causal Inference and Bayesian Thinking: Did It Work, and How Sure Are We?", codes: ["F9.3","F9.4"], label: "F9.3 · F9.4", tier: "n", minutes: 42, star: true},
  {file: "f9-recommender-systems-and-ranking.html", module: "F9", title: "Recommenders and Document AI: Next-Best-Product, Ranking, and Reading Cheques and Scans", codes: ["F9.5","F9.6"], label: "F9.5 · F9.6", tier: "n", minutes: 45},
  {file: "f9-bandits-and-reinforcement-learning.html", module: "F9", title: "Learning by Trying, Listening to Signals, and the Word-Count Baseline", codes: ["F9.7","F9.8","F9.9"], label: "F9.7 – F9.9", tier: "n", minutes: 45},
  {file: "f10-reading-python-fluently.html", module: "F10", title: "Reading Python Fluently, and Catching Analyses That Are Hollow", codes: ["F10.1","F10.2"], label: "F10.1 · F10.2", tier: "d", minutes: 40, star: true},
  {file: "a1-know-your-agent.html", module: "A1", title: "Know Your Agent: How AI Agents Get Permission to Pay", codes: ["A1.1","A1.2","A1.3","A1.4","A1.5"], label: "A1.1 – A1.5", tier: "n", star: true, fast: true, minutes: 40}
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
  const get = () => { try { return localStorage.getItem(KEY) || "dark"; } catch (e) { return "dark"; } };
  const apply = t => { if (t === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", t); };
  apply(get());
  return {
    get, apply,
    cycle() { const order = ["dark", "light", "auto"]; const t = order[(order.indexOf(get()) + 1) % 3]; try { localStorage.setItem(KEY, t); } catch (e) {} apply(t); return t; },
    label: t => ({ auto: "Theme: auto", light: "Theme: light", dark: "Theme: dark" })[t]
  };
})();
