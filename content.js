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

  function init() {
    // Apply styles immediately
    applyFiveColumns();

    // Set up mutation observer for SPA updates
    new MutationObserver(applyFiveColumns).observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  }

  // Handle different loading states
  if (document.readyState === 'loading') {
    // DOM is still loading, wait for it
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already loaded
    init();
  }

  // Also try on window load as backup
  window.addEventListener('load', applyFiveColumns);
})();
