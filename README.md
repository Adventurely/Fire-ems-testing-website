# GMVEMSC EMT Protocol Prep

An unofficial study site for the **Greater Miami Valley EMS Council (GMVEMSC) EMT Protocol
test** and the departmental skill evaluations that go with it — the testing packet used by
fire/EMS departments across Ohio EMS Region 2.

No build step, no dependencies, no server. Open `index.html` in a browser and study.
Progress is saved in `localStorage` on the device.

## What it covers

Content is organized to match the **GMVEMSC EMT Protocol Testing Summary** sheet:

| Section | What's in it |
| --- | --- |
| **Mega Code** | Adult and pediatric AED, CPR ratios/rates/depths (2002), resuscitation and field termination (2001), Cardiac / Stroke / Trauma Alerts (2009, 4017, 3018) |
| **Airway & Trauma** | Rescue airway scope limits (1008), advanced airway confirmation and EtCO2 (1009), CPAP, commercial tourniquets |
| **Medications** | The 8000-series formulary — albuterol, ipratropium, aspirin, epinephrine, naloxone, nitroglycerin, oral glucose, ondansetron — with doses, contraindications, and which need an MCP order at the EMT level |
| **Miscellaneous Skills** | 12-lead acquisition, EtCO2, spinal motion restriction (3017), glucometer and oral glucose, IN/IM medication routes, IV setup |

**115 questions**, each citing the standing order or skill sheet it came from, plus **47 flashcards**,
**9 practical skill-sheet checklists** transcribed from the Training Manual, and **10 training videos**.

### Handwritten items on the testing summary sheet

Departments annotate the EMT Protocol Testing Summary by hand. The additions are covered here:

| Handwritten item | Covered as |
| --- | --- |
| **Atrovent** (next to Albuterol) | Ipratropium, formulary 8023 — combined with the *first* albuterol dose only |
| **/IM** (next to Epinephrine) | Epinephrine 1:1,000 IM, formulary 8018 — weight ladder 0.15 / 0.3 / 0.5 mg, distinct from the auto-injector rule |
| **IN** (next to Naloxone) | Intranasal naloxone, formulary 8033 and the IN skill sheet — half the dose per nostril |
| **Zofran** (next to Oral Glucose) | Ondansetron, formulary 8038 |
| **IV SETUP** | Its own skill sheet, from the Premier Health / B.Braun locking hub and J-loop guide GMVEMSC distributes, plus the vascular access scope limits in 1012 and 1013 |

Three drugs were **struck through** on the sample sheet — **AtroPen**, **Diazepam / CANA Pen**, and
**DuoDote** — so no questions were written for them. They are nerve-agent antidotes belonging to the
6000-series special operations protocols. Strike-throughs are made by the individual department, so
confirm with your proctor before assuming they are off your test.

### Features

- **Practice mode** — instant feedback with an explanation and the protocol reference.
- **Timed exam mode** — one minute per question, scored against an 80% practice target with a
  per-topic breakdown.
- **Missed-question drill** — rebuilds a quiz from only what you got wrong.
- **Skill sheets** — the proctor's checklists (CPAP, AED, tourniquet, supraglottic airway, oxygen,
  EpiPen, intranasal meds, 12-lead) with tickable steps to rehearse against.
- **Training videos** — the Council's own published videos (CPAP, Narcan, SALT triage, triage tags,
  football equipment removal, MCI communications, Rescue Task Force), embedded click-to-play so nothing
  loads from YouTube until you ask for it. Skills the Council has no video for are listed as gaps rather
  than filled with third-party clips.
- **Progress dashboard** — recent scores, overall accuracy, weakest-topic ranking.

## Sources

Everything is derived from material GMVEMSC publishes publicly:

