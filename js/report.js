/* One renderer for both views.

   The progress page builds a snapshot from local storage and renders it; the
   coach page decodes a shared snapshot and renders the same thing. Going through
   the identical model means what a student sees is exactly what they send. */

/* 80% is the practice target used throughout the site. */
function scoreColor(percent) {
  if (percent >= 80) return "var(--good)";
  if (percent >= 60) return "var(--warn)";
  return "var(--bad)";
}

function bar(label, valueText, percent) {
  const row = el("div", "bar-row");
  row.appendChild(el("span", null, label));
  row.appendChild(el("span", "muted num", valueText));
  const track = el("div", "bar-track");
  const fill = el("div", "bar-fill");
  fill.style.width = Math.max(percent, 0) + "%";
  fill.style.background = scoreColor(percent);
  track.appendChild(fill);
  row.appendChild(track);
  return row;
}

/* Expand a compact snapshot into everything the report needs, resolving ids
   back to real questions, cards and sheets. */
function expandSnapshot(snap) {
  const qById = {};
  ALL_QUESTIONS.forEach(function (q) { qById[q.id] = q; });

  const sections = {};
  SECTIONS.forEach(function (name) { sections[name] = { section: name, seen: 0, correct: 0 }; });
  const domains = {};
  const trouble = [];

  Object.keys(snap.q || {}).forEach(function (id) {
    const q = qById[id];
    if (!q) return;                       /* question retired since the export */
    const row = snap.q[id];
    const seen = row[0], correct = row[1], lastRight = row[2] === 1;

    if (sections[q.section]) {
      sections[q.section].seen += seen;
      sections[q.section].correct += correct;
    }
    if (!domains[q.domain]) domains[q.domain] = { domain: q.domain, section: q.section, seen: 0, correct: 0 };
    domains[q.domain].seen += seen;
    domains[q.domain].correct += correct;

    const missed = seen - correct;
    if (missed > 0) trouble.push({ q: q, seen: seen, correct: correct, missed: missed, lastRight: lastRight });
  });

  trouble.sort(function (a, b) {
    if (a.lastRight !== b.lastRight) return a.lastRight ? 1 : -1;   /* still wrong first */
    if (b.missed !== a.missed) return b.missed - a.missed;
    return (a.correct / a.seen) - (b.correct / b.seen);
  });

  const cardById = {};
  FLASHCARDS.forEach(function (c) { cardById[cardId(c)] = c; });
  const cardTopics = {};
  FLASHCARDS.forEach(function (c) {
    if (!cardTopics[c.topic]) cardTopics[c.topic] = { topic: c.topic, total: 0, seen: 0, learned: 0 };
    cardTopics[c.topic].total += 1;
  });
  let cardsSeen = 0, cardsLearned = 0;
  const cardsWeak = [];
  Object.keys(snap.c || {}).forEach(function (id) {
    const card = cardById[id];
    if (!card) return;
    const row = snap.c[id];
    cardsSeen += 1;
    cardTopics[card.topic].seen += 1;
    if (row[2] === 1) {
      cardsLearned += 1;
      cardTopics[card.topic].learned += 1;
    } else {
      cardsWeak.push(card);
    }
  });

  let answered = 0, right = 0;
  Object.keys(snap.q || {}).forEach(function (id) {
    answered += snap.q[id][0];
    right += snap.q[id][1];
  });

  const attempts = (snap.a || []).map(function (a) {
    return { at: a[0], section: a[1], mode: a[2], correct: a[3], total: a[4] };
  });

  return {
    name: snap.n || "",
    exportedAt: snap.t || "",
    attempts: attempts,
    answered: answered,
    right: right,
    sections: SECTIONS.map(function (n) { return sections[n]; }).filter(function (s) { return s.seen > 0; }),
    domains: Object.keys(domains).map(function (k) { return domains[k]; })
      .filter(function (d) { return d.seen >= 2; })
      .sort(function (a, b) { return (a.correct / a.seen) - (b.correct / b.seen); }),
    trouble: trouble,
    cards: {
      total: FLASHCARDS.length,
      seen: cardsSeen,
      learned: cardsLearned,
      weak: cardsWeak,
      byTopic: Object.keys(cardTopics).map(function (k) { return cardTopics[k]; })
        .filter(function (t) { return t.seen > 0; })
        .sort(function (a, b) { return (a.learned / a.total) - (b.learned / b.total); })
    },
    sheets: (snap.s || []).map(function (x) { return { id: x[0], done: x[1], total: x[2] }; })
  };
}

function statTile(label, value, sub) {
  const card = el("div", "card stat");
  card.appendChild(el("div", "muted", label));
  card.appendChild(el("div", "stat-value num", value));
  if (sub) card.appendChild(el("div", "muted", sub));
  return card;
}

