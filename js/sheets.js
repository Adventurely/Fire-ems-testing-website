/* Skill sheet rehearsal: pick a sheet, work the checklist top to bottom.
   Checked steps persist per sheet in localStorage. */

(function () {
  const picker = document.getElementById("sheet-pick");
  const target = document.getElementById("sheet");
  const KEY = "gmvprep.sheets.v1";

  function readChecks() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; }
    catch (err) { return {}; }
  }

  function writeChecks(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); }
    catch (err) { /* storage unavailable - rehearsal still works, just not remembered */ }
  }

  SKILL_SHEETS.forEach(function (sheet) {
    const option = el("option", null, sheet.name);
    option.value = sheet.id;
    picker.appendChild(option);
  });

  function current() {
    return SKILL_SHEETS.filter(function (s) { return s.id === picker.value; })[0] || SKILL_SHEETS[0];
  }

  /* Videos.html deep-links here as skills.html#cpap - honour that on load. */
  function applyHash() {
    const want = (window.location.hash || "").replace("#", "");
    if (want && SKILL_SHEETS.some(function (s) { return s.id === want; })) picker.value = want;
  }

  /* Updating the tally in place keeps the page from jumping under the user on a
     long sheet - re-rendering on every tick threw away their scroll position. */
  function refreshTally() {
    const sheet = current();
    const mine = readChecks()[sheet.id] || {};
    let total = 0, done = 0;
    sheet.groups.forEach(function (group) { total += group.steps.length; });
    Object.keys(mine).forEach(function (k) { if (mine[k]) done++; });

    const fill = target.querySelector(".bar-fill");
    const label = target.querySelector("[data-tally]");
    if (fill) {
      fill.style.width = pct(done, total) + "%";
      fill.style.background = (done === total && total > 0) ? "var(--good)" : "var(--ems)";
    }
    if (label) label.textContent = done + " of " + total + " steps checked";
  }

  function render() {
    const sheet = current();
    const checks = readChecks();
    const mine = checks[sheet.id] || {};

    target.innerHTML = "";

    const head = el("div", "card");
    head.appendChild(el("h3", null, sheet.name));
    head.appendChild(el("div", "muted", sheet.levels + "  ·  " + sheet.page));

    const bar = el("div", "bar-track");
    bar.style.marginTop = "12px";
    bar.appendChild(el("div", "bar-fill"));
    head.appendChild(bar);
    const tally = el("div", "muted");
    tally.setAttribute("data-tally", "");
    head.appendChild(tally);
    target.appendChild(head);

    /* Surface any GMVEMSC video that demonstrates this skill. */
    if (typeof VIDEOS !== "undefined") {
      const related = VIDEOS.filter(function (v) { return v.sheet === sheet.id; });
      if (related.length) {
        const vid = el("div", "card");
        vid.style.marginTop = "14px";
        vid.appendChild(el("h3", null, "Watch it done"));
        related.forEach(function (v) {
          const line = el("div", "review-line");
          const link = el("a", null, v.title + (v.duration !== "-" ? "  (" + v.duration + ")" : ""));
          link.href = "videos.html";
          line.appendChild(link);
          line.appendChild(el("span", "muted", "  \u00b7  " + v.source));
          vid.appendChild(line);
        });
        target.appendChild(vid);
      }
    }

    sheet.groups.forEach(function (group, gi) {
      const card = el("div", "card");
      card.style.marginTop = "14px";
      card.appendChild(el("h3", null, group.title));
      const list = el("div", "checklist");
      group.steps.forEach(function (step, si) {
        const key = gi + ":" + si;
        const row = el("label", "check-row");
        const box = document.createElement("input");
        box.type = "checkbox";
        box.checked = !!mine[key];
        box.addEventListener("change", function () {
          const data = readChecks();
          if (!data[sheet.id]) data[sheet.id] = {};
          data[sheet.id][key] = box.checked;
          writeChecks(data);
          row.classList.toggle("done", box.checked);
          refreshTally();
        });
        row.appendChild(box);
        row.appendChild(el("span", null, step));
        if (box.checked) row.classList.add("done");
        list.appendChild(row);
      });
      card.appendChild(list);
      target.appendChild(card);
    });

    refreshTally();
  }

  picker.addEventListener("change", function () { render(); });
  window.addEventListener("hashchange", function () { applyHash(); render(); });
  applyHash();

  document.getElementById("sheet-clear").addEventListener("click", function () {
    const data = readChecks();
    delete data[current().id];
    writeChecks(data);
    render();
  });

  render();
})();
