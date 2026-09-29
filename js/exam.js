/* Timed practice exam runner.

   Modeled on a real exam form: a fixed set of questions, a hard clock, no
   feedback while the clock runs, and a full explained review afterwards.
   Answer choices are shuffled per attempt so a retake tests recall rather
   than memory of where the right answer sat. */

(function () {
  const picker = document.getElementById("exam-list");
  const runner = document.getElementById("runner");
  const results = document.getElementById("results");

  const byId = {};
  ALL_QUESTIONS.forEach(function (q) { byId[q.id] = q; });

  let exam = null;
  let items = [];
  let answers = [];
  let index = 0;
  let secondsLeft = 0;
  let timerId = null;
  let startedAt = 0;

  /* ---------------- exam chooser ---------------- */

  function lastAttempts(examId) {
    return Store.all().attempts.filter(function (a) { return a.exam === examId; });
  }

  function renderPicker() {
    picker.innerHTML = "";
    const grid = el("div", "grid");
    EXAMS.forEach(function (ex) {
      const card = el("div", "card");
      card.appendChild(el("span", "tag ems", ex.questions.length + " questions  ·  " + ex.minutes + " min"));
      card.appendChild(el("h3", null, ex.name));

      const attempts = lastAttempts(ex.id);
      if (attempts.length) {
        const best = attempts.reduce(function (m, a) {
          return pct(a.correct, a.total) > pct(m.correct, m.total) ? a : m;
        });
        const last = attempts[attempts.length - 1];
        const line = el("div", "muted num");
        line.textContent = "Best " + pct(best.correct, best.total) + "%  ·  last "
          + pct(last.correct, last.total) + "%  ·  " + attempts.length
          + " attempt" + (attempts.length === 1 ? "" : "s");
        card.appendChild(line);
      } else {
        card.appendChild(el("div", "muted", "Not attempted yet"));
      }

      const row = el("div", "btn-row");
      const go = el("button", "btn primary", attempts.length ? "Retake" : "Start exam");
      go.type = "button";
      go.addEventListener("click", function () { start(ex); });
      row.appendChild(go);
      card.appendChild(row);
      grid.appendChild(card);
    });
    picker.appendChild(grid);
  }

  /* ---------------- running the exam ---------------- */

  function start(ex) {
    exam = ex;
    items = ex.questions.map(function (id) {
      const q = byId[id];
      const order = shuffle(q.choices.map(function (_, i) { return i; }));
      return { q: q, choices: order.map(function (i) { return q.choices[i]; }), answer: order.indexOf(q.answer) };
    });
    answers = new Array(items.length).fill(null);
    index = 0;
    secondsLeft = ex.minutes * 60;
    startedAt = Date.now();

    document.getElementById("intro").hidden = true;
    picker.hidden = true;
    results.hidden = true;
    runner.hidden = false;
    document.getElementById("exam-title").textContent = ex.name;

    tick();
    timerId = setInterval(tick, 1000);
    renderQuestion();
    window.scrollTo(0, 0);
  }

  function tick() {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    const clock = document.getElementById("clock");
    clock.textContent = m + ":" + (s < 10 ? "0" : "") + s;
    clock.classList.toggle("low", secondsLeft <= 300);
    if (secondsLeft <= 0) {
      clearInterval(timerId);
      finish(true);
      return;
    }
    secondsLeft--;
  }

  function renderQuestion() {
    const item = items[index];
    const body = document.getElementById("qbody");
    body.innerHTML = "";

    document.getElementById("qcount").textContent = "Question " + (index + 1) + " of " + items.length;
    const answered = answers.filter(function (a) { return a !== null; }).length;
    document.getElementById("answered").textContent = answered + " answered";
    document.getElementById("progress-fill").style.width = pct(answered, items.length) + "%";

    /* Section is shown; the protocol citation is deliberately withheld until
       the review, since on the real test it would give the answer away. */
    body.appendChild(el("div", "muted", item.q.section));
    body.appendChild(el("div", "qtext", item.q.q));

    const list = el("div", "choices");
    item.choices.forEach(function (choice, i) {
      const button = el("button", "choice");
      button.type = "button";
      button.appendChild(el("span", "key", String.fromCharCode(65 + i)));
      button.appendChild(el("span", "label", choice));
      if (answers[index] === i) button.classList.add("picked");
      button.addEventListener("click", function () {
        answers[index] = i;
        renderQuestion();
      });
      list.appendChild(button);
    });
    body.appendChild(list);

    document.getElementById("prev").disabled = index === 0;
    document.getElementById("next").disabled = index === items.length - 1;
    renderGrid();
  }

  /* A jump grid, so a flagged question can be returned to before time runs out. */
  function renderGrid() {
    const grid = document.getElementById("qgrid");
    grid.innerHTML = "";
    items.forEach(function (_, i) {
      const cell = el("button", "qcell", String(i + 1));
      cell.type = "button";
      if (answers[i] !== null) cell.classList.add("done");
      if (i === index) cell.classList.add("here");
      cell.addEventListener("click", function () { index = i; renderQuestion(); });
      grid.appendChild(cell);
    });
  }

  document.getElementById("prev").addEventListener("click", function () {
    if (index > 0) { index--; renderQuestion(); }
  });
  document.getElementById("next").addEventListener("click", function () {
    if (index < items.length - 1) { index++; renderQuestion(); }
  });
  document.getElementById("submit").addEventListener("click", function () {
    const blank = answers.filter(function (a) { return a === null; }).length;
    const msg = blank
      ? blank + " question" + (blank === 1 ? " is" : "s are") + " still unanswered and will be scored wrong. Submit anyway?"
      : "Submit this exam for scoring?";
    if (window.confirm(msg)) finish(false);
  });

  document.addEventListener("keydown", function (event) {
    if (runner.hidden) return;
    const k = event.key.toLowerCase();
    const letters = ["a", "b", "c", "d", "e"];
    if (letters.indexOf(k) !== -1 && letters.indexOf(k) < items[index].choices.length) {
      answers[index] = letters.indexOf(k);
      renderQuestion();
    } else if (event.key === "ArrowRight" && index < items.length - 1) { index++; renderQuestion(); }
    else if (event.key === "ArrowLeft" && index > 0) { index--; renderQuestion(); }
  });

  /* ---------------- scoring and the explained review ---------------- */

  function finish(ranOut) {
    if (timerId) clearInterval(timerId);
    runner.hidden = true;
    results.hidden = false;

    let correct = 0;
    const bySection = {};
    items.forEach(function (item, i) {
      const right = answers[i] === item.answer;
      if (right) correct++;
      Store.recordAnswer(item.q.id, right);
      const s = item.q.section;
      if (!bySection[s]) bySection[s] = { correct: 0, total: 0 };
      bySection[s].total++;
      if (right) bySection[s].correct++;
    });

    const elapsed = Math.round((Date.now() - startedAt) / 1000);
    Store.recordAttempt({
      at: new Date().toISOString(),
      section: exam.name,
      exam: exam.id,
      mode: "exam",
      correct: correct,
      total: items.length,
      seconds: elapsed
    });

    results.innerHTML = "";
    const score = pct(correct, items.length);
    const passed = score >= 80;

    const head = el("div", "score");
    head.appendChild(el("div", "big " + (passed ? "pass" : "fail"), score + "%"));
    head.appendChild(el("div", null, correct + " of " + items.length + " correct"));
    const mins = Math.floor(elapsed / 60), secs = elapsed % 60;
    head.appendChild(el("div", "verdict-line",
      (ranOut ? "Time expired - unanswered questions were scored wrong. " : "")
      + "Finished in " + mins + ":" + (secs < 10 ? "0" : "") + secs
      + " of " + exam.minutes + ":00. "
      + (passed ? "At or above the 80% practice target." : "Below the 80% practice target.")));
    results.appendChild(head);

    results.appendChild(el("h2", null, "By section"));
    const secCard = el("div", "card");
    const bars = el("div", "bars");
    Object.keys(bySection).sort().forEach(function (name) {
      const r = bySection[name];
      const share = pct(r.correct, r.total);
      const row = el("div", "bar-row");
      row.appendChild(el("span", null, name));
      row.appendChild(el("span", "muted num", r.correct + "/" + r.total + "  (" + share + "%)"));
      const track = el("div", "bar-track");
      const fill = el("div", "bar-fill");
      fill.style.width = share + "%";
      fill.style.background = share >= 80 ? "var(--good)" : share >= 60 ? "var(--warn)" : "var(--bad)";
      track.appendChild(fill);
      row.appendChild(track);
      bars.appendChild(row);
    });
    secCard.appendChild(bars);
    results.appendChild(secCard);

    /* Every question is explained, not just the misses - the ones you guessed
       right are exactly the ones worth reading. */
    const missed = items.filter(function (it, i) { return answers[i] !== it.answer; }).length;
    results.appendChild(el("h2", null, "Answer review"));

    const toggle = el("div", "btn-row");
    const allBtn = el("button", "btn primary", "All " + items.length);
    const missBtn = el("button", "btn", "Missed only (" + missed + ")");
    allBtn.type = "button"; missBtn.type = "button";
    toggle.appendChild(allBtn);
    toggle.appendChild(missBtn);
    results.appendChild(toggle);

    const review = el("div", "card");
    results.appendChild(review);

    function drawReview(onlyMissed) {
      review.innerHTML = "";
      let shown = 0;
      items.forEach(function (item, i) {
        const right = answers[i] === item.answer;
        if (onlyMissed && right) return;
        shown++;
        const block = el("div", "review-item");

        const head = el("div", "muted");
        head.textContent = "Q" + (i + 1) + "  ·  " + item.q.section + "  ·  "
          + item.q.domain + "  ·  " + refLabel(item.q.ref);
        block.appendChild(head);

        const qline = el("div", "review-q");
        qline.appendChild(el("span", right ? "txt-good" : "txt-bad", right ? "✓  " : "✗  "));
        qline.appendChild(document.createTextNode(item.q.q));
        block.appendChild(qline);

        if (!right) {
          const yours = el("div", "review-line");
          yours.appendChild(el("span", "lbl", "Your answer: "));
          yours.appendChild(el("span", "txt-bad", answers[i] === null ? "(left blank)" : item.choices[answers[i]]));
          block.appendChild(yours);
        }
        const rightLine = el("div", "review-line");
        rightLine.appendChild(el("span", "lbl", "Correct: "));
        rightLine.appendChild(el("span", "txt-good", item.choices[item.answer]));
        block.appendChild(rightLine);

        const why = el("div", "explain " + (right ? "right" : "wrong"));
        why.appendChild(el("div", null, item.q.why));
        block.appendChild(why);

        review.appendChild(block);
      });
      if (!shown) review.appendChild(el("div", "empty", "Nothing missed on this attempt."));
    }

    allBtn.addEventListener("click", function () {
      allBtn.classList.add("primary"); missBtn.classList.remove("primary");
      drawReview(false);
    });
    missBtn.addEventListener("click", function () {
      missBtn.classList.add("primary"); allBtn.classList.remove("primary");
      drawReview(true);
    });
    drawReview(false);

    const row = el("div", "btn-row");
    const again = el("button", "btn", "Back to exam list");
    again.type = "button";
    again.addEventListener("click", function () {
      results.hidden = true;
      picker.hidden = false;
      document.getElementById("intro").hidden = false;
      renderPicker();
      window.scrollTo(0, 0);
    });
    row.appendChild(again);
    const prog = el("a", "btn", "See all my progress");
    prog.href = "progress.html";
    row.appendChild(prog);
    results.appendChild(row);

    window.scrollTo(0, 0);
  }

  /* Leaving mid-exam loses the attempt - say so rather than silently dropping it. */
  window.addEventListener("beforeunload", function (e) {
    if (!runner.hidden) { e.preventDefault(); e.returnValue = ""; }
  });

  renderPicker();
})();
