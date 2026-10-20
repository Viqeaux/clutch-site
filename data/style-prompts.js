// Per-character style prompts for the Style Gallery.
//
// Each prompt follows the Gothic Pulp format (see style-prompts-016.js for the
// hand-written originals) and is built around the individual character: their
// identity, pose, camera, and setting all come from the CHARACTERS entry. The
// uploaded style sample only sets the look (medium, line, color, lighting,
// texture); nothing about its subject, pose, or composition is carried over.
//
// To add a style: add an entry to data/style-prompts-styles.js keyed by its
// gallery id.
// Styles without an entry fall back to the gallery's generic prompt.
(function () {
  const CHARACTERS = [
    {
      id: 'wuck', name: 'Wuck', short: 'Wuck', p: 'he',
      top: 'the top of the hat',
      identity: [
        'Build: a stocky, broad-shouldered, barrel-chested frontier adventurer with thick forearms and a low, heavy, powerful stance. Dwarf-like in his compactness and mass, but a mature adult with believable anatomy.',
        'Face: weathered, rugged, middle-aged. Heavy brow, strong nose, deep-set eyes, and a stern, scowling, no-nonsense expression.',
        'Hair and beard: a full, thick, red-brown beard with a mustache, and shoulder-length reddish-brown hair under the hat.',
        'Hat: a wide-brimmed, worn brown leather hat with a shaped crown, a decorative band, and small metal studs or pins.',
        'Neckerchief: a green cloth neckerchief knotted at the throat.',
        'Badge: a star-shaped metal badge pinned to the chest.',
        'Coat: a long, heavy, distressed brown leather duster worn open, falling to the knees, with a ragged, frayed, tattered hem and cracked, weathered leather.',
        'Underlayers: a studded, layered leather vest with cross-chest straps and buckles over a rolled-sleeve shirt, and olive-green trousers.',
        'Arms: wide leather bracers and bound leather gauntlets with straps and buckles, and dark gloves.',
        'Belt: a wide leather belt with a large oval brass buckle.',
        'Boots: tall brown leather boots with buckled straps, brass spurs, and a padded leather guard on one knee.',
        'Weapon: a single-bladed hand axe with an ornate engraved head and a wooden haft with a brass cap.',
        'Back: a large round wooden shield with a metal rim and a triangular emblem, carried on his back with a rolled bedroll strapped above it.',
        'Belt gear: a coil of rope, a length of chain with a grappling hook, a small leather pouch, a round brown orb or sphere on the belt, and a row of three cylindrical brown canisters on a bandolier at the hip.',
      ],
      colors: 'leather browns, olive green, a green neckerchief, brass and steel metal, and a red-brown beard',
      t: {
        face: 'heavy-browed, scowling face',
        hair: 'red-brown beard and hair',
        cloth: 'green neckerchief, shirt, and olive trousers',
        leather: 'leather duster, hat, vest, bracers, straps, and boots',
        metal: 'brass buckle, star badge, spurs, and axe head',
        gear: 'round shield, rope, chain and grappling hook, pouch, orb, and canisters',
        keep: 'his leather browns and green neckerchief',
      },
      pose: 'low-angle, three-quarter view. He stands with his legs planted wide, the axe resting on his shoulder, his other hand gripping his belt, his head tilted slightly down with a scowl, and the duster hem blowing sideways.',
      setting: 'castle spires on a distant hill, weathered stone ruins, twisted dead trees, and a rocky frontier hillside',
      loses: 'his hat, badge, duster, shield, axe, or gear',
      poseCheck: 'in the low-angle pose with the axe on his shoulder',
      retains: 'the hat, green neckerchief, star badge, tattered duster, brass buckle, spurred boots, shield, axe, rope, chain and grappling hook, and canisters',
      negatives: [],
      size: 2,
    },
    {
      id: 'veyra', name: 'Veyra Kass', short: 'Veyra', p: 'she',
      top: 'the top of her head',
      identity: [
        'Build: a tall, strong, athletic adult woman with broad shoulders, powerful muscular arms, and a disciplined, battle-ready stance. Believable mature anatomy, a veteran warrior rather than a pin-up.',
        'Face: strong-featured and weathered, with defined cheekbones, a firm jaw, level dark eyes, and a calm, steady, watchful expression.',
        'Hair: thick, wavy dark-brown hair braided back from the face and pinned up, with loose curls escaping around the temples and neck.',
        'Cloak: a long, heavy blue cloak draped over the shoulders and falling behind her, fastened at the collar with a round gold brooch, with a ragged, frayed, tattered hem.',
        'Tabard: a narrow blue cloth tabard hanging from the belt down the front of her legs to the knees, with a pointed lower edge and embroidered gold crescent moon and star symbols.',
        'Armor: a dark steel breastplate with a gold ornamental cross-like emblem at the center, worn over a chainmail shirt with chainmail sleeves. A single layered steel pauldron on the left shoulder.',
        'Arms: steel-plated leather vambraces on both forearms with straps and buckles, and dark fingerless leather gloves.',
        'Belts and gear: crossed brown leather belts and straps around the waist and chest, with several small leather pouches and a cluster of small vials or cylindrical canisters on the left hip.',
        'Legs: dark brown leather trousers, with sculpted steel knee guards with ridged, faceted plates, and tall brown leather boots with steel shin guards, straps, and buckles.',
        'Back: a rolled bedroll strapped high on the back of the left shoulder.',
        'Sword: a sheathed longsword hanging at her left hip, with a gold star-shaped crossguard and a dark scabbard with gold fittings.',
        'Weapon: a spiked iron flail (a morning star) with a short wooden handle in her hand, a length of heavy chain, and a ball covered in long metal spikes.',
      ],
      colors: 'deep blue cloak and tabard, gold embroidery and brooch, dark gunmetal steel, brown leather, and dark brown hair',
      t: {
        face: 'steady, watchful face',
        hair: 'braided dark-brown hair and loose curls',
        cloth: 'blue cloak and crescent-and-star tabard',
        leather: 'belts, straps, pouches, gloves, trousers, and boots',
        metal: 'breastplate, pauldron, chainmail, vambraces, knee guards, shin guards, gold brooch, and sword crossguard',
        gear: 'flail, chain, spiked ball, sheathed sword, vials, and bedroll',
        keep: 'her blue and gold color relationships',
      },
      pose: 'low-angle, three-quarter view. She strides forward with her weight on her front leg, the flail swinging out low to one side with the chain taut and the spiked ball trailing, her other hand resting on the hilt of her sheathed sword, her head turned toward the viewer with a steady, watchful stare, and the cloak billowing behind her.',
      setting: 'a ruined cathedral with broken pointed arches and spires, weathered carved stone, twisted dead trees, and a rubble-strewn hillside',
      loses: 'her cloak, tabard, armor, flail, or sword',
      poseCheck: 'in the low-angle striding pose with the flail swinging',
      retains: 'the braided hair, blue tattered cloak, gold brooch, crescent-and-star tabard, steel breastplate and pauldron, faceted knee guards, flail, and sheathed sword',
      negatives: [],
      size: 3,
    },
    {
      id: 'osric', name: 'Osric Pugh', short: 'Osric', p: 'he',
      top: 'the top of his head',
      identity: [
        'Build: a short, stocky, heavyset human man with a soft, solid frame, rounded shoulders, and thick arms. Unarmed and unthreatening, a clerk and con man, not a fighter. He stands relaxed, a little too comfortable.',
        'Face: a warm, crooked, knowing half-smile with laugh lines at the eyes and forehead, a strong nose, a square jaw, and sharp, friendly, slightly amused eyes. Clean-shaven or lightly stubbled. He looks like a man you would trust right away.',
        'Hair: thick, curly auburn-brown hair, long and wild at the back and falling past the collar, with the sides and temples shaved or receded high. A small hoop earring in one ear.',
        'Shirt: a cream linen shirt with a loosely laced open collar and long, full, puffed sleeves gathered at the cuffs.',
        'Tunic: a short-sleeved, V-necked, worn brown wool tunic over the shirt, falling to mid-thigh with a flared, rough, slightly frayed hem.',
        'Belt: a brown leather belt with a small brass buckle, with a leather loop at the right hip holding a few quills or slim tools and a small padlock or lantern-like trinket on a hook.',
        'Satchel: a large, scuffed, brown leather satchel with a buckled flap, worn across the body on a wide shoulder strap, with one hand holding the strap. The hidden pages are sewn into its lining.',
        'Legs and feet: plain dark brown trousers tucked into the tops of worn brown leather boots, with laces and scuffed toes.',
        'Weapons: none visible.',
      ],
      colors: 'warm browns, cream linen, auburn hair, and brass',
      t: {
        face: 'face with its crooked, knowing half-smile',
        hair: 'curly auburn hair and hoop earring',
        cloth: 'brown wool tunic and cream linen shirt (the cream linen is the brightest area of the figure)',
        leather: 'satchel, belt, and boots',
        metal: 'brass buckle, padlock, and quill tools',
        gear: 'satchel and belt trinkets',
        keep: 'his browns and cream',
      },
      pose: 'slightly low-angle, three-quarter view. He walks toward the viewer with an easy, swaggering step, one hand gripping the satchel strap, the other hand open and extended in a welcoming, persuasive gesture, his head tilted with the crooked half-smile and a knowing look straight at the viewer, and the tunic hem swaying.',
      setting: 'a ruined cathedral with broken pointed arches and tall spires, crumbling carved stone, ivy-choked columns, cracked flagstones, and a few guttering candles at his feet',
      loses: 'his tunic, satchel, curly hair, or earring',
      poseCheck: 'in the walking pose with one hand on the satchel strap',
      retains: 'the curly hair with shaved sides, hoop earring, cream laced shirt, brown tunic, brass belt buckle, large satchel, and boots',
      negatives: ['A weapon in his hands, or a fit, muscular, heroic physique.'],
      size: 1,
    },
    {
      id: 'gingblat', name: 'Gingblat the Beetle Groper', short: 'Gingblat', p: 'he',
      top: 'the top of his hood',
      identity: [
        'Build: a gnome, small and compact with a sturdy, wiry frame, a large head for his body, and quick, springy limbs. His whole body stands only about as tall as a human\'s waist and chest, so draw him clearly small against his surroundings. He is a mature adult, not a child.',
        'Face: a ruddy, freckled, weathered face with big, bright blue eyes, a wide, mischievous, confident grin, and a short, scruffy, light-brown beard with a mustache. Long, pointed ears sticking out from under the hood. Short, messy, sandy-brown hair on the forehead.',
        'Hood and cloak: a deep, shaggy, ragged brown-ochre hooded cloak made of rough, tattered, fur-like strips, with a ragged hem, draped over the shoulders.',
        'Armor and straps: a shirt of fine chainmail visible at the chest and shoulder under the cloak, with crossed brown leather straps and buckles over the chest.',
        'Arms: brown leather bracers and fingerless leather gloves with a scuffed, worn look.',
        'Belt: a wide brown leather belt with a large steel buckle, with small leather pouches, a coil of thin rope, and a steel ring on a short chain hanging at the hip.',
        'Legs: heavy brown trousers with patched knees and short, worn brown leather boots.',
        'Weapons: a matching pair of leaf-bladed daggers with ornate engraved silver crossguards and short, ridged, steel-capped grips, one in each hand.',
        'Back: a wicker-woven quiver of long, fletched arrows on his back, with a wooden bow shaft showing behind his shoulder.',
      ],
      colors: 'ochre and earthy brown cloak, ruddy skin, blue eyes, silver steel, and brown leather',
      t: {
        face: 'face with its wide, mischievous grin and bright eyes',
        hair: 'scruffy beard and sandy hair',
        cloth: 'ragged hooded cloak of tattered strips and patched trousers',
        leather: 'straps, belt, bracers, gloves, and boots',
        metal: 'chainmail, twin daggers, crossguards, steel ring, and belt buckle',
        gear: 'quiver, arrows, bow, rope, and pouches',
        keep: 'his ochre and brown cloak and ruddy skin',
      },
      pose: 'low-angle, three-quarter view. He is caught mid-leap or in a low, springing crouch, one dagger thrust forward toward the viewer and the other held back low, his wide grin aimed at the viewer, and the ragged cloak whipping behind him.',
      setting: 'tall, twisted trees, a crooked gabled cottage with a single lit window, gnarled roots, mossy weathered stone, and thick undergrowth. Keep the trees tall so he reads as small',
      loses: 'his hood, pointed ears, grin, twin daggers, or quiver',
      poseCheck: 'in the low-angle springing pose with a dagger in each hand',
      retains: 'the ragged ochre hooded cloak, pointed ears, scruffy beard, chainmail, crossed straps, steel buckle, twin leaf-bladed daggers, and quiver of arrows',
      negatives: [{ text: 'A childlike, babyish, or elf-like version of the character.', tag: 'cartoon' }],
      size: 0,
    },
    {
      id: 'dagwood', name: 'Dagwood Beefheart', short: 'Dagwood', p: 'he',
      top: 'the top of his head',
      identity: [
        'Build: a half-orc barbarian, enormous and towering, with a massive barrel chest, huge shoulders, slabs of muscle in the arms and torso, and a heavy, planted, brutal stance. Believable mature anatomy, powerful but not cartoonish.',
        'Skin: gray-green, rough, and weathered, covered in pale, raised scars across the chest, shoulder, and arm.',
        'Face: a heavy, scowling brutish face with a bald head, a thick, heavy brow, deep-set, hard, narrowed eyes, a broad flat nose, a long, deep scar running down across one eye and cheek, a square jaw, and two large tusks jutting up from the lower jaw. Pointed ears.',
        'Shoulder armor: heavy, layered, riveted dark leather and iron-studded pauldrons on both shoulders, trimmed with shaggy brown fur.',
        'Chest: bare, scarred, with a wide leather strap running diagonally across it from the shoulder, fastened with a steel ring and a buckle.',
        'Arms: thick, studded leather bracers and gauntlets on both forearms, trimmed with fur, with rows of round iron rivets.',
        'Belt and skirt: a very wide, heavy, studded leather belt with a large steel ring buckle, and a hanging kilt of studded leather panels with tattered fur-trimmed edges.',
        'Legs: thick, strapped and wrapped leather leg guards with fur trim, and heavy boots.',
        'Weapon: an enormous single-bladed battle axe with a broad, scratched, battered steel blade with crosshatched tally-mark scratches etched into it, mounted on a long haft wrapped in leather cord and metal bands.',
      ],
      colors: 'gray-green skin, near-black studded leather, brown fur, and dark weathered steel',
      t: {
        face: 'brutish face with its heavy brow, tusks, and long scar',
        hair: 'shaggy fur trim',
        cloth: '',
        leather: 'studded pauldrons, bracers, belt, kilt, and leg wraps',
        metal: 'steel rings, buckles, rivets, and the tally-scratched axe blade',
        gear: 'leather-wrapped axe haft',
        keep: 'his gray-green skin and dark leather',
      },
      pose: 'very low-angle, three-quarter view, so he looms over the viewer. He strides forward, both hands gripping the haft of the great axe, which is raised back over his shoulder in a mid-swing wind-up. His head is lowered with a furious scowl and bared tusks, and his fur trim and kilt are blown back.',
      setting: 'a looming ruined fortress with jagged battlements, broken arches, weathered stone cliffs, and ragged dark clouds',
      loses: 'his tusks, scar, studded leather, or great axe',
      poseCheck: 'in the very low-angle striding pose with the axe raised in both hands',
      retains: 'the bald head, tusks, facial scar, scarred gray-green skin, studded fur-trimmed pauldrons and bracers, steel-ring belt, studded kilt, leg wraps, and the scratched great axe',
      negatives: [{ text: 'A cartoonish, comedic, or video-game-orc version of the character.', tag: 'cartoon' }],
      size: 4,
    },
    {
      id: 'aureffkae', name: 'Aureffkae', short: 'Aureffkae', p: 'he',
      top: 'the top of the hood',
      faceHidden: true,
      identity: [
        'Build: a tall, lean-to-average human man with a long, solid frame, standing upright and watchful. A grim, patient, ominous presence. He moves like a wandering priest-warrior.',
        'Face: hidden. The deep hood throws his entire face into near-black shadow, with only a faint hint of the lower jaw and chin, and no visible eyes. Do not add a face inside the hood.',
        'Hood and cloak: a large, deep green hood pulled low, and a heavy, long, olive-green cloak with a ragged, torn, tattered hem and edges that whips out to one side behind him.',
        'Robe: a long, loose, olive-green robe with long sleeves, belted at the waist, over a long brown underrobe that falls to his boots with a ragged hem.',
        'Straps: crossed brown leather straps over the chest, one carrying the crossbow and quiver across his back.',
        'Belt: a wide brown leather belt with a knotted cloth sash, several brown leather pouches at the hips, and a small sheathed dagger on the left hip.',
        'Hands: worn brown leather gloves.',
        'Feet: scuffed, heavy brown leather boots.',
        'Weapon: a flanged steel mace with a dark metal head of pointed, leaf-shaped flanges and a long, dark wooden haft, held in one hand.',
        'Back: a large crossbow slung across his back, and a leather quiver of black-fletched bolts or arrows rising over the shoulder.',
      ],
      colors: 'olive and moss green cloak, brown robe and leather, dark steel mace, and a face lost in black shadow',
      t: {
        face: 'hooded head',
        hair: '',
        cloth: 'green hood, tattered olive cloak, robe, and brown underrobe',
        leather: 'crossed straps, belt, pouches, gloves, and boots',
        metal: 'mace head, dagger, and crossbow fittings',
        gear: 'crossbow, quiver, bolts, and mace haft',
        keep: 'his olive green and brown colors',
      },
      pose: 'low-angle, three-quarter view. He descends a crumbling flight of stone steps toward the viewer, the mace raised in one hand at shoulder height, the other hand open at his side, his hooded head lowered and facing the viewer, and the torn cloak whipping out behind him.',
      setting: 'a ruined chapel with broken pointed arches and a shattered spire, tilted gravestones and a stone cross, crumbling stone steps, and a heap of skulls at the foot of the steps',
      loses: 'his green hood, tattered cloak, crossbow, quiver, or mace',
      poseCheck: 'in the low-angle pose descending stone steps with the mace raised',
      retains: 'the green hood, ragged olive cloak, brown robe, crossed straps, belt pouches, sheathed dagger, crossbow, quiver, and flanged mace',
      negatives: ['A visible face, eyes, or skull inside the hood.'],
      size: 3,
    },
  ];

  // Style text lives in data/style-prompts-styles.js, which loads first.
  // In translation rules, {face} {hair} {cloth} {leather} {metal} {gear}
  // {keep} are filled from the character; a rule whose slot is empty for that
  // character is dropped.
  const STYLES = window.STYLE_PROMPT_STYLES || {};

  const PRON = {
    he: { s: 'he', o: 'him', p: 'his', S: 'He' },
    she: { s: 'she', o: 'her', p: 'her', S: 'She' },
  };

  function fill(str, c, styleName) {
    return str.replace(/\{(\w+)\}/g, (m, k) => (k === 'name' ? c.name : k === 'style' ? styleName : (c.t[k] ?? m)));
  }

  function build(styleId, styleName, c) {
    const ov = window.STYLE_PROMPT_OVERRIDES && window.STYLE_PROMPT_OVERRIDES[styleId];
    if (ov && ov[c.id]) return ov[c.id];
    const st = STYLES[styleId];
    if (!st) return null;
    const pr = PRON[c.p];
    const N = c.name.toUpperCase();
    const ex = st.excludeTags || [];
    const charNeg = c.negatives
      .filter((n) => typeof n === 'string' || !ex.includes(n.tag))
      .map((n) => (typeof n === 'string' ? n : n.text));
    const tr = Array.isArray(st.translation) ? st.translation : [
      st.translation.face && `The {face} becomes ${st.translation.face}.`,
      st.translation.hair && `The {hair} becomes ${st.translation.hair}.`,
      st.translation.cloth && `The {cloth} become ${st.translation.cloth}.`,
      st.translation.leather && `The {leather} become ${st.translation.leather}.`,
      st.translation.metal && `The {metal} become ${st.translation.metal}.`,
      st.translation.gear && `The {gear} are ${st.translation.gear}.`,
      st.translation.keep && `Keep {keep}, ${st.translation.keep}.`,
    ].filter(Boolean);
    const translation = tr
      .filter((r) => {
        const k = (r.match(/\{(face|hair|cloth|leather|metal|gear)\}/) || [])[1];
        return !k || c.t[k];
      })
      .map((r) => {
        if (c.faceHidden && r.includes('{face}')) return `The ${c.t.face} keeps the face hidden: no face, eyes, or features inside the hood, only deep shadow.`;
        return fill(r, c);
      });
    const L = [];
    L.push(`# ${styleName} Character Reinterpretation: ${N}`, '');
    L.push('## REFERENCE IMAGE AND CHARACTER IDENTITY', '');
    L.push(`The single uploaded image is the ${styleName} style sample. Use it ONLY as the source for the art style: medium, linework, shading, color palette, lighting quality, texture, and finish. Do NOT copy anything else from it: not its subject, face, clothing, weapons, pose, camera angle, framing, composition, setting, props, creatures, or background.`, '');
    L.push(`The character's identity comes entirely from the written description below. Draw ${pr.o} from scratch as ${st.medium}. Render at ultra-high resolution with sample-level detail.`, '');
    L.push('Generate ONE finished image of this single character.', '');
    L.push(`### CHARACTER: ${N}`, '');
    c.identity.forEach((b) => L.push(`- ${b}`));
    L.push(`- Colors to carry over: ${c.colors}. Reinterpret them within the style's palette.`, '');
    L.push(`## ARTISTIC STYLE: AUTHENTIC ${styleName.toUpperCase()}`, '');
    L.push(st.intro, '');
    L.push(`**${st.constructionTitle}**`, '');
    st.construction.forEach((b) => L.push(`- ${b}`));
    L.push('', '**CHARACTER TRANSLATION**', '');
    translation.forEach((b) => L.push(`- ${b}`));
    L.push('', `The result should resemble ${st.resemble}, not a generic fantasy portrait.`, '');
    L.push(`## ${st.detailTitle}`, '');
    st.detail.forEach((b) => L.push(`- ${b}`));
    L.push('', `## ${st.realismTitle}`, '');
    st.realism.forEach((b) => L.push(`- ${b}`));
    L.push('', st.avoid, '');
    L.push('## COMPOSITION AND PRESENTATION', '');
    L.push(`**${st.compositionLabel}.** The pose, camera, setting, and composition below come from this character, not from the sample image.`, '');
    L.push(`- ${st.fullBody || `Full body visible from ${c.top} to the bottom of ${pr.p} boots.`}`);
    L.push(`- ${c.short} occupies approximately 75-85% of the image height.`);
    L.push(`- **MANDATORY POSE AND CAMERA:** ${c.pose}`);
    L.push(`- All major equipment is clearly visible${c.faceHidden ? '' : ` without obstructing ${pr.p} face`}.`);
    L.push('- Centered, with a clear silhouette and readable costume details.');
    L.push(`- Background: ${st.background ? st.background.replace('{s}', c.setting) : `${c.setting}. Render it in the same style, palette, and lighting as the figure`}.`);
    L.push('- Background forms sit behind the figure and never compete with it. Light and value contrast keep the figure clearly separated from the background.', '');
    L.push('## OUTPUT', '');
    L.push('- Portrait orientation, 2:3 aspect ratio.', '- One character, one image.', '- No additional characters.', '- No text, titles, logos, labels, speech bubbles, watermarks, or decorative borders.', '');
    L.push('## STRICT NEGATIVE CONSTRAINTS', '', '**DO NOT CREATE:**', '');
    st.negatives.forEach((b) => L.push(`- ${b}`));
    charNeg.forEach((b) => L.push(`- ${b}`));
    L.push(`- A generic fantasy character that loses ${c.loses}.`, '');
    L.push('## FINAL QUALITY REQUIREMENT', '', 'Before finalizing, verify that the image:', '');
    const checks = [
      ...st.checks,
      `Shows ${c.short} ${c.poseCheck}.`,
      `Retains ${c.retains}.`,
      'Shows one character, alone, in a complete 2:3 portrait.',
    ];
    checks.forEach((b, i) => L.push(`${i + 1}. ${b}`));
    L.push('', '**FINAL DIRECTIVE:**', '', fill(st.directive, c, styleName), '', st.priority);
    return L.join('\n');
  }

  window.STYLE_PROMPTS = {
    characters: CHARACTERS,
    has: (id) => !!STYLES[id] || !!(window.STYLE_PROMPT_OVERRIDES && window.STYLE_PROMPT_OVERRIDES[id]),
    build,
  };
})();
