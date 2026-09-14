/* Coach view: paste or drop a student's export and read it. Nothing is stored
   or transmitted - the file is parsed in this browser and rendered. */

(function () {
  const input = document.getElementById("paste");
  const status = document.getElementById("status");
  const report = document.getElementById("report");
  const drop = document.getElementById("drop");

  function show(snap) {
    try {
      const model = expandSnapshot(snap);
      document.getElementById("who").textContent = model.name
        ? model.name
        : "Unnamed student";
      document.getElementById("when").textContent = model.exportedAt
        ? "Exported " + new Date(model.exportedAt).toLocaleString()
        : "";
      document.getElementById("heading").hidden = false;
      renderReport(report, model, { coach: true });
      status.textContent = "";
      window.scrollTo(0, 0);
    } catch (err) {
      fail(err.message);
    }
  }

  function fail(message) {
    status.textContent = message;
    status.className = "muted txt-bad";
    report.innerHTML = "";
    document.getElementById("heading").hidden = true;
  }

  function parse(text) {
    const t = String(text || "").trim();
    if (!t) return fail("Nothing pasted yet.");
    try {
      show(t.charAt(0) === "{" ? JSON.parse(t) : decodeShare(t));
    } catch (err) {
      fail("That does not look like a progress export from this site.");
    }
  }

  document.getElementById("load").addEventListener("click", function () { parse(input.value); });

  const fileInput = document.getElementById("file");
  document.getElementById("pick").addEventListener("click", function () { fileInput.click(); });
  fileInput.addEventListener("change", function () {
    const f = fileInput.files && fileInput.files[0];
    if (f) readFile(f);
    fileInput.value = "";
  });

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = function () { parse(String(reader.result)); };
    reader.readAsText(file);
  }

  ["dragenter", "dragover"].forEach(function (evt) {
    drop.addEventListener(evt, function (e) { e.preventDefault(); drop.classList.add("over"); });
  });
  ["dragleave", "drop"].forEach(function (evt) {
    drop.addEventListener(evt, function (e) { e.preventDefault(); drop.classList.remove("over"); });
  });
  drop.addEventListener("drop", function (e) {
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f) readFile(f);
  });

  /* A code can also arrive in the link itself: coach.html#GMV1-... */
  if (window.location.hash.length > 1) {
    const fromHash = decodeURIComponent(window.location.hash.slice(1));
    if (fromHash.indexOf("GMV1-") === 0) {
      input.value = fromHash;
      parse(fromHash);
    }
  }
})();
