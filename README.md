# Gulf Bank AI Curriculum

A self-study curriculum for AI, ML and data science work at a Gulf bank. It's written as plain HTML, CSS and JavaScript, with no build step and no dependencies.

Open `index.html` in a browser to see the full topic map. Topics marked **Lesson** link to an interactive page in `lessons/`.

## Lessons built

- **F1 – Vectors, matrices and the geometry of meaning** (F1.1–F1.2): `lessons/f1-vectors-matrices-geometry.html`
- **F1 – Gradients, backpropagation and optimisation** (F1.3, F1.8): `lessons/f1-gradients-optimisation.html`
- **F1 – Probability, base rates and the shape of data** (F1.4–F1.5): `lessons/f1-probability-bayes-distributions.html`
- **F1 – Likelihood, entropy and the language of training** (F1.6–F1.7): `lessons/f1-likelihood-entropy.html`
- **F2 – Standard errors, intervals and the bootstrap** (F2.1–F2.2): `lessons/f2-uncertainty-intervals-bootstrap.html`
- **F2 – Hypothesis tests, p-values, many comparisons and power** (F2.3, F2.4, F2.7): `lessons/f2-tests-pvalues-power.html`
- **F2 – Regression and generalised linear models** (F2.5): `lessons/f2-regression-glms.html`
- **F2 – Confounding, Simpson's paradox and selection bias** (F2.6): `lessons/f2-confounding-simpson-selection.html`
- **F2 – Survival analysis** (F2.8): `lessons/f2-survival-analysis.html`
- **F7 – Precision, recall, thresholds and calibration**: `lessons/f7-precision-recall-thresholds-calibration.html`
- **A1 – Know Your Agent: agent identity and permissions for payments** (status checked 26 October 2026): `lessons/a1-know-your-agent.html`

## Layout

- `index.html`: the curriculum hub, with filters and search
- `assets/lesson.css`: shared lesson styles, with light and dark themes
- `assets/catalog.js`: the list of built lessons in study order, plus saved progress and theme. Add new lessons here.
- `assets/lesson.js`: shared helpers for the maths, SVG charts, animation and the contents rail
- `lessons/`: one page per lesson
