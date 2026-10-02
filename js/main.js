window.MM = window.MM || {};

MM.main = (function() {
  const IDLE_TIMEOUT = 90000;
  let idleTimer = null;

  const state = {
    expandedNodes: new Set(['ai']),
    goDeeper: false,
    dailyMode: false
  };

  function init() {
    const data = window.MINDMAP_DATA;
    if (!data) {
      console.error("Mindmap data not found. Ensure js/data.js is loaded.");
      return;
    }

    const svg = document.getElementById('mindmap-svg');
    const world = document.getElementById('world');
    
    MM.viewport.init(svg, world);
    MM.panel.init();

    const layers = {
      links: document.getElementById('layer-links'),
      nodes: document.getElementById('layer-nodes')
    };
    MM.render.init(layers, state, data);

    runLayoutAndRender(true);
    wireUI();
    
    resetIdleTimer();
    document.addEventListener('pointerdown', resetIdleTimer);
    document.addEventListener('pointermove', resetIdleTimer);
  }

  function runLayoutAndRender(isInitial = false) {
    const layoutResult = MM.layout.compute(window.MINDMAP_DATA, state);
    MM.render.draw(layoutResult, isInitial);
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
    
    if (MM.panel && MM.panel.hide) MM.panel.hide();
    runLayoutAndRender();
    MM.viewport.resetView();
  }

  return { init: init };
})();

// FIXED TYPO HERE
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', MM.main.init);
} else {
  MM.main.init();
}