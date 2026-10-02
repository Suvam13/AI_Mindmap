window.MM = window.MM || {};

MM.panel = (function() {
  let panelEl = null;
  let titleEl = null;
  let descEl = null;
  let dailyEl = null;
  let linksEl = null;
  let linksListEl = null;
  let closeBtnEl = null;

  let rootData = null;

  function init() {
    panelEl = document.getElementById('detail-panel');
    titleEl = document.getElementById('panel-title');
    descEl = document.getElementById('panel-desc');
    dailyEl = document.getElementById('panel-daily');
    linksEl = document.getElementById('panel-links');
    linksListEl = document.getElementById('panel-links-list');
    closeBtnEl = document.getElementById('btn-close-panel');

    closeBtnEl.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      hide();
    });
  }

  // Helper to find a node by ID recursively in the data tree
  function findNodeById(node, id) {
    if (node.id === id) return node;
    if (!node.children) return null;
    for (const child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
    return null;
  }

  function show(nodeData, data) {
    rootData = data;

    titleEl.textContent = nodeData.label;
    descEl.textContent = nodeData.description;

    // Daily badge
    if (nodeData.daily) {
      dailyEl.classList.remove('hidden');
    } else {
      dailyEl.classList.add('hidden');
    }

    // Related links
    linksListEl.innerHTML = '';
    if (nodeData.links && nodeData.links.length > 0) {
      linksEl.classList.remove('hidden');
      
      nodeData.links.forEach(linkId => {
        const linkedNode = findNodeById(rootData, linkId);
        if (linkedNode) {
          const li = document.createElement('li');
          li.textContent = linkedNode.label;
          li.setAttribute('data-link-id', linkId);
          
          // Click to fly to the linked node
          li.addEventListener('pointerdown', () => {
            flyToLinkedNode(linkId);
          });
          
          linksListEl.appendChild(li);
        }
      });
    } else {
      linksEl.classList.add('hidden');
    }

    // Show panel
    panelEl.classList.remove('hidden');
  }

  function hide() {
    panelEl.classList.add('hidden');
  }

  function flyToLinkedNode(nodeId) {
    // Find the rendered SVG group for this node
    const nodeGroup = document.querySelector(`g[data-id="${nodeId}"]`);
    if (nodeGroup) {
      // Extract x and y from the transform attribute: translate(x, y)
      const transform = nodeGroup.getAttribute('transform');
      const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      if (match) {
        const x = parseFloat(match[1]);
        const y = parseFloat(match[2]);
        
        // Create a bounding box around the node and fly to it
        const bbox = { x: x - 50, y: y - 50, w: 100, h: 100 };
        if (MM.viewport && MM.viewport.flyTo) {
          MM.viewport.flyTo(bbox, 600);
        }
      }
    } else {
      // Node is currently hidden (collapsed or tier-2). 
      // Phase 4/5 can handle expanding parents automatically.
      console.log(`Node ${nodeId} is currently not visible in the layout.`);
    }
  }

  return {
    init: init,
    show: show,
    hide: hide
  };
})();