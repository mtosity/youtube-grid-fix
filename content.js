(() => {
  function applyFiveColumns() {
    // Set the CSS variable on the root element
    document.documentElement.style.setProperty(
      "--ytd-rich-grid-items-per-row",
      "5",
      "important"
    );
  }

  // Apply immediately
  applyFiveColumns();

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

  // Also re-apply if YouTube’s SPA navigation changes the DOM
  const observer = new MutationObserver(applyFiveColumns);
  observer.observe(document.documentElement, {
    attributes: false,
    childList: true,
    subtree: true,
  });
})();
