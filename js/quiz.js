/* Quiz runner. Two modes:
   practice - immediate feedback and explanation after every answer
   exam     - timed, no feedback until the end, closer to real test conditions */

(function () {
  const config = {
    section: param("section", "all"),
    domain: param("domain", "all"),
    count: Math.max(1, Math.min(100, parseInt(param("count", "20"), 10) || 20)),
    mode: param("mode", "practice") === "exam" ? "exam" : "practice",
    onlyMissed: param("missed", "0") === "1"
  };

  const questions = buildQuiz(config);
  const answers = new Array(questions.length).fill(null);
  let index = 0;
  let locked = false;          /* practice mode: answer revealed, waiting for Next */
  let secondsLeft = config.count * 60;
  let timerId = null;
  const startedAt = Date.now();

  const dom = {
    meta: document.getElementById("meta"),
    counter: document.getElementById("counter"),
    timer: document.getElementById("timer"),
    progress: document.getElementById("progress-fill"),
    quiz: document.getElementById("quiz"),
    results: document.getElementById("results")
  };

  if (!questions.length) {
    dom.quiz.innerHTML =
      '<div class="empty">No questions matched that selection.<br><a href="index.html">Back to the dashboard</a></div>';
    return;
  }

  document.title = "Quiz - GMVEMSC EMT Protocol Prep";
  dom.meta.textContent =
    (config.section === "all" ? "All sections" : config.section) +
    (config.domain !== "all" ? " - " + config.domain : "") +
    " - " + (config.mode === "exam" ? "Timed exam" : "Practice") +
    (config.onlyMissed ? " - missed questions" : "");

  if (config.mode === "exam") startTimer(); else dom.timer.textContent = "";

  render();

  /* ---------------- rendering ---------------- */

  function render() {
    const item = questions[index];
    locked = false;

    dom.counter.textContent = "Question " + (index + 1) + " of " + questions.length;
    dom.progress.style.width = pct(index, questions.length) + "%";

    dom.quiz.innerHTML = "";

    const domainTag = el("div", "muted", item.ref.domain + "  \u00b7  " + refLabel(item.ref.ref));
    dom.quiz.appendChild(domainTag);

    dom.quiz.appendChild(el("div", "qtext", item.ref.q));

    const list = el("div", "choices");
    item.choices.forEach(function (choice, i) {
      const button = el("button", "choice");
      button.type = "button";
      button.appendChild(el("span", "key", String.fromCharCode(65 + i)));
      button.appendChild(el("span", "label", choice));
      if (answers[index] === i) button.classList.add("picked");
      button.addEventListener("click", function () { choose(i); });
      list.appendChild(button);
    });
    dom.quiz.appendChild(list);

    const row = el("div", "btn-row");

    const back = el("button", "btn", "Back");
    back.type = "button";
    back.disabled = index === 0 || config.mode === "practice";
    back.addEventListener("click", function () { index--; render(); });
    row.appendChild(back);

    const next = el("button", "btn primary", index === questions.length - 1 ? "Finish" : "Next");
    next.type = "button";
    next.id = "next-btn";
    next.disabled = answers[index] === null;
    next.addEventListener("click", advance);
    row.appendChild(next);

    if (config.mode === "exam") {
      const quit = el("button", "btn", "End exam early");
      quit.type = "button";
      quit.addEventListener("click", function () {
        if (confirm("End the exam now and score what you have answered?")) finish();
      });
      row.appendChild(quit);
    }

    dom.quiz.appendChild(row);
  }

  function choose(choiceIndex) {
    if (locked) return;
    answers[index] = choiceIndex;

    if (config.mode === "exam") {
      /* No feedback - just mark the selection and let them move on or change it. */
      Array.prototype.forEach.call(dom.quiz.querySelectorAll(".choice"), function (node, i) {
        node.classList.toggle("picked", i === choiceIndex);
      });
      document.getElementById("next-btn").disabled = false;
      return;
    }

    /* Practice mode: reveal and explain. */
    locked = true;
    const item = questions[index];
    const wasCorrect = choiceIndex === item.answer;
    Store.recordAnswer(item.ref.id, wasCorrect);

    Array.prototype.forEach.call(dom.quiz.querySelectorAll(".choice"), function (node, i) {
      node.disabled = true;
      node.classList.remove("picked");
      if (i === item.answer) node.classList.add("correct");
      else if (i === choiceIndex) node.classList.add("wrong");
    });

    const box = el("div", "explain " + (wasCorrect ? "right" : "wrong"));
    box.appendChild(el("div", "verdict", wasCorrect ? "Correct" : "Not quite"));
    if (!wasCorrect) {
      box.appendChild(el("div", "review-line", "Correct answer: " + item.choices[item.answer]));
    }
    box.appendChild(el("div", null, item.ref.why));
    box.appendChild(el("div", "review-line muted", "Reference: GMVEMSC " + refLabel(item.ref.ref)));
    dom.quiz.insertBefore(box, dom.quiz.querySelector(".btn-row"));

    document.getElementById("next-btn").disabled = false;
  }

  function advance() {
    if (index === questions.length - 1) { finish(); return; }
    index++;
    render();
  }

  /* ---------------- timer ---------------- */

  function startTimer() {
    tick();
    timerId = setInterval(tick, 1000);
  }

  function tick() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    dom.timer.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    dom.timer.classList.toggle("low", secondsLeft <= 60);
    if (secondsLeft <= 0) {
      clearInterval(timerId);
      finish(true);
      return;
    }
    secondsLeft--;
  }

  /* ---------------- results ---------------- */

  function finish(ranOutOfTime) {
    if (timerId) clearInterval(timerId);

    /* In exam mode nothing has been recorded yet - score it all now. */
    if (config.mode === "exam") {
      questions.forEach(function (item, i) {
        if (answers[i] !== null) Store.recordAnswer(item.ref.id, answers[i] === item.answer);
      });
    }

    const correct = questions.reduce(function (sum, item, i) {
      return sum + (answers[i] === item.answer ? 1 : 0);
    }, 0);

    const byDomain = {};
    questions.forEach(function (item, i) {
      const key = item.ref.domain;
      if (!byDomain[key]) byDomain[key] = { correct: 0, total: 0 };
      byDomain[key].total += 1;
      if (answers[i] === item.answer) byDomain[key].correct += 1;
    });

    Store.recordAttempt({
      at: new Date().toISOString(),
      section: config.section,
      domain: config.domain,
      mode: config.mode,
      correct: correct,
      total: questions.length,
      seconds: Math.round((Date.now() - startedAt) / 1000)
    });

    dom.quiz.hidden = true;
    dom.progress.style.width = "100%";
    dom.counter.textContent = "Complete";
    dom.timer.textContent = "";
    dom.results.hidden = false;
    dom.results.innerHTML = "";

    const score = pct(correct, questions.length);
    const passed = correct / questions.length >= PASS_MARK;

    const scoreCard = el("div", "score");
    const big = el("div", "big " + (passed ? "pass" : "fail"), score + "%");
    scoreCard.appendChild(big);
    scoreCard.appendChild(el("div", null, correct + " of " + questions.length + " correct"));
    scoreCard.appendChild(el(
      "div",
      "verdict-line",
      ranOutOfTime
        ? "Time expired - unanswered questions were scored as incorrect."
        : passed
          ? "At or above the 80% practice target."
          : "Below the 80% practice target - review the misses below."
    ));
    dom.results.appendChild(scoreCard);

    dom.results.appendChild(el("h2", null, "By topic"));
    const bars = el("div", "bars");
    Object.keys(byDomain).sort().forEach(function (key) {
      const row = byDomain[key];
      const share = pct(row.correct, row.total);
      const wrapper = el("div", "bar-row");
      wrapper.appendChild(el("span", null, key));
      wrapper.appendChild(el("span", "muted", row.correct + "/" + row.total + "  (" + share + "%)"));
      const track = el("div", "bar-track");
      const fill = el("div", "bar-fill");
      fill.style.width = share + "%";
      fill.style.background = share >= 75 ? "var(--good)" : share >= 50 ? "var(--warn)" : "var(--bad)";
      track.appendChild(fill);
      wrapper.appendChild(track);
      bars.appendChild(wrapper);
    });
    dom.results.appendChild(bars);

    const missed = questions.filter(function (item, i) { return answers[i] !== item.answer; });
    if (missed.length) {
      dom.results.appendChild(el("h2", null, "Review: " + missed.length + " missed"));
      const review = el("div", "card");
      questions.forEach(function (item, i) {
        if (answers[i] === item.answer) return;
        const block = el("div", "review-item");
        block.appendChild(el("div", "muted", item.ref.domain + "  \u00b7  " + refLabel(item.ref.ref)));
        block.appendChild(el("div", "review-q", item.ref.q));
        const yours = el("div", "review-line");
        yours.appendChild(el("span", "lbl", "Your answer: "));
        yours.appendChild(el("span", "txt-bad", answers[i] === null ? "(left blank)" : item.choices[answers[i]]));
        block.appendChild(yours);
        const right = el("div", "review-line");
        right.appendChild(el("span", "lbl", "Correct: "));
        right.appendChild(el("span", "txt-good", item.choices[item.answer]));
        block.appendChild(right);
        block.appendChild(el("div", "review-line muted", item.ref.why));
        review.appendChild(block);
      });
      dom.results.appendChild(review);
    }

    const row = el("div", "btn-row");

    if (missed.length) {
      const retry = el("a", "btn primary", "Drill the ones I missed");
      retry.href = "quiz.html?section=all&mode=practice&missed=1&count=" + missed.length;
      row.appendChild(retry);
    }

    const again = el("a", "btn", "New quiz, same settings");
    again.href = window.location.search ? "quiz.html" + window.location.search : "quiz.html";
    row.appendChild(again);

    const home = el("a", "btn", "Back to dashboard");
    home.href = "index.html";
    row.appendChild(home);

    dom.results.appendChild(row);
    window.scrollTo(0, 0);
  }

  /* Keyboard: A-D (or 1-4) to answer, Enter/space to advance. */
  document.addEventListener("keydown", function (event) {
    if (dom.quiz.hidden) return;
    const key = event.key.toLowerCase();
    const letters = ["a", "b", "c", "d", "e"];
    if (letters.indexOf(key) !== -1) { choose(letters.indexOf(key)); return; }
    if (key >= "1" && key <= "5") { choose(parseInt(key, 10) - 1); return; }
    if (key === "enter") {
      const next = document.getElementById("next-btn");
      if (next && !next.disabled) { event.preventDefault(); advance(); }
    }
  });
})();
