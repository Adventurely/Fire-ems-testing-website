/* Dashboard: quiz builder, progress summary, and weakest-topic list. */

(function () {
  const sectionSelect = document.getElementById("section");
  const domainSelect = document.getElementById("domain");
  const countInput = document.getElementById("count");
  const modeSelect = document.getElementById("mode");
  const startBtn = document.getElementById("start");
  const missedBtn = document.getElementById("drill-missed");

  function fillDomains() {
    const section = sectionSelect.value;
    domainSelect.innerHTML = "";
    const all = el("option", null, "All topics");
    all.value = "all";
    domainSelect.appendChild(all);
    domainsFor(section).forEach(function (domain) {
      const option = el("option", null, domain);
      option.value = domain;
      domainSelect.appendChild(option);
    });
    updateAvailable();
  }

  function available() {
    const section = sectionSelect.value;
    const domain = domainSelect.value;
    const pool = poolFor(section);
    return domain === "all" ? pool.length : pool.filter(function (q) { return q.domain === domain; }).length;
  }

  function updateAvailable() {
    const total = available();
    document.getElementById("available").textContent = total + " question" + (total === 1 ? "" : "s") + " available";
    countInput.max = total;
    if (parseInt(countInput.value, 10) > total) countInput.value = total;
  }

  function start() {
    const params = new URLSearchParams({
      section: sectionSelect.value,
      domain: domainSelect.value,
      count: String(Math.max(1, Math.min(available(), parseInt(countInput.value, 10) || 10))),
      mode: modeSelect.value
    });
    window.location.href = "quiz.html?" + params.toString();
  }

  sectionSelect.addEventListener("change", fillDomains);
  domainSelect.addEventListener("change", updateAvailable);
  startBtn.addEventListener("click", start);
  fillDomains();

  /* ---------------- progress ---------------- */

  const data = Store.all();
  const attempts = data.attempts;
  const missed = Store.missedIds();

  missedBtn.disabled = missed.length === 0;
  missedBtn.textContent = missed.length
    ? "Drill my " + missed.length + " missed question" + (missed.length === 1 ? "" : "s")
    : "No missed questions yet";
  missedBtn.addEventListener("click", function () {
    window.location.href = "quiz.html?section=all&mode=practice&missed=1&count=" + missed.length;
  });

  const summary = document.getElementById("summary");
  if (!attempts.length) {
    summary.innerHTML = '<div class="empty">No quizzes yet. Take one and your scores will show up here.</div>';
  } else {
    const recent = attempts.slice(-10).reverse();
    const totalQ = attempts.reduce(function (s, a) { return s + a.total; }, 0);
    const totalC = attempts.reduce(function (s, a) { return s + a.correct; }, 0);

    const stats = el("div", "grid");
    [
      ["Quizzes taken", String(attempts.length)],
      ["Questions answered", String(totalQ)],
      ["Overall accuracy", pct(totalC, totalQ) + "%"]
    ].forEach(function (pair) {
      const card = el("div", "card");
      card.appendChild(el("div", "muted", pair[0]));
      card.appendChild(el("div", "score-inline", pair[1])).style.cssText = "font-size:28px;font-weight:700;margin-top:4px;";
      stats.appendChild(card);
    });
    summary.appendChild(stats);

    const table = el("table", "stats");
    table.innerHTML =
      "<thead><tr><th>Date</th><th>Section</th><th>Mode</th><th class='num'>Score</th></tr></thead>";
    const body = el("tbody");
    recent.forEach(function (attempt) {
      const tr = el("tr");
      tr.appendChild(el("td", null, new Date(attempt.at).toLocaleDateString(undefined, {
        month: "short", day: "numeric", hour: "numeric", minute: "2-digit"
      })));
      tr.appendChild(el("td", null, attempt.section === "all" ? "All sections" : (attempt.section || "All sections")));
      tr.appendChild(el("td", null, attempt.mode === "exam" ? "Timed exam" : "Practice"));
      const score = el("td", "num", pct(attempt.correct, attempt.total) + "%  (" + attempt.correct + "/" + attempt.total + ")");
      score.style.color = attempt.correct / attempt.total >= PASS_MARK ? "var(--good)" : "var(--bad)";
      tr.appendChild(score);
      body.appendChild(tr);
    });
    table.appendChild(body);

    const tableCard = el("div", "card");
    tableCard.style.marginTop = "14px";
    tableCard.appendChild(el("h3", null, "Recent quizzes"));
    tableCard.appendChild(table);
    summary.appendChild(tableCard);
  }

  /* ---------------- weak topics ---------------- */

  const weakWrap = document.getElementById("weak");
  const domainStats = Store.domainStats().filter(function (row) { return row.seen >= 3; });
  if (!domainStats.length) {
    weakWrap.innerHTML = '<div class="empty">Answer a few questions and your weakest topics will be listed here.</div>';
  } else {
    const bars = el("div", "bars");
    domainStats.slice(0, 8).forEach(function (row) {
      const share = pct(row.correct, row.seen);
      const wrapper = el("div", "bar-row");
      const name = el("span");
      name.appendChild(el("span", "tag both", row.section));
      name.appendChild(document.createTextNode(" " + row.domain));
      name.querySelector(".tag").style.cssText = "margin:0 6px 0 0;vertical-align:middle;";
      wrapper.appendChild(name);
      wrapper.appendChild(el("span", "muted", share + "%"));
      const track = el("div", "bar-track");
      const fill = el("div", "bar-fill");
      fill.style.width = share + "%";
      fill.style.background = share >= 75 ? "var(--good)" : share >= 50 ? "var(--warn)" : "var(--bad)";
      track.appendChild(fill);
      wrapper.appendChild(track);
      bars.appendChild(wrapper);
    });
    const card = el("div", "card");
    card.appendChild(bars);
    weakWrap.appendChild(card);
  }

  document.getElementById("reset").addEventListener("click", function () {
    if (confirm("Erase all saved scores and progress on this device?")) {
      Store.reset();
      window.location.reload();
    }
  });

  document.getElementById("bank-count").textContent =
    ALL_QUESTIONS.length + " protocol questions, " + FLASHCARDS.length + " flashcards, " +
    SKILL_SHEETS.length + " practical skill sheets and " + VIDEOS.length + " training videos";
})();
