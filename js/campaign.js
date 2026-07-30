(async function init() {
  const params = new URLSearchParams(window.location.search);
  const campaignId = params.get('id');

  const arcLabel = document.getElementById('arc-label');
  const campaignName = document.getElementById('campaign-name');
  const campaignStatus = document.getElementById('campaign-status');
  const grid = document.getElementById('issue-grid');
  const globalEmptyNote = document.getElementById('global-empty-note');

  const data = window.CLUTCH_DATA;
  if (!data) {
    grid.innerHTML = `<p style="color: var(--ink-dim); font-family: var(--font-mono); font-size: 0.85rem;">
      Couldn't find data/issues.js — make sure it's still in the data/ folder
      next to index.html.
    </p>`;
    return;
  }

  if (data.arc) arcLabel.textContent = data.arc;

  const campaigns = getCampaigns(data);
  const campaign = campaigns.find(c => c.id === campaignId)
    || campaigns.find(c => c.status === 'active')
    || campaigns[0];

  if (!campaign) {
    grid.innerHTML = `<p style="color: var(--ink-dim); font-family: var(--font-mono); font-size: 0.85rem;">
      No campaigns found in data/issues.js.
    </p>`;
    return;
  }

  campaignName.textContent = campaign.name;
  const isActive = campaign.status === 'active';
  campaignStatus.textContent = isActive ? 'Current Campaign' : 'Past Campaign';
  campaignStatus.classList.toggle('ready', isActive);
  campaignStatus.classList.toggle('empty', !isActive);

  await renderIssueGrid(campaign, grid, globalEmptyNote);
})();
