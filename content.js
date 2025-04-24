(() => {
  const VARS = ["--ytd-rich-grid-items-per-row"];

  function applyFiveColumns() {
    // 1) Override on :root
    VARS.forEach((v) =>
      document.documentElement.style.setProperty(v, "5", "important")
    );

    // 2) Override on each ytd-rich-grid-renderer (inline-style overrides)
    document.querySelectorAll("ytd-rich-grid-renderer").forEach((el) => {
      VARS.forEach((v) => el.style.setProperty(v, "5", "important"));
    });
  }

  // run immediately…
  applyFiveColumns();

  // …and re-run on SPA/DOM updates
  new MutationObserver(applyFiveColumns).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
