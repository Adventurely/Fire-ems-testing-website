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

/* Flashcards have no explicit ids, so derive a stable one from the front text.
   If a card's front is reworded its history resets, which is the right trade -
   it is effectively a different card at that point. */
function cardId(card) {
  return card.front.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
}

const Store = (function () {
  const KEY = "gmvprep.progress.v1";
  const SHEET_KEY = "gmvprep.sheets.v1";
  const NAME_KEY = "gmvprep.name.v1";
  const BLANK = { attempts: [], questions: {}, cards: {} };

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(BLANK));
      const data = JSON.parse(raw);
      if (!data || typeof data !== "object") return JSON.parse(JSON.stringify(BLANK));
      if (!Array.isArray(data.attempts)) data.attempts = [];
      if (!data.questions || typeof data.questions !== "object") data.questions = {};
      if (!data.cards || typeof data.cards !== "object") data.cards = {};
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

    /* ---- flashcards ---- */

    recordCard: function (id, gotIt) {
      const data = read();
      const row = data.cards[id] || { seen: 0, got: 0, missed: 0 };
      row.seen += 1;
      if (gotIt) row.got += 1; else row.missed += 1;
      row.lastGot = !!gotIt;
      data.cards[id] = row;
      write(data);
    },

    /* A card counts as learned once the most recent answer was correct. */
    cardStats: function () {
      const rows = read().cards;
      const byTopic = {};
      let seen = 0, learned = 0;
      FLASHCARDS.forEach(function (card) {
        const t = card.topic;
        if (!byTopic[t]) byTopic[t] = { topic: t, total: 0, seen: 0, learned: 0 };
        byTopic[t].total += 1;
        const row = rows[cardId(card)];
        if (!row) return;
        seen += 1;
        byTopic[t].seen += 1;
        if (row.lastGot) { learned += 1; byTopic[t].learned += 1; }
      });
      return {
        total: FLASHCARDS.length,
        seen: seen,
        learned: learned,
        byTopic: Object.keys(byTopic).map(function (k) { return byTopic[k]; })
          .sort(function (a, b) { return (a.learned / a.total) - (b.learned / b.total); })
      };
    },

    /* Cards whose most recent answer was wrong, plus cards never seen. */
    cardsToReview: function () {
      const rows = read().cards;
      return FLASHCARDS.filter(function (card) {
        const row = rows[cardId(card)];
        return !row || row.lastGot === false;
      });
    },

    /* ---- quiz rollups ---- */

    sectionStats: function () {
      const data = read();
      const out = {};
      SECTIONS.forEach(function (name) { out[name] = { section: name, seen: 0, correct: 0, pool: 0 }; });
      ALL_QUESTIONS.forEach(function (q) {
        if (!out[q.section]) return;
        out[q.section].pool += 1;
        const row = data.questions[q.id];
        if (!row) return;
        out[q.section].seen += row.seen;
        out[q.section].correct += row.correct;
      });
      return SECTIONS.map(function (name) { return out[name]; });
    },

    /* Questions still being missed, worst first - the list worth studying. */
    troubleQuestions: function () {
      const rows = read().questions;
      return ALL_QUESTIONS
        .map(function (q) { return { q: q, row: rows[q.id] }; })
        .filter(function (x) { return x.row && x.row.missed > 0; })
        .sort(function (a, b) {
          if (b.row.missed !== a.row.missed) return b.row.missed - a.row.missed;
          return (a.row.correct / a.row.seen) - (b.row.correct / b.row.seen);
        });
    },

    /* ---- skill sheets ---- */

    sheetStats: function () {
      let checks = {};
      try { checks = JSON.parse(localStorage.getItem(SHEET_KEY) || "{}") || {}; }
      catch (err) { checks = {}; }
      return SKILL_SHEETS.map(function (sheet) {
        let total = 0;
        sheet.groups.forEach(function (g) { total += g.steps.length; });
        const mine = checks[sheet.id] || {};
        let done = 0;
        Object.keys(mine).forEach(function (k) { if (mine[k]) done++; });
        return { id: sheet.id, name: sheet.name, done: done, total: total };
      });
    },

    /* ---- identity ---- */

    name: function (value) {
      if (value === undefined) {
        try { return localStorage.getItem(NAME_KEY) || ""; } catch (err) { return ""; }
      }
      try { localStorage.setItem(NAME_KEY, value); } catch (err) { /* ignore */ }
      return value;
    },

    /* ---- export / import ---- */

    snapshot: function () {
      const data = read();
      const cards = {};
      Object.keys(data.cards).forEach(function (id) {
        const r = data.cards[id];
        cards[id] = [r.seen, r.got, r.lastGot ? 1 : 0];
      });
      const questions = {};
      Object.keys(data.questions).forEach(function (id) {
        const r = data.questions[id];
        questions[id] = [r.seen, r.correct, r.lastCorrect ? 1 : 0];
      });
      return {
        v: 1,
        n: Store.name(),
        t: new Date().toISOString(),
        a: data.attempts.map(function (x) {
          return [x.at, x.section || "all", x.mode, x.correct, x.total];
        }),
        q: questions,
        c: cards,
        s: Store.sheetStats().map(function (x) { return [x.id, x.done, x.total]; })
      };
    },

    /* Merge an imported snapshot into whatever is already here, taking the
       larger counts so re-importing an older file never loses work. */
    merge: function (snap) {
      if (!snap || snap.v !== 1) throw new Error("This file is not a progress export from this site.");
      const data = read();

      Object.keys(snap.q || {}).forEach(function (id) {
        const inc = snap.q[id];
        const cur = data.questions[id] || { seen: 0, correct: 0, missed: 0 };
        if (inc[0] > cur.seen) {
          cur.seen = inc[0];
          cur.correct = inc[1];
          cur.missed = inc[0] - inc[1];
          cur.lastCorrect = inc[2] === 1;
          data.questions[id] = cur;
        }
      });

      Object.keys(snap.c || {}).forEach(function (id) {
        const inc = snap.c[id];
        const cur = data.cards[id] || { seen: 0, got: 0, missed: 0 };
        if (inc[0] > cur.seen) {
          cur.seen = inc[0];
          cur.got = inc[1];
          cur.missed = inc[0] - inc[1];
          cur.lastGot = inc[2] === 1;
          data.cards[id] = cur;
        }
      });

      const known = {};
      data.attempts.forEach(function (a) { known[a.at] = true; });
      (snap.a || []).forEach(function (a) {
        if (known[a[0]]) return;
        data.attempts.push({ at: a[0], section: a[1], mode: a[2], correct: a[3], total: a[4] });
      });
      data.attempts.sort(function (x, y) { return x.at < y.at ? -1 : 1; });

      write(data);
      if (snap.n && !Store.name()) Store.name(snap.n);
      return true;
    },

    reset: function () {
      try {
        localStorage.removeItem(KEY);
        localStorage.removeItem(SHEET_KEY);
      } catch (err) { /* ignore */ }
    }
  };
})();

/* ---------------- share codes ---------------- */
/* A snapshot encoded as URL-safe base64 with a version prefix, so it can be
   pasted into a message. Unicode-safe: btoa alone throws on non-Latin-1. */

const SHARE_PREFIX = "GMV1-";

function encodeShare(obj) {
  const bytes = new TextEncoder().encode(JSON.stringify(obj));
  let bin = "";
  bytes.forEach(function (b) { bin += String.fromCharCode(b); });
  return SHARE_PREFIX + btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeShare(text) {
  let s = String(text || "").trim().replace(/\s+/g, "");
  if (s.indexOf(SHARE_PREFIX) === 0) s = s.slice(SHARE_PREFIX.length);
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return JSON.parse(new TextDecoder().decode(bytes));
}

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
