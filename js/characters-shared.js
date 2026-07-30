// Pulls character stats from the party's public Google Sheet at page load
// (works when this site is served over http/https). If that fetch fails —
// most commonly because the site was opened directly as a file, since
// browsers block network requests from file:// pages — this falls back to
// the baked-in snapshot in data/characters.js instead.
const CHARACTER_SHEET_ID = '1m2eZblsKIDu58v-WITFei25q6Pkwnkre8roQefOv2E0';
const CHARACTER_SHEET_GID = '0';

const CHARACTER_FIELD_KEY_MAP = {
  'HIT POINTS': 'hitPoints',
  'CLASS': 'class',
  'RACE': 'race',
  'AGE': 'age',
  'LEVEL': 'level',
  'XP': 'xp',
  'ARMOR CLASS': 'armorClass',
  'ALIGNMENT': 'alignment',
  'THAC0': 'thac0',
  'STRENGTH': 'strength',
  'INTELLIGENCE': 'intelligence',
  'WISDOM': 'wisdom',
  'DEXTERITY': 'dexterity',
  'CONSTITUTION': 'constitution',
  'CHARISMA': 'charisma',
  'LANGUAGES': 'languages',
  'ITEMS': 'items',
  'WEAPONS/ ARMOR': 'weaponsArmor',
  'SPELLS MEMORIZED': 'spellsMemorized',
  'ADDITIONAL NOTES': 'notes',
};

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else { inQuotes = false; }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\r') {
      // skip, newline is handled on \n
    } else if (c === '\n') {
      row.push(field); field = '';
      rows.push(row); row = [];
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function slugifyCharacterName(name) {
  const stripped = name.replace(/^[^\w]+/, '').trim();
  return stripped
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseCharactersFromRows(rows) {
  const labels = rows.map(r => (r[0] || '').trim().toUpperCase());
  const endIdx = labels.indexOf('ADDITIONAL NOTES');
  if (endIdx === -1) return null;

  const block = rows.slice(0, endIdx + 1);
  const header = block[0];
  const fieldRows = block.slice(1);

  const names = header.slice(1).map(h => (h || '').trim());

  const characters = [];
  names.forEach((rawName, i) => {
    if (!rawName) return;
    const resting = /^\s*\u{1F634}/u.test(rawName);
    const cleanName = rawName.replace(/^[^\w]+/, '').trim();
    const entry = {
      name: cleanName,
      slug: slugifyCharacterName(rawName),
      status: resting ? 'resting' : 'active',
    };
    fieldRows.forEach((fr) => {
      const label = (fr[0] || '').trim().toUpperCase();
      const key = CHARACTER_FIELD_KEY_MAP[label];
      if (!key) return;
      entry[key] = (fr[i + 1] || '').trim();
    });
    characters.push(entry);
  });

  return characters;
}

async function fetchLiveCharacters() {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${CHARACTER_SHEET_ID}/export?format=csv&gid=${CHARACTER_SHEET_GID}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const text = await res.text();
    const rows = parseCSV(text);
    const characters = parseCharactersFromRows(rows);
    if (!characters || characters.length === 0) return null;
    return characters;
  } catch (e) {
    return null;
  }
}

async function loadCharacters() {
  const live = await fetchLiveCharacters();
  const characters = live || window.CLUTCH_CHARACTERS_FALLBACK || [];
  const source = live ? 'live' : 'fallback';
  computeDisplayNames(characters);
  applyCharacterNotes(characters);
  return { characters, source };
}

// Merges in flavor text (e.g. personality) that isn't tracked on the
// sheet, so it shows up regardless of whether data came from the live
// sheet or the local fallback.
function applyCharacterNotes(characters) {
  const notes = window.CLUTCH_CHARACTER_NOTES || {};
  characters.forEach((c) => {
    Object.assign(c, notes[c.slug]);
  });
  return characters;
}

// First name alone, unless more than one character shares that first name —
// then the full name is used (for those characters only) to disambiguate.
function computeDisplayNames(characters) {
  const firstNameCounts = {};
  characters.forEach((c) => {
    const first = c.name.trim().split(/\s+/)[0];
    firstNameCounts[first] = (firstNameCounts[first] || 0) + 1;
  });
  characters.forEach((c) => {
    const first = c.name.trim().split(/\s+/)[0];
    c.displayName = firstNameCounts[first] > 1 ? c.name : first;
  });
  return characters;
}

// Tries the full-name slug first (e.g. "vigeaux-the-carcajian.jpg"), then
// falls back to a first-name-only file (e.g. "vigeaux.jpg"), so portraits
// work however they happen to be named.
async function findCharacterPortrait(character) {
  const extensions = ['jpg', 'jpeg', 'png', 'webp'];
  const firstNameSlug = slugifyCharacterName(character.name.trim().split(/\s+/)[0]);
  const bases = [character.slug];
  if (firstNameSlug && firstNameSlug !== character.slug) bases.push(firstNameSlug);

  for (const base of bases) {
    for (const ext of extensions) {
      const src = `characters/${base}.${ext}`;
      if (await checkImageExists(src)) return src;
    }
  }
  return null;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function characterTileHTML(c, portraitSrc) {
  const portraitInner = portraitSrc
    ? `<img src="${portraitSrc}" alt="${escapeHTML(c.name)}">`
    : PLACEHOLDER_SIGIL;

  return `
    <a class="character-tile" href="character.html?slug=${encodeURIComponent(c.slug)}">
      <div class="character-tile-portrait ${portraitSrc ? '' : 'is-empty'}">${portraitInner}</div>
      <div class="character-tile-meta">
        <span class="character-tile-name">${escapeHTML(c.displayName || c.name)}</span>
        ${c.status === 'resting' ? '<span class="status-tag empty">Resting</span>' : ''}
      </div>
    </a>
  `;
}

function characterCardHTML(c, portraitSrc) {
  const portraitInner = portraitSrc
    ? `<img src="${portraitSrc}" alt="${escapeHTML(c.name)}">`
    : PLACEHOLDER_SIGIL;

  const vitals = [
    ['Class', c.class], ['Race', c.race], ['Level', c.level], ['Age', c.age],
    ['Alignment', c.alignment], ['Hit Points', c.hitPoints], ['Armor Class', c.armorClass],
    ['THAC0', c.thac0], ['XP', c.xp],
  ].filter(([, v]) => v);

  const abilities = [
    ['STR', c.strength], ['INT', c.intelligence], ['WIS', c.wisdom],
    ['DEX', c.dexterity], ['CON', c.constitution], ['CHA', c.charisma],
  ].filter(([, v]) => v);

  const longFields = [
    ['Languages', c.languages], ['Items', c.items], ['Weapons & Armor', c.weaponsArmor],
    ['Spells Memorized', c.spellsMemorized], ['Additional Notes', c.notes],
  ].filter(([, v]) => v);

  const hasPersonality = Array.isArray(c.personality) && c.personality.length > 0;

  const personalityHTML = hasPersonality ? `
    <div class="character-personality">
      ${c.personality.map((p) => `<p>${escapeHTML(p)}</p>`).join('')}
    </div>
  ` : '';

  const statsHTML = `
    <div class="character-body-stats">
      <dl class="character-vitals">
        ${vitals.map(([label, val]) => `<div><dt>${label}</dt><dd>${escapeHTML(val)}</dd></div>`).join('')}
      </dl>
      <dl class="character-abilities">
        ${abilities.map(([label, val]) => `<div><dt>${label}</dt><dd>${escapeHTML(val)}</dd></div>`).join('')}
      </dl>
      ${longFields.length > 0 ? `
        <div class="character-tabs">
          <div class="character-tab-list" role="tablist">
            ${longFields.map(([label], i) => `
              <button type="button" class="character-tab-btn${i === 0 ? ' active' : ''}" data-tab="${i}" role="tab" aria-selected="${i === 0}">${label}</button>
            `).join('')}
          </div>
          ${longFields.map(([, val], i) => `
            <div class="character-tab-panel${i === 0 ? ' active' : ''}" data-tab-panel="${i}" role="tabpanel">
              <p>${escapeHTML(val).replace(/\n/g, '<br>')}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  const bodyContentHTML = hasPersonality ? `
    <div class="character-body-columns">
      <div class="character-body-main">${personalityHTML}</div>
      ${statsHTML}
    </div>
  ` : statsHTML;

  return `
    <article class="character-card">
      <div class="character-portrait ${portraitSrc ? '' : 'is-empty'}">${portraitInner}</div>
      <div class="character-body">
        <div class="character-heading">
          <h3 class="character-name">${escapeHTML(c.name)}</h3>
          ${c.status === 'resting' ? '<span class="status-tag empty">Resting</span>' : ''}
        </div>
        ${bodyContentHTML}
      </div>
    </article>
  `;
}

function wireCharacterTabs(container) {
  const tabs = container.querySelectorAll('.character-tab-btn');
  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      container.querySelectorAll('.character-tab-btn').forEach((b) => {
        const active = b.dataset.tab === target;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
      });
      container.querySelectorAll('.character-tab-panel').forEach((p) => {
        p.classList.toggle('active', p.dataset.tabPanel === target);
      });
    });
  });
}
