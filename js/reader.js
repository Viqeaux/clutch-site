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

// Unlike assemble_page_local() (which fits panels into a fixed print-page
// canvas, letterboxing with parchment above/below whatever doesn't fill
// it), the reader has no fixed page size to honor — so the page container
// is sized to exactly fit its own panels, margin and gutters included, and
// nothing more. Returns row-packed panel positions as percentages of that
// content-sized box, plus the box's own aspect ratio (as width/height
// canvas units) for the caller to size the container with.
function computePanelLayout(panels) {
  const usableW = PANEL_CANVAS_W - 2 * PANEL_MARGIN;
  const rows = packPanelRows(panels);

  const rowHeights = rows.map((row) => {
    const totalF = row.reduce((s, p) => s + panelFlex(p.ratio || '1:1'), 0);
    const gutterTotal = (row.length - 1) * PANEL_GUTTER;
    return (usableW - gutterTotal) / totalF;
  });

  const contentH = rowHeights.reduce((s, h) => s + h, 0) + (rows.length - 1) * PANEL_GUTTER;
  const canvasH = contentH + 2 * PANEL_MARGIN;

  const layout = [];
  let y = PANEL_MARGIN;
  rows.forEach((row, ri) => {
    const rowH = rowHeights[ri];
    const widths = row.map((p) => panelFlex(p.ratio || '1:1') * rowH);
    let x = PANEL_MARGIN;

    row.forEach((panel, pi) => {
      const w = widths[pi];
      layout.push({
        src: panel.src,
        leftPct: (x / PANEL_CANVAS_W) * 100,
        topPct: (y / canvasH) * 100,
        widthPct: (w / PANEL_CANVAS_W) * 100,
        heightPct: (rowH / canvasH) * 100,
      });
      x += w + PANEL_GUTTER;
    });
    y += rowH + PANEL_GUTTER;
  });

  return { layout, aspectW: PANEL_CANVAS_W, aspectH: Math.max(1, Math.round(canvasH)) };
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
  let focusedPanel = null;

  function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

  function applyTransform() {
    const el = stage.querySelector('.zoom-wrap .page-content');
    if (!el) return;
    el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    stage.classList.toggle('zoomed', scale > 1.001);
    stage.classList.toggle('panel-focused', !!focusedPanel);
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
    // Any path back down to 1x (wheel, pinch, the reset button, double-click
    // toggle-out) exits panel-focused mode too — otherwise the stage-zones/
    // arrow keys would keep navigating panels instead of pages even though
    // the view looks like a normal, unzoomed full page again.
    if (scale <= MIN_SCALE) { offsetX = 0; offsetY = 0; focusedPanel = null; }
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
    focusedPanel = null;
  }

  // Zooms/pans so a single panel fills the stage, computed from its
  // stored layout percentages rather than live geometry — offsetWidth/
  // offsetHeight give the page-content's natural (untransformed) size
  // regardless of the CSS transform currently applied to it, and offsetX/
  // offsetY are already plain post-scale screen pixels (see the drag-pan
  // code below), so the same math the panning/pinch code relies on holds.
  function zoomToPanel(panelEl) {
    const zoomWrap = stage.querySelector('.zoom-wrap');
    const contentEl = zoomWrap ? zoomWrap.querySelector('.page-content') : null;
    if (!contentEl) return;

    const naturalW = contentEl.offsetWidth;
    const naturalH = contentEl.offsetHeight;
    if (!naturalW || !naturalH) return;

    const leftPct = parseFloat(panelEl.dataset.left);
    const topPct = parseFloat(panelEl.dataset.top);
    const widthPct = parseFloat(panelEl.dataset.width);
    const heightPct = parseFloat(panelEl.dataset.height);

    const panelW = (widthPct / 100) * naturalW;
    const panelH = (heightPct / 100) * naturalH;
    const panelCenterX = (leftPct / 100) * naturalW + panelW / 2;
    const panelCenterY = (topPct / 100) * naturalH + panelH / 2;
    const dx = panelCenterX - naturalW / 2;
    const dy = panelCenterY - naturalH / 2;

    const stageRect = stage.getBoundingClientRect();
    const FILL = 0.94;
    const targetScale = clamp(
      Math.min((stageRect.width * FILL) / panelW, (stageRect.height * FILL) / panelH),
      MIN_SCALE, MAX_SCALE
    );

    scale = targetScale;
    offsetX = -dx * targetScale;
    offsetY = -dy * targetScale;
    applyTransform();
  }

  function onPanelClick(panelEl) {
    if (focusedPanel === panelEl && scale > 1.001) {
      const c = stageCenter();
      setZoom(1, c.x, c.y);
      focusedPanel = null;
      return;
    }
    // Set before calling zoomToPanel(), not after — it calls applyTransform()
    // internally, which reads focusedPanel to toggle the 'panel-focused'
    // stage class. Setting it afterward left that class one click stale, so
    // the very first zoom-in never actually enabled panel-to-panel nav.
    focusedPanel = panelEl;
    zoomToPanel(panelEl);
  }

  // While a panel is focused, prev/next moves between that page's panels
  // instead of between pages — and stops at the first/last panel rather
  // than spilling over onto an adjacent page, per the reader's existing
  // "panels only until you click out" behavior.
  function navigatePanel(direction) {
    if (!focusedPanel) return;
    const zoomWrap = stage.querySelector('.zoom-wrap');
    if (!zoomWrap) return;
    const panelEls = Array.from(zoomWrap.querySelectorAll('.panel-item'));
    const idx = panelEls.indexOf(focusedPanel);
    if (idx === -1) return;
    const nextIdx = idx + direction;
    if (nextIdx < 0 || nextIdx >= panelEls.length) return;
    focusedPanel = panelEls[nextIdx];
    zoomToPanel(panelEls[nextIdx]);
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
    const { layout, aspectW, aspectH } = computePanelLayout(entry.panels);
    const items = layout.map(l => `
      <div class="panel-item" tabindex="0" role="button" aria-label="View this panel closer"
           style="left:${l.leftPct}%;top:${l.topPct}%;width:${l.widthPct}%;height:${l.heightPct}%;"
           data-left="${l.leftPct}" data-top="${l.topPct}" data-width="${l.widthPct}" data-height="${l.heightPct}">
        <img src="panels/${issue.folder}/${l.src}" alt="" draggable="false">
      </div>
    `).join('');
    return `<div class="page-content panel-page" role="img" aria-label="${alt}" data-aspect-w="${aspectW}" data-aspect-h="${aspectH}">${items}</div>`;
  }

  // A panel-page div has no normal-flow content (only absolutely-positioned
  // children), so it has no intrinsic size for the browser to letterbox-fit
  // via CSS alone the way an <img> naturally does with object-fit:contain —
  // tried both flex and grid centering with just `aspect-ratio` +
  // max-width/max-height and the box collapsed to ~0 either way. Sized by
  // hand here instead: the same "fit within box, preserve ratio" math
  // object-fit:contain does internally.
  function sizePanelPage(el) {
    if (!el || !el.classList.contains('panel-page')) return;
    const aspectW = parseFloat(el.dataset.aspectW);
    const aspectH = parseFloat(el.dataset.aspectH);
    if (!aspectW || !aspectH) return;
    const stageRect = stage.getBoundingClientRect();
    let w = stageRect.width;
    let h = (w * aspectH) / aspectW;
    if (h > stageRect.height) {
      h = stageRect.height;
      w = (h * aspectW) / aspectH;
    }
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
  }

  window.addEventListener('resize', () => {
    if (overlay.hidden) return;
    sizePanelPage(stage.querySelector('.zoom-wrap .page-content'));
  });

  let isAnimating = false;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function wirePageContent(zoomWrap) {
    const el = zoomWrap.querySelector('.page-content');
    if (!el) return;

    el.querySelectorAll('.panel-item').forEach((panelEl) => {
      // Tapping a panel is handled from pointerdown/pointerup below, not a
      // 'click' listener here — once zoomed in, a same-spot tap on the
      // focused panel (to toggle back out) goes through the panning
      // pointerdown branch, which captures the pointer and retargets the
      // browser's synthesized 'click' to `el` itself, never reaching this
      // element. Keyboard activation doesn't have that problem.
      panelEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          onPanelClick(panelEl);
        }
      });
    });

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
    // Tracks a single-pointer gesture from down to up so a tap (as opposed
    // to a drag) can be recognized without depending on the browser's own
    // 'click' event — that event gets retargeted to `el` when a pan/pinch
    // captures the pointer (see the pointerdown handler below), which would
    // otherwise silently swallow every tap made while already zoomed in.
    let tapCandidate = null;

    el.addEventListener('pointerdown', (e) => {
      tapCandidate = activePointers.size === 0 ? { x: e.clientX, y: e.clientY, target: e.target } : null;
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size === 1 && scale > 1.001) {
        el.setPointerCapture(e.pointerId);
        isPanning = true;
        el.classList.add('dragging');
        panStart = { x: e.clientX, y: e.clientY, offsetX, offsetY };
      } else if (activePointers.size === 2) {
        el.setPointerCapture(e.pointerId);
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
    el.addEventListener('pointerup', (e) => {
      if (tapCandidate) {
        const dist = Math.hypot(e.clientX - tapCandidate.x, e.clientY - tapCandidate.y);
        const panelEl = dist < 6 && tapCandidate.target.closest
          ? tapCandidate.target.closest('.panel-item') : null;
        if (panelEl) onPanelClick(panelEl);
      }
      tapCandidate = null;
      endPointer(e);
    });
    el.addEventListener('pointercancel', (e) => {
      tapCandidate = null;
      endPointer(e);
    });
  }

  function renderPageContentInto(zoomWrap) {
    zoomWrap.innerHTML = pageContentHTML(pages[current], current);
    sizePanelPage(zoomWrap.querySelector('.page-content'));
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
    stage.querySelector('.prev').addEventListener('click', () => {
      if (focusedPanel) navigatePanel(-1); else goTo(current - 1);
    });
    stage.querySelector('.next').addEventListener('click', () => {
      if (focusedPanel) navigatePanel(1); else goTo(current + 1);
    });

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
    if (e.key === 'ArrowRight' || e.key === ' ') {
      if (focusedPanel) navigatePanel(1);
      else if (scale <= 1.001) goTo(current + 1);
      return;
    }
    if (e.key === 'ArrowLeft') {
      if (focusedPanel) navigatePanel(-1);
      else if (scale <= 1.001) goTo(current - 1);
      return;
    }
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
