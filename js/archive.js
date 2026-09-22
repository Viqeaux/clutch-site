(async function init() {
  const arcLabel = document.getElementById('arc-label');
  const campaignName = document.getElementById('campaign-name');
  const campaignCount = document.getElementById('campaign-cover-count');
  const viewAllLink = document.getElementById('campaign-view-all');
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
  viewAllLink.href = `campaign.html?id=${encodeURIComponent(active.id)}`;

  const found = await findCampaignCover(active);
  if (found) {
    // Straight into the latest issue, not the campaign's issue list — this
    // card reads as "read the current issue," so it should act like it.
    coverFrame.href = `reader.html?issue=${found.issue.number}`;
    coverFrame.classList.remove('is-empty');
    coverFrame.innerHTML = `<img src="${found.coverSrc}" alt="${active.name} cover">`;
  } else {
    // No cover to show yet for any issue in this campaign — fall back to
    // the campaign's issue list rather than linking to a reader page that
    // has nothing to display.
    coverFrame.href = `campaign.html?id=${encodeURIComponent(active.id)}`;
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
