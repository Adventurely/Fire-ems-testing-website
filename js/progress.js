/* The student's own results, plus backup and sharing. */

(function () {
  const nameInput = document.getElementById("student-name");
  const report = document.getElementById("report");
  const shareBox = document.getElementById("share-box");

  nameInput.value = Store.name();
  nameInput.addEventListener("change", function () {
    Store.name(nameInput.value.trim());
    draw();
  });

  function draw() {
    renderReport(report, expandSnapshot(Store.snapshot()), { coach: false });
  }

  function stamp() {
    const who = (Store.name() || "progress").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return "gmvemsc-" + (who || "progress") + "-" + new Date().toISOString().slice(0, 10) + ".json";
  }

  /* Download a real file - the reliable way to move progress between devices. */
  document.getElementById("export-file").addEventListener("click", function () {
    const blob = new Blob([JSON.stringify(Store.snapshot(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = stamp();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  });

  document.getElementById("export-code").addEventListener("click", function () {
    const code = encodeShare(Store.snapshot());
    shareBox.hidden = false;
    shareBox.value = code;
    shareBox.focus();
    shareBox.select();
    const done = document.getElementById("copy-status");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(function () {
        done.textContent = "Copied to the clipboard - paste it into a message.";
      }, function () {
        done.textContent = "Select the text above and copy it.";
      });
    } else {
      done.textContent = "Select the text above and copy it.";
    }
  });

  const importInput = document.getElementById("import-file");
  document.getElementById("import-btn").addEventListener("click", function () { importInput.click(); });
  importInput.addEventListener("change", function () {
    const file = importInput.files && importInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function () {
      const status = document.getElementById("import-status");
      try {
        const text = String(reader.result).trim();
        const snap = text.charAt(0) === "{" ? JSON.parse(text) : decodeShare(text);
        Store.merge(snap);
        status.textContent = "Progress imported and merged.";
        status.className = "muted txt-good";
        draw();
      } catch (err) {
        status.textContent = "Could not read that file: " + err.message;
        status.className = "muted txt-bad";
      }
      importInput.value = "";
    };
    reader.readAsText(file);
  });

  document.getElementById("import-code-btn").addEventListener("click", function () {
    const status = document.getElementById("import-status");
    const text = window.prompt("Paste a progress code (it starts with GMV1-):");
    if (!text) return;
    try {
      Store.merge(decodeShare(text));
      status.textContent = "Progress imported and merged.";
      status.className = "muted txt-good";
      draw();
    } catch (err) {
      status.textContent = "That code could not be read: " + err.message;
      status.className = "muted txt-bad";
    }
  });

  document.getElementById("reset").addEventListener("click", function () {
    if (window.confirm("Erase all saved progress on this device? Export a backup first if you want to keep it.")) {
      Store.reset();
      draw();
    }
  });

  draw();
})();
