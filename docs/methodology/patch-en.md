# Practice‑Oriented Web Design Education Through Incremental Projects

> **This revision retains the full argumentation of the original article while integrating the newly‑agreed course schedule (Weeks 1–5) and the shared‑repository architecture outlined in our follow‑up discussion.**

---

## Introduction and Rationale

_(unchanged text)_

## Class Structure: Theory, Guided Practice, and Commits

_(unchanged text)_

## Updated Week‑by‑Week Teaching Schedule (First Five Weeks)

| Week  | Focus                                       | Git / Repo Task                                                                                   |
| ----- | ------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **1** | **Setup – VS Code, Git, GitHub**            | Create personal repo from the template, add & push `README.md` with student handle.               |
| **2** | **Project Definition Workshop**             | Commit `project‑brief.md` **and** start `project.yaml` (metadata).                                |
| **3** | **Styling – Typography & Colour**           | Implement brand identity in HTML/CSS; commit first design assets.                                 |
| **4** | **Publishing & Metadata Submission**        | Enable GitHub Pages; submit PR to `/2025‑fall/students.yaml` _or_ push validated `project.yaml`.  |
| **5** | **Design‑Trend Analysis & Showroom Launch** | Peer‑review session; CI script builds course showroom from `students.yaml` and live project URLs. |

> After Week 5 the course resumes the previously described sprint rhythm (accessibility, interaction, testing, etc.). All later weeks remain exactly as in the original article.

## Repository Architecture and Content Flow (New Section)

```
web‑foundations/          ← canonical repo (shared lessons, templates, pedagogy)
└── docs/
    ├── lessons/          ← single source of truth, rendered on GH Pages
    ├── methodology/
    └── templates/

web‑design/               ← course instance repo
└── 2025‑fall/
    ├── lessons/          ← HTML redirectors → web‑foundations/docs/lessons/
    ├── students.yaml     ← PRs land here in Week 4
    ├── examples/         ← course‑specific demos
    └── index.html        ← showroom generated Week 5

student‑project‑template/ ← bare starter each learner forks/clones
└── project.yaml          ← their metadata (same keys as students.yaml)
```

- **Lesson re‑use:** Each file in `web‑design/2025‑fall/lessons/` is a minimal HTML auto‑forwarder (meta‑refresh) pointing to the canonical lesson URL. No duplication, no symlinks.
- **Privacy:** `students.yaml` stores only anonymous handles, repo URL, live URL, emoji icon, and short abstract.
- **Automation:** A GitHub Action rebuilds the showroom when `students.yaml` changes; it also lints YAML and pings broken live links.

_(All other sections — Benefits, Agile Critique, AI Ethics, Assessment Strategy, Conclusion, and References — remain verbatim from the original article.)_

---

## Key Challenges & Mitigations

| Challenge                              | Why it happens                                 | Mitigation in this course                                                                                                                                            |
| -------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open‑ended brief causes paralysis      | Too many options; weak abstraction skills      | Constrained domains + in‑class **Project Definition Workshop**; provide `project‑brief.md` template, moodboard time, and peer micro‑crit before committing (Week 2). |
| Fear of coding/CLI                     | Design‑first backgrounds; terminal anxiety     | **GUI‑first Git** (VS Code Source Control / GitHub Desktop) in Week 1; gradual CLI intro; weekly “Git tip”; pair programming on tricky weeks.                        |
| YAML/metadata errors                   | Indentation/syntax pitfalls; abstract thinking | Provide a **validated template** and an optional web form that **generates YAML**; CI YAML lint; exemplar `project.yaml` in the student template (Weeks 2–4).        |
| Irregular commit cadence               | Procrastination; time management               | “**Commit‑after‑class**” policy; CI reminder badges; lightweight dashboard of last‑push timestamps; gentle nudges in lab time.                                       |
| Over‑reliance on templates/AI          | Shortcut temptation                            | **Attribution & explanation** requirement; code walkthroughs; periodic 5‑minute viva; Moodle exam questions tied to each student’s repo history.                     |
| Accessibility deprioritized            | Visual polish eclipses usability               | Dedicated **a11y sprint** with automated checks (axe/Pa11y/Lighthouse); rubric points for keyboard nav, contrast, semantics.                                         |
| Sprint time pressure vs design quality | Creative work needs exploration                | Flexible scope; one **buffer/critique week**; encourage refactoring over feature creep; reflect on agile limits in creative contexts.                                |
| Tooling/setup friction                 | Diverse machines & configs                     | Full **Setup Week 1** with checklists; lab assistants/office hours; known‑good starter template; fallback instructions.                                              |
| Deployment failures                    | Pages config, build paths                      | Week 4 **GitHub Pages** walkthrough + CI link checks; documented fallback host; step‑by‑step troubleshooting guide.                                                  |
| Large‑cohort feedback load             | 120 students × weekly commits                  | Automate lint/a11y/link tests; **peer review** cycles; **rotating deep‑dives** by instructor/TA; rubricized comments.                                                |

