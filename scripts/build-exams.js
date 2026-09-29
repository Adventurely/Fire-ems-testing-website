#!/usr/bin/env node
/* Builds the five fixed practice exam forms.
 *
 * Forms are FIXED, not random: an exam you retake must be the same exam, or a
 * score means nothing. Each form is blueprinted across the seven protocol
 * sections in proportion to the question pool, the way a real exam form is.
 *
 * The pool is 205 and 5 x 45 = 225, so 20 slots repeat across forms. Dealing
 * round-robin from a seeded shuffle spreads those repeats thinly and keeps any
 * single form free of duplicates.
 *
 * Run: node scripts/build-exams.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.dirname(__dirname);
const BANKS = ["questions-general", "questions-megacode", "questions-skills",
               "questions-trauma", "questions-medical", "questions-meds"];

let src = "";
for (const f of BANKS) src += fs.readFileSync(path.join(ROOT, "js/data", f + ".js"), "utf8") + "\n";
src += "\nmodule.exports = [...Q_GENERAL, ...Q_MEGACODE, ...Q_SKILLS, ...Q_TRAUMA, ...Q_MEDICAL, ...Q_MEDS];";
const tmp = path.join(require("os").tmpdir(), "_exam_bank.js");
fs.writeFileSync(tmp, src);
const ALL = require(tmp);

const FORMS = 5;
const LENGTH = 45;
const MINUTES = 30;

/* Per-form blueprint, proportional to the pool. Sums to 45. */
const BLUEPRINT = {
  "Patient Management": 7,
  "Mega Code": 6,
  "Airway & Trauma": 6,
  "Trauma Care": 7,
  "Medical & OB": 7,
  "Medications": 7,
  "Miscellaneous Skills": 5
};

const total = Object.values(BLUEPRINT).reduce((a, b) => a + b, 0);
if (total !== LENGTH) throw new Error("Blueprint sums to " + total + ", expected " + LENGTH);

/* mulberry32 - small deterministic PRNG so the forms rebuild identically. */
function rng(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(list, rand) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const rand = rng(20260929);
const exams = Array.from({ length: FORMS }, () => []);

for (const section of Object.keys(BLUEPRINT)) {
  const pool = shuffle(ALL.filter(q => q.section === section), rand);
  if (!pool.length) throw new Error("No questions for section " + section);
  const need = BLUEPRINT[section];
  const used = new Map(pool.map(q => [q.id, 0]));

  /* Fill form by form, always taking the least-used question this form does
     not already hold. Naive round-robin with wrap-around hands the same form
     its own first pick again once the pool is exhausted. */
  for (let form = 0; form < FORMS; form++) {
    const mine = new Set(exams[form]);
    for (let n = 0; n < need; n++) {
      let pick = null;
      for (const q of pool) {
        if (mine.has(q.id)) continue;
        if (pick === null || used.get(q.id) < used.get(pick.id)) pick = q;
        if (used.get(pick.id) === 0) break;      /* cannot do better */
      }
      if (!pick) throw new Error("Section " + section + " too small for " + need + " per form");
      exams[form].push(pick.id);
      mine.add(pick.id);
      used.set(pick.id, used.get(pick.id) + 1);
    }
  }
}

/* Interleave sections within each form so it does not read as seven blocks. */
exams.forEach((ids, i) => {
  const r = rng(90001 + i * 7);
  const mixed = shuffle(ids, r);
  const seen = new Set();
  for (const id of mixed) {
    if (seen.has(id)) throw new Error("Form " + (i + 1) + " has a duplicate: " + id);
    seen.add(id);
  }
  exams[i] = mixed;
});

const usage = {};
exams.flat().forEach(id => { usage[id] = (usage[id] || 0) + 1; });
const repeated = Object.values(usage).filter(n => n > 1).length;
const maxUse = Math.max(...Object.values(usage));

const out = `/* Five fixed practice exam forms - GENERATED FILE, do not edit by hand.
   Rebuild with: node scripts/build-exams.js

   Each form is ${LENGTH} questions in ${MINUTES} minutes, blueprinted across the seven
   protocol sections in proportion to the question pool. Forms are fixed so a
   retake is comparable to the first attempt.

   Pool ${ALL.length} questions across ${FORMS} forms = ${FORMS * LENGTH} slots, so ${repeated} questions
   appear on two forms; no question appears twice within one form. */

const EXAM_MINUTES = ${MINUTES};
const EXAM_LENGTH = ${LENGTH};

const EXAM_BLUEPRINT = ${JSON.stringify(BLUEPRINT, null, 2).replace(/\n/g, "\n")};

const EXAMS = [
${exams.map((ids, i) => `  {
    id: "form-${i + 1}",
    name: "Practice Exam ${i + 1}",
    minutes: ${MINUTES},
    questions: [
${ids.map(id => `      "${id}"`).join(",\n")}
    ]
  }`).join(",\n")}
];
`;

fs.writeFileSync(path.join(ROOT, "js/data/exams.js"), out);
console.log(`built ${FORMS} forms x ${LENGTH} questions`);
console.log(`pool ${ALL.length}, ${repeated} questions used on two forms, max use ${maxUse}`);
exams.forEach((ids, i) => {
  const by = {};
  ids.forEach(id => { const q = ALL.find(x => x.id === id); by[q.section] = (by[q.section] || 0) + 1; });
  console.log(` form-${i + 1}: ${ids.length} questions`, JSON.stringify(by));
});
