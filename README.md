# EMS & Fire Exam Prep

A study site for people preparing for EMS certification (NREMT/EMT) and firefighting
certification (Firefighter I & II, NFPA 1001) exams.

No build step, no dependencies, no server. Open `index.html` in a browser and study.
Progress is saved in `localStorage` on the device, so there are no accounts and nothing
leaves the browser.

## What's in it

- **Practice quizzes** — pick a track (EMS, Fire, or Mixed), a topic, and a question count.
  Every answer is scored immediately with an explanation of *why* it is right.
- **Timed exam mode** — one minute per question, no feedback until the end, scored against
  a 75% practice target with a per-topic breakdown.
- **Missed-question drill** — the site remembers what you got wrong and can rebuild a quiz
  from just those.
- **Flashcards** — the numbers and mnemonics worth knowing cold: doses, CPR rates and depths,
  rule of nines, nozzle pressures, hydrant color codes, NFPA 704, LUNAR, RECEO-VS.
- **Progress dashboard** — recent scores, overall accuracy, and a weakest-topics list.

Current bank: 45 EMS questions across 5 domains, 42 fire questions across 8 domains,
and 44 flashcards. Every question carries an explanation.

## Running it

Open `index.html` directly in any browser — it works from the filesystem.

To serve it locally instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Adding questions

Question banks are plain JavaScript arrays in `js/data/`. Append an object in this shape:

```js
{
  id: "ems-air-13",              // unique; the "ems-"/"fire-" prefix sets the track
  domain: "Airway & Ventilation", // grouping; new domains appear in the topic dropdown automatically
  q: "The question text",
  choices: ["A", "B", "C", "D"],
  answer: 2,                      // zero-based index of the correct choice
  why: "Why that answer is correct, and ideally why the tempting wrong one isn't."
}
```

Answer order is shuffled at runtime, so position never gives the answer away.

Flashcards live in `js/data/flashcards.js` as `{ track, topic, front, back }`.

## Layout

```
index.html           dashboard: quiz builder, progress, weak topics
quiz.html            quiz runner (practice and timed exam modes)
flashcards.html      flashcard deck
css/styles.css       all styling
js/store.js          question pooling, shuffling, localStorage progress
js/quiz.js           quiz engine and results
js/home.js           dashboard
js/cards.js          flashcards
js/data/             question banks and flashcard deck
```

## Ideas for later

- Spaced repetition scheduling for flashcards
- Full 120-question exam simulation
- Image-based questions (SCBA components, ladder placement, NFPA placards)
- Export/import progress so it can move between devices
- Skill-sheet checklists for the practical exams

## Disclaimer

Study aid only. Questions are written against widely taught national material — the NREMT
cognitive exam blueprint, NFPA 1001, and standard IFSTA content — but they are **not actual
exam questions** and are not a substitute for a course, a textbook, or your medical director's
protocols. Drug doses, treatment steps, and fireground procedures vary by state, agency, and
protocol; always follow your own. Verify anything here against current guidelines before
relying on it in the field.
