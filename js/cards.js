/* Flashcards with self-grading. Flip a card, then say whether you knew it -
   that answer is what drives mastery tracking and the review deck. */

(function () {
  const topicSelect = document.getElementById("card-topic");
  const cardEl = document.getElementById("flashcard");
  const positionEl = document.getElementById("card-position");
  const gradeRow = document.getElementById("grade-row");
  const statusEl = document.getElementById("deck-status");

  let deck = [];
  let index = 0;
  let flipped = false;
  let reviewOnly = false;

  function topics() {
    const seen = [];
    FLASHCARDS.forEach(function (card) {
      if (seen.indexOf(card.topic) === -1) seen.push(card.topic);
    });
    return seen;
  }

  function fillTopics() {
    const current = topicSelect.value;
    topicSelect.innerHTML = "";
    const all = el("option", null, "All topics");
    all.value = "all";
    topicSelect.appendChild(all);
    topics().forEach(function (topic) {
      const option = el("option", null, topic);
      option.value = topic;
      topicSelect.appendChild(option);
    });
    if (Array.prototype.some.call(topicSelect.options, function (o) { return o.value === current; })) {
      topicSelect.value = current;
    }
  }

  function buildDeck() {
    const topic = topicSelect.value;
    let pool = reviewOnly ? Store.cardsToReview() : FLASHCARDS;
    if (topic !== "all") {
      pool = pool.filter(function (card) { return card.topic === topic; });
    }
    deck = shuffle(pool);
    index = 0;
    flipped = false;
    render();
  }

  function render() {
    cardEl.innerHTML = "";
    gradeRow.hidden = true;

    if (!deck.length) {
      cardEl.appendChild(el("div", "front", reviewOnly
        ? "Nothing to review here - every card in this topic was answered correctly last time."
        : "No cards match that filter."));
      positionEl.textContent = "";
      updateStatus();
      return;
    }

    const card = deck[index];
    const inner = el("div");
    inner.appendChild(el("div", "topic", card.topic + "  ·  " + card.ref));
    if (flipped) {
      inner.appendChild(el("div", "back", card.back));
      gradeRow.hidden = false;
    } else {
      inner.appendChild(el("div", "front", card.front));
      inner.appendChild(el("div", "hint", "Tap to reveal"));
    }
    cardEl.appendChild(inner);
    positionEl.textContent = "Card " + (index + 1) + " of " + deck.length;
    updateStatus();
  }

  function updateStatus() {
    const stats = Store.cardStats();
    statusEl.textContent = stats.learned + " of " + stats.total + " cards learned"
      + (stats.seen ? "  ·  " + (stats.seen - stats.learned) + " still to nail" : "");
  }

  function flip() {
    if (!deck.length || flipped) return;
    flipped = true;
    render();
  }

  /* Grading is what advances the deck - it is the whole point of the card. */
  function grade(gotIt) {
    if (!deck.length || !flipped) return;
    Store.recordCard(cardId(deck[index]), gotIt);
    next();
  }

  function next() {
    if (!deck.length) return;
    index = (index + 1) % deck.length;
    flipped = false;
    render();
  }

  function prev() {
    if (!deck.length) return;
    index = (index - 1 + deck.length) % deck.length;
    flipped = false;
    render();
  }

  cardEl.addEventListener("click", flip);
  document.getElementById("grade-got").addEventListener("click", function () { grade(true); });
  document.getElementById("grade-miss").addEventListener("click", function () { grade(false); });
  document.getElementById("card-next").addEventListener("click", next);
  document.getElementById("card-prev").addEventListener("click", prev);
  document.getElementById("card-shuffle").addEventListener("click", buildDeck);
  topicSelect.addEventListener("change", buildDeck);

  const reviewBtn = document.getElementById("card-review");
  reviewBtn.addEventListener("click", function () {
    reviewOnly = !reviewOnly;
    reviewBtn.classList.toggle("primary", reviewOnly);
    reviewBtn.textContent = reviewOnly ? "Reviewing missed cards" : "Review missed only";
    buildDeck();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      if (!flipped) flip(); else grade(true);
    } else if (event.key.toLowerCase() === "y") { grade(true); }
    else if (event.key.toLowerCase() === "n") { grade(false); }
    else if (event.key === "ArrowRight") next();
    else if (event.key === "ArrowLeft") prev();
  });

  fillTopics();
  buildDeck();
})();
