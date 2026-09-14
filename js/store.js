/* Shared helpers: question pooling, shuffling, and localStorage-backed progress.
   Everything stays on the device - no accounts, no server. */

const ALL_QUESTIONS = Q_MEGACODE.concat(Q_SKILLS, Q_MEDS);

/* Sections mirror the GMVEMSC EMT Protocol Testing Summary sheet. */
const SECTIONS = ["Mega Code", "Airway & Trauma", "Medications", "Miscellaneous Skills"];

/* A practice target, not an official cut score - GMVEMSC sets its own passing
   score for the computer-based protocol test. */
const PASS_MARK = 0.8;

function poolFor(section) {
  if (!section || section === "all") return ALL_QUESTIONS;
  return ALL_QUESTIONS.filter(function (q) { return q.section === section; });
}

function domainsFor(section) {
  const seen = [];
  poolFor(section).forEach(function (q) {
    if (seen.indexOf(q.domain) === -1) seen.push(q.domain);
  });
  return seen.sort();
}

function shuffle(list) {
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/* Shuffle the choices too, so answer position is never a tell. */
function shuffleChoices(question) {
  const order = shuffle(question.choices.map(function (_, i) { return i; }));
  return {
    ref: question,
    choices: order.map(function (i) { return question.choices[i]; }),
    answer: order.indexOf(question.answer)
  };
}

function buildQuiz(opts) {
  let pool = poolFor(opts.section);
  if (opts.domain && opts.domain !== "all") {
    pool = pool.filter(function (q) { return q.domain === opts.domain; });
  }
  if (opts.onlyMissed) {
    const missed = Store.missedIds();
    const filtered = pool.filter(function (q) { return missed.indexOf(q.id) !== -1; });
    if (filtered.length) pool = filtered;
  }
  return shuffle(pool).slice(0, opts.count).map(shuffleChoices);
}

/* ---------------- progress storage ---------------- */

const Store = (function () {
  const KEY = "gmvprep.progress.v1";
  const BLANK = { attempts: [], questions: {} };

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(BLANK));
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return JSON.parse(JSON.stringify(BLANK));
      if (!Array.isArray(data.attempts)) data.attempts = [];
      if (!data.questions || typeof data.questions !== "object") data.questions = {};
      return data;
    } catch (err) {
      /* Private browsing, disabled storage, or corrupt JSON - study still works, we just do not remember. */
      return JSON.parse(JSON.stringify(BLANK));
    }
  }

  function write(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (err) {
      /* Nothing to do - progress simply is not persisted this session. */
    }
  }

  return {
    all: read,

    recordAnswer: function (questionId, wasCorrect) {
      const data = read();
      const row = data.questions[questionId] || { seen: 0, correct: 0, missed: 0 };
      row.seen += 1;
      if (wasCorrect) row.correct += 1; else row.missed += 1;
      row.lastCorrect = !!wasCorrect;
      data.questions[questionId] = row;
      write(data);
    },

    recordAttempt: function (attempt) {
      const data = read();
      data.attempts.push(attempt);
      if (data.attempts.length > 100) data.attempts = data.attempts.slice(-100);
      write(data);
    },

    /* Questions answered wrong the last time they were seen. */
    missedIds: function () {
      const q = read().questions;
      return Object.keys(q).filter(function (id) { return q[id].lastCorrect === false; });
    },

    domainStats: function () {
      const data = read();
      const byDomain = {};
      ALL_QUESTIONS.forEach(function (question) {
        const row = data.questions[question.id];
        if (!row) return;
        const key = question.domain;
        if (!byDomain[key]) byDomain[key] = { domain: key, section: question.section, seen: 0, correct: 0 };
        byDomain[key].seen += row.seen;
        byDomain[key].correct += row.correct;
      });
      return Object.keys(byDomain)
        .map(function (k) { return byDomain[k]; })
        .sort(function (a, b) { return a.correct / a.seen - b.correct / b.seen; });
    },

    reset: function () {
      try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
    }
  };
})();

/* ---------------- small shared utilities ---------------- */

function pct(part, whole) {
  if (!whole) return 0;
  return Math.round((part / whole) * 100);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* Refs are either a numeric standing order ("2002") or a document name
   ("Skill Sheet p7"). Only the numeric ones read correctly after "Protocol". */
function refLabel(ref) {
  return /^[0-9]{4}$/.test(ref) ? "Protocol " + ref : ref;
}

function param(name, fallback) {
  const value = new URLSearchParams(window.location.search).get(name);
  return value === null || value === "" ? fallback : value;
}
