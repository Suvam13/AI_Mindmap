window.MM = window.MM || {};
MM.panel = (function () {
  let panelEl = null;

  function init() {
    panelEl = document.getElementById('detail-panel') || document.querySelector('.side-panel');
    const closeBtn =
      document.getElementById('btn-close-panel') || document.querySelector('.panel-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', hide);
    }
  }

  function safeArray(arr) {
    return Array.isArray(arr) ? arr : [];
  }

  function show(nodeData) {
    if (!nodeData) return;
    if (!panelEl) {
      panelEl = document.getElementById('detail-panel') || document.querySelector('.side-panel');
    }
    if (!panelEl) return;

    // Title & Description
    const titleEl = document.getElementById('panel-title');
    const descEl = document.getElementById('panel-desc');
    if (titleEl) titleEl.textContent = nodeData.label || 'Details';
    if (descEl)
      descEl.textContent =
        nodeData.description || nodeData.summary || nodeData.desc || 'No description available.';

    // Daily Meeting Badge
    const dailyEl = document.getElementById('panel-daily');
    if (dailyEl) {
      if (nodeData.dailyMeeting || nodeData.daily) {
        dailyEl.classList.remove('hidden');
      } else {
        dailyEl.classList.add('hidden');
      }
    }

    // Steps (How It Works)
    const howSec = document.getElementById('panel-how');
    const howContainer = document.getElementById('panel-how-steps');
    const steps = safeArray(nodeData.how || nodeData.howItWorks);
    if (howSec && howContainer) {
      if (steps.length > 0) {
        howContainer.innerHTML = steps
          .map(
            (step, idx) => `
          <div class="step-item">
            <span class="step-num">${idx + 1}.</span>
            <span class="step-text">${escapeHTML(step)}</span>
          </div>`
          )
          .join('');
        howSec.classList.remove('hidden');
      } else {
        howSec.classList.add('hidden');
      }
    }

    // Chips (Seen In)
    const seenSec = document.getElementById('panel-seen');
    const seenContainer = document.getElementById('panel-seen-chips');
    const seenItems = safeArray(nodeData.seenIn || nodeData.seenin);
    if (seenSec && seenContainer) {
      if (seenItems.length > 0) {
        seenContainer.innerHTML = seenItems
          .map((item) => `<span class="chip-pill">${escapeHTML(item)}</span>`)
          .join('');
        seenSec.classList.remove('hidden');
      } else {
        seenSec.classList.add('hidden');
      }
    }

    // Fact / Did You Know
    const factSec = document.getElementById('panel-fact');
    const factText = document.getElementById('panel-fact-text');
    const fact = nodeData.fact || nodeData.didYouKnow;
    if (factSec && factText) {
      if (fact) {
        factText.textContent = fact;
        factSec.classList.remove('hidden');
      } else {
        factSec.classList.add('hidden');
      }
    }

    // Related Links
    const linksSec = document.getElementById('panel-links');
    const linksList = document.getElementById('panel-links-list');
    const related = safeArray(nodeData.related);
    if (linksSec && linksList) {
      if (related.length > 0) {
        linksList.innerHTML = related
          .map((rel) => `<li>${escapeHTML(rel)}</li>`)
          .join('');
        linksSec.classList.remove('hidden');
      } else {
        linksSec.classList.add('hidden');
      }
    }

    // Show Side Panel
    panelEl.classList.remove('hidden');
  }

  function hide() {
    if (!panelEl) {
      panelEl = document.getElementById('detail-panel') || document.querySelector('.side-panel');
    }
    if (panelEl) {
      panelEl.classList.add('hidden');
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return { init, show, hide };
})();