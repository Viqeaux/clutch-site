function loadScript(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}

function getIssueNumberFromURL() {
  const params = new URLSearchParams(window.location.search);
  const n = parseInt(params.get('issue'), 10);
  return Number.isFinite(n) ? n : 1;
}

function checkImageExists(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

function renderEmptyState(grid, issue) {
  grid.innerHTML = `
    <div class="plate reader-empty">
      <h2>No panels in Issue ${String(issue.number).padStart(2, '0')} yet</h2>
      <p>
        Add page images to <code>panels/${issue.folder}/</code>, then list
        their filenames in order inside <code>panels/${issue.folder}/manifest.js</code>:
      </p>
      <p style="text-align:left; font-family: var(--font-mono); font-size: 0.8rem; color: var(--gold-bright); background: rgba(0,0,0,0.35); padding: 0.8rem; border-radius: 3px; overflow-x: auto;">
        window.CLUTCH_MANIFEST = {<br>
        &nbsp;&nbsp;"issue": ${issue.number},<br>
        &nbsp;&nbsp;"pages": [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;"page-01.png",<br>
        &nbsp;&nbsp;&nbsp;&nbsp;{ "panels": [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "src": "p2-panel-1.webp", "ratio": "16:9" },<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "src": "p2-panel-2.webp", "ratio": "1:1" }<br>
        &nbsp;&nbsp;&nbsp;&nbsp;] }<br>
        &nbsp;&nbsp;]<br>
        };
      </p>
      <p>
        A plain filename is a single flattened page image. An object with a
        <code>"panels"</code> list composes several separate panel images
        into one page automatically, laid out the same way the comic used
        to be assembled. Save the file, then refresh this page (F5).
      </p>
    </div>
  `;
}

// ---- panel layout engine ----
// Ports the deterministic local layout algorithm from
// clutch_automation/generate_clutch.py's assemble_page_local(), so that
// separately-generated panel images can be composed into a page in the
// browser instead of being flattened into one image ahead of time.

const PANEL_CANVAS_W = 2048;
const PANEL_CANVAS_H = 3072;
const PANEL_MARGIN = 40;
const PANEL_GUTTER = 20;
const PANEL_MIN_W = 280;
const PANEL_MAX_PER_ROW = 3;

const PANEL_ASPECT_RATIOS = {
  '16:9': [1024, 576],
  '21:9': [1024, 439],
  '4:3': [768, 576],
  '1:1': [576, 576],
  '9:16': [576, 1024],
  '2:3': [576, 864],
  'full': [1024, 1536],
};

function panelFlex(ratioKey) {
  const dims = PANEL_ASPECT_RATIOS[ratioKey] || PANEL_ASPECT_RATIOS['1:1'];
  return dims[0] / dims[1];
}

function packPanelRows(panels) {
  const usableW = PANEL_CANVAS_W - 2 * PANEL_MARGIN;
  const rows = [];
  let row = [];

  const rowHasRatio = (r, keys) => r.some((p) => keys.includes(p.ratio));

  for (const panel of panels) {
    const ratio = panel.ratio || '1:1';
    const isFull = ratio === 'full';
    const isWide = ratio === '16:9' || ratio === '21:9';

    let forceNew = false;
    if (row.length > 0) {
      if (isFull) forceNew = true;
      else if (rowHasRatio(row, ['full'])) forceNew = true;
      else if (row.length >= PANEL_MAX_PER_ROW) forceNew = true;
      else if (isWide && row.length >= 2) forceNew = true;
      else if (rowHasRatio(row, ['16:9', '21:9']) && row.length >= 2) forceNew = true;
      else {
        const trial = row.concat([panel]);
        const totalF = trial.reduce((s, p) => s + panelFlex(p.ratio || '1:1'), 0);
        const n = trial.length;
        const h = (usableW - (n - 1) * PANEL_GUTTER) / totalF;
        const minF = Math.min(...trial.map((p) => panelFlex(p.ratio || '1:1')));
        const minPanelW = minF * h;
        if (minPanelW < PANEL_MIN_W) forceNew = true;
      }
    }

    if (forceNew) {
      rows.push(row);
      row = [panel];
    } else {
      row.push(panel);
    }
  }
  if (row.length > 0) rows.push(row);
  return rows;
}

function computePanelLayout(panels) {
  const usableW = PANEL_CANVAS_W - 2 * PANEL_MARGIN;
  const usableH = PANEL_CANVAS_H - 2 * PANEL_MARGIN;
  const rows = packPanelRows(panels);

  const naturalHeights = rows.map((row) => {
    const totalF = row.reduce((s, p) => s + panelFlex(p.ratio || '1:1'), 0);
    const gutterTotal = (row.length - 1) * PANEL_GUTTER;
    return (usableW - gutterTotal) / totalF;
  });

  const totalNatural = naturalHeights.reduce((s, h) => s + h, 0);
  const availableH = usableH - (rows.length - 1) * PANEL_GUTTER;
  const vScale = Math.min(1.0, totalNatural > 0 ? availableH / totalNatural : 1.0);
  const rowHeights = naturalHeights.map((h) => Math.max(1, h * vScale));

  const usedH = rowHeights.reduce((s, h) => s + h, 0) + (rows.length - 1) * PANEL_GUTTER;
  let y = PANEL_MARGIN + Math.max(0, (usableH - usedH) / 2);

  const layout = [];
  rows.forEach((row, ri) => {
    const rowH = rowHeights[ri];
    const widths = row.map((p) => panelFlex(p.ratio || '1:1') * rowH);
    const totalW = widths.reduce((s, w) => s + w, 0) + (row.length - 1) * PANEL_GUTTER;
    let x = PANEL_MARGIN + Math.max(0, (usableW - totalW) / 2);

    row.forEach((panel, pi) => {
      const w = widths[pi];
      layout.push({
        src: panel.src,
        leftPct: (x / PANEL_CANVAS_W) * 100,
        topPct: (y / PANEL_CANVAS_H) * 100,
        widthPct: (w / PANEL_CANVAS_W) * 100,
        heightPct: (rowH / PANEL_CANVAS_H) * 100,
      });
      x += w + PANEL_GUTTER;
    });
    y += rowH + PANEL_GUTTER;
  });

  return layout;
}

(async function init() {
  const issueNumber = getIssueNumberFromURL();
  const grid = document.getElementById('page-grid');
  const label = document.getElementById('issue-label');
  const pageCountNote = document.getElementById('page-count-note');
  const counter = document.getElementById('page-counter');
  const overlay = document.getElementById('page-lightbox');
  const stage = document.getElementById('reader-stage');
  const closeBtn = document.getElementById('page-lightbox-close');

  const data = window.CLUTCH_DATA;
  if (!data) {
    grid.innerHTML = `<div class="plate reader-empty"><h2>Couldn't find data/issues.js</h2>
      <p>Make sure it's still in the data/ folder next to index.html.</p></div>`;
    return;
  }

  const allIssues = data.campaigns
    ? data.campaigns.flatMap(c => c.issues)
    : data.issues;
  const issue = allIssues.find(i => i.number === issueNumber) || allIssues[0];
  label.textContent = issue.title;

  window.CLUTCH_MANIFEST = null;
  await loadScript(`panels/${issue.folder}/manifest.js`);
  const manifest = window.CLUTCH_MANIFEST;
  const listedPages = manifest && Array.isArray(manifest.pages) ? manifest.pages : [];

  function isPanelPage(entry) {
    return entry && typeof entry === 'object' && Array.isArray(entry.panels);
  }

  // A page is either a plain filename string (one flattened page image, the
  // way every issue up through 15 was made) or an object listing separate
  // panel images to be composed into a page in the browser. The manifest
  // can list more entries than actually exist on disk yet — silently skip
  // any that don't resolve to real images rather than showing a broken
  // tile for them. A panel page is skipped entirely if any one of its
  // panels is missing.
  async function pageExists(entry) {
    if (typeof entry === 'string') {
      return checkImageExists(`panels/${issue.folder}/${entry}`);
    }
    if (isPanelPage(entry)) {
      const results = await Promise.all(
        entry.panels.map(p => checkImageExists(`panels/${issue.folder}/${p.src}`))
      );
      return results.length > 0 && results.every(Boolean);
    }
    return false;
  }

  const existsChecks = await Promise.all(listedPages.map(pageExists));
  const pages = listedPages.filter((_, i) => existsChecks[i]);

  if (pages.length === 0) {
    renderEmptyState(grid, issue);
    return;
  }

  pageCountNote.textContent = `${pages.length} page${pages.length === 1 ? '' : 's'} — click a page to read it`;

  let current = 0;

  // ---- pan/zoom state ----
  const MIN_SCALE = 1;
  const MAX_SCALE = 6;
  let scale = 1;
  let offsetX = 0;
  let offsetY = 0;

  function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

  function applyTransform() {
    const el = stage.querySelector('.zoom-wrap .page-content');
    if (!el) return;
    el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    stage.classList.toggle('zoomed', scale > 1.001);
    const resetBtn = stage.querySelector('#zoom-reset');
    if (resetBtn) resetBtn.textContent = `${Math.round(scale * 100)}%`;
  }

  function setZoom(newScaleRaw, clientX, clientY) {
    const newScale = clamp(newScaleRaw, MIN_SCALE, MAX_SCALE);
    if (newScale === scale) return;
    const rect = stage.getBoundingClientRect();
    const cx = clientX - (rect.left + rect.width / 2);
    const cy = clientY - (rect.top + rect.height / 2);
    const ratio = newScale / scale;
    offsetX = cx - (cx - offsetX) * ratio;
    offsetY = cy - (cy - offsetY) * ratio;
    scale = newScale;
    if (scale <= MIN_SCALE) { offsetX = 0; offsetY = 0; }
    applyTransform();
  }

  function stageCenter() {
    const rect = stage.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }

  function resetZoom() {
    scale = 1;
    offsetX = 0;
    offsetY = 0;
  }

  function thumbSrc(entry) {
    if (typeof entry === 'string') return `panels/${issue.folder}/${entry}`;
    if (isPanelPage(entry) && entry.panels.length) {
      return `panels/${issue.folder}/${entry.panels[0].src}`;
    }
    return '';
  }

  function pageContentHTML(entry, i) {
    const alt = `Page ${i + 1} of Issue ${issue.number}`;
    if (typeof entry === 'string') {
      return `<img class="page-content" src="panels/${issue.folder}/${entry}" alt="${alt}" draggable="false">`;
    }
    const layout = computePanelLayout(entry.panels);
    const items = layout.map(l => `
      <div class="panel-item" style="left:${l.leftPct}%;top:${l.topPct}%;width:${l.widthPct}%;height:${l.heightPct}%;">
        <img src="panels/${issue.folder}/${l.src}" alt="" draggable="false">
      </div>
    `).join('');
    return `<div class="page-content panel-page" role="img" aria-label="${alt}">${items}</div>`;
  }

  let isAnimating = false;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function wirePageContent(zoomWrap) {
    const el = zoomWrap.querySelector('.page-content');
    if (!el) return;

    el.addEventListener('dblclick', (e) => {
      if (scale > 1.001) {
        setZoom(1, e.clientX, e.clientY);
      } else {
        setZoom(2.5, e.clientX, e.clientY);
      }
    });

    let isPanning = false;
    const activePointers = new Map();
    let panStart = { x: 0, y: 0, offsetX: 0, offsetY: 0 };
    let pinchStartDist = 0;
    let pinchStartScale = 1;

    el.addEventListener('pointerdown', (e) => {
      el.setPointerCapture(e.pointerId);
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size === 1 && scale > 1.001) {
        isPanning = true;
        el.classList.add('dragging');
        panStart = { x: e.clientX, y: e.clientY, offsetX, offsetY };
      } else if (activePointers.size === 2) {
        isPanning = false;
        el.classList.remove('dragging');
        const pts = [...activePointers.values()];
        pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        pinchStartScale = scale;
      }
    });

    el.addEventListener('pointermove', (e) => {
      if (!activePointers.has(e.pointerId)) return;
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

      if (activePointers.size === 2) {
        const pts = [...activePointers.values()];
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        const midX = (pts[0].x + pts[1].x) / 2;
        const midY = (pts[0].y + pts[1].y) / 2;
        if (pinchStartDist > 0) {
          setZoom(pinchStartScale * (dist / pinchStartDist), midX, midY);
        }
      } else if (isPanning && activePointers.size === 1) {
        offsetX = panStart.offsetX + (e.clientX - panStart.x);
        offsetY = panStart.offsetY + (e.clientY - panStart.y);
        applyTransform();
      }
    });

    function endPointer(e) {
      activePointers.delete(e.pointerId);
      if (activePointers.size < 2) pinchStartDist = 0;
      if (activePointers.size === 0) {
        isPanning = false;
        el.classList.remove('dragging');
      }
    }
    el.addEventListener('pointerup', endPointer);
    el.addEventListener('pointercancel', endPointer);
  }

  function renderPageContentInto(zoomWrap) {
    zoomWrap.innerHTML = pageContentHTML(pages[current], current);
    wirePageContent(zoomWrap);
  }

  function updatePageContent() {
    resetZoom();
    const zoomWrap = stage.querySelector('.zoom-wrap');
    if (zoomWrap) renderPageContentInto(zoomWrap);
    applyTransform();
    counter.textContent = `${current + 1} / ${pages.length}`;
    highlightActiveTile();
  }

  function renderStage() {
    resetZoom();
    stage.innerHTML = `
      <div class="zoom-wrap"></div>
      <div class="stage-zone prev" aria-label="Previous page">&#8249;</div>
      <div class="stage-zone next" aria-label="Next page">&#8250;</div>
      <div class="zoom-controls">
        <button type="button" class="zoom-btn" id="zoom-out" aria-label="Zoom out">&minus;</button>
        <button type="button" class="zoom-btn" id="zoom-reset" aria-label="Reset zoom">100%</button>
        <button type="button" class="zoom-btn" id="zoom-in" aria-label="Zoom in">+</button>
      </div>
    `;
    stage.querySelector('.prev').addEventListener('click', () => goTo(current - 1));
    stage.querySelector('.next').addEventListener('click', () => goTo(current + 1));

    const zoomWrap = stage.querySelector('.zoom-wrap');
    renderPageContentInto(zoomWrap);

    stage.querySelector('#zoom-in').addEventListener('click', () => {
      const c = stageCenter();
      setZoom(scale * 1.4, c.x, c.y);
    });
    stage.querySelector('#zoom-out').addEventListener('click', () => {
      const c = stageCenter();
      setZoom(scale / 1.4, c.x, c.y);
    });
    stage.querySelector('#zoom-reset').addEventListener('click', () => {
      const c = stageCenter();
      setZoom(1, c.x, c.y);
    });

    applyTransform();
    counter.textContent = `${current + 1} / ${pages.length}`;
    highlightActiveTile();
  }

  function renderPageGrid() {
    grid.innerHTML = pages.map((p, i) => `
      <a class="page-tile" href="#" data-i="${i}" aria-label="Read page ${i + 1}">
        <div class="page-tile-frame">
          <img src="${thumbSrc(p)}" alt="" loading="lazy">
        </div>
        <span class="page-tile-number">Page ${i + 1}</span>
      </a>
    `).join('');
    grid.querySelectorAll('.page-tile').forEach((tile) => {
      tile.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(parseInt(tile.dataset.i, 10));
      });
    });
  }

  function highlightActiveTile() {
    grid.querySelectorAll('.page-tile').forEach((tile) => {
      tile.classList.toggle('active', parseInt(tile.dataset.i, 10) === current);
    });
  }

  function openLightbox(i) {
    current = i;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    renderStage();
  }

  function closeLightbox() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  function goTo(i) {
    if (i < 0 || i >= pages.length || i === current || isAnimating) return;

    const zoomWrap = stage.querySelector('.zoom-wrap');
    const contentEl = zoomWrap ? zoomWrap.querySelector('.page-content') : null;

    if (!contentEl || scale > 1.001 || prefersReducedMotion) {
      current = i;
      updatePageContent();
      return;
    }

    const direction = i > current ? 'next' : 'prev';
    const flipContent = contentEl.cloneNode(true);
    flipContent.classList.remove('dragging');
    flipContent.style.transform = '';

    current = i;
    isAnimating = true;
    updatePageContent();

    const flip = document.createElement('div');
    flip.className = `flip-page dir-${direction}`;
    flip.appendChild(flipContent);
    stage.appendChild(flip);

    void flip.offsetWidth;
    flip.classList.add('animating');

    const onEnd = (e) => {
      if (e.target !== flip) return;
      flip.removeEventListener('animationend', onEnd);
      flip.remove();
      isAnimating = false;
    };
    flip.addEventListener('animationend', onEnd);
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (overlay.hidden) return;
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'ArrowRight' || e.key === ' ') { if (scale <= 1.001) goTo(current + 1); return; }
    if (e.key === 'ArrowLeft') { if (scale <= 1.001) goTo(current - 1); return; }
    if (e.key === '+' || e.key === '=') { const c = stageCenter(); setZoom(scale * 1.4, c.x, c.y); }
    if (e.key === '-' || e.key === '_') { const c = stageCenter(); setZoom(scale / 1.4, c.x, c.y); }
    if (e.key === '0') { const c = stageCenter(); setZoom(1, c.x, c.y); }
  });

  stage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
    setZoom(scale * factor, e.clientX, e.clientY);
  }, { passive: false });

  renderPageGrid();
})();
