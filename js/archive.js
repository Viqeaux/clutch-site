(async function init() {
  const arcLabel = document.getElementById('arc-label');
  const campaignName = document.getElementById('campaign-name');
  const campaignCount = document.getElementById('campaign-cover-count');
  const coverFrame = document.getElementById('campaign-cover-frame');
  const railLeft = document.getElementById('rail-left');
  const railRight = document.getElementById('rail-right');

  const data = window.CLUTCH_DATA;
  if (!data) {
    coverFrame.innerHTML = PLACEHOLDER_SIGIL;
    campaignName.textContent = "Couldn't find data/issues.js";
    return;
  }

  if (data.arc) arcLabel.textContent = data.arc;

  const campaigns = getCampaigns(data);
  const active = campaigns.find(c => c.status === 'active') || campaigns[campaigns.length - 1];
  const past = campaigns.filter(c => c !== active);

  campaignName.textContent = active.name;
  campaignCount.textContent = `${active.issues.length} issue${active.issues.length === 1 ? '' : 's'}`;
  coverFrame.href = `campaign.html?id=${encodeURIComponent(active.id)}`;

  const coverSrc = await findCampaignCover(active);
  if (coverSrc) {
    coverFrame.classList.remove('is-empty');
    coverFrame.innerHTML = `<img src="${coverSrc}" alt="${active.name} cover">`;
  } else {
    coverFrame.classList.add('is-empty');
    coverFrame.innerHTML = PLACEHOLDER_SIGIL;
  }

  if (past.length === 0) {
    railLeft.innerHTML = `<p class="rail-empty-note">More Campaigns Coming Soon</p>`;
    railRight.innerHTML = '';
  } else {
    distributeToRails(past, railLeft, railRight);
  }
})();
