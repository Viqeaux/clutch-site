// Character ART reference — the physical/visual description used to keep
// image-generation prompts consistent issue to issue (outfit, palette,
// distinguishing details). This is a DIFFERENT thing from data/characters.js
// (game stats) and data/character-notes.js (personality) — this file is
// what an artist or an image model needs to draw the character correctly.
//
// This is now the canonical source for character appearance. It supersedes:
//   - GPT Image Generator/Character Style Descriptions.docx
//   - GPT Image Generator/Character info.pdf
//   - clutch_automation/instructions/CHARACTER_VISUAL_REFERENCE.md
// Those become historical reference only — edit THIS file going forward.
// (Note: the old docx had drifted out of sync with the actual generated art
// in places, e.g. it described Alfie as bald with a black beard; the current
// art — and this file — has him as a young human with messy blue hair. This
// file follows the art actually in use, per CHARACTER_VISUAL_REFERENCE.md
// and Character_Arcs.md, not the older docx.)
//
// Keyed by the same slugs used in character-notes.js and characters.js.
// clutch_automation's prompt-building pipeline (Claude_API_ Prompts.py)
// reads this file directly — see publish_config.json / README in
// clutch_automation for how. Keep entries plain JSON-shaped (double-quoted
// strings, no trailing commas, no comments inside the object) so both the
// browser and that Python reader can parse it.
window.CLUTCH_CHARACTER_ART_NOTES = {
  "alfie": {
    "build": "Slim, medium height, young adult human male, slightly dark complexion.",
    "hair": "Blue, wavy/messy, short.",
    "face": "Dark eyes, slight smile, handsome, easygoing expression.",
    "outfit": "Deep blue robes with gold pentagram/arcane symbols throughout, long and layered, dark/black under-robe.",
    "gear": "Wide brown leather utility belt loaded with potions (red, green, blue, purple), scrolls, daggers, throwing stars, chains, pouches. Brown leather lace-up sandals, not boots. Carries a tall wooden broom (dark brown handle, dark bristles) — his signature prop.",
    "palette": "Deep blue, gold, dark brown leather.",
    "keyDetails": "Blue robes with gold symbols. The broom. Heavily loaded belt. Sandals, not boots."
  },
  "tom-jones": {
    "build": "Medium-tall, athletic, middle-aged human male.",
    "hair": "Dark brown/black, shoulder-length, slightly wavy, distinguished.",
    "face": "Short dark beard/goatee, warm blue-green eyes, confident smile, slightly weathered.",
    "outfit": "Blue and white layered clerical robes with gold trim and gold eight-pointed star symbols throughout. White tabard/surplice over the blue robes. White cape with gold trim.",
    "gear": "Brown leather belt with a gold compass/star buckle, leather satchel/book at hip, chainmail visible beneath the robes, black knee-high leather boots. Carries a gold spear/halberd staff topped with an eight-pointed star and a blue gem; other hand often crackles with gold/white lightning. Accompanied by Mickey, his animated mop companion.",
    "palette": "Blue, white, gold.",
    "keyDetails": "Blue-and-white robes with gold stars. Gold lightning. Distinguished dark hair. Often with Mickey."
  },
  "vigeaux-the-carcajian": {
    "build": "Tall, broad-shouldered, muscular, middle-aged. 5'6\", ~200 lbs of compact muscle.",
    "hair": "Grey/silver, wavy, shoulder-length.",
    "face": "Weathered, dignified, stern watchful expression, clean-shaven, slightly pointed ears (half-elf).",
    "wings": "Large black feathered wings — dark as a raven, angelic (not bat-like) in shape, broad span, visible in every appearance. Folded against his back when stationary; half-spread when alert/surveying; fully spread only at climactic, issue-defining moments (reserve for one big reveal per issue).",
    "outfit": "Full plate armor in dark steel/charcoal grey with gold trim and accents. Gold starburst emblem on the chest, gold star medallions on the pauldrons, gold belt buckle with a star. A tattered deep purple/burgundy cape hangs at his waist.",
    "gear": "Elegant straight sword with a gold crossguard, carried at the hip. Ring of keycards visible on his belt.",
    "palette": "Dark steel grey, gold, deep purple/burgundy.",
    "keyDetails": "Wings are BLACK, not white/silver. Armor is dark steel with gold, not silver. Deep purple/burgundy cape. Wings stay folded except at climactic moments."
  },
  "wyatt-smithereen": {
    "build": "Slim, tall, half-elf male, pointed ears.",
    "hair": "Silver-white, short and spiky. Small blue/purple star tattoo/mark near one eye.",
    "face": "Sharp features, confident smirk, gold/green rings on both hands.",
    "outfit": "Long black coat, floor-length and dramatic, with teal/blue lining and gold trim. Black shirt and pants underneath. Purple scarf with gold stars worn loosely, flowing.",
    "gear": "Tall black leather boots with gold buckles and star details, brown leather belt with a gold buckle. Elegant sword at the hip with a face carved into the hilt. Flying-V electric guitar (brown wood body, white pickguard) — his signature prop.",
    "palette": "Black, teal, purple, gold.",
    "keyDetails": "Purple star-scarf is distinctive. Teal coat lining. Star mark near the eye. The Flying-V guitar."
  },
  "derder-erder": {
    "build": "Stocky, broad-shouldered, older half-elf male.",
    "hair": "Completely bald on top, short white/grey beard, pointed ears.",
    "face": "Strong features, calm expression, older.",
    "outfit": "Deep forest-green robes/cloak with brown leather undertones, layered and tattered at the hem, green leaf/vine embroidery. Large green druidic cloak with brown fur/leaf trim at the collar.",
    "gear": "Brown leather belt with pouches, potion vials, tools. Round bronze/gold shield with a tree-of-life emblem (green tree on gold background). Tall twisted wooden staff topped with two intertwined green snakes. Scimitar (silver blade) and a flail/mace on a chain. Brown leather lace-up boots.",
    "palette": "Forest green, brown, gold accents.",
    "keyDetails": "Bald. Green druidic robes. Snake-topped staff. Tree-of-life shield."
  },
  "snivel-sarcat": {
    "build": "Slim, wiry, short elf male, slightly hunched posture. Small — heavy size contrast against Alfie/Vigeaux.",
    "hair": "Black, short, curly/wavy, slightly unkempt under a dark brown skullcap/hat.",
    "face": "Pale olive/grey skin, large pointed ears, heavy-lidded eyes, knowing smirk, long nose — classic rogue face.",
    "outfit": "All black leather — jacket/vest with brown leather straps, buckles, and a harness across the chest with many attachment points. Black leather pants.",
    "gear": "One brown leather boot, one bare foot (asymmetrical — a signature detail). Ornate dark sword with a spider/web motif on the blade, silver throwing dagger, small round shield (dark, web pattern), green glowing potion vial, rope coil, tools and keys hanging from the belt.",
    "palette": "Black, brown leather, one green glowing accent (the potion vial).",
    "keyDetails": "Asymmetrical feet — one boot, one bare foot. All black with brown leather straps. Very short and wiry next to the rest of the party."
  },
  "willa": {
    "build": "Medium height, young adult human female, warm complexion.",
    "hair": "Long, voluminous, dark brown, curly, past the shoulders.",
    "face": "Brown eyes, warm friendly smile, gold hoop earrings, gold star/compass pendant necklace.",
    "outfit": "Deep red/crimson robes over a white dress/underdress — red outer robe with gold trim, white inner dress showing at the chest and hem.",
    "gear": "Brown leather utility belt with a red sash/wrap and a compass/star buckle, scroll pouches, gem vials, red tassel decorations. Tall staff with a gold eight-pointed star/compass topper and a twisted wood handle, often shown with an open spellbook (red cover, gold compass) and a conjured flame. Brown leather lace-up boots.",
    "palette": "Deep red/crimson, white, gold.",
    "keyDetails": "Deep red-and-white robes. Dark curly hair. Gold star staff. Warm, friendly expression."
  },
  "gary-smithereen": {
    "build": "TODO — no reference art yet. Retired character (player retired); currently hidden from the live roster while resting.",
    "outfit": "TODO",
    "palette": "TODO",
    "keyDetails": "Half-Elf Thief. Possibly related to Wyatt Smithereen (shared surname) — unconfirmed in-fiction."
  },
  "vohnkar-nelwyn": {
    "build": "TODO — no reference art yet. Retired character (player retired); currently hidden from the live roster while resting.",
    "outfit": "TODO",
    "palette": "TODO",
    "keyDetails": "Dwarf Fighter."
  }
};
