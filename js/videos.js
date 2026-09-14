/* Video library. Iframes are not loaded until the user clicks a thumbnail - ten
   autoloaded YouTube players would make the page crawl and would phone home to
   Google whether or not anyone watched. */

(function () {
  const target = document.getElementById("videos");
  const filter = document.getElementById("video-topic");
  const gapList = document.getElementById("gaps");

  const topics = [];
  VIDEOS.forEach(function (v) {
    if (topics.indexOf(v.topic) === -1) topics.push(v.topic);
  });

  const all = el("option", null, "All topics");
  all.value = "all";
  filter.appendChild(all);
  topics.forEach(function (t) {
    const o = el("option", null, t);
    o.value = t;
    filter.appendChild(o);
  });

  function play(holder, video) {
    const frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + video.id + "?autoplay=1&rel=0";
    frame.title = video.title;
    frame.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    holder.innerHTML = "";
    holder.appendChild(frame);
    holder.classList.add("playing");
  }

  function render() {
    const want = filter.value;
    target.innerHTML = "";

    const list = VIDEOS.filter(function (v) { return want === "all" || v.topic === want; });
    if (!list.length) {
      target.appendChild(el("div", "empty", "No videos for that topic yet."));
      return;
    }

    list.forEach(function (video) {
      const card = el("div", "card video-card");

      const tag = el("span", "tag " + (video.official ? "ems" : "both"),
        video.official ? "GMVEMSC official" : video.source);
      card.appendChild(tag);

      card.appendChild(el("h3", null, video.title));
      card.appendChild(el("div", "muted", video.source +
        (video.duration && video.duration !== "-" ? "  ·  " + video.duration : "") +
        "  ·  " + video.topic));

      /* Facade: poster image plus a play button, swapped for the real player on click. */
      const holder = el("div", "video-holder");
      const poster = el("button", "video-poster");
      poster.type = "button";
      poster.setAttribute("aria-label", "Play " + video.title);
      const img = document.createElement("img");
      img.src = "https://i.ytimg.com/vi/" + video.id + "/hqdefault.jpg";
      img.alt = "";
      img.loading = "lazy";
      /* If the thumbnail cannot load, the player almost certainly cannot either -
         either we are offline or the host blocks third-party embeds. Drop the broken
         image and turn the poster into a link out to YouTube rather than leaving a
         play button that does nothing. */
      img.addEventListener("error", function () {
        img.style.display = "none";
        holder.classList.add("blocked");
        poster.setAttribute("aria-label", "Open " + video.title + " on YouTube");
        const note = el("span", "poster-note", "Open on YouTube");
        poster.appendChild(note);
      });
      poster.appendChild(img);
      poster.appendChild(el("span", "play-badge", "▶"));
      poster.addEventListener("click", function () {
        if (holder.classList.contains("blocked")) {
          window.open("https://www.youtube.com/watch?v=" + video.id, "_blank", "noopener");
          return;
        }
        play(holder, video);
      });
      holder.appendChild(poster);
      card.appendChild(holder);

      card.appendChild(el("p", "muted", video.blurb));

      if (video.caution) {
        const warn = el("div", "explain wrong");
        warn.appendChild(el("div", "verdict", "Scope note"));
        warn.appendChild(el("div", null, video.caution));
        card.appendChild(warn);
      }

      const row = el("div", "btn-row");
      const watch = el("a", "btn", "Open on YouTube");
      watch.href = "https://www.youtube.com/watch?v=" + video.id;
      watch.target = "_blank";
      watch.rel = "noopener noreferrer";
      row.appendChild(watch);

      if (video.page) {
        const src = el("a", "btn", video.official ? "GMVEMSC page (CE post-test)" : "Source page");
        src.href = video.page;
        src.target = "_blank";
        src.rel = "noopener noreferrer";
        row.appendChild(src);
      }

      if (video.sheet) {
        const sheet = el("a", "btn", "Open the skill sheet");
        sheet.href = "skills.html#" + video.sheet;
        row.appendChild(sheet);
      }

      card.appendChild(row);
      target.appendChild(card);
    });
  }

  filter.addEventListener("change", render);
  render();

  VIDEO_GAPS.forEach(function (gap) {
    gapList.appendChild(el("li", null, gap));
  });
})();
