(async function init() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  const wrap = document.getElementById('character-detail');
  const sourceNote = document.getElementById('character-source-note');

  const { characters, source } = await loadCharacters();
  const character = characters.find(c => c.slug === slug);

  if (!character) {
    wrap.innerHTML = `<p style="color: var(--ink-dim); font-family: var(--font-mono); font-size: 0.85rem;">
      Couldn't find that character. <a href="meet-the-clutch.html">Back to Meet The Clutch</a>.
    </p>`;
    return;
  }

  document.title = `The Clutch — ${character.name}`;

  if (sourceNote) {
    sourceNote.textContent = source === 'live'
      ? 'Stats pulled live from the party sheet.'
      : 'Showing a saved snapshot (live sheet unavailable in this view).';
  }

  const portrait = await findCharacterPortrait(character);
  wrap.innerHTML = characterCardHTML(character, portrait);
  wireCharacterTabs(wrap);
  setupPortraitLightbox(wrap);
})();

function setupPortraitLightbox(wrap) {
  const overlay = document.getElementById('portrait-lightbox');
  const lightboxImg = document.getElementById('portrait-lightbox-img');
  const closeBtn = document.getElementById('portrait-lightbox-close');
  if (!overlay || !lightboxImg || !closeBtn) return;

  const portrait = wrap.querySelector('.character-portrait:not(.is-empty)');
  const portraitImg = portrait ? portrait.querySelector('img') : null;
  if (!portrait || !portraitImg) return;

  portrait.classList.add('is-clickable');

  function open() {
    lightboxImg.src = portraitImg.src;
    lightboxImg.alt = portraitImg.alt;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  portrait.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) close(); });
}