function renderReport(root, model, opts) {
  opts = opts || {};
  root.innerHTML = "";

  if (!model.attempts.length && !model.answered && !model.cards.seen) {
    root.appendChild(el("div", "empty", opts.coach
      ? "This export has no activity recorded yet."
      : "Nothing recorded yet. Take a quiz or work through some flashcards and your results will appear here."));
    return;
  }

  /* ---- headline ---- */
  const tiles = el("div", "grid");
  const acc = pct(model.right, model.answered);
  tiles.appendChild(statTile("Quiz accuracy", model.answered ? acc + "%" : "-",
    model.answered + " questions answered"));
  tiles.appendChild(statTile("Quizzes taken", String(model.attempts.length),
    model.attempts.length ? "most recent " + new Date(model.attempts[model.attempts.length - 1].at).toLocaleDateString() : ""));
  tiles.appendChild(statTile("Flashcards learned", model.cards.learned + " / " + model.cards.total,
    model.cards.seen ? model.cards.seen + " seen so far" : "none seen yet"));
  const sheetsDone = model.sheets.filter(function (s) { return s.total && s.done === s.total; }).length;
  tiles.appendChild(statTile("Skill sheets complete", sheetsDone + " / " + model.sheets.length,
    "all steps ticked"));
  root.appendChild(tiles);

  /* ---- score history: one column per quiz, most recent direct-labelled ---- */
  if (model.attempts.length) {
    root.appendChild(el("h2", null, "Quiz scores over time"));
    const card = el("div", "card");
    const recent = model.attempts.slice(-14);
    const chart = el("div", "history");
    recent.forEach(function (a, i) {
      const score = pct(a.correct, a.total);
      const col = el("div", "hcol-wrap");
      const fill = el("div", "hcol");
      fill.style.height = Math.max(score, 2) + "%";
      fill.style.background = scoreColor(score);
      fill.title = new Date(a.at).toLocaleString() + " - " + (a.section === "all" ? "All sections" : a.section)
        + " - " + a.correct + "/" + a.total + " (" + score + "%)";
      col.appendChild(fill);
      if (i === recent.length - 1) col.appendChild(el("span", "hcol-label num", score + "%"));
      chart.appendChild(col);
    });
    card.appendChild(chart);
    card.appendChild(el("div", "muted", "Target is 80%. Oldest on the left, most recent on the right."));
    root.appendChild(card);
  }

  /* ---- sections ---- */
  if (model.sections.length) {
    root.appendChild(el("h2", null, "Accuracy by section"));
    const card = el("div", "card");
    const bars = el("div", "bars");
    model.sections.forEach(function (s) {
      bars.appendChild(bar(s.section, s.correct + "/" + s.seen + "  (" + pct(s.correct, s.seen) + "%)", pct(s.correct, s.seen)));
    });
    card.appendChild(bars);
    root.appendChild(card);
  }

  /* ---- weakest topics ---- */
  if (model.domains.length) {
    root.appendChild(el("h2", null, "Weakest topics"));
    const card = el("div", "card");
    const bars = el("div", "bars");
    model.domains.slice(0, 10).forEach(function (d) {
      bars.appendChild(bar(d.domain, d.correct + "/" + d.seen + "  (" + pct(d.correct, d.seen) + "%)", pct(d.correct, d.seen)));
    });
    card.appendChild(bars);
    root.appendChild(card);
  }

  /* ---- flashcards ---- */
  if (model.cards.byTopic.length) {
    root.appendChild(el("h2", null, "Flashcard mastery"));
    const card = el("div", "card");
    const bars = el("div", "bars");
    model.cards.byTopic.forEach(function (t) {
      bars.appendChild(bar(t.topic, t.learned + "/" + t.total + " learned", pct(t.learned, t.total)));
    });
    card.appendChild(bars);
    if (opts.coach && model.cards.weak.length) {
      card.appendChild(el("h3", null, "Cards still being missed"));
      const list = el("ul", "gaps");
      model.cards.weak.slice(0, 25).forEach(function (c) {
        list.appendChild(el("li", null, c.topic + " · " + c.ref + " - " + c.front));
      });
      card.appendChild(list);
    }
    root.appendChild(card);
  }

  /* ---- skill sheets ---- */
  if (model.sheets.length) {
    root.appendChild(el("h2", null, "Skill sheet rehearsal"));
    const card = el("div", "card");
    const bars = el("div", "bars");
    const byId = {};
    SKILL_SHEETS.forEach(function (s) { byId[s.id] = s.name; });
    model.sheets.forEach(function (s) {
      bars.appendChild(bar(byId[s.id] || s.id, s.done + "/" + s.total + " steps", pct(s.done, s.total)));
    });
    card.appendChild(bars);
    root.appendChild(card);
  }

  /* ---- the questions actually being missed ---- */
  if (model.trouble.length) {
    const stillWrong = model.trouble.filter(function (t) { return !t.lastRight; }).length;
    root.appendChild(el("h2", null, "Questions being missed"));
    const card = el("div", "card");
    card.appendChild(el("p", "muted", stillWrong + " still wrong on the most recent attempt, "
      + model.trouble.length + " missed at least once. Worst first."));
    model.trouble.slice(0, opts.coach ? 40 : 15).forEach(function (t) {
      const block = el("div", "review-item");
      const head = el("div", "muted");
      head.textContent = t.q.section + " · " + t.q.domain + " · " + refLabel(t.q.ref);
      block.appendChild(head);
      block.appendChild(el("div", "review-q", t.q.q));
      const right = el("div", "review-line");
      right.appendChild(el("span", "lbl", "Correct: "));
      right.appendChild(el("span", "txt-good", t.q.choices[t.q.answer]));
      block.appendChild(right);
      const tally = el("div", "review-line muted");
      tally.textContent = "Missed " + t.missed + " of " + t.seen + " attempts"
        + (t.lastRight ? " - got it right last time" : " - still getting it wrong");
      block.appendChild(tally);
      if (opts.coach) block.appendChild(el("div", "review-line muted", t.q.why));
      card.appendChild(block);
    });
    root.appendChild(card);
  }
}