- [2026 GMVEMSC Protocol (Standing Orders)](https://gmvemsc.org/wp-content/uploads/2026/07/2026protocol.pdf) — last update 07/01/2026
- [2026 Protocol Addendum](https://gmvemsc.org/wp-content/uploads/2026/07/2026protocoladdendum.pdf)
- [2026 Standing Orders Training Manual](https://gmvemsc.org/wp-content/uploads/2026/09/2026trainingmanual.pdf) — the skill evaluation sheets
- [2026 Pediatric Dose Sheet](https://gmvemsc.org/wp-content/uploads/2026/09/2026peddosesheet.pdf)
- [Regional Protocol page](https://gmvemsc.org/regional-protocol/) and [Training Resources](https://gmvemsc.org/training-resources/)
- Videos from the Council's [YouTube channel](https://www.youtube.com/@greatermiamivalleyemscounc9857),
  each linked from its own GMVEMSC training-resources page. Every video ID in `js/data/videos.js` was
  verified against the YouTube oEmbed API, and the recorded `source` is the channel name YouTube reports.

GMVEMSC also posts the **official protocol tests** (EMR / EMT / AEMT / Paramedic / Skill Evaluator)
as Questbase quizzes, linked from the [Regional Protocol page](https://gmvemsc.org/regional-protocol/).
Those are the real thing — this site is rehearsal for them.

## Using it on a phone

The site is published as a private Claude Artifact:

**https://claude.ai/code/artifact/432a77df-7302-41f0-8435-6346243ac69a**

Open it on a phone, add it to the home screen, and it behaves like an app. It is private to the
account that published it until shared from the page's share menu. Quiz progress and skill-sheet
checkmarks are stored per device, so phone and laptop keep separate progress.

One limitation: the artifact host blocks third-party embeds, so video players do not run there.
The video page detects this and turns each thumbnail into an "Open on YouTube" link instead.

To republish after changing the site:

```bash
python3 scripts/build-artifact.py
```

then publish `build/` to the same artifact URL.

### GitHub Pages

`.github/workflows/pages.yml` will deploy the site on every push to `main`, but it needs two things:

1. **A public repository.** Free GitHub Pages does not serve private repos.
2. **Pages enabled once by hand** — Settings → Pages → Source: "GitHub Actions".

Pages serves the site from its own origin, so YouTube embeds work there and the videos play inline.

## Running it

Open `index.html` directly in any browser. To serve it locally instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Adding questions

Banks are plain JavaScript arrays in `js/data/`. Append an object in this shape:

```js
{
  id: "rx-26",                  // unique
  section: "Medications",       // must match a section on the testing summary sheet
  domain: "Naloxone",           // finer grouping; new domains appear in the dropdown automatically
  ref: "8033",                  // protocol number or skill sheet page - shown to the user
  q: "The question text",
  choices: ["A", "B", "C", "D"],
  answer: 2,                    // zero-based index of the correct choice
  why: "Why it's correct, citing the protocol."
}
```

Answer order is shuffled at runtime, so position never gives the answer away.

## Layout

```
index.html           dashboard: quiz builder, progress, weak topics
quiz.html            quiz runner (practice and timed exam modes)
flashcards.html      flashcard deck
skills.html          practical skill sheet checklists
videos.html          training video library
css/styles.css       all styling
js/store.js          pooling, shuffling, localStorage progress
js/quiz.js           quiz engine and results
js/home.js           dashboard
js/cards.js          flashcards
js/sheets.js         skill sheets
js/videos.js         video library (click-to-play facade)
js/data/             question banks, flashcards, skill sheets
```

## Keeping it current

GMVEMSC revises the standing orders on a two-year cycle and issues addendums in between. When a
new protocol drops:

1. Download the new protocol and training manual from the Regional Protocol page.
2. Diff the sections cited in `ref` fields — doses and thresholds are where changes land.
3. Update the affected questions and flashcards, and bump the version note below.

**Content in this repo reflects the 2026 protocol, last updated 07/01/2026.**

### Adding a video

Only add a video after verifying it exists and confirming who published it:

```bash
curl -s "https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=VIDEO_ID&format=json"
```

Then append to `js/data/videos.js`. Set `official: true` only for videos the Council itself published,
`sheet` to link it to a skill sheet, and `caution` for anything whose technique differs from GMVEMSC
scope (the AHA Hands-Only CPR entries use this).

## Disclaimer

**This is an unofficial study aid.** It is not affiliated with, endorsed by, or produced by the
Greater Miami Valley EMS Council. The questions were written from publicly posted GMVEMSC documents
and are **not actual test questions**.

Protocols change. Doses, thresholds, scope limits and optional skills vary by agency and by what your
medical director has approved. **Verify everything here against the current standing orders before
relying on it**, and follow your own protocols and medical direction in the field. Nothing here
replaces your course, your instructor, or the official GMVEMSC documents.

Embedded videos remain the property of their publishers. This site is not affiliated with the Greater
Miami Valley EMS Council or the American Heart Association. CE credit for the Council's videos comes
from the post-test on the Council's own page, not from watching here.
