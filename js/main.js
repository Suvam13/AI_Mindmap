window.MM = window.MM || {};
MM.main = (function () {
  const IDLE_TIMEOUT = 90000;
  let idleTimer = null;
  let resizeTimeout = null;

  const state = {
    expandedNodes: new Set(['ai', 'tech', 'app', 'cap']),
    visitedNodes: new Set(),
    goDeeper: false,
    dailyMode: false
  };

  function init() {
    const data = window.MINDMAP_DATA;
    if (!data) {
      console.error('Mindmap data not found. Ensure js/data.js is loaded prior to js/main.js.');
      return;
    }

    const svg = document.getElementById('mindmap-svg');
    const world = document.getElementById('world');
    if (!svg || !world) {
      console.error('SVG mindmap container (#mindmap-svg or #world) missing in DOM.');
      return;
    }

    // Initialize Viewport Engine
    if (MM.viewport && MM.viewport.init) {
      MM.viewport.init(svg, world);
    }

    // Initialize Side Panel
    if (MM.panel && MM.panel.init) {
      MM.panel.init();
    }

    // Initialize Renderer
    const layers = {
      links: document.getElementById('layer-links'),
      nodes: document.getElementById('layer-nodes')
    };

    if (MM.render && MM.render.init) {
      MM.render.init(layers, state, data);
    }

    // Initial Layout Calculation and Render Pass
    runLayoutAndRender(true);

    // Bind UI Control Overlays
    wireUI();

    // Resize Handler
    window.addEventListener('resize', handleResize);

    // Initialize Hints Engine
    if (MM.hints && MM.hints.init) {
      MM.hints.init();
    }

    // Kiosk Idle Detection
    resetIdleTimer();
    document.addEventListener('pointerdown', resetIdleTimer, { passive: true });
    document.addEventListener('pointermove', resetIdleTimer, { passive: true });
  }

  function runLayoutAndRender(isInitial = false) {
    if (!MM.layout || !MM.render) return;
    const layoutResult = MM.layout.compute(window.MINDMAP_DATA, state);
    MM.render.draw(layoutResult, isInitial);

    if (isInitial && MM.viewport && MM.render.calculateBBox) {
      const bbox = MM.render.calculateBBox(layoutResult.nodes);
      setTimeout(() => {
        if (MM.viewport.flyTo) {
          MM.viewport.flyTo(bbox, 800);
        } else if (MM.viewport.resetView) {
          MM.viewport.resetView();
        }
      }, 100);
    }
  }

  function wireUI() {
    bindClick('btn-zoom-in', (e) => {
      e.stopPropagation();
      if (MM.viewport && MM.viewport.zoomIn) MM.viewport.zoomIn();
    });
    bindClick('btn-zoom-out', (e) => {
      e.stopPropagation();
      if (MM.viewport && MM.viewport.zoomOut) MM.viewport.zoomOut();
    });
    bindClick('btn-reset-view', (e) => {
      e.stopPropagation();
      if (MM.viewport && MM.viewport.resetView) MM.viewport.resetView();
    });
    bindClick('btn-collapse-all', (e) => {
      e.stopPropagation();
      collapseAll();
    });
  }

  function bindClick(elementId, callback) {
    const el = document.getElementById(elementId);
    if (el) {
      el.addEventListener('click', callback);
    }
  }

  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (MM.viewport && MM.viewport.resetView) {
        MM.viewport.resetView();
      }
    }, 150);
  }

  function collapseAll() {
    state.expandedNodes = new Set(['ai', 'tech', 'app', 'cap']);
    if (MM.panel && MM.panel.hide) MM.panel.hide();
    runLayoutAndRender();
    if (MM.viewport && MM.viewport.resetView) MM.viewport.resetView();
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    if (MM.hints) {
      if (MM.hints.hide) MM.hints.hide();
      if (MM.hints.poke) MM.hints.poke();
    }
    idleTimer = setTimeout(resetKiosk, IDLE_TIMEOUT);
  }

  function resetKiosk() {
    state.expandedNodes = new Set(['ai', 'tech', 'app', 'cap']);
    state.visitedNodes = new Set();
    state.goDeeper = false;
    state.dailyMode = false;
    if (MM.panel && MM.panel.hide) MM.panel.hide();
    runLayoutAndRender();
    if (MM.viewport && MM.viewport.resetView) MM.viewport.resetView();
    if (MM.hints && MM.hints.poke) MM.hints.poke();
  }

  return {
    init: init,
    runLayoutAndRender: runLayoutAndRender,
    collapseAll: collapseAll,
    getState: function () {
      return state;
    }
  };
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', MM.main.init);
} else {
  MM.main.init();
}