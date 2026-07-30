(async function init() {
  const grid = document.getElementById('character-grid');
  const sourceNote = document.getElementById('character-source-note');

  const { characters: allCharacters, source } = await loadCharacters();
  const characters = allCharacters.filter(c => c.status !== 'resting');

  if (!characters || characters.length === 0) {
    grid.innerHTML = `<p style="color: var(--ink-dim); font-family: var(--font-mono); font-size: 0.85rem;">
      Couldn't load character data.
    </p>`;
    return;
  }

  if (sourceNote) {
    sourceNote.textContent = source === 'live'
      ? 'Stats pulled live from the party sheet.'
      : 'Showing a saved snapshot (live sheet unavailable in this view).';
  }

  const tilesHTML = await Promise.all(characters.map(async (c) => {
    const portrait = await findCharacterPortrait(c);
    return characterTileHTML(c, portrait);
  }));

  grid.innerHTML = tilesHTML.join('');
})();
