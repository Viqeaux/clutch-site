// Shared rendering helpers used by both the archive homepage (js/archive.js)
// and the per-campaign issue list (js/campaign.js).

const PLACEHOLDER_SIGIL = `
<svg class="placeholder-sigil" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" stroke-width="1.4" opacity="0.7"/>
  <path d="M50 20 L58 42 L82 42 L62 56 L70 78 L50 64 L30 78 L38 56 L18 42 L42 42 Z" stroke-width="1.2"/>
</svg>`;

function loadScript(src) {
  return new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}

function checkImageExists(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function findCover(folder) {
  // Try common casings too — file hosts vary on this (Windows doesn't care,
  // but Cloudflare and most real web servers are case-sensitive), and this
  // site's cover files aren't consistently named (Cover.png, cover.png,
  // COVER.png all show up across issues).
  const names = ['cover', 'Cover', 'COVER'];
  const exts = ['jpg', 'jpeg', 'png', 'webp'];
  for (const ext of exts) {
    for (const name of names) {
      const src = `panels/${folder}/${name}.${ext}`;
      if (await checkImageExists(src)) return src;
    }
  }
  return null;
}

async function findCampaignCover(campaign) {
  // Show the most recently uploaded issue's cover, not just the first one
  // in the list — so the homepage keeps pace with the latest issue.
  const newestFirst = [...campaign.issues].sort((a, b) => b.number - a.number);
  for (const issue of newestFirst) {
    const src = await findCover(issue.folder);
    if (src) return src;
  }
  return null;
}

async function loadIssueInfo(issue) {
  window.CLUTCH_MANIFEST = null;
  await loadScript(`panels/${issue.folder}/manifest.js`);
  const manifest = window.CLUTCH_MANIFEST;
  const pages = manifest && Array.isArray(manifest.pages) ? manifest.pages : [];
  const coverSrc = await findCover(issue.folder);
  return { pageCount: pages.length, coverSrc, coverExists: coverSrc !== null };
}

function issueCardHTML(issue, info) {
  const hasPages = info.pageCount > 0;
  const statusLabel = hasPages
    ? `${info.pageCount} page${info.pageCount === 1 ? '' : 's'}`
    : 'awaiting panels';
  const statusClass = hasPages ? 'ready' : 'empty';

  const coverInner = info.coverExists
    ? `<img src="${info.coverSrc}" alt="${issue.title} cover">`
    : PLACEHOLDER_SIGIL;

  return `
    <a class="issue-card" href="reader.html?issue=${issue.number}">
      <div class="issue-cover ${info.coverExists ? '' : 'is-empty'}">${coverInner}</div>
      <div class="issue-meta">
        <div class="issue-number">Issue ${String(issue.number).padStart(2, '0')}</div>
        <div class="issue-title">${issue.title}</div>
        <span class="status-tag ${statusClass}">${statusLabel}</span>
      </div>
    </a>
  `;
}

function issueRowHTML(issue, info) {
  const hasPages = info.pageCount > 0;
  const coverInner = info.coverExists
    ? `<img src="${info.coverSrc}" alt="">`
    : PLACEHOLDER_SIGIL;

  return `
    <a class="campaign-issue-row" href="reader.html?issue=${issue.number}">
      <span class="campaign-issue-cover ${info.coverExists ? '' : 'is-empty'}">${coverInner}</span>
      <span class="campaign-issue-row-meta">
        <span class="campaign-issue-row-title">Issue ${String(issue.number).padStart(2, '0')} — ${issue.title}</span>
        <span class="campaign-issue-row-status">${hasPages ? `${info.pageCount} pages` : 'awaiting panels'}</span>
      </span>
    </a>
  `;
}

async function renderIssueGrid(campaign, grid, globalEmptyNote) {
  let anyEmpty = false;
  const cards = [];

  for (const issue of campaign.issues) {
    const info = await loadIssueInfo(issue);
    if (info.pageCount === 0) anyEmpty = true;
    cards.push(issueCardHTML(issue, info));
  }

  grid.innerHTML = cards.join('');
  if (anyEmpty && globalEmptyNote) globalEmptyNote.hidden = false;
}

function campaignTabHTML(campaign) {
  return `
    <div class="campaign-tab" data-campaign-id="${campaign.id}">
      <button type="button" class="campaign-tab-head">
        <span class="campaign-tab-cover is-empty">${PLACEHOLDER_SIGIL}</span>
        <span class="campaign-tab-info">
          <span class="campaign-tab-name">${campaign.name}</span>
          <span class="campaign-tab-count">${campaign.issues.length} issue${campaign.issues.length === 1 ? '' : 's'}</span>
        </span>
      </button>
      <div class="campaign-tab-issues"></div>
    </div>
  `;
}

function wireCampaignTab(tabEl, campaign) {
  const head = tabEl.querySelector('.campaign-tab-head');
  const issuesWrap = tabEl.querySelector('.campaign-tab-issues');
  let loaded = false;

  head.addEventListener('click', async () => {
    const willExpand = !tabEl.classList.contains('expanded');
    tabEl.classList.toggle('expanded', willExpand);
    if (willExpand && !loaded) {
      loaded = true;
      issuesWrap.innerHTML = `<p class="campaign-tab-loading">Loading…</p>`;
      const rows = [];
      for (const issue of campaign.issues) {
        const info = await loadIssueInfo(issue);
        rows.push(issueRowHTML(issue, info));
      }
      issuesWrap.innerHTML = rows.join('');

      const coverImg = tabEl.querySelector('.campaign-issue-cover:not(.is-empty) img');
      const tabCover = tabEl.querySelector('.campaign-tab-cover');
      if (coverImg && tabCover) {
        tabCover.classList.remove('is-empty');
        tabCover.innerHTML = `<img src="${coverImg.src}" alt="">`;
      }
    }
  });
}

function distributeToRails(campaigns, railLeft, railRight) {
  campaigns.forEach((campaign, i) => {
    const rail = i % 2 === 0 ? railLeft : railRight;
    rail.insertAdjacentHTML('beforeend', campaignTabHTML(campaign));
    const tabEl = rail.lastElementChild;
    wireCampaignTab(tabEl, campaign);
  });
}

function getCampaigns(data) {
  return data.campaigns
    || [{ id: 'default', name: data.arc || 'Archive', status: 'active', issues: data.issues || [] }];
}
