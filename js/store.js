/* Shared helpers: question pools, shuffling, and localStorage-backed progress.
   Everything stays on the device - no accounts, no server. */

const BANKS = { ems: EMS_QUESTIONS, fire: FIRE_QUESTIONS };

const TRACK_LABEL = { ems: "EMS / NREMT", fire: "Firefighter I & II", mixed: "Mixed" };

/* Passing thresholds are practice targets, not official cut scores -
   the NREMT uses computer-adaptive testing, not a fixed percentage. */
const PASS_MARK = 0.75;

function poolFor(track) {
  if (track === "mixed") return EMS_QUESTIONS.concat(FIRE_QUESTIONS);
  return BANKS[track] || [];
}

function trackOf(question) {
  return question.id.startsWith("ems-") ? "ems" : "fire";
}

function domainsFor(track) {
  const seen = [];
  poolFor(track).forEach(function (q) {
    if (seen.indexOf(q.domain) === -1) seen.push(q.domain);
  });
  return seen;
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
  let pool = poolFor(opts.track);
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
  const KEY = "efep.progress.v1";
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
      const allQuestions = EMS_QUESTIONS.concat(FIRE_QUESTIONS);
      allQuestions.forEach(function (question) {
        const row = data.questions[question.id];
        if (!row) return;
        const key = question.domain;
        if (!byDomain[key]) byDomain[key] = { domain: key, track: trackOf(question), seen: 0, correct: 0 };
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

function param(name, fallback) {
  const value = new URLSearchParams(window.location.search).get(name);
  return value === null || value === "" ? fallback : value;
}
