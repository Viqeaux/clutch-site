// Per-character style prompts for the Style Gallery.
//
// Each prompt follows the Gothic Pulp format (see style-prompts-016.js for the
// hand-written originals): the uploaded image is ONLY the style sample, and the
// character's identity comes entirely from the written description. Characters
// keep the same pose in every style so they stay recognizable; the style
// changes the rendering and the background treatment.
//
// To add a style: add an entry to STYLE_PROMPT_STYLES keyed by its gallery id.
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

  // Style text (more styles are added by data/style-prompts-batch*.js, which
  // load first and register into window.STYLE_PROMPT_STYLES). `translation`
  // is either a list of rules or an object of {face, hair, cloth, leather,
  // metal, gear, keep} endings. In rules, {face} {hair} {cloth} {leather} {metal}
  // {gear} {keep} are filled from the character; a rule whose slot is empty
  // for that character is dropped.
  window.STYLE_PROMPT_STYLES = window.STYLE_PROMPT_STYLES || {};
  const STYLES = window.STYLE_PROMPT_STYLES;
  Object.assign(STYLES, {
    '012': {
      medium: 'a painted dark fantasy graphic novel illustration',
      intro: 'The finished character must look like a fully painted page or cover from a modern prestige dark fantasy graphic novel: muted, nearly monochrome, smoke-filled, and grim.',
      constructionTitle: 'MANDATORY DARK FANTASY CONSTRUCTION',
      construction: [
        'Every form is painted, not outlined: edges are defined by value and soft-to-hard transitions, with very little visible linework.',
        'A nearly monochrome sepia, ash, and charcoal palette, like an aged tinted photograph. Color is drained almost to gray-brown.',
        'One dim, diffused light source behind or above the figure, so the character reads as a dark, strong silhouette against glowing haze.',
        'Grounded, realistic adult anatomy and proportions, heavy and weighty, with a grim, intense expression.',
        'Thick atmosphere everywhere: rolling fog, smoke, drifting ash and dust that swallow the background and the ground around the boots.',
        'Fabric hangs heavy and worn, with frayed, torn hems and grime. Leather is scuffed and cracked. Metal is dull and tarnished, catching only a faint cold glint.',
        'Deep, soft-edged shadows that fall into near-black, with detail preserved only where the light catches.',
        'Subtle film grain and painterly texture across the whole image.',
      ],
      translation: [
        'The {face} becomes a grim, painted, deeply shadowed face, lit from one side.',
        'The {hair} becomes painted, matted locks that catch the faint backlight.',
        'The {cloth} become heavy, worn, painted cloth with torn hems and grime, falling into shadow.',
        'The {leather} become scuffed, cracked, painted leather with sparse highlights on buckles and edges.',
        'The {metal} become dull, tarnished, painted metal with only a faint cold glint.',
        'The {gear} are painted with the same weight, grime, and atmosphere as the character.',
        'Keep {keep}, but drain them toward the sepia and ash palette so they read as faint, muted tints, never bright.',
      ],
      resemble: 'a newly commissioned illustration from the same dark fantasy graphic novel as the sample image',
      detailTitle: 'DETAIL LEVEL: MATCH THE SAMPLE\'S PAINTED ATMOSPHERE',
      detail: [
        'The figure is crisp and fully detailed; the background dissolves progressively into fog and haze.',
        'Value contrast carries the image: a dark figure against a lighter, glowing, smoky sky.',
        'Every surface carries painted texture: worn cloth, cracked leather, splintered wood, mud, and debris.',
        'Costume details are clear where the light catches them: buckles, straps, stitching, and rivets.',
        'The foreground is littered with debris, broken timbers, mud, and drifting smoke.',
        'Match the sample\'s level of detail, so the figure holds up when zoomed in.',
      ],
      realismTitle: 'PAINT AND ATMOSPHERE REALISM',
      realism: [
        'Visible but controlled painterly brushwork with soft and hard edges.',
        'Desaturated sepia and charcoal palette, like a tinted vintage photograph.',
        'Dense, layered fog and smoke that create real depth.',
        'Fine film grain over the whole image.',
        'Shadows that are part of the painting, not a darkening filter.',
      ],
      avoid: 'Avoid bright or saturated color, clean digital gradients, glossy or plastic surfaces, cel shading, cartoon or anime styling, bold black outlines, clear blue skies, and cheerful lighting.',
      compositionLabel: 'Dark fantasy graphic novel cover composition',
      background: (s) => `${s}, painted in the same muted palette and atmosphere as the figure, dissolving into rolling fog and smoke under a pale, veiled sun`,
      contrast: 'Strong contrast between the dark figure and the glowing, hazy sky.',
      negatives: [
        'A photorealistic photograph or 3D-rendered version of the character.',
        'Bright, saturated, or cheerful color.',
        'Anime, manga, cel-shaded, or children\'s-cartoon faces and proportions.',
        'Glossy video-game character art.',
      ],
      checks: [
        'Immediately reads as a painted dark fantasy graphic novel illustration, not a photo, render, or filter.',
        'Uses the near-monochrome sepia, ash, and charcoal palette, with thick fog and smoke.',
        'Has grounded, realistic anatomy and a grim, deeply shadowed face.',
      ],
      directive: 'Create a painted, fog-drenched Dark Fantasy Graphic Novel illustration of {name}. Match the palette, lighting, atmosphere, and grim realism of the supplied sample image.',
      priority: 'Prioritize the authentic dark fantasy graphic novel look and recognizable character identity above all other considerations.',
    },

    '030': {
      medium: 'a chibi fantasy cartoon illustration',
      intro: 'The finished character must look like a cute, hand-drawn chibi fantasy sticker or character sheet illustration: tiny body, huge head, thick outlines, and simple flat color.',
      constructionTitle: 'MANDATORY CHIBI CONSTRUCTION',
      construction: [
        'Chibi proportions: the head is about as large as the whole body, roughly two heads tall in total, with short stubby arms and legs and small rounded hands.',
        'Eyes are small, solid black ovals with a single white highlight. No irises and no detailed eyelids. A small nose and a tiny or hidden mouth.',
        'Thick, slightly wobbly, hand-drawn dark outlines around every shape, like a marker or digital brush sketch.',
        'Flat, soft, muted color fills with only one simple shade tone per color. No gradients, no rendering.',
        'Hair, beards, and fur are drawn as big chunky clumps with a few loose sketchy interior strokes.',
        'Equipment is simplified into big, chunky, readable shapes, oversized relative to the body, with only the most distinctive details kept.',
        'A plain white or very light background with nothing behind the character but a soft drop shadow.',
      ],
      translation: [
        'The {face} becomes a small chibi face with dot eyes that still shows the character\'s expression clearly.',
        'The {hair} becomes big, chunky clumps with a few sketchy strokes.',
        'The {cloth} become simple, rounded, flat-colored shapes with a couple of fold lines.',
        'The {leather} become simple flat shapes with a single darker shade and a few stitch marks.',
        'The {metal} become flat gray or gold shapes with one bright highlight stroke.',
        'The {gear} are drawn chunky and oversized so each item is still clearly identifiable.',
        'Keep {keep} as soft, slightly muted flat colors.',
      ],
      resemble: 'a newly drawn character from the same chibi sticker set as the sample image',
      detailTitle: 'DETAIL LEVEL: MATCH THE SAMPLE\'S SIMPLICITY',
      detail: [
        'Few, bold shapes. Simplify everything, but keep every signature item (weapons, armor, hat or hood, distinctive markings).',
        'Thick, confident outlines with slight hand-drawn wobble.',
        'One shade tone per color; small, simple highlight marks.',
        'Faces are tiny and simple; personality comes from pose and silhouette.',
        'Relative size still matters: the character\'s height in the party is shown by overall chibi size (the gnome is the tiniest, the half-orc the biggest and bulkiest).',
      ],
      realismTitle: 'HAND-DRAWN CARTOON FINISH',
      realism: [
        'Visible, slightly uneven marker or brush outlines.',
        'Flat, matte color with soft shading.',
        'Clean, plain white background.',
        'A soft, simple ground shadow under the feet.',
      ],
      avoid: 'Avoid realistic proportions, detailed anatomy, painterly rendering, gradients, glossy or 3D shading, detailed backgrounds, anime-style large sparkling eyes, and dark or gory imagery.',
      compositionLabel: 'Chibi character sticker composition',
      background: () => 'plain white, with only a soft drop shadow under the character. No scenery',
      contrast: 'The character is centered and isolated, with clear empty space around the silhouette.',
      fullBody: 'Full body visible, standing in a simplified chibi version of the pose.',
      negatives: [
        'A realistic, semi-realistic, or properly proportioned character.',
        'Painted, gradient-shaded, or 3D-rendered surfaces.',
        'Anime-style big sparkling eyes with irises.',
        'A detailed or scenic background.',
      ],
      excludeTags: ['cartoon'],
      checks: [
        'Immediately reads as a cute chibi cartoon with a giant head and tiny body.',
        'Uses thick hand-drawn outlines, flat soft color, and simple black dot eyes.',
        'Is still clearly identifiable as this specific character from silhouette and gear.',
      ],
      directive: 'Create a cute, hand-drawn Chibi Fantasy illustration of {name}. Match the proportions, outlines, flat coloring, and simplicity of the supplied sample image.',
      priority: 'Prioritize the authentic chibi look and recognizable character identity above all other considerations.',
    },

    '047': {
      medium: 'an impressionist oil painting',
      intro: 'The finished character must look like a modern impressionist oil painting: loose, expressive palette-knife and brush strokes, glowing light, and soft, luminous color.',
      constructionTitle: 'MANDATORY IMPRESSIONIST CONSTRUCTION',
      construction: [
        'Every form is built from visible, loose brush and palette-knife strokes. No outlines and no hard ink lines.',
        'Edges are soft and broken; forms dissolve into the background where they turn away from the light.',
        'Light is the subject: strong, warm backlight or sunlight glowing through the scene, with soft rim light around the figure.',
        'Color is luminous and harmonized: soft lavenders, violets, warm ochres and creams, with complementary warm and cool strokes laid side by side.',
        'Detail is concentrated on the face, hands, and key items, and loosens toward the edges of the canvas.',
        'Hair, cloth, and fur are suggested by sweeping directional strokes that show movement and wind.',
        'Scattered, dappled flecks of paint in the foreground and background.',
      ],
      translation: [
        'The {face} becomes a softly painted face caught in glowing light, with the expression suggested in a few confident strokes.',
        'The {hair} becomes sweeping, wind-blown brushstrokes catching the backlight.',
        'The {cloth} become loose, flowing painted fabric with light glowing through its edges.',
        'The {leather} become warm, broken strokes of brown and ochre.',
        'The {metal} become a few bright, thick dabs of reflected light.',
        'The {gear} are suggested clearly enough to identify, with looser strokes than the face.',
        'Keep {keep}, but soften them into the luminous impressionist palette.',
      ],
      resemble: 'a newly painted canvas by the same artist as the sample image',
      detailTitle: 'DETAIL LEVEL: MATCH THE SAMPLE\'S LOOSENESS',
      detail: [
        'The face and the character\'s signature items are the most resolved areas; everything else is loose.',
        'Visible brush and palette-knife texture everywhere.',
        'Light, airy values overall, with the figure glowing against a bright sky.',
        'Movement is shown through directional strokes in hair, cloth, and the surroundings.',
      ],
      realismTitle: 'OIL PAINT REALISM',
      realism: [
        'Thick, visible paint with impasto ridges and broken color.',
        'Soft, lost-and-found edges.',
        'Luminous, glowing natural light.',
        'Canvas texture showing through thin areas.',
      ],
      avoid: 'Avoid hard outlines, crisp digital detail, smooth gradients, photorealism, dark or murky values, cel shading, and comic or cartoon styling.',
      compositionLabel: 'Impressionist painting composition',
      background: (s) => `${s}, reimagined as a sunlit, open landscape painted in loose, glowing strokes, with fields of wildflowers in soft lavender and ochre`,
      contrast: 'The figure glows against a bright, hazy sky.',
      negatives: [
        'A photorealistic or 3D-rendered version of the character.',
        'Hard ink outlines or comic-book linework.',
        'Anime, manga, cel-shaded, or cartoon faces and proportions.',
        'A dark, gloomy, or murky color scheme.',
      ],
      checks: [
        'Immediately reads as an impressionist oil painting with visible strokes.',
        'Is full of glowing light and a soft, luminous palette.',
        'Has believable adult anatomy and a recognizable face where visible.',
      ],
      directive: 'Create a loose, luminous Impressionist oil painting of {name}. Match the brushwork, light, and soft color of the supplied sample image.',
      priority: 'Prioritize authentic impressionist painting and recognizable character identity above all other considerations.',
    },

    '098': {
      medium: 'a stained-glass window',
      intro: 'The finished character must look like a real, photographed Gothic stained-glass window, with the character as its central figure, glowing with transmitted light inside a carved stone arch.',
      constructionTitle: 'MANDATORY STAINED-GLASS CONSTRUCTION',
      construction: [
        'Every shape is a separate piece of colored glass outlined by thick, dark soldered lead lines (cames).',
        'Color is jewel-toned, saturated, and translucent: ruby, sapphire, emerald, amber, violet, and gold, lit from behind.',
        'Glass shows texture: streaks, bubbles, ripples, and small variations in color within each piece.',
        'Faces, hands, and fine details are painted on the glass in dark grisaille lines.',
        'Scales, chainmail, fur, and patterned cloth are built from many small mosaic pieces.',
        'An ornamental border of geometric and floral glass surrounds the scene, with iron support bars crossing the window.',
        'The window sits inside a weathered, carved stone Gothic arch, and colored light spills onto the stone around it.',
      ],
      translation: [
        'The {face} becomes a face painted in grisaille on pale glass, keeping its expression.',
        'The {hair} becomes flowing pieces of glass in the hair color, with painted strand lines.',
        'The {cloth} become large pieces of jewel-colored glass with lead lines following the folds.',
        'The {leather} become amber and brown glass with painted detail lines.',
        'The {metal} become silver-gray, gold, and pale glass with painted highlights.',
        'The {gear} are built from their own clearly separated glass pieces so each item is readable.',
        'Keep {keep}, translated into the matching jewel-toned glass.',
      ],
      resemble: 'a newly made window from the same cathedral as the sample image',
      detailTitle: 'DETAIL LEVEL: MATCH THE SAMPLE\'S GLASSWORK',
      detail: [
        'Many small glass pieces in the figure, border, and sky, with consistent lead-line weight.',
        'The figure is clearly readable as a silhouette within the window.',
        'Ornamental swirls, stars, and leaves fill the space around the figure.',
        'The surrounding stone is carved and textured, lit by spilled colored light.',
      ],
      realismTitle: 'GLASS AND LIGHT REALISM',
      realism: [
        'Light genuinely passing through the glass, with glow and slight bloom.',
        'Physical lead cames with dark, slightly uneven edges.',
        'Visible texture and imperfections in the glass.',
        'Colored light cast onto the stone arch and floor.',
      ],
      avoid: 'Avoid a flat illustration that only imitates stained glass, painterly or airbrushed shading, photorealistic people, missing lead lines, and dull or muddy color.',
      compositionLabel: 'Gothic stained-glass window composition',
      background: (s) => `inside the window, behind the figure: ${s}, simplified into glass shapes, under a glass sky of stars, sun, and swirling clouds. Outside the window: a carved stone Gothic arch with columns`,
      contrast: 'The figure is the largest, clearest element of the window.',
      top: 'the top of the window arch',
      fullBody: 'The full window and the character\'s full body are visible.',
      negatives: [
        'A real person standing in front of a window.',
        'A flat illustration without lead lines or glass texture.',
        'Anime, manga, or cartoon faces and proportions.',
        'Text, banners, or labels in the glass.',
      ],
      checks: [
        'Immediately reads as a real, photographed stained-glass window.',
        'Every shape is separate glass with dark lead lines and transmitted light.',
        'Shows the character as the central figure, recognizable in face (where visible) and gear.',
      ],
      directive: 'Create a glowing Stained-Glass Fantasy window featuring {name}. Match the glasswork, lead lines, color, and light of the supplied sample image.',
      priority: 'Prioritize authentic stained-glass construction and recognizable character identity above all other considerations.',
    },

    '101': {
      medium: 'a LEGO brick-built diorama, photographed',
      intro: 'The finished character must look like a real photograph of a LEGO minifigure-scale or brick-built figure posed in a brick-built diorama, shot with a macro lens.',
      constructionTitle: 'MANDATORY BRICK CONSTRUCTION',
      construction: [
        'The character is a LEGO minifigure (or, for unusually large or small characters, a brick-built figure at matching scale) made from real, recognizable LEGO parts.',
        'The face is a printed minifigure face: simple printed eyes, brows, and mouth showing the character\'s expression.',
        'Hair, hats, hoods, and helmets are molded minifigure hairpieces and headgear.',
        'Clothing and armor are printed on the torso and legs, with molded accessory pieces (pauldrons, capes, belts) attached.',
        'Capes and cloaks are soft fabric minifigure capes.',
        'Weapons and gear are real LEGO accessory pieces.',
        'Visible studs, seams, and mold lines; glossy ABS plastic catching soft studio light.',
        'The environment is built entirely from bricks, plates, and tiles.',
      ],
      translation: [
        'The {face} becomes a printed minifigure face with a matching expression.',
        'The {hair} becomes a molded minifigure hairpiece or beard piece in matching colors.',
        'The {cloth} become printed torso and leg detail, or a fabric cape where it hangs loose.',
        'The {leather} become printed detail and molded brown accessory pieces.',
        'The {metal} become pearl-silver, gold, or gunmetal plastic parts.',
        'The {gear} are LEGO accessory pieces, each one clearly identifiable.',
        'Keep {keep}, matched to the closest real LEGO colors.',
      ],
      resemble: 'a photo from the same LEGO fantasy set as the sample image',
      detailTitle: 'DETAIL LEVEL: MATCH THE SAMPLE\'S MACRO TOY PHOTOGRAPHY',
      detail: [
        'Sharp focus on the figure, with a shallow depth of field and a softly blurred background.',
        'Crisp printed details on face and torso.',
        'Visible studs, seams, and slight plastic reflections on every brick.',
        'A busy diorama with small details: torches, plants, banners, and loose bricks.',
      ],
      realismTitle: 'PHYSICAL TOY PHOTOGRAPHY REALISM',
      realism: [
        'Real plastic material with soft reflections and slight wear.',
        'Authentic brick geometry, studs, and proportions.',
        'Cinematic macro lens, warm key light, and soft bokeh.',
        'Small light sources (translucent flame pieces) glowing in the scene.',
      ],
      avoid: 'Avoid painted or drawn styles, non-LEGO toy designs, organic skin or cloth textures on the figure, impossible bricks, and flat CGI without real-photo depth of field.',
      compositionLabel: 'Cinematic LEGO diorama composition',
      background: (s) => `a brick-built diorama of ${s}, with a softly blurred brick-built landscape behind it`,
      contrast: 'Shallow depth of field keeps the figure sharp against the blurred background.',
      negatives: [
        'A drawn, painted, or illustrated character.',
        'A real person or a non-LEGO toy.',
        'Fake or impossible LEGO parts.',
        'A plain, empty background.',
      ],
      excludeTags: ['cartoon'],
      checks: [
        'Immediately reads as a real photograph of LEGO.',
        'The character is built from authentic minifigure parts and bricks.',
        'The character is still recognizable from colors, gear, and printed details.',
      ],
      directive: 'Create a cinematic macro photograph of {name} as a LEGO minifigure in a brick-built diorama. Match the toy photography, lighting, and brick realism of the supplied sample image.',
      priority: 'Prioritize authentic LEGO construction and recognizable character identity above all other considerations.',
    },
  });

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
    const top = st.top || c.top;
    const L = [];
    L.push(`# ${styleName} Character Reinterpretation: ${N}`, '');
    L.push('## REFERENCE IMAGE AND CHARACTER IDENTITY', '');
    L.push(`The single uploaded image is the ${styleName} style sample. Use it as the definitive source for the art style: ${st.sourceOf || 'medium, construction, shading, color, texture, and atmosphere'}. Do NOT copy its subject, clothing, hairstyle, weapons, or face.`, '');
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
    L.push(`**${st.compositionLabel}**, matching the sample image.`, '');
    L.push(`- ${st.fullBody || `Full body visible from ${top} to the bottom of ${pr.p} boots.`}`);
    L.push(`- ${c.short} occupies approximately 75-85% of the image height.`);
    L.push(`- **MANDATORY POSE AND CAMERA:** ${c.pose}`);
    L.push(`- All major equipment is clearly visible${c.faceHidden ? '' : ` without obstructing ${pr.p} face`}.`);
    L.push('- Centered, with a clear silhouette and readable costume details.');
    L.push(`- Background: ${typeof st.background === 'function' ? st.background(c.setting) : st.background.replace('{s}', c.setting)}.`);
    L.push(`- Background forms sit behind the figure and never compete with it. ${st.contrast}`, '');
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
