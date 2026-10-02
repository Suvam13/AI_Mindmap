window.MM = window.MM || {};

MM.layout = (function() {
  const H_STEP = 280; 
  const V_STEP = 220; 
  const GAP = 20;

  // Word wrap utility
  function wrapText(text, maxChars) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
      if ((currentLine + ' ' + word).trim().length > maxChars) {
        if (currentLine) lines.push(currentLine.trim());
        currentLine = word;
      } else {
        currentLine += ' ' + word;
      }
    });
    if (currentLine) lines.push(currentLine.trim());
    return lines;
  }

  // Node size heuristics with wrapping
  function getSize(node, depth) {
    let w, h;
    if (depth === 0) { // Root
      w = 320; h = 60;
    } else if (depth === 1) { // Aspect
      const lines = wrapText(node.label, 24); // Allow wider for aspects
      node._wrappedText = lines;
      const maxLineLen = Math.max(...lines.map(l => l.length));
      w = Math.max(220, maxLineLen * 10.5 + 45);
      h = lines.length * 24 + 30; 
    } else {
      const MAX_CHARS = 16; // Max chars per line for normal nodes
      const CHAR_W = 9.5;
      const LINE_H = 18;
      const PAD = 25;
      
      const lines = wrapText(node.label, MAX_CHARS);
      node._wrappedText = lines; // Store wrapped lines for renderer
      
      const maxLineLen = Math.max(...lines.map(l => l.length));
      w = Math.max(100, maxLineLen * CHAR_W + PAD);
      h = lines.length * LINE_H + PAD;
    }
    return { w, h };
  }

  function getVisibleChildren(node, state) {
    if (!state.expandedNodes.has(node.id)) return [];
    let children = node.children || [];
    if (!state.goDeeper) {
      children = children.filter(c => c.tier !== 2);
    }
    return children;
  }

  function calcSubtreeHeight(node, state, depth) {
    const size = getSize(node, depth);
    const children = getVisibleChildren(node, state);
    if (children.length === 0) {
      node._layoutHeight = size.h;
      return size.h;
    }
    let totalHeight = 0;
    children.forEach((child, i) => {
      totalHeight += calcSubtreeHeight(child, state, depth + 1);
      if (i < children.length - 1) totalHeight += GAP;
    });
    node._layoutHeight = Math.max(size.h, totalHeight);
    return node._layoutHeight;
  }

  function calcSubtreeWidth(node, state, depth) {
    const size = getSize(node, depth);
    const children = getVisibleChildren(node, state);
    if (children.length === 0) {
      node._layoutWidth = size.w;
      return size.w;
    }
    let totalWidth = 0;
    children.forEach((child, i) => {
      totalWidth += calcSubtreeWidth(child, state, depth + 1);
      if (i < children.length - 1) totalWidth += GAP;
    });
    node._layoutWidth = Math.max(size.w, totalWidth);
    return node._layoutWidth;
  }

  function layoutRight(node, x, y, state, depth, branch, results) {
    const children = getVisibleChildren(node, state);
    if (children.length === 0) return;
    const nextX = x + H_STEP;
    const totalHeight = children.reduce((sum, c, i) => sum + c._layoutHeight + (i < children.length - 1 ? GAP : 0), 0);
    let currentY = y - totalHeight / 2;
    children.forEach(child => {
      const childY = currentY + child._layoutHeight / 2;
      const size = getSize(child, depth + 1);
      results.nodes.push({ id: child.id, x: nextX, y: childY, w: size.w, h: size.h, data: child, depth: depth + 1, branch });
      results.links.push({ source: { x, y }, target: { x: nextX, y: childY }, branch });
      layoutRight(child, nextX, childY, state, depth + 1, branch, results);
      currentY += child._layoutHeight + GAP;
    });
  }

  function layoutLeft(node, x, y, state, depth, branch, results) {
    const children = getVisibleChildren(node, state);
    if (children.length === 0) return;
    const nextX = x - H_STEP;
    const totalHeight = children.reduce((sum, c, i) => sum + c._layoutHeight + (i < children.length - 1 ? GAP : 0), 0);
    let currentY = y - totalHeight / 2;
    children.forEach(child => {
      const childY = currentY + child._layoutHeight / 2;
      const size = getSize(child, depth + 1);
      results.nodes.push({ id: child.id, x: nextX, y: childY, w: size.w, h: size.h, data: child, depth: depth + 1, branch });
      results.links.push({ source: { x, y }, target: { x: nextX, y: childY }, branch });
      layoutLeft(child, nextX, childY, state, depth + 1, branch, results);
      currentY += child._layoutHeight + GAP;
    });
  }

  function layoutDown(node, x, y, state, depth, branch, results) {
    const children = getVisibleChildren(node, state);
    if (children.length === 0) return;
    const nextY = y + V_STEP;
    const totalWidth = children.reduce((sum, c, i) => sum + c._layoutWidth + (i < children.length - 1 ? GAP : 0), 0);
    let currentX = x - totalWidth / 2;
    children.forEach(child => {
      const childX = currentX + child._layoutWidth / 2;
      const size = getSize(child, depth + 1);
      results.nodes.push({ id: child.id, x: childX, y: nextY, w: size.w, h: size.h, data: child, depth: depth + 1, branch });
      results.links.push({ source: { x, y }, target: { x: childX, y: nextY }, branch });
      layoutDown(child, childX, nextY, state, depth + 1, branch, results);
      currentX += child._layoutWidth + GAP;
    });
  }

  function compute(data, state) {
    const results = { nodes: [], links: [] };
    const rootSize = getSize(data, 0);
    results.nodes.push({ id: data.id, x: 0, y: 0, w: rootSize.w, h: rootSize.h, data: data, depth: 0, branch: 'root' });

    const tech = data.children.find(c => c.id === 'tech');
    const caps = data.children.find(c => c.id === 'caps');
    const apps = data.children.find(c => c.id === 'apps');

    if (tech) { calcSubtreeHeight(tech, state, 1); tech.children.forEach(c => calcSubtreeHeight(c, state, 2)); }
    if (apps) { calcSubtreeHeight(apps, state, 1); apps.children.forEach(c => calcSubtreeHeight(c, state, 2)); }
    if (caps) { calcSubtreeWidth(caps, state, 1); caps.children.forEach(c => calcSubtreeWidth(c, state, 2)); }

    if (tech) {
      const techX = -700; const techSize = getSize(tech, 1);
      results.nodes.push({ id: tech.id, x: techX, y: 0, w: techSize.w, h: techSize.h, data: tech, depth: 1, branch: 'tech' });
      results.links.push({ source: { x: 0, y: 0 }, target: { x: techX, y: 0 }, branch: 'tech' });
      layoutLeft(tech, techX, 0, state, 1, 'tech', results);
    }
    if (apps) {
      const appsX = 700; const appsSize = getSize(apps, 1); // FIXED TYPO
      results.nodes.push({ id: apps.id, x: appsX, y: 0, w: appsSize.w, h: appsSize.h, data: apps, depth: 1, branch: 'apps' });
      results.links.push({ source: { x: 0, y: 0 }, target: { x: appsX, y: 0 }, branch: 'apps' });
      layoutRight(apps, appsX, 0, state, 1, 'apps', results);
    }
    if (caps) {
      const capsY = 400; const capsSize = getSize(caps, 1);
      results.nodes.push({ id: caps.id, x: 0, y: capsY, w: capsSize.w, h: capsSize.h, data: caps, depth: 1, branch: 'caps' });
      results.links.push({ source: { x: 0, y: 0 }, target: { x: 0, y: capsY }, branch: 'caps' });
      layoutDown(caps, 0, capsY, state, 1, 'caps', results);
    }
    return results;
  }

  return { compute: compute };
})();