## Necessary Side Knowledge (Tools & Concepts)

| Area                        | Minimum competency                                                                       | How/when we cover it                                        |
| --------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **VS Code**                 | Open folder, use Source Control, integrated terminal, extensions (Prettier, Live Server) | Week 1 setup; tips sprinkled weekly.                        |
| **Git & GitHub**            | clone/add/commit/push; read diffs; basic branching; open a PR                            | Week 1 (basics), Week 4 (PR); weekly “Git tip.”             |
| **GitHub Pages**            | Enable Pages; choose branch/folder; understand build timing                              | Week 4 publishing; CI status badge shown in showroom.       |
| **CLI basics**              | `pwd/ls/cd`; run `npm` scripts; read errors                                              | Week 1 optional CLI; reinforced when running linters/tests. |
| **Markdown**                | Write README, brief, issues; headings/lists/links                                        | Week 1 README; Week 2 project‑brief; ongoing in PRs.        |
| **YAML / JSON**             | Key‑value, lists, nesting; common lint rules                                             | Week 2–4 metadata; CI lint with clear error messages.       |
| **Browser DevTools**        | Inspect, responsive mode, Network, Lighthouse                                            | Week 3 styling; a11y/testing sprints later.                 |
| **Accessibility**           | Keyboard nav, alt text, landmarks/ARIA basics, contrast                                  | Dedicated a11y sprint (post‑Week 5); rubricized checks.     |
| **HTML/CSS**                | Semantic structure; box model; responsive layout (flex/grid); typography & color systems | Weeks 2–3 identity & layout; reinforced throughout.         |
| **JavaScript (light)**      | DOM selection, events; progressive enhancement mindset                                   | Introduced after Week 5; applied to interactions.           |
| **Linting/Formatting**      | Prettier; (ESLint if JS used)                                                            | Enabled in template; auto‑format on save from Week 1.       |
| **Assets & Performance**    | Image compression (Squoosh), SVG hygiene, basic perf budgeting                           | Ongoing; checklist before final submission.                 |
| **CI/CD basics**            | What a workflow is; reading job logs; fixing failing checks                              | Week 4 onward; students see Actions on showroom PRs.        |
| **Licensing & Attribution** | CC licenses; citing libraries/templates/AI assistance                                    | Stated in syllabus; required in README and commits.         |
| **Academic integrity & AI** | Disclosure norms; limits; reflective justification                                       | Policy in Week 1; enforced via viva + Moodle exam.          |

---

## Appendix: CI Automation for Course Showroom (GitHub Actions)

> Minimal, working setup to: (1) lint `students.yaml`, (2) build `index.html` showroom, (3) check links, (4) run basic accessibility scans. Designed to run on PRs and on pushes to `/2025-fall/`.

### 1) Workflow: `.github/workflows/showroom.yml`

```yaml
name: Course Showroom

on:
 push:
  paths:
   - '2025-fall/students.yaml'
   - 'scripts/**'
   - '.github/workflows/**'
 pull_request:
  paths:
   - '2025-fall/students.yaml'
   - 'scripts/**'
   - '.github/workflows/**'
 workflow_dispatch:

jobs:
 build:
  runs-on: ubuntu-latest
  steps:
   - name: Checkout
     uses: actions/checkout@v4

   - name: Setup Node
     uses: actions/setup-node@v4
     with:
      node-version: '20'

   - name: Install deps
     run: npm install

   - name: Lint YAML metadata
     run: npm run lint:yaml

   - name: Build showroom (index.html)
     run: npm run build:showroom

   - name: Check links
     run: npm run check:links

   - name: Prepare pa11y config from URLs
     run: node scripts/pa11y-config.mjs

   - name: Accessibility audit (pa11y-ci)
     run: npm run check:a11y

   - name: Auto-commit built index.html (push events only)
     if: github.event_name == 'push'
     uses: stefanzweifel/git-auto-commit-action@v5
     with:
      commit_message: 'chore(showroom): rebuild index.html'
      file_pattern: 2025-fall/index.html
```

### 2) `package.json`

```json
{
	"name": "course-automation",
	"private": true,
	"type": "module",
	"scripts": {
		"build:showroom": "node scripts/build-showroom.mjs",
		"lint:yaml": "node scripts/lint-yaml.mjs",
		"check:links": "node scripts/check-links.mjs",
		"check:a11y": "pa11y-ci"
	},
	"dependencies": {
		"js-yaml": "^4.1.0",
		"node-fetch": "^3.3.2",
		"pa11y-ci": "^3.1.0"
	}
}
```

### 3) `scripts/lint-yaml.mjs`

