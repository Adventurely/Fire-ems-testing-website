/* Flashcards: tap or press space to flip, arrow keys to move through the deck. */

(function () {
  const topicSelect = document.getElementById("card-topic");
  const cardEl = document.getElementById("flashcard");
  const positionEl = document.getElementById("card-position");

  let deck = [];
  let index = 0;
  let flipped = false;

  function topicsFor() {
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
    topicsFor().forEach(function (topic) {
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
    deck = shuffle(FLASHCARDS.filter(function (card) {
      return topic === "all" || card.topic === topic;
    }));
    index = 0;
    flipped = false;
    render();
  }

  function render() {
    cardEl.innerHTML = "";
    if (!deck.length) {
      cardEl.appendChild(el("div", "front", "No cards match that filter."));
      positionEl.textContent = "";
      return;
    }
    const card = deck[index];
    const inner = el("div");
    inner.appendChild(el("div", "topic", card.topic + "  \u00b7  " + card.ref));
    if (flipped) {
      inner.appendChild(el("div", "back", card.back));
      inner.appendChild(el("div", "hint", "Tap or press space for the next card"));
    } else {
      inner.appendChild(el("div", "front", card.front));
      inner.appendChild(el("div", "hint", "Tap or press space to reveal"));
    }
    cardEl.appendChild(inner);
    positionEl.textContent = "Card " + (index + 1) + " of " + deck.length;
  }

  function flipOrAdvance() {
    if (!deck.length) return;
    if (!flipped) { flipped = true; render(); return; }
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

  cardEl.addEventListener("click", flipOrAdvance);
  document.getElementById("card-next").addEventListener("click", next);
  document.getElementById("card-prev").addEventListener("click", prev);
  document.getElementById("card-shuffle").addEventListener("click", buildDeck);
  topicSelect.addEventListener("change", buildDeck);

  document.addEventListener("keydown", function (event) {
    if (event.key === " " || event.key === "Enter") { event.preventDefault(); flipOrAdvance(); }
    else if (event.key === "ArrowRight") next();
    else if (event.key === "ArrowLeft") prev();
  });

  fillTopics();
  buildDeck();
})();
