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
        &nbsp;&nbsp;&nbsp;&nbsp;"page-02.png"<br>
        &nbsp;&nbsp;]<br>
        };
      </p>
      <p>Save the file, then refresh this page (F5).</p>
    </div>
  `;
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

  // The manifest can list more filenames than actually exist yet (e.g. pages
  // not drawn yet) — silently skip any that don't have a real image on disk
  // rather than showing an empty/broken tile for them.
  const existsChecks = await Promise.all(
    listedPages.map(p => checkImageExists(`panels/${issue.folder}/${p}`))
  );
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
    const img = stage.querySelector('.zoom-wrap img');
    if (!img) return;
    img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
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

  function pageSrc(i) {
    return `panels/${issue.folder}/${pages[i]}`;
  }

  let isAnimating = false;
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updatePageContent() {
    resetZoom();
    const img = stage.querySelector('.zoom-wrap img');
    if (img) {
      img.src = pageSrc(current);
      img.alt = `Page ${current + 1} of Issue ${issue.number}`;
    }
    applyTransform();
    counter.textContent = `${current + 1} / ${pages.length}`;
    highlightActiveTile();
  }

  function renderStage() {
    resetZoom();
    stage.innerHTML = `
      <div class="zoom-wrap">
        <img src="${pageSrc(current)}" alt="Page ${current + 1} of Issue ${issue.number}" draggable="false">
      </div>
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
    const img = zoomWrap.querySelector('img');

    zoomWrap.addEventListener('dblclick', (e) => {
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

    img.addEventListener('pointerdown', (e) => {
      img.setPointerCapture(e.pointerId);
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size === 1 && scale > 1.001) {
        isPanning = true;
        img.classList.add('dragging');
        panStart = { x: e.clientX, y: e.clientY, offsetX, offsetY };
      } else if (activePointers.size === 2) {
        isPanning = false;
        img.classList.remove('dragging');
        const pts = [...activePointers.values()];
        pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
        pinchStartScale = scale;
      }
    });

    img.addEventListener('pointermove', (e) => {
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
        img.classList.remove('dragging');
      }
    }
    img.addEventListener('pointerup', endPointer);
    img.addEventListener('pointercancel', endPointer);

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
          <img src="${pageSrc(i)}" alt="" loading="lazy">
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
    const img = zoomWrap ? zoomWrap.querySelector('img') : null;

    if (!img || scale > 1.001 || prefersReducedMotion) {
      current = i;
      updatePageContent();
      return;
    }

    const direction = i > current ? 'next' : 'prev';
    const oldSrc = img.currentSrc || img.src;
    current = i;
    isAnimating = true;
    updatePageContent();

    const flip = document.createElement('div');
    flip.className = `flip-page dir-${direction}`;
    const flipImg = document.createElement('img');
    flipImg.src = oldSrc;
    flipImg.draggable = false;
    flip.appendChild(flipImg);
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