```js
import fs from 'node:fs';
import yaml from 'js-yaml';

const path = '2025-fall/students.yaml';
const text = fs.readFileSync(path, 'utf8');
let data;
try {
	data = yaml.load(text);
} catch (err) {
	console.error('YAML parse error in students.yaml:', err.message);
	process.exit(1);
}
if (!Array.isArray(data)) {
	console.error('students.yaml must be a YAML list (array)');
	process.exit(1);
}
const required = ['handle', 'project_title', 'repo', 'site'];
let ok = true;
for (const [i, item] of data.entries()) {
	for (const key of required) {
		if (!item[key]) {
			console.error(`Entry #${i} missing required key: ${key}`);
			ok = false;
		}
	}
}
if (!ok) process.exit(1);
console.log('students.yaml looks good ✔');
```

### 4) `scripts/build-showroom.mjs`

```js
import fs from 'node:fs';
import yaml from 'js-yaml';

const studentsPath = '2025-fall/students.yaml';
const outPath = '2025-fall/index.html';
const list = yaml.load(fs.readFileSync(studentsPath, 'utf8')) || [];

const card = (s) => `
  <article class="card">
    <h3>${s.emoji ?? '🌐'} ${s.project_title ?? '(Untitled)'}</h3>
    <p class="handle">@${s.handle}</p>
    <p class="abstract">${s.abstract ?? ''}</p>
    <p class="links">
      <a href="${s.site}" target="_blank" rel="noopener">Live</a>
      · <a href="${s.repo}" target="_blank" rel="noopener">Repo</a>
    </p>
  </article>`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>2025 Fall – Course Showroom</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Helvetica,Arial,sans-serif;margin:0;padding:2rem;}
    header{max-width:960px;margin:0 auto 1.5rem;}
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem;max-width:1200px;margin:0 auto;}
    .card{border:1px solid #e5e7eb;border-radius:12px;padding:1rem;}
    .handle{opacity:.7;font-size:.9rem;margin:.25rem 0 .5rem}
    .links a{text-decoration:none}
  </style>
</head>
<body>
  <header>
    <h1>2025 Fall · Course Showroom</h1>
    <p>Public projects submitted by anonymous handles. No personal data stored.</p>
  </header>
  <section class="grid">
    ${list.map(card).join('
')}
  </section>
</body>
</html>`;

fs.mkdirSync('2025-fall', { recursive: true });
fs.writeFileSync(outPath, html);
console.log('Built', outPath);

// Also write a temp URL list for other checks
const urls = list.flatMap((s) => [s.site, s.repo]).filter(Boolean);
fs.mkdirSync('tmp', { recursive: true });
fs.writeFileSync('tmp/urls.txt', urls.join('
'));
```

### 5) `scripts/check-links.mjs`

```js
import fs from 'node:fs';
import fetch from 'node-fetch';

const urls = fs.readFileSync('tmp/urls.txt', 'utf8').split(/
?
/).filter(Boolean);

let failed = false;
const headOrGet = async (url) => {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    if (res.status >= 400 || res.status === 405) {
      const res2 = await fetch(url, { method: 'GET' });
      return res2.status;
    }
    return res.status;
  } catch (e) {
    return 599; // network error pseudo-code
  }
};

const run = async () => {
  for (const url of urls) {
    const status = await headOrGet(url);
    const ok = status > 0 && status < 400;
    console.log(`${ok ? '✔' : '✖'} ${status} ${url}`);
    if (!ok) failed = true;
  }
  if (failed) process.exit(1);
};

run();
```

### 6) `scripts/pa11y-config.mjs`

```js
import fs from 'node:fs';

const urls = fs.readFileSync('tmp/urls.txt', 'utf8')
  .split(/
?
/)
  .filter((u) => u && !u.includes('github.com/')) // a11y on live sites only
  .map((u) => u.trim());

const cfg = {
  defaults: {
    standard: 'WCAG2AA',
    timeout: 30000
  },
  urls
};
fs.writeFileSync('.pa11yci.json', JSON.stringify(cfg, null, 2));
console.log('Wrote .pa11yci.json with', urls.length, 'urls');
```

### 7) `2025-fall/students.yaml` (example schema)

```yaml
- handle: pixelrita
  project_title: Magic Mirror
  repo: https://github.com/pixelrita/magic-mirror
  site: https://pixelrita.github.io/magic-mirror/
  emoji: '🪞'
  abstract: 'Exploring reflection and duality through interactive visuals.'
```

> **Privacy note:** Use only anonymous handles and public project URLs. Do not store names, emails, or personal identifiers.

---

**Badges for README** (optional):

```md
![Showroom](https://github.com/YOUR-ORG/web-design/actions/workflows/showroom.yml/badge.svg)
```

This appendix can be dropped into the course repo as-is. Replace `YOUR-ORG` with your namespace and adjust the semester path.
