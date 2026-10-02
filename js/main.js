window.MM = window.MM || {};

MM.main = (function() {
  const IDLE_TIMEOUT = 90000; // 90 seconds
  let idleTimer = null;

  // Shared Application State
  const state = {
    expandedNodes: new Set(['ai']), // Start with root expanded to show 3 aspects
    goDeeper: false,
    dailyMode: false
  };

  function init() {
    const data = window.MINDMAP_DATA;
    if (!data) {
      console.error("Mindmap data not found. Ensure js/data.js is loaded.");
      return;
    }

    // 1. Initialize Modules
    const svg = document.getElementById('mindmap-svg');
    const world = document.getElementById('world');
    
    MM.viewport.init(svg, world);
    MM.panel.init();

    const layers = {
      links: document.getElementById('layer-links'),
      nodes: document.getElementById('layer-nodes')
    };
    MM.render.init(layers, state, data);

    // 2. Initial Layout & Render
    runLayoutAndRender(true);

    // 3. Wire UI Controls
    wireUI();

    // 4. Start Idle Timer
    resetIdleTimer();
    document.addEventListener('pointerdown', resetIdleTimer);
    document.addEventListener('pointermove', resetIdleTimer);
  }

  function runLayoutAndRender(isInitial = false) {
    const layoutResult = MM.layout.compute(window.MINDMAP_DATA, state);
    MM.render.draw(layoutResult, isInitial);
    
    // If it's the initial draw, frame the whole map nicely
    if (isInitial) {
      const bbox = MM.render.calculateBBox(layoutResult.nodes);
      setTimeout(() => MM.viewport.flyTo(bbox, 1000), 100);
    }
  }

  function wireUI() {
    document.getElementById('btn-zoom-in').addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      MM.viewport.zoomIn();
    });

    document.getElementById('btn-zoom-out').addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      MM.viewport.zoomOut();
    });

    document.getElementById('btn-reset-view').addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      MM.viewport.resetView();
    });

    document.getElementById('btn-collapse-all').addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      collapseAll();
    });

    const btnDaily = document.getElementById('btn-daily');
    btnDaily.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      state.dailyMode = !state.dailyMode;
      const svg = document.getElementById('mindmap-svg');
      svg.classList.toggle('daily-mode-active', state.dailyMode);
      btnDaily.setAttribute('aria-pressed', state.dailyMode);
    });

    const btnDeeper = document.getElementById('btn-deeper');
    btnDeeper.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      state.goDeeper = !state.goDeeper;
      btnDeeper.setAttribute('aria-pressed', state.goDeeper);
      runLayoutAndRender();
    });
  }

  function collapseAll() {
    state.expandedNodes = new Set(['ai']);
    if (MM.panel && MM.panel.hide) MM.panel.hide();
    runLayoutAndRender();
    MM.viewport.resetView();
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(resetKiosk, IDLE_TIMEOUT);
  }

  function resetKiosk() {
    state.expandedNodes = new Set(['ai']);
    state.goDeeper = false;
    state.dailyMode = false;
    document.getElementById('btn-deeper').setAttribute('aria-pressed', 'false');
    document.getElementById('btn-daily').setAttribute('aria-pressed', 'false');
    document.getElementById('mindmap-svg').classList.remove('daily-mode-active');
    if (MM.panel && MM.panel.hide) MM.panel.hide();
    runLayoutAndRender();
    MM.viewport.resetView();
  }

  return { init: init };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', MM.main.init);
} else {
  MM.main.init();
}