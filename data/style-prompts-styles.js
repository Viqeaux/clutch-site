// Style text for every Style Gallery style, keyed by gallery id.
//
// The style sample image is used ONLY for the look: medium, line, color,
// lighting, and texture. Pose, camera, setting, and composition always come
// from the character (see data/style-prompts.js). Keep scene content out of
// these fields; a style only sets its own background/framing when the format
// itself is the style (a window, a manuscript page, a diorama, ...).
//
// `translation` is either a list of rules or an object of
// {face, hair, cloth, leather, metal, gear, keep} endings.
window.STYLE_PROMPT_STYLES = {
  "100": {
    "priority": "Prioritize authentic newspaper comic strip construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a vintage Sunday newspaper comic strip",
    "intro": "The finished character must look like a 1970s Sunday newspaper comic strip: loose, confident cartoon ink, big noses, flat bright color, and yellowed newsprint.",
    "constructionTitle": "MANDATORY COMIC STRIP CONSTRUCTION",
    "construction": [
      "Loose, confident, simplified cartoon ink lines.",
      "Exaggerated cartoon proportions: big noses, small bodies, expressive poses.",
      "Flat, bright color: red, green, yellow, and blue.",
      "Simple backgrounds of rolling hills, trees, and castles.",
      "Yellowed, slightly faded newsprint.",
      "Shown as a single wide panel with a simple border."
    ],
    "translation": {
      "face": "a loose, big-nosed cartoon face",
      "hair": "a few loose ink strokes",
      "cloth": "flat color with a few loose lines",
      "leather": "flat color shapes",
      "metal": "simple outlined shapes",
      "gear": "cartoonishly simplified but recognizable",
      "keep": "as flat, bright newsprint colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SIMPLICITY",
    "detail": [
      "Loose cartoon line.",
      "Flat color.",
      "Simple backgrounds.",
      "Newsprint texture."
    ],
    "realismTitle": "NEWSPRINT REALISM",
    "realism": [
      "Yellowed newsprint.",
      "Flat printed color.",
      "Slight misregistration.",
      "Loose ink."
    ],
    "avoid": "Avoid detailed rendering, realistic anatomy, gradients, photorealism, and gritty texture.",
    "compositionLabel": "Sunday comic strip panel composition",
    "fullBody": "Full body visible in a single comic strip panel.",
    "background": "{s}, simplified into simple cartoon shapes",
    "negatives": [
      "A photorealistic version of the character.",
      "Detailed, realistic rendering.",
      "Speech bubbles, titles, or text."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a vintage Sunday comic strip panel.",
      "Has loose cartoon ink, flat color, and newsprint.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} panel of {name}. Match the loose cartoon ink, flat color, and newsprint of the supplied sample image."
  },
  "101": {
    "medium": "a LEGO brick-built diorama, photographed",
    "intro": "The finished character must look like a real photograph of a LEGO minifigure-scale or brick-built figure posed in a brick-built diorama, shot with a macro lens.",
    "constructionTitle": "MANDATORY BRICK CONSTRUCTION",
    "construction": [
      "The character is a LEGO minifigure (or, for unusually large or small characters, a brick-built figure at matching scale) made from real, recognizable LEGO parts.",
      "The face is a printed minifigure face: simple printed eyes, brows, and mouth showing the character's expression.",
      "Hair, hats, hoods, and helmets are molded minifigure hairpieces and headgear.",
      "Clothing and armor are printed on the torso and legs, with molded accessory pieces (pauldrons, capes, belts) attached.",
      "Capes and cloaks are soft fabric minifigure capes.",
      "Weapons and gear are real LEGO accessory pieces.",
      "Visible studs, seams, and mold lines; glossy ABS plastic catching soft studio light.",
      "The environment is built entirely from bricks, plates, and tiles."
    ],
    "translation": [
      "The {face} becomes a printed minifigure face with a matching expression.",
      "The {hair} becomes a molded minifigure hairpiece or beard piece in matching colors.",
      "The {cloth} become printed torso and leg detail, or a fabric cape where it hangs loose.",
      "The {leather} become printed detail and molded brown accessory pieces.",
      "The {metal} become pearl-silver, gold, or gunmetal plastic parts.",
      "The {gear} are LEGO accessory pieces, each one clearly identifiable.",
      "Keep {keep}, matched to the closest real LEGO colors."
    ],
    "resemble": "a photo from the same LEGO fantasy set as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MACRO TOY PHOTOGRAPHY",
    "detail": [
      "Sharp focus on the figure, with a shallow depth of field and a softly blurred background.",
      "Crisp printed details on face and torso.",
      "Visible studs, seams, and slight plastic reflections on every brick.",
      "A busy diorama with small details: torches, plants, banners, and loose bricks."
    ],
    "realismTitle": "PHYSICAL TOY PHOTOGRAPHY REALISM",
    "realism": [
      "Real plastic material with soft reflections and slight wear.",
      "Authentic brick geometry, studs, and proportions.",
      "Cinematic macro lens, warm key light, and soft bokeh.",
      "Small light sources (translucent flame pieces) glowing in the scene."
    ],
    "avoid": "Avoid painted or drawn styles, non-LEGO toy designs, organic skin or cloth textures on the figure, impossible bricks, and flat CGI without real-photo depth of field.",
    "compositionLabel": "Cinematic LEGO diorama composition",
    "background": "a brick-built diorama of {s}, with a softly blurred brick-built landscape behind it",
    "negatives": [
      "A drawn, painted, or illustrated character.",
      "A real person or a non-LEGO toy.",
      "Fake or impossible LEGO parts.",
      "A plain, empty background."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a real photograph of LEGO.",
      "The character is built from authentic minifigure parts and bricks.",
      "The character is still recognizable from colors, gear, and printed details."
    ],
    "directive": "Create a cinematic macro photograph of {name} as a LEGO minifigure in a brick-built diorama. Match the toy photography, lighting, and brick realism of the supplied sample image.",
    "priority": "Prioritize authentic LEGO construction and recognizable character identity above all other considerations."
  },
  "001": {
    "medium": "a modern painted American comic book cover",
    "intro": "The finished character must look like a modern variant cover from a current American comic: dynamic, digitally painted over loose inks, with electric light and energy.",
    "constructionTitle": "MANDATORY MODERN COMIC CONSTRUCTION",
    "construction": [
      "Loose, energetic ink contours that break and taper, with painted color laid over and around them.",
      "Strong, dramatic rim light in electric cyan and white tracing the edges of the figure.",
      "Bold, saturated color: deep blues and violets in the background, with the character's colors glowing against them.",
      "Heroic, dynamic anatomy with foreshortening and a strong action line.",
      "Expressive, visible brush and texture strokes, with speed lines and streaks of energy cutting across the image.",
      "Metal and armor show bright specular streaks and reflected colored light.",
      "Splatter, scratches, and dry-brush texture on the background shapes."
    ],
    "translation": {
      "face": "a sharply lit, heroic comic face with strong planes and rim light",
      "hair": "painted, flowing locks with bright edge highlights",
      "cloth": "dynamic, wind-swept painted fabric with bold folds",
      "leather": "painted, textured leather with crisp edge light",
      "metal": "gleaming painted metal with bright streaks of reflected cyan light",
      "gear": "painted with the same energy and lighting as the figure",
      "keep": "pushed to bold, saturated comic color"
    },
    "resemble": "a newly painted variant cover by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ENERGY",
    "detail": [
      "Crisp, readable detail on the face, hands, and key gear; looser, energetic strokes elsewhere.",
      "Light streaks, sparks, and speed lines add motion.",
      "Rim light separates every major form from the dark background.",
      "Painterly texture across the whole image."
    ],
    "realismTitle": "PAINTED COVER FINISH",
    "realism": [
      "Visible digital paint strokes over loose inks.",
      "Glowing light effects with soft bloom.",
      "Bold value contrast between figure and background.",
      "Dry-brush and splatter texture."
    ],
    "avoid": "Avoid flat cel coloring, vintage halftone print, photorealism, 3D-render shading, muted or muddy color, and static, stiff posing.",
    "compositionLabel": "Modern comic variant cover composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Flat, vintage, or halftone-printed coloring.",
      "Anime, manga, or children's-cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a modern painted comic cover.",
      "Has electric rim light, bold color, and loose energetic inks.",
      "Has heroic, dynamic anatomy and a strong, readable face."
    ],
    "directive": "Create a dynamic, painted Modern American Comic Book cover of {name}. Match the inks, painted color, light, and energy of the supplied sample image.",
    "priority": "Prioritize the authentic modern comic look and recognizable character identity above all other considerations."
  },
  "002": {
    "medium": "a classic American superhero comic panel",
    "intro": "The finished character must look like a classic printed superhero comic panel: bold black inks, bright primary colors, halftone dots, and aged paper.",
    "constructionTitle": "MANDATORY CLASSIC SUPERHERO CONSTRUCTION",
    "construction": [
      "Bold, confident black ink outlines with clean interior lines and feathered shadow strokes.",
      "Bright, flat primary colors (red, blue, yellow) with visible halftone dot shading.",
      "Heroic, idealized anatomy with clearly defined muscles and a square, confident jaw.",
      "Action lines, smoke puffs, and motion trails drawn in ink.",
      "Hair and cloth drawn with simple, graphic shapes and a few bold shadow masses.",
      "Slightly yellowed, aged comic paper texture with a thin panel border."
    ],
    "translation": {
      "face": "a bold, heroic, inked comic face with a confident expression",
      "hair": "graphic inked shapes with a few shadow strokes",
      "cloth": "flat-colored fabric with bold ink folds and halftone shading",
      "leather": "flat brown shapes with ink detail and halftone shadow",
      "metal": "flat gray or yellow shapes with bold black shadow and a white shine",
      "gear": "inked with the same bold outline weight as the figure",
      "keep": "brightened toward bold, flat comic colors"
    },
    "resemble": "a newly drawn panel from the same comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CLASSIC PANEL",
    "detail": [
      "Clean, readable inks with moderate detail.",
      "A detailed background drawn in the same ink style.",
      "Halftone dot texture in midtones.",
      "Aged paper grain overall."
    ],
    "realismTitle": "PRINTED COMIC REALISM",
    "realism": [
      "Visible halftone dots and slight color misregistration.",
      "Aged, yellowed paper.",
      "Thin black panel border.",
      "Bold, flat ink fills."
    ],
    "avoid": "Avoid painted rendering, gradients, photorealism, 3D shading, muted color, and modern digital effects.",
    "compositionLabel": "Classic superhero comic panel composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Anime, manga, or chibi proportions.",
      "Speech bubbles, sound effects, or captions."
    ],
    "checks": [
      "Immediately reads as a classic printed superhero comic.",
      "Has bold inks, bright flat colors, and halftone dots on aged paper.",
      "Has heroic anatomy and a confident inked face."
    ],
    "directive": "Create a bold, classic American Superhero comic panel of {name}. Match the inks, flat color, halftone, and aged paper of the supplied sample image.",
    "priority": "Prioritize the authentic classic comic look and recognizable character identity above all other considerations."
  },
  "003": {
    "medium": "an extreme 1990s superhero comic cover",
    "intro": "The finished character must look like an over-the-top early-1990s comic cover: hyper-muscular, heavily detailed inks, and loud, saturated color.",
    "constructionTitle": "MANDATORY 1990s CONSTRUCTION",
    "construction": [
      "Exaggerated, hyper-muscular anatomy: huge shoulders and arms, bulging veins, clenched teeth, and an aggressive snarl.",
      "Dense, scratchy ink rendering with many small hatching lines, crow's feet, and cross-contour detail on every muscle.",
      "Loud, saturated early-digital color: hot oranges, yellows, purples, and greens with sharp airbrushed highlights.",
      "Excessive detail: chains, straps, pouches, spikes, and shoulder pads.",
      "Wild, flowing hair and tattered cloth whipping in the wind.",
      "Dynamic, extreme foreshortening."
    ],
    "translation": {
      "face": "an aggressive, intensely detailed inked face with gritted teeth and a hard stare",
      "hair": "wild, flowing, heavily inked locks",
      "cloth": "tattered, wind-whipped fabric with sharp ink folds",
      "leather": "heavily detailed, strapped and buckled leather",
      "metal": "gleaming, airbrushed metal with sharp white highlights",
      "gear": "drawn bigger and more detailed than life, with extra straps and buckles",
      "keep": "pushed to loud, saturated 1990s color"
    },
    "resemble": "a newly drawn cover from the same 1990s comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S EXCESS",
    "detail": [
      "Dense, scratchy hatching on every muscle and surface.",
      "Every strap, buckle, and chain link drawn.",
      "Airbrushed highlights on muscles and metal.",
      "Loud, saturated color throughout."
    ],
    "realismTitle": "EARLY-DIGITAL PRINT FINISH",
    "realism": [
      "Glossy early-digital color with airbrushed gradients.",
      "Heavy black inks.",
      "Slight print texture.",
      "Saturated, contrasting color."
    ],
    "avoid": "Avoid restrained or realistic anatomy, muted color, painterly rendering, flat vintage color, anime styling, and quiet posing.",
    "compositionLabel": "1990s comic cover composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Anime, manga, or children's-cartoon proportions.",
      "Logos, titles, prices, or cover text."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as an extreme 1990s comic cover.",
      "Has dense, scratchy inks and loud airbrushed color.",
      "Has exaggerated, powerful anatomy and an intense face."
    ],
    "directive": "Create an over-the-top Extreme 1990s Superhero cover of {name}. Match the anatomy, inks, color, and energy of the supplied sample image.",
    "priority": "Prioritize the authentic 1990s comic look and recognizable character identity above all other considerations."
  },
  "004": {
    "priority": "Prioritize the authentic vintage comic look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same source as the sample image",
    "medium": "a 1950s American comic book cover",
    "intro": "The finished character must look like the cover art of a genuine 1950s American adventure comic: clean, confident inks, flat bright print color, dramatic action, and aged newsprint.",
    "constructionTitle": "MANDATORY 1950s COMIC CONSTRUCTION",
    "construction": [
      "Clean, confident brush and pen inks with crisp contours and simple feathered shadows.",
      "Flat, bright print color: red, yellow, blue, and orange, with minimal shading.",
      "Slightly stiff, mid-century figure drawing with clear storytelling.",
      "Backgrounds simplified into graphic, flat-colored shapes.",
      "Heroic, square-jawed, realistic-leaning anatomy.",
      "Aged, yellowed newsprint with slight color offset and wear."
    ],
    "translation": {
      "face": "a clean, mid-century inked comic face with a strong expression",
      "hair": "simple inked shapes with a few shadow strokes",
      "cloth": "flat color with crisp ink fold lines",
      "leather": "flat brown with simple ink detail",
      "metal": "flat gray or yellow with a bold black shadow and a white shine",
      "gear": "inked cleanly and boldly so each item reads clearly",
      "keep": "brightened into flat 1950s print colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S COVER ART",
    "detail": [
      "Clean, readable inks.",
      "Flat print color.",
      "Simplified, flat-colored background.",
      "Aged paper texture."
    ],
    "realismTitle": "VINTAGE PRINT REALISM",
    "realism": [
      "Yellowed newsprint.",
      "Slightly misregistered flat color.",
      "Crisp ink.",
      "Light wear at the edges."
    ],
    "avoid": "Avoid modern rendering, gradients, dense hatching, photorealism, 3D shading, and saturated digital color.",
    "compositionLabel": "1950s comic cover composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Modern detailed comic rendering.",
      "Logos, titles, prices, speech bubbles, or cover text."
    ],
    "checks": [
      "Immediately reads as a 1950s comic book cover.",
      "Has clean inks and flat, bright print color on aged paper.",
      "Has a strong, clear, recognizable face."
    ],
    "directive": "Create a {style} cover of {name}. Match the clean inks, flat print color, and aged newsprint of the supplied sample image."
  },
  "005": {
    "medium": "a vintage American comic book cover from the early 1940s",
    "intro": "The finished character must look like the cover art of a genuine early-1940s American comic book: simple bold inks, flat limited color, and aged newsprint.",
    "constructionTitle": "MANDATORY VINTAGE COMIC CONSTRUCTION",
    "construction": [
      "Simple, bold, brush-inked outlines with minimal interior detail.",
      "Flat, limited color with no gradients: muted purple, green, yellow, red, and gray.",
      "Long, stylized, slightly stiff anatomy with elongated limbs.",
      "Shadows as a few flat black shapes, with yellow outline glows around the figure.",
      "Backgrounds simplified into flat color blocks.",
      "Aged, yellowed newsprint texture with slight color offset."
    ],
    "translation": {
      "face": "a simple, strongly inked vintage comic face",
      "hair": "a simple black or colored shape with a few ink lines",
      "cloth": "flat color shapes with a few bold fold lines",
      "leather": "flat brown or black shapes with minimal ink detail",
      "metal": "flat yellow or gray shapes with a single black shadow",
      "gear": "drawn simply and boldly so each item reads clearly",
      "keep": "simplified into flat, slightly muted vintage colors"
    },
    "resemble": "a newly drawn cover from the same 1940s comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SIMPLICITY",
    "detail": [
      "Few, bold lines.",
      "Flat color fills.",
      "Simple but clear background.",
      "Aged paper texture throughout."
    ],
    "realismTitle": "VINTAGE PRINT REALISM",
    "realism": [
      "Yellowed newsprint.",
      "Slightly misregistered flat color.",
      "Bold brush inks.",
      "A small amount of wear."
    ],
    "avoid": "Avoid modern rendering, gradients, detailed hatching, photorealism, 3D shading, and saturated digital color.",
    "compositionLabel": "Vintage comic cover composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Modern detailed comic rendering.",
      "Logos, titles, prices, or cover text."
    ],
    "checks": [
      "Immediately reads as a 1940s comic cover.",
      "Has simple bold inks and flat, limited color on aged paper.",
      "Has stylized vintage anatomy and a clear face."
    ],
    "directive": "Create a {style} cover of {name}. Match the simple inks, flat color, and aged newsprint of the supplied sample image.",
    "priority": "Prioritize the authentic vintage comic look and recognizable character identity above all other considerations."
  },
  "006": {
    "medium": "a classic comic drawing with bold, blocky inks",
    "intro": "The finished character must look like a bold, blocky inked comic drawing in the classic Kirby-esque tradition: chunky contours, angular shadows, and flat, limited color on cream paper.",
    "constructionTitle": "MANDATORY BLOCKY INK CONSTRUCTION",
    "construction": [
      "Thick, chunky black contours with angular, chiseled interior shadow shapes.",
      "Muscles and folds drawn as bold, blocky black marks and short parallel stroke groups.",
      "Flat, limited color: pale blue, cream, orange, and gray, with no gradients.",
      "Powerful, squared-off anatomy with strong hands and dramatic perspective.",
      "Backgrounds simplified into geometric, blocky shapes drawn with straight ink lines.",
      "Cream paper showing through in highlights, with fine print grain."
    ],
    "translation": {
      "face": "a squared, chiseled inked face with bold black shadow shapes",
      "hair": "chunky inked shapes with blocky shadow",
      "cloth": "flat-colored fabric with angular black fold marks",
      "leather": "flat brown shapes with blocky black shadow",
      "metal": "flat pale shapes with angular black reflections",
      "gear": "inked with the same chunky contour weight as the figure",
      "keep": "simplified into flat, limited comic colors"
    },
    "resemble": "a newly drawn panel by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S BLOCKY INKS",
    "detail": [
      "Bold, chunky line weight throughout.",
      "Angular shadow shapes instead of hatching.",
      "Geometric background detail.",
      "Flat color fills."
    ],
    "realismTitle": "PRINTED INK REALISM",
    "realism": [
      "Cream paper texture.",
      "Slightly rough ink edges.",
      "Flat printed color.",
      "Fine print grain."
    ],
    "avoid": "Avoid painted rendering, gradients, fine hatching, photorealism, 3D shading, and saturated digital color.",
    "compositionLabel": "Classic comic panel composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Anime, manga, or chibi proportions.",
      "Text or captions."
    ],
    "checks": [
      "Immediately reads as a bold, blocky inked classic comic.",
      "Has chunky contours, angular shadows, and flat, limited color.",
      "Has powerful anatomy and a chiseled face."
    ],
    "directive": "Create a bold {style} drawing of {name}. Match the chunky inks, angular shadows, and flat color of the supplied sample image.",
    "priority": "Prioritize the authentic classic comic look and recognizable character identity above all other considerations."
  },
  "007": {
    "medium": "a 1970s realistic adventure comic panel",
    "intro": "The finished character must look like a panel from a 1960s-70s realistic adventure or crime comic: confident brush inks, heavy black shadow, and flat, faded print color.",
    "constructionTitle": "MANDATORY SILVER AGE CONSTRUCTION",
    "construction": [
      "Confident, expressive brush inks with thick-to-thin strokes and feathered shadow edges.",
      "Large, graphic areas of solid black shadow shaping faces, clothes, and backgrounds.",
      "Realistic, rugged adult anatomy and craggy, expressive faces.",
      "Flat, faded print color: tan, teal, green, blue, and flesh tones, with visible halftone dots.",
      "Cloth folds drawn with bold, flowing brush marks.",
      "Aged, yellowed newsprint with slight color offset."
    ],
    "translation": {
      "face": "a craggy, realistically inked face with bold brush shadow",
      "hair": "brushed ink locks with solid black shadow",
      "cloth": "flat-colored fabric with heavy brush folds",
      "leather": "flat brown shapes with feathered black shadow",
      "metal": "flat gray or gold shapes with bold black shadow",
      "gear": "brush-inked with the same confidence as the figure",
      "keep": "faded into flat, slightly muted print colors"
    },
    "resemble": "a newly drawn panel from the same comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S BRUSH INKS",
    "detail": [
      "Expressive brush strokes with confident weight changes.",
      "Big, graphic black shapes.",
      "Moderate background detail.",
      "Halftone dots in the color."
    ],
    "realismTitle": "VINTAGE PRINT REALISM",
    "realism": [
      "Yellowed newsprint.",
      "Halftone dots and slight misregistration.",
      "Flat, faded color.",
      "Rough brush ink edges."
    ],
    "avoid": "Avoid painted rendering, gradients, photorealism, 3D shading, saturated digital color, and cartoon proportions.",
    "compositionLabel": "Vintage adventure comic panel composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Anime, manga, or cartoon proportions.",
      "Speech bubbles or captions."
    ],
    "checks": [
      "Immediately reads as a vintage realistic adventure comic.",
      "Has expressive brush inks, heavy blacks, and flat faded color.",
      "Has rugged realistic anatomy and an expressive face."
    ],
    "directive": "Create a {style} panel of {name}. Match the brush inks, black shadows, and faded print color of the supplied sample image.",
    "priority": "Prioritize the authentic vintage comic look and recognizable character identity above all other considerations."
  },
  "008": {
    "medium": "a watercolor-and-ink European fantasy comic page",
    "intro": "The finished character must look like an illustration from a modern European fantasy album: delicate pencil-and-ink lines with warm, glowing watercolor washes.",
    "constructionTitle": "MANDATORY WATERCOLOR COMIC CONSTRUCTION",
    "construction": [
      "Fine, slightly sketchy ink or pencil lines with soft, varied weight.",
      "Warm, transparent watercolor washes: golden yellows, oranges, reds, and soft greens.",
      "Soft light glowing through the scene, with blooms and soft edges in the paint.",
      "Appealing, expressive, slightly stylized faces and figures.",
      "Richly detailed, lived-in environments drawn with the same fine line.",
      "Visible paper texture and pooled pigment."
    ],
    "translation": {
      "face": "an expressive, finely lined face with warm watercolor shading",
      "hair": "fine line strands with soft watercolor washes",
      "cloth": "softly washed fabric with delicate ink folds",
      "leather": "warm brown watercolor with fine line detail",
      "metal": "pale washes with a few crisp highlights left as bare paper",
      "gear": "drawn with the same fine lines and warm washes as the figure",
      "keep": "warmed into the golden watercolor palette"
    },
    "resemble": "a newly painted page from the same album as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RICH SCENES",
    "detail": [
      "Fine, delicate linework.",
      "Rich background with many small details.",
      "Soft, glowing watercolor color.",
      "Atmospheric distance fading to pale washes."
    ],
    "realismTitle": "WATERCOLOR REALISM",
    "realism": [
      "Transparent, pooled watercolor.",
      "Soft edges and color blooms.",
      "Paper grain showing through.",
      "Delicate, hand-drawn lines."
    ],
    "avoid": "Avoid heavy black inks, flat digital color, photorealism, 3D shading, dark or gloomy color, and harsh contrast.",
    "compositionLabel": "European fantasy album illustration composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Heavy black ink or flat digital color.",
      "Text, captions, or panel borders."
    ],
    "checks": [
      "Immediately reads as a watercolor-and-ink European fantasy comic.",
      "Has fine lines and warm, glowing washes.",
      "Has an appealing, expressive face and clear figure."
    ],
    "directive": "Create a warm, watercolor-and-ink illustration of {name} in the style of the supplied sample. Match its fine lines, glowing washes, and rich detail.",
    "priority": "Prioritize the authentic watercolor comic look and recognizable character identity above all other considerations."
  },
  "009": {
    "medium": "a European graphic novel illustration in clear-line style",
    "intro": "The finished character must look like a classic Franco-Belgian adventure album: clean, even outlines, flat bright color, and simple, appealing characters.",
    "constructionTitle": "MANDATORY CLEAR-LINE CONSTRUCTION",
    "construction": [
      "Clean, uniform black outlines of even weight around every shape.",
      "Flat, bright color fills with no shading, hatching, or gradients.",
      "Simple, appealing faces: dot eyes, simple noses, and clear expressions.",
      "Slightly stylized proportions, still grounded and believable.",
      "Detailed, clearly drawn backgrounds with everything given the same clean line.",
      "Bright, even daylight."
    ],
    "translation": {
      "face": "a simple, clean-lined face with dot eyes and a clear expression",
      "hair": "a simple flat shape with a few clean lines",
      "cloth": "flat color shapes with a few clean fold lines",
      "leather": "flat brown shapes with clean line detail",
      "metal": "flat gray or yellow shapes with clean outlines",
      "gear": "drawn simply and clearly with the same even line",
      "keep": "as clean, flat, bright colors"
    },
    "resemble": "a newly drawn panel from the same album as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CLEAR LINE",
    "detail": [
      "Even outlines throughout.",
      "Flat color, no shading.",
      "Clear, detailed background.",
      "Simple but recognizable character."
    ],
    "realismTitle": "CLEAR-LINE PRINT FINISH",
    "realism": [
      "Crisp, even ink lines.",
      "Flat, clean color.",
      "Bright daylight.",
      "A slight printed paper feel."
    ],
    "avoid": "Avoid hatching, heavy shadows, gradients, painterly rendering, photorealism, dark color, and anime styling.",
    "compositionLabel": "Clear-line adventure album composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Hatching, heavy shadow, or gradients.",
      "Text or speech bubbles."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a clear-line European comic.",
      "Has even outlines and flat, bright color.",
      "Has a simple, appealing, recognizable face."
    ],
    "directive": "Create a clean, clear-line {style} illustration of {name}. Match the even outlines, flat color, and simplicity of the supplied sample image.",
    "priority": "Prioritize the authentic clear-line look and recognizable character identity above all other considerations."
  },
  "010": {
    "medium": "a black-and-white underground comix drawing",
    "intro": "The finished character must look like a 1960s-70s underground comix page: scratchy, energetic pen-and-ink with no color.",
    "constructionTitle": "MANDATORY UNDERGROUND COMIX CONSTRUCTION",
    "construction": [
      "Black ink only on white paper. No color and no gray tones.",
      "Scratchy, wiry, slightly wobbly pen lines with loose hatching.",
      "Big, solid black areas for dark shapes and shadows.",
      "Rubbery, cartoony, slightly grotesque anatomy with big hands and feet.",
      "Expressive, exaggerated faces and body language.",
      "Busy, cluttered detail in the setting."
    ],
    "translation": {
      "face": "a rubbery, expressive, scratchily inked face",
      "hair": "loose, scratchy pen strands",
      "cloth": "loosely hatched fabric with wobbly folds, striped or solid black where dark",
      "leather": "scratchy hatched shapes",
      "metal": "simple outlined shapes with a few hatch lines",
      "gear": "drawn loosely but clearly identifiable",
      "keep": "translated into black, white, and hatching"
    },
    "resemble": "a newly drawn panel from the same underground comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SCRATCHY INKS",
    "detail": [
      "Loose, energetic pen lines.",
      "Solid black areas and hatching for value.",
      "Cluttered, detailed backgrounds.",
      "Exaggerated expressions."
    ],
    "realismTitle": "PEN-AND-INK REALISM",
    "realism": [
      "Real pen-and-ink on white paper.",
      "Slightly uneven line.",
      "Pure black and white.",
      "A hand-drawn, unpolished feel."
    ],
    "avoid": "Avoid color, gray tones, gradients, polished rendering, photorealism, and 3D shading.",
    "compositionLabel": "Underground comix panel composition",
    "negatives": [
      "Any color or gray shading.",
      "A photorealistic or 3D-rendered version of the character.",
      "Text or speech bubbles."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a black-and-white underground comix drawing.",
      "Uses scratchy pen lines and solid blacks only.",
      "Has an exaggerated, expressive face."
    ],
    "directive": "Create a scratchy black-and-white {style} drawing of {name}. Match the pen lines, solid blacks, and rubbery energy of the supplied sample image.",
    "priority": "Prioritize the authentic underground comix look and recognizable character identity above all other considerations."
  },
  "011": {
    "medium": "a glittering, jewel-encrusted digital fantasy painting",
    "intro": "The finished character must look like an ornate, maximalist digital fantasy painting: everything glittering with jewels, crystals, gold filigree, and magical light.",
    "constructionTitle": "MANDATORY JEWELED FANTASY CONSTRUCTION",
    "construction": [
      "Every surface is ornamented: tiny gems, sparkles, gold filigree, and crystalline texture.",
      "Saturated, jewel-toned color: emerald, sapphire, ruby, amethyst, and gold.",
      "Glowing magic: crackling energy, glowing crystals, and soft bloom.",
      "Dense, sparkling detail with fine glitter across fabric, armor, and skin highlights.",
      "Elegant, idealized fantasy anatomy.",
      "The setting is equally ornamented, glittering, and crowded with detail."
    ],
    "translation": {
      "face": "an elegant, softly lit painted face with jewel-bright eyes",
      "hair": "flowing painted locks with sparkling highlights",
      "cloth": "rich fabric studded with tiny gems and glitter",
      "leather": "ornately tooled leather inlaid with gold and gems",
      "metal": "gleaming gold and silver covered in filigree and set stones",
      "gear": "encrusted with jewels and glowing details",
      "keep": "translated into jewel tones"
    },
    "resemble": "a newly painted scene from the same fantasy collection as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MAXIMALISM",
    "detail": [
      "Glitter, gems, and filigree on every surface.",
      "Glowing magical light.",
      "A crowded, ornate background.",
      "Fine detail at every scale."
    ],
    "realismTitle": "DIGITAL FANTASY FINISH",
    "realism": [
      "Glossy digital paint.",
      "Sparkle and bloom effects.",
      "Saturated jewel color.",
      "Soft magical glow."
    ],
    "avoid": "Avoid muted color, inked comic linework, flat color, gritty realism, and plain backgrounds.",
    "compositionLabel": "Ornate fantasy painting composition",
    "negatives": [
      "A photorealistic photograph of the character.",
      "Muted, gritty, or desaturated color.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as a jeweled, glittering fantasy painting.",
      "Has gems, filigree, and glowing magic everywhere.",
      "Has elegant anatomy and a recognizable face."
    ],
    "directive": "Create an ornate, glittering fantasy painting of {name} in the style of the supplied sample. Match its jewels, sparkle, and magical light.",
    "priority": "Prioritize the authentic jeweled-fantasy look and recognizable character identity above all other considerations."
  },
  "012": {
    "medium": "a painted dark fantasy graphic novel illustration",
    "intro": "The finished character must look like a fully painted page or cover from a modern prestige dark fantasy graphic novel: muted, nearly monochrome, smoke-filled, and grim.",
    "constructionTitle": "MANDATORY DARK FANTASY CONSTRUCTION",
    "construction": [
      "Every form is painted, not outlined: edges are defined by value and soft-to-hard transitions, with very little visible linework.",
      "A nearly monochrome sepia, ash, and charcoal palette, like an aged tinted photograph. Color is drained almost to gray-brown.",
      "One dim, diffused light source behind or above the figure, so the character reads as a dark, strong silhouette against glowing haze.",
      "Grounded, realistic adult anatomy and proportions, heavy and weighty, with a grim, intense expression.",
      "Thick atmosphere everywhere: rolling fog, smoke, drifting ash and dust that swallow the background and the ground around the boots.",
      "Fabric hangs heavy and worn, with frayed, torn hems and grime. Leather is scuffed and cracked. Metal is dull and tarnished, catching only a faint cold glint.",
      "Deep, soft-edged shadows that fall into near-black, with detail preserved only where the light catches.",
      "Subtle film grain and painterly texture across the whole image."
    ],
    "translation": [
      "The {face} becomes a grim, painted, deeply shadowed face, lit from one side.",
      "The {hair} becomes painted, matted locks that catch the faint backlight.",
      "The {cloth} become heavy, worn, painted cloth with torn hems and grime, falling into shadow.",
      "The {leather} become scuffed, cracked, painted leather with sparse highlights on buckles and edges.",
      "The {metal} become dull, tarnished, painted metal with only a faint cold glint.",
      "The {gear} are painted with the same weight, grime, and atmosphere as the character.",
      "Keep {keep}, but drain them toward the sepia and ash palette so they read as faint, muted tints, never bright."
    ],
    "resemble": "a newly commissioned illustration from the same dark fantasy graphic novel as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PAINTED ATMOSPHERE",
    "detail": [
      "The figure is crisp and fully detailed; the background dissolves progressively into fog and haze.",
      "Value contrast carries the image: a dark figure against a lighter, glowing, smoky sky.",
      "Every surface carries painted texture: worn cloth, cracked leather, splintered wood, mud, and debris.",
      "Costume details are clear where the light catches them: buckles, straps, stitching, and rivets.",
      "The ground is textured with mud, grit, and drifting smoke.",
      "Match the sample's level of detail, so the figure holds up when zoomed in."
    ],
    "realismTitle": "PAINT AND ATMOSPHERE REALISM",
    "realism": [
      "Visible but controlled painterly brushwork with soft and hard edges.",
      "Desaturated sepia and charcoal palette, like a tinted vintage photograph.",
      "Dense, layered fog and smoke that create real depth.",
      "Fine film grain over the whole image.",
      "Shadows that are part of the painting, not a darkening filter."
    ],
    "avoid": "Avoid bright or saturated color, clean digital gradients, glossy or plastic surfaces, cel shading, cartoon or anime styling, bold black outlines, clear blue skies, and cheerful lighting.",
    "compositionLabel": "Dark fantasy graphic novel cover composition",
    "negatives": [
      "A photorealistic photograph or 3D-rendered version of the character.",
      "Bright, saturated, or cheerful color.",
      "Anime, manga, cel-shaded, or children's-cartoon faces and proportions.",
      "Glossy video-game character art."
    ],
    "checks": [
      "Immediately reads as a painted dark fantasy graphic novel illustration, not a photo, render, or filter.",
      "Uses the near-monochrome sepia, ash, and charcoal palette, with thick fog and smoke.",
      "Has grounded, realistic anatomy and a grim, deeply shadowed face."
    ],
    "directive": "Create a painted, fog-drenched Dark Fantasy Graphic Novel illustration of {name}. Match the palette, lighting, atmosphere, and grim realism of the supplied sample image.",
    "priority": "Prioritize the authentic dark fantasy graphic novel look and recognizable character identity above all other considerations."
  },
  "013": {
    "medium": "a realistic painted fantasy graphic novel portrait",
    "intro": "The finished character must look like a richly painted fantasy graphic novel illustration: realistic, textured brushwork in warm, earthy tones.",
    "constructionTitle": "MANDATORY PAINTED REALISM CONSTRUCTION",
    "construction": [
      "Painterly, visible brushstrokes building realistic form.",
      "Warm, earthy palette: olive, umber, ochre, moss green, and warm skin tones.",
      "Realistic, weathered faces with scars, stubble, and grime.",
      "Soft, warm light from one side with deep, warm shadows.",
      "Rich texture: worn leather, rough cloth, fur, and scratched metal.",
      "A softly painted, out-of-focus background in the same earthy tones."
    ],
    "translation": {
      "face": "a realistic, weathered, painted face with warm light and deep shadow",
      "hair": "painted, textured locks",
      "cloth": "rough, textured painted cloth",
      "leather": "worn, scuffed painted leather with stitching",
      "metal": "scratched, warm-lit painted metal",
      "gear": "painted with the same realistic texture as the figure",
      "keep": "warmed toward the earthy palette"
    },
    "resemble": "a newly painted illustration by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S TEXTURE",
    "detail": [
      "Detailed face and costume texture.",
      "Visible brushwork throughout.",
      "Soft, painterly background.",
      "Warm, consistent lighting."
    ],
    "realismTitle": "PAINT REALISM",
    "realism": [
      "Visible brush texture.",
      "Warm, earthy color.",
      "Soft edges in the background.",
      "Natural light and shadow."
    ],
    "avoid": "Avoid ink outlines, flat color, cartoon proportions, glossy 3D rendering, and saturated color.",
    "compositionLabel": "Painted fantasy illustration composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Ink outlines or flat comic color.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as a realistic painted fantasy illustration.",
      "Has warm, earthy brushwork and rich texture.",
      "Has a realistic, weathered, recognizable face."
    ],
    "directive": "Create a Realistic Painted Graphic Novel illustration of {name}. Match the brushwork, warm palette, and texture of the supplied sample image.",
    "priority": "Prioritize the authentic painted look and recognizable character identity above all other considerations."
  },
  "014": {
    "priority": "Prioritize the authentic semi-photorealistic look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same source as the sample image",
    "medium": "a semi-photorealistic painted comic illustration",
    "intro": "The finished character must look like semi-photorealistic comic cover art: a realistic, finely painted face and figure, moody muted color, and loose, textured painterly edges.",
    "constructionTitle": "MANDATORY SEMI-PHOTOREALISTIC CONSTRUCTION",
    "construction": [
      "Realistic, finely painted face and hands with believable skin and light.",
      "Looser, textured brushwork in the clothing, hair, and background.",
      "Muted, moody palette of charcoal, mauve, dusty plum, and warm skin tones.",
      "Soft, directional light from one side, with deep, soft shadows.",
      "Soft drifting particles for atmosphere.",
      "Backgrounds kept dark, mottled, and painterly."
    ],
    "translation": {
      "face": "a realistic, finely painted face with soft directional light",
      "hair": "loose, flowing painted strands, wind-swept",
      "cloth": "textured, painterly fabric with soft folds",
      "leather": "worn, softly painted leather",
      "metal": "dark, scuffed painted metal with soft highlights",
      "gear": "painted with the same semi-realistic texture",
      "keep": "muted toward the dusky, moody palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S REALISM",
    "detail": [
      "Highly realistic face.",
      "Looser painterly edges.",
      "Muted, moody color.",
      "Soft atmospheric backdrop."
    ],
    "realismTitle": "PAINTED FINISH",
    "realism": [
      "Soft, realistic digital paint.",
      "Textured brushwork at the edges.",
      "Muted color.",
      "Soft light."
    ],
    "avoid": "Avoid ink outlines, flat color, cartoon proportions, glossy 3D rendering, and bright saturated color.",
    "compositionLabel": "Painted comic cover composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Ink outlines or flat comic color.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as semi-photorealistic painted comic art.",
      "Has a realistic face with looser painterly edges and muted color.",
      "Has a realistic, recognizable face."
    ],
    "directive": "Create a {style} illustration of {name}. Match the realistic face, loose painterly edges, and moody palette of the supplied sample image."
  },
  "015": {
    "medium": "a black-and-white noir comic illustration",
    "intro": "The finished character must look like a stark black-and-white noir illustration: solid black, crisp white, carved hatching, and hard, dramatic light.",
    "constructionTitle": "MANDATORY NOIR CONSTRUCTION",
    "construction": [
      "Black and white only, with no gray washes and no color.",
      "Large areas of solid black, with form carved out by white light and crisp engraving-like hatching.",
      "Hard, dramatic light from a single source.",
      "Realistic, serious faces with strong shadows and a hard expression.",
      "Atmosphere such as haze, smoke, or light beams drawn as crisp white lines.",
      "Bold, sweeping lines in coats and cloth."
    ],
    "translation": {
      "face": "a serious face carved from black shadow and white light",
      "hair": "solid black shapes with a few white highlight strokes",
      "cloth": "bold black-and-white fabric with sweeping folds",
      "leather": "solid black shapes with white edge highlights",
      "metal": "black shapes with sharp white glints",
      "gear": "drawn in the same stark black and white",
      "keep": "translated into black, white, and hatching only"
    },
    "resemble": "a newly drawn panel from the same noir comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S STARK CONTRAST",
    "detail": [
      "Crisp hatching in the transitions.",
      "Solid blacks in shadow.",
      "A detailed background in stark black and white.",
      "Strong light beams."
    ],
    "realismTitle": "INK REALISM",
    "realism": [
      "Pure black and white.",
      "Crisp, carved hatching.",
      "Strong contrast.",
      "Graphic light shapes."
    ],
    "avoid": "Avoid color, gray washes, gradients, soft painterly rendering, photorealism, and cartoon styling.",
    "compositionLabel": "Noir comic composition",
    "negatives": [
      "Any color or gray wash.",
      "A photorealistic or 3D-rendered version of the character.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as a black-and-white noir illustration.",
      "Uses only solid black, white, and crisp hatching.",
      "Has a serious, strongly lit face."
    ],
    "directive": "Create a stark black-and-white noir illustration of {name} in the {style} style. Match the contrast, hatching, and hard light of the supplied sample image.",
    "priority": "Prioritize the authentic noir look and recognizable character identity above all other considerations."
  },
  "017": {
    "medium": "a heavy-shadow graphic comic illustration",
    "intro": "The finished character must look like a stylized, heavy-shadow horror comic: huge flat areas of black, simple chunky shapes, and a few flat, muted colors with one bold accent.",
    "constructionTitle": "MANDATORY HEAVY-SHADOW CONSTRUCTION",
    "construction": [
      "Huge, flat areas of solid black that swallow most of the figure and background.",
      "Simple, chunky, angular shapes with very little interior line detail.",
      "Flat, muted color: grays, bone, and dull browns, with one bold accent color.",
      "A single stark, flat shape of pale light behind or beside the figure.",
      "Blocky, heavy anatomy with big hands and a strong silhouette.",
      "Background objects simplified into flat shapes and silhouettes."
    ],
    "translation": {
      "face": "a simple, angular face mostly in black shadow, with a few flat lit planes",
      "hair": "a solid black or flat-colored shape",
      "cloth": "flat shapes mostly swallowed in black, with simple angular folds",
      "leather": "flat dark shapes with minimal detail",
      "metal": "flat pale shapes with blocky black shadow",
      "gear": "simplified into bold, readable silhouettes",
      "keep": "flattened into a few muted colors, with the most distinctive one as the accent"
    },
    "resemble": "a newly drawn panel by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RESTRAINT",
    "detail": [
      "Minimal line detail.",
      "Large, flat black shapes.",
      "A strong silhouette.",
      "A simple, graphic background."
    ],
    "realismTitle": "FLAT PRINT FINISH",
    "realism": [
      "Flat, matte color.",
      "Solid, even blacks.",
      "Simple, crisp shape edges.",
      "Slight print texture."
    ],
    "avoid": "Avoid fine hatching, gradients, painterly rendering, photorealism, 3D shading, and busy detail.",
    "compositionLabel": "Heavy-shadow comic cover composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Fine hatching or busy detail.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as a heavy-shadow graphic comic.",
      "Has huge flat blacks, simple shapes, and limited color.",
      "Has a strong, readable silhouette and face."
    ],
    "directive": "Create a heavy-shadow graphic comic illustration of {name} in the style of the supplied sample. Match its flat blacks, simple shapes, and limited color.",
    "priority": "Prioritize the authentic heavy-shadow look and recognizable character identity above all other considerations."
  },
  "018": {
    "medium": "a minimalist graphic novel illustration",
    "intro": "The finished character must look like a minimalist graphic novel or poster illustration: bold silhouettes, generous negative space, and flat, grainy color.",
    "constructionTitle": "MANDATORY MINIMALIST CONSTRUCTION",
    "construction": [
      "No outlines. Every form is a flat shape of color.",
      "A very limited palette of 3-4 bold colors (for example, orange, red, gold, and black), with the character in one contrasting pale color.",
      "Soft, grainy, stippled texture inside the color shapes, like a risograph or spray-paint gradient.",
      "The character is simplified, with little interior detail: a bold silhouette with a few highlights.",
      "The setting is reduced to large, sweeping flat shapes.",
      "Generous negative space."
    ],
    "translation": {
      "face": "a simple shape with at most a hint of features",
      "hair": "a single flat shape",
      "cloth": "simple flat shapes, with any cloak or long garment kept as a bold flowing silhouette",
      "leather": "merged into the figure's flat shape",
      "metal": "small flat accents",
      "gear": "simplified to their outline, just enough to recognize",
      "keep": "reduced to one or two flat colors that contrast with the landscape"
    },
    "resemble": "a newly designed print from the same series as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MINIMALISM",
    "detail": [
      "Very little detail anywhere.",
      "Large, simple shapes.",
      "Grainy texture instead of shading.",
      "The figure reads instantly by silhouette."
    ],
    "realismTitle": "PRINT FINISH",
    "realism": [
      "Flat, grainy color.",
      "Soft stippled gradients.",
      "Crisp shape edges.",
      "A screen-printed or risograph feel."
    ],
    "avoid": "Avoid outlines, detailed rendering, realistic anatomy, painterly brushwork, 3D shading, and busy compositions.",
    "compositionLabel": "Minimalist graphic poster composition",
    "negatives": [
      "A detailed, realistic, or painted version of the character.",
      "Ink outlines or comic-book linework.",
      "Busy, detailed backgrounds."
    ],
    "checks": [
      "Immediately reads as a minimalist graphic illustration.",
      "Uses a few flat, grainy colors and no outlines.",
      "The character is recognizable from silhouette and key gear."
    ],
    "directive": "Create a minimalist graphic illustration of {name} in the {style} style. Match the flat, grainy color and sweeping simplicity of the supplied sample image.",
    "priority": "Prioritize the authentic minimalist look and recognizable character silhouette above all other considerations."
  },
  "019": {
    "medium": "a cinematic graphic novel illustration",
    "intro": "The finished character must look like a cinematic graphic novel panel: detailed ink lines with moody, film-like color and dramatic lighting.",
    "constructionTitle": "MANDATORY CINEMATIC CONSTRUCTION",
    "construction": [
      "Detailed, confident ink linework under rich digital color.",
      "Moody, cinematic lighting: cool teal and cyan ambient light with warm amber accents from practical light sources.",
      "Atmospheric effects: rain streaks, steam, smoke, and glowing light.",
      "Reflective surfaces that mirror the light where they fit the setting.",
      "Realistic proportions with a grounded, film-still camera.",
      "Highly detailed environment full of grime and clutter."
    ],
    "translation": {
      "face": "an inked, moodily lit face with teal and amber light",
      "hair": "inked strands with cool rim light",
      "cloth": "inked fabric with deep folds, damp from the rain",
      "leather": "inked leather with wet, reflective highlights",
      "metal": "inked metal catching teal and amber reflections",
      "gear": "inked in the same detail and lighting as the figure",
      "keep": "shifted into the cinematic teal-and-amber palette"
    },
    "resemble": "a newly drawn panel from the same graphic novel as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CINEMATIC DETAIL",
    "detail": [
      "Fine ink detail everywhere.",
      "Rich environmental storytelling.",
      "Rain, steam, and reflections.",
      "Strong depth and perspective."
    ],
    "realismTitle": "CINEMATIC FINISH",
    "realism": [
      "Film-like color grading.",
      "Glowing light sources.",
      "Wet reflections.",
      "Atmospheric depth."
    ],
    "avoid": "Avoid flat, bright color, cartoon proportions, photorealism, 3D rendering, and plain backgrounds.",
    "compositionLabel": "Cinematic graphic novel composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Flat, bright, or cheerful color.",
      "Anime, manga, or cartoon proportions.",
      "Readable signs or text."
    ],
    "checks": [
      "Immediately reads as a cinematic graphic novel panel.",
      "Has detailed inks, teal-and-amber light, and atmospheric effects.",
      "Has grounded anatomy and a moodily lit face."
    ],
    "directive": "Create a moody, cinematic illustration of {name} in the {style} style. Match the inks, lighting, and atmosphere of the supplied sample image.",
    "priority": "Prioritize the authentic cinematic look and recognizable character identity above all other considerations."
  },
  "020": {
    "medium": "a contemporary independent comic illustration",
    "intro": "The finished character must look like an illustration from a contemporary indie graphic novel: graphic black shapes, simple line, and a limited sepia and cream palette.",
    "constructionTitle": "MANDATORY INDIE COMIC CONSTRUCTION",
    "construction": [
      "Clean, graphic linework with bold areas of solid black.",
      "A very limited palette: cream, sepia, warm tan, and black.",
      "Flat color shapes with only simple, graphic shading.",
      "Slightly stylized, elegant figures with simple faces.",
      "Busy, intimate, detailed settings full of objects.",
      "A flat tan border around the image."
    ],
    "translation": {
      "face": "a simple, elegant face with a few clean lines",
      "hair": "a bold solid-black or sepia shape",
      "cloth": "flat cream and sepia shapes with simple folds",
      "leather": "flat sepia shapes",
      "metal": "pale cream shapes with black accents",
      "gear": "drawn clearly with the same graphic line",
      "keep": "translated into the sepia, cream, and black palette"
    },
    "resemble": "a newly drawn page from the same indie graphic novel as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S GRAPHIC STYLE",
    "detail": [
      "Clean, graphic lines.",
      "Bold black shapes.",
      "Detailed but flat backgrounds.",
      "Limited palette throughout."
    ],
    "realismTitle": "PRINT FINISH",
    "realism": [
      "Flat, matte color.",
      "Crisp ink.",
      "A slight paper texture.",
      "A plain tan border."
    ],
    "avoid": "Avoid gradients, painterly rendering, saturated color, photorealism, 3D shading, and superhero styling.",
    "compositionLabel": "Indie graphic novel illustration composition",
    "negatives": [
      "A photorealistic, painted, or 3D-rendered version of the character.",
      "Saturated or bright color.",
      "Text or captions."
    ],
    "checks": [
      "Immediately reads as a contemporary indie comic illustration.",
      "Uses a limited sepia, cream, and black palette with bold blacks.",
      "Has a simple, elegant, recognizable face."
    ],
    "directive": "Create a graphic, limited-palette illustration of {name} in the {style} style. Match the line, bold blacks, and sepia palette of the supplied sample image.",
    "priority": "Prioritize the authentic indie comic look and recognizable character identity above all other considerations."
  },
  "021": {
    "medium": "a shōnen anime action illustration",
    "intro": "The finished character must look like a key frame from a modern shōnen action anime: clean cel shading, explosive energy effects, and dramatic motion.",
    "constructionTitle": "MANDATORY SHŌNEN CONSTRUCTION",
    "construction": [
      "Clean anime line art with sharp cel shading in two or three tones.",
      "Anime faces: large, expressive eyes, a small nose, and a determined expression.",
      "Spiky, dynamic hair with sharp highlight shapes.",
      "Explosive energy effects: swirling elemental trails, sparks, and lightning in colors that suit the character.",
      "Speed lines and radial light bursts.",
      "Dramatic foreshortening and a strong sense of motion."
    ],
    "translation": {
      "face": "a determined anime face with expressive eyes",
      "hair": "spiky, dynamic anime hair with sharp highlights",
      "cloth": "cel-shaded fabric whipping with motion",
      "leather": "clean cel-shaded leather",
      "metal": "gleaming, cel-shaded metal with energy reflections",
      "gear": "drawn cleanly, with energy effects trailing from weapons",
      "keep": "brightened into saturated anime colors"
    },
    "resemble": "a newly drawn key frame from the same anime as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ENERGY",
    "detail": [
      "Clean, crisp line art.",
      "Explosive, glowing effects.",
      "Speed lines and debris.",
      "Strong motion in hair and cloth."
    ],
    "realismTitle": "ANIME FINISH",
    "realism": [
      "Crisp cel shading.",
      "Glowing effects with bloom.",
      "Saturated color.",
      "Dynamic composition."
    ],
    "avoid": "Avoid realistic proportions, painterly rendering, muted color, Western comic styling, and static poses.",
    "compositionLabel": "Shōnen anime action composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Western comic or painterly styling.",
      "Chibi proportions."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a shōnen anime key frame.",
      "Has clean cel shading and explosive energy effects.",
      "Has an expressive anime face and dynamic pose."
    ],
    "directive": "Create an explosive {style} action illustration of {name}. Match the line art, cel shading, and energy effects of the supplied sample image.",
    "priority": "Prioritize the authentic shōnen anime look and recognizable character identity above all other considerations."
  },
  "022": {
    "medium": "a black-and-white seinen manga panel",
    "intro": "The finished character must look like a gritty seinen manga panel: raw, scratchy black brush ink, streaky dry-brush texture, and gray tones.",
    "constructionTitle": "MANDATORY SEINEN CONSTRUCTION",
    "construction": [
      "Black ink and gray tones only, with no color.",
      "Raw, expressive brush strokes with dry-brush streaks and splatters.",
      "Realistic, rugged adult anatomy and intense, weathered faces.",
      "Heavy black masses for hair and clothing, with streaky vertical texture.",
      "Streaky, vertical dry-brush texture across the whole image.",
      "Gritty, aged screentone texture."
    ],
    "translation": {
      "face": "an intense, weathered face built from raw brush strokes",
      "hair": "heavy, wet, streaky black brush strokes",
      "cloth": "heavy black fabric with dry-brush streaks",
      "leather": "black brush shapes with scratchy highlights",
      "metal": "black shapes with stark white glints",
      "gear": "brushed in the same raw ink as the figure",
      "keep": "translated into black ink and gray tones only"
    },
    "resemble": "a newly drawn panel from the same seinen manga as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RAW INK",
    "detail": [
      "Raw, expressive brushwork.",
      "Heavy blacks.",
      "Streaky texture everywhere.",
      "Minimal, gray background."
    ],
    "realismTitle": "BRUSH-INK REALISM",
    "realism": [
      "Real brush ink on paper.",
      "Dry-brush texture.",
      "Gray tone washes.",
      "A gritty print feel."
    ],
    "avoid": "Avoid color, clean cel shading, cute or big-eyed anime faces, photorealism, and 3D shading.",
    "compositionLabel": "Seinen manga panel composition",
    "negatives": [
      "Any color.",
      "Cute, big-eyed, or chibi faces.",
      "A photorealistic or 3D-rendered version of the character."
    ],
    "checks": [
      "Immediately reads as a black-and-white seinen manga panel.",
      "Uses raw brush ink, heavy blacks, and streaky texture.",
      "Has rugged anatomy and an intense face."
    ],
    "directive": "Create a raw, black-and-white {style} panel of {name}. Match the brush ink, heavy blacks, and streaky texture of the supplied sample image.",
    "priority": "Prioritize the authentic seinen manga look and recognizable character identity above all other considerations."
  },
  "023": {
    "priority": "Prioritize the authentic shōjo manga look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same source as the sample image",
    "medium": "a shōjo manga color illustration",
    "intro": "The finished character must look like a shōjo manga color illustration: delicate fine line, large sparkling eyes, flowing hair, and soft, glowing color with decorative flourishes.",
    "constructionTitle": "MANDATORY SHŌJO CONSTRUCTION",
    "construction": [
      "Delicate, fine, elegant line art.",
      "Large, luminous eyes with layered highlights and long lashes.",
      "Long, flowing hair drawn as many fine, curling strands.",
      "Soft, glowing color with gentle gradients and sparkle.",
      "Decorative flourishes such as flowers, sparkles, and ribbons framing the figure.",
      "Ornate costume details: ruffles, beads, jewelry, and embroidery."
    ],
    "translation": {
      "face": "a delicate shōjo face with large, luminous eyes, still keeping the character's expression and key features",
      "hair": "many fine, flowing, curling strands",
      "cloth": "softly shaded fabric with ruffles, lace, and ornate detail",
      "leather": "softly shaded leather with decorative stitching",
      "metal": "delicate metal with sparkling highlights",
      "gear": "drawn delicately and decorated with flowers or ribbons",
      "keep": "softened and brightened with rose-pink accents"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ORNAMENT",
    "detail": [
      "Fine, delicate line.",
      "Sparkling eyes.",
      "Flowing hair strands.",
      "Decorative floral flourishes."
    ],
    "realismTitle": "MANGA COLOR FINISH",
    "realism": [
      "Soft digital color.",
      "Sparkle and glow.",
      "Fine line.",
      "Decorative backgrounds."
    ],
    "avoid": "Avoid gritty texture, heavy black shadows, harsh contrast, realistic proportions, and photorealism.",
    "compositionLabel": "Shōjo manga illustration composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Gritty, dark, or harsh styling.",
      "Chibi proportions."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a shōjo manga color illustration.",
      "Has fine line, sparkling eyes, flowing hair, and decorative flourishes.",
      "The character is still clearly recognizable."
    ],
    "directive": "Create a delicate {style} illustration of {name}. Match the fine line, sparkling eyes, and decorative flourishes of the supplied sample image."
  },
  "024": {
    "medium": "a josei manga illustration",
    "intro": "The finished character must look like a josei manga color illustration: clean, refined line art, soft warm color, and calm, grown-up elegance.",
    "constructionTitle": "MANDATORY JOSEI CONSTRUCTION",
    "construction": [
      "Fine, clean, even line art.",
      "Soft, warm color with gentle shading and subtle halftone texture.",
      "Mature, realistic proportions and refined, expressive faces.",
      "Warm evening light with soft glows.",
      "Detailed, everyday-feeling settings.",
      "A calm, quiet mood."
    ],
    "translation": {
      "face": "a refined, softly shaded face with a calm expression",
      "hair": "clean, flowing line strands with soft highlights",
      "cloth": "softly shaded fabric with clean folds",
      "leather": "warm, softly shaded leather",
      "metal": "soft, warm metal highlights",
      "gear": "drawn cleanly and calmly, at rest rather than in action where possible",
      "keep": "softened into warm, gentle colors"
    },
    "resemble": "a newly drawn color page from the same josei manga as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S REFINEMENT",
    "detail": [
      "Fine, clean line.",
      "Soft shading.",
      "Detailed, warm setting.",
      "Gentle light."
    ],
    "realismTitle": "MANGA COLOR FINISH",
    "realism": [
      "Soft digital color.",
      "Subtle halftone.",
      "Warm glow.",
      "Clean line."
    ],
    "avoid": "Avoid heavy black shadows, harsh contrast, chibi proportions, gritty texture, and photorealism.",
    "compositionLabel": "Josei manga color illustration composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Gritty, dark, or harsh styling.",
      "Chibi or childish proportions."
    ],
    "checks": [
      "Immediately reads as a josei manga color illustration.",
      "Has fine, clean line and soft, warm color.",
      "Has mature, refined proportions and a calm face."
    ],
    "directive": "Create a refined {style} color illustration of {name}. Match the clean line, warm color, and calm mood of the supplied sample image.",
    "priority": "Prioritize the authentic josei manga look and recognizable character identity above all other considerations."
  },
  "025": {
    "medium": "a dark fantasy anime illustration",
    "intro": "The finished character must look like a dark fantasy anime key visual: sleek anime figure drawing, cold desaturated color, and misty, atmospheric depth.",
    "constructionTitle": "MANDATORY DARK ANIME CONSTRUCTION",
    "construction": [
      "Clean anime line art with soft, painterly shading.",
      "Cold, desaturated palette: black, slate, blue-gray, and violet, with faint glowing accents.",
      "Sleek, elegant anime anatomy and a cool, unreadable expression.",
      "Glossy highlights on armor and tattered, flowing cloth.",
      "Backgrounds fading into pale, misty light."
    ],
    "translation": {
      "face": "a cool, elegant anime face with a guarded expression",
      "hair": "sleek anime hair with cold highlights",
      "cloth": "dark, tattered, flowing fabric",
      "leather": "dark, sleek leather",
      "metal": "dark, glossy metal with cold violet highlights",
      "gear": "rendered dark and ominous",
      "keep": "darkened into the cold black and blue-gray palette, with the signature colors as muted accents"
    },
    "resemble": "a newly painted key visual from the same dark fantasy anime as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MOOD",
    "detail": [
      "Clean lines and soft shading.",
      "Misty, receding background.",
      "Glints on armor.",
      "Tattered fabric edges."
    ],
    "realismTitle": "ANIME KEY VISUAL FINISH",
    "realism": [
      "Soft digital painting over clean line.",
      "Atmospheric mist.",
      "Cold, desaturated color.",
      "Subtle glow."
    ],
    "avoid": "Avoid bright or warm color, chibi or cute styling, Western comic inks, photorealism, and cheerful mood.",
    "compositionLabel": "Dark fantasy anime key visual composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Bright, warm, or cheerful color.",
      "Chibi proportions."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a dark fantasy anime key visual.",
      "Has a cold, desaturated palette and misty atmosphere.",
      "Has sleek anime anatomy and a recognizable face."
    ],
    "directive": "Create a cold, atmospheric {style} key visual of {name}. Match the line art, shading, palette, and mood of the supplied sample image.",
    "priority": "Prioritize the authentic dark anime look and recognizable character identity above all other considerations."
  },
  "026": {
    "medium": "a modern webtoon / manhwa illustration",
    "intro": "The finished character must look like a polished modern webtoon panel: glossy digital rendering, sharp line art, and glowing magic.",
    "constructionTitle": "MANDATORY WEBTOON CONSTRUCTION",
    "construction": [
      "Sharp, clean digital line art.",
      "Glossy, smooth digital shading with bright highlights on hair and eyes.",
      "Attractive, sharp-featured faces with striking eyes.",
      "Glowing magic: light orbs, magic circles, and sparkles.",
      "Cool, luminous palette of white, lavender, pale blue, and black."
    ],
    "translation": {
      "face": "a sharp-featured webtoon face with striking eyes and a confident look",
      "hair": "glossy, layered digital hair with bright highlights",
      "cloth": "smooth, softly shaded fabric with clean folds",
      "leather": "smooth, glossy leather",
      "metal": "bright, glossy metal with glowing reflections",
      "gear": "cleanly rendered and lit by the magical glow",
      "keep": "polished into clean, luminous digital colors"
    },
    "resemble": "a newly drawn panel from the same webtoon as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S POLISH",
    "detail": [
      "Clean line.",
      "Glossy highlights.",
      "Glowing magic effects.",
      "A soft, luminous background."
    ],
    "realismTitle": "DIGITAL WEBTOON FINISH",
    "realism": [
      "Smooth digital shading.",
      "Glow and bloom.",
      "Clean, crisp line.",
      "Luminous color."
    ],
    "avoid": "Avoid gritty texture, heavy hatching, muted earth tones, painterly brushwork, and photorealism.",
    "compositionLabel": "Webtoon panel composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Gritty, hatched, or painterly styling.",
      "Chibi proportions."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a polished modern webtoon panel.",
      "Has glossy digital shading and glowing magic.",
      "Has a sharp, attractive, recognizable face."
    ],
    "directive": "Create a polished {style} illustration of {name}. Match the line art, glossy shading, and glowing magic of the supplied sample image.",
    "priority": "Prioritize the authentic webtoon look and recognizable character identity above all other considerations."
  },
  "027": {
    "medium": "a black-and-white historical manga illustration",
    "intro": "The finished character must look like a detailed black-and-white historical manga page: fine pen line, screentone, and richly drawn period settings.",
    "constructionTitle": "MANDATORY HISTORICAL MANGA CONSTRUCTION",
    "construction": [
      "Black-and-white pen line with gray screentone, no color.",
      "Detailed, textured line work on wood, tile roofs, foliage, and fabric.",
      "Realistic adult proportions and sharp manga faces.",
      "Bright daylight, with white paper for light and screentone for shadow.",
      "Richly detailed, period-appropriate environments.",
      "Clouds and foliage drawn with sketchy, lively line."
    ],
    "translation": {
      "face": "a sharp manga face in clean pen line",
      "hair": "loose, inked manga strands",
      "cloth": "pen-lined fabric with screentone shadow",
      "leather": "pen-lined shapes with gray tone",
      "metal": "clean outlined shapes with white highlights",
      "gear": "drawn in careful, accurate pen detail",
      "keep": "translated into black, white, and gray screentone"
    },
    "resemble": "a newly drawn page from the same historical manga as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PEN DETAIL",
    "detail": [
      "Detailed pen line throughout.",
      "Screentone shading.",
      "Richly drawn setting.",
      "Bright daylight."
    ],
    "realismTitle": "MANGA PRINT REALISM",
    "realism": [
      "Pen ink on white paper.",
      "Gray screentone.",
      "Crisp line.",
      "A printed manga feel."
    ],
    "avoid": "Avoid color, painterly rendering, chibi proportions, photorealism, and 3D shading.",
    "compositionLabel": "Historical manga page composition",
    "negatives": [
      "Any color.",
      "A photorealistic or 3D-rendered version of the character.",
      "Chibi proportions."
    ],
    "checks": [
      "Immediately reads as a black-and-white historical manga page.",
      "Uses detailed pen line and screentone.",
      "Has realistic proportions and a sharp manga face."
    ],
    "directive": "Create a detailed black-and-white {style} illustration of {name}. Match the pen line, screentone, and setting detail of the supplied sample image.",
    "priority": "Prioritize the authentic historical manga look and recognizable character identity above all other considerations."
  },
  "028": {
    "medium": "a gekiga-style black-and-white comic panel",
    "intro": "The finished character must look like a gekiga panel: dramatic, adult, scratchy black ink, heavy shadows, and cinematic contrast.",
    "constructionTitle": "MANDATORY GEKIGA CONSTRUCTION",
    "construction": [
      "Black and white only.",
      "Dense, scratchy, energetic pen hatching building every form.",
      "Heavy black shadows with sharp white highlights.",
      "Gritty, realistic adult faces with hard expressions.",
      "Cinematic, high-contrast staging.",
      "Gritty atmosphere and texture."
    ],
    "translation": {
      "face": "a hard, gritty face built from scratchy hatching",
      "hair": "dense, scratchy black strokes",
      "cloth": "heavily hatched fabric with deep folds",
      "leather": "densely hatched dark shapes",
      "metal": "black shapes with sharp white glints",
      "gear": "drawn in scratchy, high-contrast detail",
      "keep": "translated into black ink and hatching only"
    },
    "resemble": "a newly drawn page from the same gekiga comic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SCRATCHY INKS",
    "detail": [
      "Dense hatching everywhere.",
      "Heavy blacks.",
      "Cinematic contrast.",
      "Gritty atmosphere."
    ],
    "realismTitle": "INK REALISM",
    "realism": [
      "Real pen ink.",
      "Scratchy, energetic texture.",
      "Stark contrast.",
      "Rough panel borders."
    ],
    "avoid": "Avoid color, clean cel shading, cute anime faces, gradients, photorealism, and 3D shading.",
    "compositionLabel": "Gekiga panel composition",
    "negatives": [
      "Any color.",
      "Cute, big-eyed, or chibi faces.",
      "A photorealistic or 3D-rendered version of the character.",
      "Speech bubbles or text."
    ],
    "checks": [
      "Immediately reads as a gekiga comic page.",
      "Uses scratchy hatching and heavy blacks.",
      "Has a gritty, realistic face."
    ],
    "directive": "Create a gritty, black-and-white {style} panel of {name}. Match the scratchy inks, heavy shadows, and cinematic contrast of the supplied sample image.",
    "priority": "Prioritize the authentic gekiga look and recognizable character identity above all other considerations."
  },
  "029": {
    "medium": "a Chinese manhua (wuxia/xianxia) fantasy illustration",
    "intro": "The finished character must look like a polished Chinese manhua or donghua key visual: elegant, flowing figure drawing, glowing golden energy, and soft, misty atmosphere.",
    "constructionTitle": "MANDATORY MANHUA CONSTRUCTION",
    "construction": [
      "Smooth, polished digital painting with soft, clean edges.",
      "Elegant, graceful figure drawing with a sense of flowing motion.",
      "Long, flowing fabric, ribbons, and hair streaming in the wind.",
      "Glowing golden energy trails and sparks swirling around the figure.",
      "Soft palette of white, red, gold, and jade green.",
      "Misty, atmospheric depth in the background."
    ],
    "translation": {
      "face": "an elegant, softly painted face with a calm, determined look",
      "hair": "long, flowing, silky strands in the wind",
      "cloth": "flowing, layered fabric and ribbons streaming in the wind",
      "leather": "smooth, ornamented leather",
      "metal": "polished gold and silver with a soft glow",
      "gear": "glowing faintly with golden energy",
      "keep": "refined into soft, elegant manhua colors"
    },
    "resemble": "a newly painted key visual from the same manhua as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ELEGANCE",
    "detail": [
      "Polished, smooth rendering.",
      "Glowing energy trails.",
      "Flowing cloth and hair.",
      "Misty atmospheric depth."
    ],
    "realismTitle": "DIGITAL PAINT FINISH",
    "realism": [
      "Smooth digital paint.",
      "Soft glow and bloom.",
      "Atmospheric mist.",
      "Clean, elegant shapes."
    ],
    "avoid": "Avoid gritty texture, heavy ink outlines, dark or murky color, Western comic styling, and photorealism.",
    "compositionLabel": "Manhua key visual composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Gritty, dark, or muddy styling.",
      "Chibi proportions."
    ],
    "checks": [
      "Immediately reads as a Chinese manhua fantasy illustration.",
      "Has flowing cloth, golden energy, and misty atmosphere.",
      "Has an elegant, recognizable face."
    ],
    "directive": "Create an elegant {style} illustration of {name}. Match the polished painting, flowing motion, and golden energy of the supplied sample image.",
    "priority": "Prioritize the authentic manhua look and recognizable character identity above all other considerations."
  },
  "030": {
    "medium": "a chibi fantasy cartoon illustration",
    "intro": "The finished character must look like a cute, hand-drawn chibi fantasy sticker or character sheet illustration: tiny body, huge head, thick outlines, and simple flat color.",
    "constructionTitle": "MANDATORY CHIBI CONSTRUCTION",
    "construction": [
      "Chibi proportions: the head is about as large as the whole body, roughly two heads tall in total, with short stubby arms and legs and small rounded hands.",
      "Eyes are small, solid black ovals with a single white highlight. No irises and no detailed eyelids. A small nose and a tiny or hidden mouth.",
      "Thick, slightly wobbly, hand-drawn dark outlines around every shape, like a marker or digital brush sketch.",
      "Flat, soft, muted color fills with only one simple shade tone per color. No gradients, no rendering.",
      "Hair, beards, and fur are drawn as big chunky clumps with a few loose sketchy interior strokes.",
      "Equipment is simplified into big, chunky, readable shapes, oversized relative to the body, with only the most distinctive details kept.",
      "A plain white or very light background with nothing behind the character but a soft drop shadow."
    ],
    "translation": [
      "The {face} becomes a small chibi face with dot eyes that still shows the character's expression clearly.",
      "The {hair} becomes big, chunky clumps with a few sketchy strokes.",
      "The {cloth} become simple, rounded, flat-colored shapes with a couple of fold lines.",
      "The {leather} become simple flat shapes with a single darker shade and a few stitch marks.",
      "The {metal} become flat gray or gold shapes with one bright highlight stroke.",
      "The {gear} are drawn chunky and oversized so each item is still clearly identifiable.",
      "Keep {keep} as soft, slightly muted flat colors."
    ],
    "resemble": "a newly drawn character from the same chibi sticker set as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SIMPLICITY",
    "detail": [
      "Few, bold shapes. Simplify everything, but keep every signature item (weapons, armor, hat or hood, distinctive markings).",
      "Thick, confident outlines with slight hand-drawn wobble.",
      "One shade tone per color; small, simple highlight marks.",
      "Faces are tiny and simple; personality comes from pose and silhouette.",
      "Relative size still matters: the character's height in the party is shown by overall chibi size (the gnome is the tiniest, the half-orc the biggest and bulkiest)."
    ],
    "realismTitle": "HAND-DRAWN CARTOON FINISH",
    "realism": [
      "Visible, slightly uneven marker or brush outlines.",
      "Flat, matte color with soft shading.",
      "Clean, plain white background.",
      "A soft, simple ground shadow under the feet."
    ],
    "avoid": "Avoid realistic proportions, detailed anatomy, painterly rendering, gradients, glossy or 3D shading, detailed backgrounds, anime-style large sparkling eyes, and dark or gory imagery.",
    "compositionLabel": "Chibi character sticker composition",
    "background": "plain white, with only a soft drop shadow under the character. No scenery",
    "fullBody": "Full body visible, in a simplified chibi version of the mandatory pose.",
    "negatives": [
      "A realistic, semi-realistic, or properly proportioned character.",
      "Painted, gradient-shaded, or 3D-rendered surfaces.",
      "Anime-style big sparkling eyes with irises.",
      "A detailed or scenic background."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a cute chibi cartoon with a giant head and tiny body.",
      "Uses thick hand-drawn outlines, flat soft color, and simple black dot eyes.",
      "Is still clearly identifiable as this specific character from silhouette and gear."
    ],
    "directive": "Create a cute, hand-drawn Chibi Fantasy illustration of {name}. Match the proportions, outlines, flat coloring, and simplicity of the supplied sample image.",
    "priority": "Prioritize the authentic chibi look and recognizable character identity above all other considerations."
  },
  "031": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "as real-world dyes and materials"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a cinematic, photorealistic fantasy film still",
    "intro": "The finished character must look like a frame from a big-budget fantasy film: photorealistic, dramatically lit, with an epic, cinematic backdrop.",
    "constructionTitle": "MANDATORY CINEMATIC PHOTOREALISM",
    "construction": [
      "Photorealistic skin, hair, fabric, and metal, as if photographed on a film set.",
      "Dramatic, moody lighting: a cool storm light with warm firelight accents and strong rim light.",
      "A rich, dark color grade: deep blues, charcoal, and warm gold.",
      "Ornate, film-quality costume and armor detail, with gold inlay and filigree catching the light.",
      "Shallow depth of field, with the background slightly soft.",
      "An epic, cinematic sense of scale in the background."
    ],
    "resemble": "a frame from the same fantasy film as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S FILM QUALITY",
    "detail": [
      "Real textures at close range.",
      "Ornate costume detail.",
      "Dramatic rim light.",
      "Epic, slightly soft background."
    ],
    "realism": [
      "Real photographic lighting and lens.",
      "Natural skin and material texture.",
      "Cinematic color grade.",
      "Shallow depth of field."
    ],
    "avoid": "Avoid illustration, painterly brushwork, cartoon proportions, plastic CGI skin, flat lighting, and bright, cheerful color.",
    "compositionLabel": "Cinematic film still composition",
    "checks": [
      "Immediately reads as a photorealistic fantasy film still.",
      "Has dramatic, moody lighting with a rich color grade.",
      "Has a real, recognizable human (or half-human) face."
    ],
    "directive": "Create a photorealistic {style} frame of {name}. Match the lighting, color grade, and film-quality detail of the supplied sample image.",
    "priority": "Prioritize cinematic photorealism and recognizable character identity above all other considerations."
  },
  "032": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "as real-world dyes and materials"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a hyperrealistic fantasy image",
    "intro": "The finished character must look hyperrealistic: every scale, pore, and fiber razor sharp, in natural, directional light.",
    "constructionTitle": "MANDATORY HYPERREALISM",
    "construction": [
      "Extreme, razor-sharp detail on every surface: individual pores, hairs, threads, rivets, and scratches.",
      "Natural, overcast daylight with soft but directional light.",
      "Rich, realistic color with subtle teal and earth tones.",
      "Intense eyes with sharp, glossy reflections.",
      "Physically accurate materials and anatomy.",
      "Equally sharp, detailed surroundings."
    ],
    "resemble": "an image from the same hyperrealistic series as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S EXTREME DETAIL",
    "detail": [
      "Razor-sharp textures everywhere on the figure.",
      "Glossy, intense eyes.",
      "Crisp material detail.",
      "A detailed background."
    ],
    "realism": [
      "Ultra-sharp focus on the figure.",
      "Natural overcast light.",
      "Real material behavior.",
      "High dynamic range."
    ],
    "avoid": "Avoid illustration, painterly softness, cartoon proportions, smooth plastic skin, and flat lighting.",
    "compositionLabel": "Hyperrealistic image composition",
    "checks": [
      "Immediately reads as hyperrealistic.",
      "Has extreme, sharp detail on every surface.",
      "Has intense, real eyes and a recognizable face."
    ],
    "directive": "Create a hyperrealistic image of {name} in the {style} style. Match the extreme detail and light of the supplied sample image.",
    "priority": "Prioritize hyperrealism and recognizable character identity above all other considerations."
  },
  "033": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "as real-world dyes and materials"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a live-action fantasy TV or film still",
    "intro": "The finished character must look like a still from a live-action fantasy TV series: a real actor in a real costume, shot on location in natural light.",
    "constructionTitle": "MANDATORY LIVE-ACTION CONSTRUCTION",
    "construction": [
      "A real person in a real, practical costume, photographed on location.",
      "Soft, natural daylight.",
      "Real, slightly worn costume materials: leather, wool, linen, and metal.",
      "Natural, unretouched skin and hair.",
      "A softly blurred background.",
      "A candid, unposed feel."
    ],
    "resemble": "a still from the same TV series as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S NATURALISM",
    "detail": [
      "Real costume detail.",
      "Natural light.",
      "Shallow depth of field.",
      "A candid moment."
    ],
    "realism": [
      "A real camera and lens.",
      "Natural daylight.",
      "Real costume materials.",
      "Soft background blur."
    ],
    "avoid": "Avoid illustration, heavy color grading, glossy CGI, fantasy glow effects, and posed studio lighting.",
    "compositionLabel": "Live-action TV still composition",
    "checks": [
      "Immediately reads as a live-action TV or film still.",
      "Has natural light and real, practical costume.",
      "Has a real, natural, recognizable face."
    ],
    "directive": "Create a live-action fantasy still of {name} in the {style} style. Match the natural light, real costume, and candid feel of the supplied sample image.",
    "priority": "Prioritize live-action realism and recognizable character identity above all other considerations."
  },
  "034": {
    "priority": "Prioritize the authentic practical creature-effects look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same source as the sample image",
    "medium": "a photograph of a practical creature-effects costume",
    "intro": "The finished character must look like a real, physical creature-effects build photographed on set: a full-body suit or puppet with sculpted foam-latex face and hands, real fur and fabric, lit dramatically.",
    "constructionTitle": "MANDATORY PRACTICAL EFFECTS CONSTRUCTION",
    "construction": [
      "The character is a real, physical costume or animatronic build, not CGI.",
      "Sculpted, painted foam-latex or silicone face and hands with wrinkles, veins, and texture.",
      "Real hair, fur, and fabric costume pieces.",
      "Visible craftsmanship: paint washes, seams hidden in folds, realistic eyes.",
      "Dramatic studio lighting.",
      "Photographed as a real object with a real camera."
    ],
    "translation": {
      "face": "a sculpted, painted foam-latex face with realistic eyes, matching the character's features",
      "hair": "real, punched or ventilated hair and fur",
      "cloth": "real, tailored costume fabric",
      "leather": "real leather costume pieces",
      "metal": "real prop metal or painted resin",
      "gear": "real, physical props built for the suit",
      "keep": "as real paints, dyes, and materials"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CRAFTSMANSHIP",
    "detail": [
      "Sculpted skin texture.",
      "Real hair and fur.",
      "Real fabric.",
      "Dramatic studio lighting."
    ],
    "realismTitle": "PHYSICAL EFFECTS REALISM",
    "realism": [
      "A real photographed object.",
      "Real materials.",
      "Studio light.",
      "Natural imperfections."
    ],
    "avoid": "Avoid CGI, digital painting, drawn or comic styling, and fantasy glow effects.",
    "compositionLabel": "Creature-effects photo composition",
    "background": "{s}, built as a real practical film set, with dramatic studio lighting",
    "negatives": [
      "CGI or digital painting.",
      "A drawn or comic-book version of the character.",
      "Any extra people in the frame."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a real practical creature-effects build.",
      "Has sculpted latex, real fur and fabric, and studio light.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} photograph of {name} as a real costume build. Match the sculpted latex, real materials, and studio lighting of the supplied sample image."
  },
  "035": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "as muted, natural dyes"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a naturalistic fantasy portrait photograph",
    "intro": "The finished character must look like a quiet, naturalistic portrait photograph: a real person in a real handmade costume, in soft overcast light.",
    "constructionTitle": "MANDATORY NATURALISTIC CONSTRUCTION",
    "construction": [
      "A real person in real, handmade, weathered clothing.",
      "Soft, flat, overcast daylight.",
      "A muted, natural palette: browns, grays, moss greens.",
      "A candid, natural feel.",
      "Rough, tactile wool, linen, and leather textures.",
      "A softly out-of-focus background."
    ],
    "tr": {
      "keep": "as muted, natural dyes"
    },
    "resemble": "a portrait from the same photo series as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S QUIET REALISM",
    "detail": [
      "Tactile textile detail.",
      "Natural skin.",
      "Soft light.",
      "Shallow depth of field."
    ],
    "realism": [
      "A real camera and lens.",
      "Overcast light.",
      "Natural color.",
      "Soft background blur."
    ],
    "avoid": "Avoid illustration, dramatic lighting, saturated color, glossy CGI, and fantasy glow effects.",
    "compositionLabel": "Naturalistic photograph composition",
    "checks": [
      "Immediately reads as a naturalistic portrait photograph.",
      "Has soft overcast light and handmade, tactile costume.",
      "Has a calm, real, recognizable face."
    ],
    "directive": "Create a naturalistic portrait photograph of {name} in the {style} style. Match the soft light, muted palette, and quiet realism of the supplied sample image.",
    "priority": "Prioritize naturalistic realism and recognizable character identity above all other considerations."
  },
  "036": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "dented, scratched, mud-spattered real metal",
      "gear": "real, physical props with believable weight and wear",
      "keep": "muddied and faded by wear"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a gritty, realistic medieval film still",
    "intro": "The finished character must look like a gritty medieval war film still: mud, blood, battered gear, and drifting smoke under a gray sky.",
    "constructionTitle": "MANDATORY GRITTY REALISM",
    "construction": [
      "Photorealistic, battered, practical costume and armor.",
      "Mud, grime, sweat, small cuts, and blood on the figure.",
      "Flat, gray overcast light.",
      "A desaturated palette of steel gray, mud brown, and dull red.",
      "A war-worn, weathered feel.",
      "Smoke and haze drifting through the background."
    ],
    "tr": {
      "metal": "dented, scratched, mud-spattered real metal",
      "keep": "muddied and faded by wear"
    },
    "resemble": "a still from the same medieval film as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S GRIT",
    "detail": [
      "Mud and grime detail.",
      "Battered armor.",
      "Smoke and debris.",
      "Natural, gray light."
    ],
    "realism": [
      "A real camera.",
      "Desaturated color grade.",
      "Real dirt and wear.",
      "Shallow depth of field."
    ],
    "avoid": "Avoid clean, shiny costumes, bright color, illustration, glossy CGI, and heroic glamour lighting.",
    "compositionLabel": "Gritty medieval film still composition",
    "checks": [
      "Immediately reads as a gritty medieval film still.",
      "Has mud, wear, gray light, and a desaturated grade.",
      "Has a real, recognizable face."
    ],
    "directive": "Create a gritty {style} film still of {name}. Match the mud, wear, gray light, and desaturated grade of the supplied sample image.",
    "priority": "Prioritize gritty realism and recognizable character identity above all other considerations."
  },
  "037": {
    "translation": {
      "face": "a detailed, slightly idealized game-cinematic face",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "deepened into the dark, moody palette"
    },
    "realismTitle": "GAME CINEMATIC FINISH",
    "negatives": [
      "A drawn, painted, or comic-book version of the character.",
      "A flat, low-detail, or cartoony game model.",
      "Anime, manga, or chibi proportions."
    ],
    "excludeTags": [],
    "medium": "a AAA video game cinematic render",
    "intro": "The finished character must look like a high-end video game cinematic: highly detailed, slightly stylized realism, dark ornate costume, and glowing accents in moody light.",
    "constructionTitle": "MANDATORY GAME CINEMATIC CONSTRUCTION",
    "construction": [
      "High-end, slightly stylized realism, like a modern game cinematic render.",
      "Intricately detailed costume: tooled leather, etched metal, straps, and buckles.",
      "Moody, cool lighting with glowing accents (eyes, runes, or magic).",
      "Dark palette of black, deep brown, and slate, with one glowing accent color.",
      "Atmospheric fog and soft volumetric light.",
      "A dark, atmospheric background."
    ],
    "tr": {
      "face": "a detailed, slightly idealized game-cinematic face",
      "keep": "deepened into the dark, moody palette"
    },
    "resemble": "a frame from the same game cinematic as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RENDER DETAIL",
    "detail": [
      "Intricate costume detail.",
      "Glowing accents.",
      "Volumetric fog.",
      "Detailed environment."
    ],
    "realism": [
      "Physically based materials.",
      "Volumetric light and fog.",
      "Glow effects.",
      "Cinematic depth of field."
    ],
    "avoid": "Avoid illustration, flat lighting, bright color, cartoon proportions, and low-detail models.",
    "compositionLabel": "Game cinematic composition",
    "checks": [
      "Immediately reads as a AAA game cinematic.",
      "Has intricate costume detail, glowing accents, and fog.",
      "Has a detailed, recognizable face."
    ],
    "directive": "Create a {style} render of {name}. Match the render detail, moody light, and glowing accents of the supplied sample image.",
    "priority": "Prioritize the authentic game cinematic look and recognizable character identity above all other considerations."
  },
  "038": {
    "translation": {
      "face": "a realistic, painted face with warm sunlight",
      "hair": "real, individually lit strands of hair",
      "cloth": "layered, painted fabric with wraps and frayed edges",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "warmed by the sunlit palette"
    },
    "realismTitle": "PAINTED CONCEPT FINISH",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Comic-book inks or flat color.",
      "Anime, manga, or cartoon proportions."
    ],
    "excludeTags": [],
    "medium": "a professional fantasy concept art painting",
    "intro": "The finished character must look like polished professional character concept art: realistic, warm, sunlit, and full of costume and prop detail.",
    "constructionTitle": "MANDATORY CONCEPT ART CONSTRUCTION",
    "construction": [
      "Realistic digital painting with soft, controlled brushwork.",
      "Warm, bright, hazy sunlight.",
      "Warm palette: sand, ochre, rust, and leather brown.",
      "Lots of costume and prop detail: wraps, straps, trinkets, and layered cloth.",
      "A confident, readable full-figure silhouette.",
      "A simple, atmospheric environment that sets the scene without distracting."
    ],
    "tr": {
      "face": "a realistic, painted face with warm sunlight",
      "cloth": "layered, painted fabric with wraps and frayed edges",
      "keep": "warmed by the sunlit palette"
    },
    "resemble": "a newly painted piece by the same concept artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DESIGN DETAIL",
    "detail": [
      "Clear costume and prop design detail.",
      "Warm, hazy light.",
      "Soft, atmospheric background.",
      "Readable silhouette."
    ],
    "realism": [
      "Soft digital brushwork.",
      "Warm, hazy light.",
      "Realistic materials.",
      "Atmospheric perspective."
    ],
    "avoid": "Avoid ink outlines, flat color, cartoon proportions, harsh contrast, and murky color.",
    "compositionLabel": "Character concept art composition",
    "checks": [
      "Immediately reads as professional fantasy concept art.",
      "Has warm, sunlit realism and rich costume detail.",
      "Has a realistic, recognizable face."
    ],
    "directive": "Create {style} of {name}. Match the realistic painting, warm light, and costume detail of the supplied sample image.",
    "priority": "Prioritize the authentic concept art look and recognizable character identity above all other considerations."
  },
  "039": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "drained almost to gray, with only faint traces of color"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a photographic dark fantasy image",
    "intro": "The finished character must look like a dark fantasy photograph: near-monochrome, misty, moonlit, and ominous.",
    "constructionTitle": "MANDATORY PHOTOGRAPHIC DARK FANTASY",
    "construction": [
      "Photographic realism in a near-monochrome, cold gray palette.",
      "Thick fog and pale, diffuse moonlight.",
      "Deep black shadows that swallow detail.",
      "Deep, receding fog in the background.",
      "An ominous, still mood.",
      "Subtle film grain."
    ],
    "tr": {
      "keep": "drained almost to gray, with only faint traces of color"
    },
    "resemble": "a photograph from the same dark fantasy series as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MOOD",
    "detail": [
      "Detail fades into fog and shadow.",
      "Real textures where light falls.",
      "Receding fog.",
      "Pale moonlight."
    ],
    "realism": [
      "A real camera.",
      "Near-monochrome grade.",
      "Real fog.",
      "Film grain."
    ],
    "avoid": "Avoid color, bright light, illustration, glossy CGI, and cheerful mood.",
    "compositionLabel": "Dark fantasy photograph composition",
    "checks": [
      "Immediately reads as a dark fantasy photograph.",
      "Is near-monochrome, misty, and moonlit.",
      "Is still clearly this character."
    ],
    "directive": "Create a {style} image of {name}. Match the near-monochrome palette, fog, and ominous mood of the supplied sample image.",
    "priority": "Prioritize the authentic photographic dark fantasy look and recognizable character identity above all other considerations."
  },
  "040": {
    "translation": {
      "face": "a photorealistic human face with real skin texture, pores, and natural light",
      "hair": "real, individually lit strands of hair",
      "cloth": "real woven fabric with natural weight, wear, and folds",
      "leather": "real worn leather with grain, scuffs, and stitching",
      "metal": "real forged metal with scratches, tarnish, and natural reflections",
      "gear": "real, physical props with believable weight and wear",
      "keep": "as real-world dyes and materials"
    },
    "realismTitle": "PHOTOGRAPHIC REALISM",
    "negatives": [
      "A drawn, painted, illustrated, or comic-book version of the character.",
      "A plastic, waxy, or video-game 3D-render look.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [],
    "medium": "a documentary nature photograph of a fantasy subject",
    "intro": "The finished character must look like a wildlife documentary photograph: real, natural, and observational, in soft, cloudy light.",
    "constructionTitle": "MANDATORY DOCUMENTARY REALISM",
    "construction": [
      "Shot like a real nature documentary photograph with a telephoto lens.",
      "Soft, cloudy mountain light.",
      "Natural, muted color: gray, brown, and green.",
      "Completely real textures and anatomy.",
      "An observational, documentary feel.",
      "Atmospheric depth in the background."
    ],
    "resemble": "a photograph from the same documentary as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DOCUMENTARY REALISM",
    "detail": [
      "Real textures.",
      "Natural light.",
      "Telephoto compression.",
      "Atmospheric depth."
    ],
    "realism": [
      "A real telephoto lens.",
      "Natural cloudy light.",
      "Muted color.",
      "Atmospheric depth."
    ],
    "avoid": "Avoid illustration, dramatic studio lighting, glossy CGI, fantasy glow effects, and saturated color.",
    "compositionLabel": "Documentary photograph composition",
    "checks": [
      "Immediately reads as a documentary nature photograph.",
      "Has natural light and real textures.",
      "Has a real, recognizable face."
    ],
    "directive": "Create a {style} photograph of {name}. Match the natural light, realism, and documentary feel of the supplied sample image.",
    "priority": "Prioritize documentary realism and recognizable character identity above all other considerations."
  },
  "041": {
    "medium": "a traditional fantasy oil painting",
    "intro": "The finished character must look like a classic fantasy book-cover oil painting: rich, warm, glowing light, visible brushwork, and a romantic, storybook feel.",
    "constructionTitle": "MANDATORY TRADITIONAL OIL CONSTRUCTION",
    "construction": [
      "Visible, textured oil brushwork with fine detail in the face and hands.",
      "Warm, glowing golden light with soft, hazy atmosphere.",
      "Rich palette of gold, ochre, rust, and deep blue.",
      "Flowing, billowing cloth and hair painted with movement.",
      "Romantic, slightly idealized fantasy realism.",
      "A dreamlike, glowing, hazy background."
    ],
    "translation": {
      "face": "a richly painted, warmly lit face",
      "hair": "flowing, painterly locks catching golden light",
      "cloth": "billowing, richly painted fabric",
      "leather": "warm, painted leather with soft highlights",
      "metal": "painted metal glinting with warm light",
      "gear": "painted with the same rich color and light",
      "keep": "enriched by the warm golden palette"
    },
    "resemble": "a newly painted book cover by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RICH PAINTING",
    "detail": [
      "Fine detail in face and hands.",
      "Looser brushwork in the background.",
      "Glowing light.",
      "Textured paint."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Visible oil brushwork.",
      "Warm glazes.",
      "Canvas texture.",
      "Soft, hazy atmosphere."
    ],
    "avoid": "Avoid ink outlines, flat color, photorealism, 3D rendering, and cold or muddy color.",
    "compositionLabel": "Fantasy book cover composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Ink outlines or flat comic color.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as a traditional fantasy oil painting.",
      "Has warm, glowing light and visible brushwork.",
      "Has a richly painted, recognizable face."
    ],
    "directive": "Create a {style} of {name}. Match the brushwork, golden light, and romantic feel of the supplied sample image.",
    "priority": "Prioritize the authentic oil painting look and recognizable character identity above all other considerations."
  },
  "042": {
    "medium": "a classical realist oil portrait",
    "intro": "The finished character must look like an Old Master portrait in oils: dignified presence, rich deep color, dark backgrounds, and masterful paint handling.",
    "constructionTitle": "MANDATORY CLASSICAL REALIST CONSTRUCTION",
    "construction": [
      "Masterful oil paint handling: smooth, refined flesh with crisp, loaded highlights on metal and lace.",
      "Warm, directional studio light from one side, with deep, warm shadows.",
      "Rich palette: deep crimson, black, gold, and warm flesh tones.",
      "A dignified, formal presence.",
      "A dark, rich background.",
      "Varnished, aged canvas surface."
    ],
    "translation": {
      "face": "a dignified, realistically painted face with refined light and shadow",
      "hair": "softly painted hair with subtle highlights",
      "cloth": "rich, heavy fabric with deep, glowing folds",
      "leather": "finely painted leather with soft sheen",
      "metal": "gleaming, masterfully painted metal with bold, loaded highlights",
      "gear": "painted with the same masterful realism",
      "keep": "deepened into rich Old Master tones"
    },
    "resemble": "a newly commissioned portrait by the same Old Master as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MASTERY",
    "detail": [
      "Refined face and hands.",
      "Brilliant highlights on metal.",
      "Rich fabrics.",
      "Dark, simple background."
    ],
    "realismTitle": "OLD MASTER PAINT REALISM",
    "realism": [
      "Real oil paint.",
      "Warm glazes and impasto highlights.",
      "Aged varnish.",
      "Canvas texture."
    ],
    "avoid": "Avoid modern lighting, bright backgrounds, outlines, flat color, photorealism, and fantasy glow effects.",
    "compositionLabel": "Old Master painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Bright, modern, or fantasy lighting.",
      "Anime, manga, or cartoon proportions."
    ],
    "checks": [
      "Immediately reads as an Old Master oil portrait.",
      "Has warm studio light and deep color.",
      "Has a dignified, realistically painted face."
    ],
    "directive": "Create a {style} portrait of {name}. Match the paint handling, light, and dignified formality of the supplied sample image.",
    "priority": "Prioritize the authentic Old Master look and recognizable character identity above all other considerations."
  },
  "043": {
    "priority": "Prioritize the authentic Renaissance look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Renaissance-style painting",
    "intro": "The finished character must look like a richly lit Renaissance painting: warm candle and window light, deep velvets, and precise detail.",
    "constructionTitle": "MANDATORY RENAISSANCE CONSTRUCTION",
    "construction": [
      "Smooth, realistic painted modeling with soft, blended transitions.",
      "Warm golden light from a window and candles, with soft shadows.",
      "Rich palette: deep crimson velvet, black, ivory linen, gold, and warm wood.",
      "Calm, dignified, realistic figures.",
      "Precise detail on every object and prop.",
      "Balanced, harmonious composition with clear perspective."
    ],
    "translation": {
      "face": "a realistic, softly modeled face with warm light",
      "hair": "softly painted hair with fine highlights",
      "cloth": "rich velvet and linen with deep, soft folds",
      "leather": "warm, softly painted leather",
      "metal": "brass and steel with warm, soft gleams",
      "gear": "painted with careful, precise realism",
      "keep": "enriched into deep Renaissance tones"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RICH INTERIOR",
    "detail": [
      "Precise object detail.",
      "Soft, warm light.",
      "Rich fabrics.",
      "Clear perspective."
    ],
    "realismTitle": "PAINT FINISH",
    "realism": [
      "Smooth, blended paint.",
      "Warm glazes.",
      "Soft candle and window light.",
      "Fine canvas texture."
    ],
    "avoid": "Avoid outlines, flat color, harsh contrast, modern objects, cartoon proportions, and fantasy glow effects.",
    "compositionLabel": "Renaissance painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Modern or harsh lighting.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a warm Renaissance painting.",
      "Has soft golden light and rich velvet tones.",
      "Has a realistic, dignified face."
    ],
    "directive": "Create a {style} of {name}. Match the warm light, rich colors, and precise detail of the supplied sample image."
  },
  "044": {
    "priority": "Prioritize the authentic Baroque look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Baroque oil painting",
    "intro": "The finished character must look like a dramatic Baroque painting: deep black shadow, a single strong light, theatrical gesture, and rich draped fabric.",
    "constructionTitle": "MANDATORY BAROQUE CONSTRUCTION",
    "construction": [
      "Dramatic chiaroscuro: one strong light from the side, everything else falling into deep black.",
      "Rich, saturated fabrics: deep blue, crimson, and gold, with heavy folds.",
      "Theatrical, emotional intensity.",
      "Realistic, solid anatomy.",
      "Backgrounds falling into deep, dark shadow.",
      "Smooth, glossy, varnished oil paint."
    ],
    "translation": {
      "face": "a dramatically lit, emotional face half in shadow",
      "hair": "softly painted hair catching the light",
      "cloth": "rich, heavy draped fabric with deep, glowing folds",
      "leather": "deep, glossy leather",
      "metal": "polished metal with brilliant highlights",
      "gear": "painted with theatrical light and shadow",
      "keep": "deepened into rich Baroque tones"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DRAMA",
    "detail": [
      "Strong light and deep shadow.",
      "Rich fabric folds.",
      "Theatrical intensity.",
      "Dark background."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Glossy oil paint.",
      "Deep, warm shadow.",
      "Varnished surface.",
      "Fine canvas texture."
    ],
    "avoid": "Avoid flat lighting, bright backgrounds, outlines, cartoon styling, and photorealism.",
    "compositionLabel": "Baroque painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Flat or even lighting.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a Baroque oil painting.",
      "Has dramatic chiaroscuro and rich fabric.",
      "Has a realistic, emotional face."
    ],
    "directive": "Create a dramatic {style} of {name}. Match the chiaroscuro, rich fabric, and theatrical mood of the supplied sample image."
  },
  "045": {
    "priority": "Prioritize the authentic Romanticism look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Romantic-era oil painting",
    "intro": "The finished character must look like a Romantic-era oil painting: dramatic, sublime light and sky, rich warm color, and textured oil brushwork.",
    "constructionTitle": "MANDATORY ROMANTIC CONSTRUCTION",
    "construction": [
      "A sublime, awe-filled sense of scale and atmosphere.",
      "Deep atmospheric distance in the background.",
      "Dramatic light: warm, low, golden-orange light breaking through heavy, churning charcoal storm clouds.",
      "A rich, warm palette of ember orange, gold, umber, and deep brown, against cool gray fog and slate shadows.",
      "Textured, visible oil brushwork, finer in the face and hands and looser in clouds, fog, and rock.",
      "Wind and weather felt in hair, cloth, and sky."
    ],
    "translation": {
      "face": "a realistically painted, warmly lit face with an earnest, windswept look",
      "hair": "tousled, wind-stirred painted locks",
      "cloth": "heavy, weathered fabric with rich folds, catching sunset light at the edges",
      "leather": "worn, warm-brown painted leather",
      "metal": "muted, softly glinting painted metal",
      "gear": "painted with the same rich, weathered texture",
      "keep": "warmed by the sunset palette, staying rich and earthy rather than bright"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SUBLIME VIEW",
    "detail": [
      "A finely painted face and hands.",
      "Dramatic sky and light.",
      "Deep atmospheric distance.",
      "Textured surfaces throughout."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Textured oil brushwork.",
      "Warm glazes and dramatic light.",
      "Atmospheric perspective.",
      "Fine canvas texture."
    ],
    "avoid": "Avoid flat or even lighting, clean digital rendering, outlines, neon or saturated digital color, cartoon styling, and photorealism.",
    "compositionLabel": "Romantic painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Flat lighting or neon, digital color.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a Romantic-era oil painting.",
      "Has dramatic, sublime light and atmosphere.",
      "Is recognizable from face (where visible), costume, and gear."
    ],
    "directive": "Create a {style} painting of {name}. Match the brushwork, dramatic light, and sublime mood of the supplied sample image."
  },
  "046": {
    "priority": "Prioritize the authentic Pre-Raphaelite look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Pre-Raphaelite painting",
    "intro": "The finished character must look like a Pre-Raphaelite painting: jewel-like color, sharply detailed fabrics, and botanical precision.",
    "constructionTitle": "MANDATORY PRE-RAPHAELITE CONSTRUCTION",
    "construction": [
      "Sharp, precise detail everywhere, from embroidered fabric to individual flowers.",
      "Jewel-like, saturated color: deep teal, crimson, emerald, and gold.",
      "Rich, patterned medieval-style costume with heavy velvet and embroidery.",
      "A calm, dreamy, slightly melancholy expression.",
      "Natural details such as flowers and foliage rendered with botanical precision.",
      "Smooth, luminous oil paint."
    ],
    "translation": {
      "face": "a luminous, finely painted face with a dreamy expression",
      "hair": "long, finely detailed, flowing strands",
      "cloth": "rich velvet and embroidered fabric with sharp patterns",
      "leather": "finely detailed, ornamented leather",
      "metal": "precisely painted metal with delicate engraving",
      "gear": "painted with the same jewel-like precision",
      "keep": "deepened into jewel tones"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PRECISION",
    "detail": [
      "Every flower and pattern detailed.",
      "Rich textiles.",
      "Botanical detail.",
      "Luminous color."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Smooth, luminous oil paint.",
      "Jewel-like color.",
      "Fine detail.",
      "Soft, even light."
    ],
    "avoid": "Avoid loose brushwork, muted color, outlines, cartoon styling, and photorealism.",
    "compositionLabel": "Pre-Raphaelite painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Loose, sketchy, or muted painting.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a Pre-Raphaelite painting.",
      "Has jewel-like color and sharp detail.",
      "Has a luminous, recognizable face."
    ],
    "directive": "Create a {style} of {name}. Match the jewel color and precise detail of the supplied sample image."
  },
  "047": {
    "medium": "an impressionist oil painting",
    "intro": "The finished character must look like a modern impressionist oil painting: loose, expressive palette-knife and brush strokes, glowing light, and soft, luminous color.",
    "constructionTitle": "MANDATORY IMPRESSIONIST CONSTRUCTION",
    "construction": [
      "Every form is built from visible, loose brush and palette-knife strokes. No outlines and no hard ink lines.",
      "Edges are soft and broken; forms dissolve into the background where they turn away from the light.",
      "Light is the subject: strong, warm backlight or sunlight glowing through the scene, with soft rim light around the figure.",
      "Color is luminous and harmonized: soft lavenders, violets, warm ochres and creams, with complementary warm and cool strokes laid side by side.",
      "Detail is concentrated on the face, hands, and key items, and loosens toward the edges of the canvas.",
      "Hair, cloth, and fur are suggested by sweeping directional strokes that show movement and wind.",
      "Scattered, dappled flecks of paint in the foreground and background."
    ],
    "translation": [
      "The {face} becomes a softly painted face caught in glowing light, with the expression suggested in a few confident strokes.",
      "The {hair} becomes sweeping, wind-blown brushstrokes catching the backlight.",
      "The {cloth} become loose, flowing painted fabric with light glowing through its edges.",
      "The {leather} become warm, broken strokes of brown and ochre.",
      "The {metal} become a few bright, thick dabs of reflected light.",
      "The {gear} are suggested clearly enough to identify, with looser strokes than the face.",
      "Keep {keep}, but soften them into the luminous impressionist palette."
    ],
    "resemble": "a newly painted canvas by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S LOOSENESS",
    "detail": [
      "The face and the character's signature items are the most resolved areas; everything else is loose.",
      "Visible brush and palette-knife texture everywhere.",
      "Light, airy values overall, with the figure glowing in the light.",
      "Movement is shown through directional strokes in hair, cloth, and the surroundings."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Thick, visible paint with impasto ridges and broken color.",
      "Soft, lost-and-found edges.",
      "Luminous, glowing natural light.",
      "Canvas texture showing through thin areas."
    ],
    "avoid": "Avoid hard outlines, crisp digital detail, smooth gradients, photorealism, dark or murky values, cel shading, and comic or cartoon styling.",
    "compositionLabel": "Impressionist painting composition",
    "negatives": [
      "A photorealistic or 3D-rendered version of the character.",
      "Hard ink outlines or comic-book linework.",
      "Anime, manga, cel-shaded, or cartoon faces and proportions.",
      "A dark, gloomy, or murky color scheme."
    ],
    "checks": [
      "Immediately reads as an impressionist oil painting with visible strokes.",
      "Is full of glowing light and a soft, luminous palette.",
      "Has believable adult anatomy and a recognizable face where visible."
    ],
    "directive": "Create a loose, luminous Impressionist oil painting of {name}. Match the brushwork, light, and soft color of the supplied sample image.",
    "priority": "Prioritize authentic impressionist painting and recognizable character identity above all other considerations."
  },
  "048": {
    "priority": "Prioritize the authentic Expressionist look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "an Expressionist oil painting",
    "intro": "The finished character must look like a German Expressionist painting: jagged, elongated forms, rough hatched brushstrokes, and unnatural, emotional color.",
    "constructionTitle": "MANDATORY EXPRESSIONIST CONSTRUCTION",
    "construction": [
      "Elongated, angular, jagged forms.",
      "Rough, visible, hatched brushstrokes.",
      "Unnatural, emotional color: acid green, deep blue, coral pink, and black.",
      "Mask-like faces with green or pale skin and dark eyes.",
      "Tilted, distorted perspective.",
      "A tense, uneasy mood."
    ],
    "translation": {
      "face": "an angular, mask-like face in unnatural color",
      "hair": "jagged, rough brushstrokes",
      "cloth": "angular, roughly brushed fabric",
      "leather": "rough, dark strokes",
      "metal": "jagged strokes of pale color",
      "gear": "stylized into angular shapes",
      "keep": "pushed into unnatural, emotional color"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ROUGHNESS",
    "detail": [
      "Rough, visible strokes.",
      "Angular, elongated forms.",
      "Unnatural color.",
      "Distorted space."
    ],
    "realismTitle": "OIL PAINT FINISH",
    "realism": [
      "Thick, rough oil paint.",
      "Hatched strokes.",
      "Bold, unnatural color.",
      "Canvas texture."
    ],
    "avoid": "Avoid realistic color and anatomy, smooth blending, clean outlines, photorealism, and cute styling.",
    "compositionLabel": "Expressionist painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Realistic color or smooth rendering.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as an Expressionist painting.",
      "Has jagged forms, rough strokes, and unnatural color.",
      "Is still recognizable from costume and gear."
    ],
    "directive": "Create an {style} painting of {name}. Match the jagged forms, rough strokes, and unnatural color of the supplied sample image."
  },
  "049": {
    "priority": "Prioritize the authentic watercolor-and-ink look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a watercolor-and-ink fairy-tale illustration",
    "intro": "The finished character must look like a soft, glowing storybook painting: delicate color, soft beams of light and mist, and magical sparkle.",
    "constructionTitle": "MANDATORY STORYBOOK CONSTRUCTION",
    "construction": [
      "Soft, delicate painted color with fine line detail.",
      "Soft beams of light and gentle mist.",
      "Soft palette of moss green, teal, and soft blue, with warm accents.",
      "Magical details: glowing flowers, butterflies, sparkles.",
      "An enchanted, gentle atmosphere in the setting.",
      "A gentle, wondrous mood."
    ],
    "translation": {
      "face": "a softly painted face lit by forest light",
      "hair": "soft strands touched by light",
      "cloth": "softly painted fabric with delicate folds",
      "leather": "soft, gently painted leather",
      "metal": "pale metal with soft glints",
      "gear": "painted gently, with a touch of magic sparkle",
      "keep": "softened into the gentle forest palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ENCHANTMENT",
    "detail": [
      "Delicate line detail.",
      "Light beams and mist.",
      "Glowing flowers and sparkles.",
      "Enchanted atmosphere."
    ],
    "realismTitle": "WATERCOLOR FINISH",
    "realism": [
      "Soft, transparent color.",
      "Fine line work.",
      "Glowing light.",
      "Paper texture."
    ],
    "avoid": "Avoid harsh contrast, heavy black ink, gritty texture, photorealism, and dark mood.",
    "compositionLabel": "Storybook illustration composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Harsh, gritty, or dark styling.",
      "Heavy black ink outlines."
    ],
    "checks": [
      "Immediately reads as a soft watercolor storybook painting.",
      "Has light beams, mist, and magical detail.",
      "Has a gentle, recognizable face."
    ],
    "directive": "Create a soft {style} illustration of {name}. Match the delicate color, soft light, and enchanted atmosphere of the supplied sample image."
  },
  "050": {
    "priority": "Prioritize the authentic graphite and charcoal look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a fine-art graphite and charcoal drawing",
    "intro": "The finished character must look like a fine-art pen, graphite, and charcoal drawing: monochrome, with confident contour lines and rich hatched tone.",
    "constructionTitle": "MANDATORY DRAWING CONSTRUCTION",
    "construction": [
      "Monochrome only: black, grays, and white paper.",
      "Confident contour lines with varied weight.",
      "Tone built from hatching, cross-hatching, and smudged charcoal.",
      "Deep folds in drapery drawn with sweeping strokes.",
      "Realistic, weighty anatomy and a stern, expressive face.",
      "A softly sketched, smoky background."
    ],
    "translation": {
      "face": "a realistically drawn face with hatched shadow",
      "hair": "drawn as flowing strands of line",
      "cloth": "deeply folded drapery drawn with sweeping strokes",
      "leather": "hatched, textured shapes",
      "metal": "shaded planes with bare-paper highlights",
      "gear": "drawn with the same confident line",
      "keep": "translated into values of gray"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DRAFTSMANSHIP",
    "detail": [
      "Confident line.",
      "Rich hatching.",
      "Detailed figure, softer background.",
      "White paper highlights."
    ],
    "realismTitle": "DRAWING REALISM",
    "realism": [
      "Real graphite and charcoal on paper.",
      "Smudges and hatching.",
      "Paper grain.",
      "Monochrome."
    ],
    "avoid": "Avoid color, digital smoothness, flat fills, cartoon styling, and photorealism.",
    "compositionLabel": "Fine-art drawing composition",
    "negatives": [
      "Any color.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a fine-art graphite and charcoal drawing.",
      "Is monochrome, with confident line and hatching.",
      "Has a realistic, expressive face."
    ],
    "directive": "Create a {style} drawing of {name}. Match the line, hatching, and monochrome tone of the supplied sample image."
  },
  "051": {
    "priority": "Prioritize the authentic surrealist look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Dalí-inspired surrealist oil painting",
    "intro": "The finished character must look like a surrealist oil painting: dreamlike distortion, small impossible details, long shadows, and crisp, smooth paint.",
    "constructionTitle": "MANDATORY SURREALIST CONSTRUCTION",
    "construction": [
      "Smooth, crisp, realistic oil painting of impossible things.",
      "Vast, dreamlike space and clear, still light.",
      "Small surreal touches in the setting, such as melting or floating objects.",
      "Long, sharp shadows under warm light.",
      "Warm ochres and oranges against deep teal.",
      "Something about the character becomes subtly dreamlike (for example, a melting accessory) without losing identity."
    ],
    "translation": {
      "face": "a realistic, smoothly painted face",
      "hair": "smoothly painted, slightly dreamlike",
      "cloth": "smoothly painted fabric, with one fold drifting dreamily",
      "leather": "smoothly painted leather",
      "metal": "polished metal, with one small item gently melting",
      "gear": "painted realistically, with a touch of surreal distortion",
      "keep": "warmed into the ochre-and-teal palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DREAMSCAPE",
    "detail": [
      "Crisp, realistic detail.",
      "Long shadows.",
      "Surreal touches.",
      "Vast empty space."
    ],
    "realismTitle": "OIL PAINT FINISH",
    "realism": [
      "Smooth oil paint.",
      "Crisp edges.",
      "Warm, even light.",
      "Fine canvas texture."
    ],
    "avoid": "Avoid loose brushwork, outlines, cartoon styling, photorealism, and a cluttered composition.",
    "compositionLabel": "Surrealist painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Loose or sketchy painting.",
      "Anime, manga, or cartoon faces and proportions.",
      "Signatures or text."
    ],
    "checks": [
      "Immediately reads as a surrealist oil painting.",
      "Has dreamlike distortion and surreal touches.",
      "Keeps the character fully recognizable."
    ],
    "directive": "Create a {style} painting of {name}. Match the dreamlike distortion, crisp painting, and surreal details of the supplied sample image."
  },
  "052": {
    "priority": "Prioritize the authentic biomechanical look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Giger-inspired biomechanical painting",
    "intro": "The finished character must look like a biomechanical dark painting: bone, tubes, and machinery fused together in monochrome gray.",
    "constructionTitle": "MANDATORY BIOMECHANICAL CONSTRUCTION",
    "construction": [
      "Near-monochrome palette of bone, steel gray, and black.",
      "Organic forms fused with machinery: ribs, vertebrae, tubes, pipes, and cables.",
      "Airbrushed, smooth, glossy surfaces with deep shadows.",
      "The setting is fused with the same bone-and-machine forms.",
      "Pale, cold light from above.",
      "The character's costume and gear subtly fused with biomechanical detail, without losing identity."
    ],
    "translation": {
      "face": "a pale, smoothly airbrushed face",
      "hair": "dark, glossy strands like cables",
      "cloth": "dark, glossy fabric with ribbed, organic texture",
      "leather": "glossy, ribbed, organic-looking material",
      "metal": "dark, fused metal with tubes and vertebrae details",
      "gear": "subtly fused with biomechanical detail",
      "keep": "drained toward bone, gray, and black"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DENSITY",
    "detail": [
      "Dense biomechanical detail.",
      "Smooth airbrushed surfaces.",
      "Deep shadows.",
      "Fused organic-mechanical surroundings."
    ],
    "realismTitle": "AIRBRUSH FINISH",
    "realism": [
      "Smooth airbrush gradients.",
      "Glossy surfaces.",
      "Monochrome tone.",
      "Cold light."
    ],
    "avoid": "Avoid bright color, cartoon styling, clean comic inks, photorealism, and warm light.",
    "compositionLabel": "Biomechanical painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Bright or warm color.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a biomechanical dark painting.",
      "Has bone-and-machine forms in monochrome gray.",
      "Keeps the character recognizable."
    ],
    "directive": "Create a {style} painting of {name}. Match the bone-and-machine forms, monochrome palette, and airbrushed finish of the supplied sample image."
  },
  "053": {
    "priority": "Prioritize the authentic metaphysical look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a metaphysical painting",
    "intro": "The finished character must look like a metaphysical painting: simplified forms, long raking shadows, a deep green sky, and a still, silent mood.",
    "constructionTitle": "MANDATORY METAPHYSICAL CONSTRUCTION",
    "construction": [
      "Simplified, flat-painted forms with clean edges.",
      "Empty, simplified architecture in the setting.",
      "Long, dark, raking shadows from low light.",
      "A deep green sky fading to yellow at the horizon.",
      "Warm ochre ground and orange-red accents.",
      "An eerie, silent, dreamlike stillness."
    ],
    "translation": {
      "face": "a simplified, quiet face",
      "hair": "a simple painted shape",
      "cloth": "simplified, flat-painted fabric",
      "leather": "simple flat shapes",
      "metal": "simple flat shapes",
      "gear": "simplified but recognizable",
      "keep": "muted to fit the green, ochre, and red palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S STILLNESS",
    "detail": [
      "Simple, clean forms.",
      "Long shadows.",
      "Empty space.",
      "Strong perspective."
    ],
    "realismTitle": "PAINT FINISH",
    "realism": [
      "Flat, matte oil paint.",
      "Clean edges.",
      "Low, raking light.",
      "Canvas texture."
    ],
    "avoid": "Avoid busy detail, action poses, crowds, bright saturated color, cartoon styling, and photorealism.",
    "compositionLabel": "Metaphysical painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Busy detail or crowds.",
      "Anime, manga, or cartoon faces and proportions.",
      "Signatures or text."
    ],
    "checks": [
      "Immediately reads as a metaphysical painting.",
      "Has long raking shadows, simplified forms, and a green sky.",
      "Keeps the character recognizable."
    ],
    "directive": "Create a {style} of {name}. Match the stillness, shadows, and palette of the supplied sample image."
  },
  "054": {
    "priority": "Prioritize the authentic magical realism look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a magical realism image",
    "intro": "The finished character must look like a magical realism image: a real, sunlit scene where one impossible thing happens calmly, such as something drifting through the air.",
    "constructionTitle": "MANDATORY MAGICAL REALISM CONSTRUCTION",
    "construction": [
      "Realistic, softly photographic rendering of an ordinary, believable scene.",
      "One calm, impossible element suited to the setting, such as something drifting through the air.",
      "Soft, warm, slightly faded film color.",
      "Natural, believable detail in the setting.",
      "Soft, natural daylight.",
      "A peaceful, dreamy mood."
    ],
    "translation": {
      "face": "a real, softly lit face",
      "hair": "real, softly lit hair",
      "cloth": "real fabric in soft light",
      "leather": "real, softly lit leather",
      "metal": "real metal with soft reflections",
      "gear": "real and grounded",
      "keep": "softened by faded film color"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S QUIET WONDER",
    "detail": [
      "Realistic scene.",
      "One calm impossible element.",
      "Soft, faded color.",
      "Calm atmosphere."
    ],
    "realismTitle": "SOFT PHOTOGRAPHIC FINISH",
    "realism": [
      "Soft film color.",
      "Natural light.",
      "Gentle haze.",
      "Realistic textures."
    ],
    "avoid": "Avoid harsh contrast, dark mood, illustration outlines, cartoon styling, and chaotic action.",
    "compositionLabel": "Magical realism composition",
    "negatives": [
      "A cartoon or comic version of the character.",
      "Dark, harsh, or chaotic styling.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as magical realism.",
      "Shows a real scene with one calm, impossible element.",
      "Has a real, recognizable face."
    ],
    "directive": "Create a {style} image of {name}. Match the soft realism, faded color, and calm impossibility of the supplied sample image."
  },
  "055": {
    "priority": "Prioritize the authentic abstract expressionist look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "an abstract expressionist painting with an emerging figure",
    "intro": "The finished character must look like an abstract expressionist painting: violent, gestural strokes of black, gray-blue, and orange, with the character emerging from the paint.",
    "constructionTitle": "MANDATORY ABSTRACT EXPRESSIONIST CONSTRUCTION",
    "construction": [
      "Thick, gestural, slashing brushstrokes, drips, and splatters.",
      "A bold palette of black, gray-blue, white, and vivid orange-red.",
      "The figure is formed from the strokes themselves, emerging from abstraction.",
      "Raw canvas showing at the edges.",
      "Energetic, chaotic motion.",
      "Identity is carried by silhouette, key colors, and signature gear."
    ],
    "translation": {
      "face": "suggested by a few bold strokes",
      "hair": "a slash of gestural paint",
      "cloth": "sweeping gestural strokes",
      "leather": "dark gestural marks",
      "metal": "flashes of white and gray paint",
      "gear": "emerging from the strokes, recognizable in shape",
      "keep": "with the signature colors as bold strokes among the black, gray-blue, and orange"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ENERGY",
    "detail": [
      "Bold, chaotic strokes.",
      "Drips and splatters.",
      "A recognizable silhouette.",
      "Raw canvas edges."
    ],
    "realismTitle": "PAINT FINISH",
    "realism": [
      "Thick oil or acrylic paint.",
      "Drips and splatters.",
      "Raw canvas.",
      "Visible gesture."
    ],
    "avoid": "Avoid realistic rendering, clean outlines, smooth blending, and fine detail.",
    "compositionLabel": "Abstract expressionist composition",
    "background": "pure gestural abstraction, with only a faint echo of {s} in the strokes",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Realistic, detailed rendering.",
      "Clean outlines."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as an abstract expressionist painting.",
      "Uses gestural strokes, drips, and bold color.",
      "The character is still recognizable from silhouette and gear."
    ],
    "directive": "Create an {style} painting in which {name} emerges from the strokes. Match the gestural energy and palette of the supplied sample image."
  },
  "056": {
    "priority": "Prioritize the authentic Cubist look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a Cubist painting",
    "intro": "The finished character must look like a textured Cubist painting: fragmented, geometric planes in teal, cream, red, and black, with a weathered, scraped surface.",
    "constructionTitle": "MANDATORY CUBIST CONSTRUCTION",
    "construction": [
      "Forms broken into flat, angular, geometric planes.",
      "Palette of teal, slate blue, cream, red, and black.",
      "Heavily textured, scraped, and weathered paint surface.",
      "The figure is built from interlocking planes but remains readable.",
      "The setting fragmented into geometric blocks.",
      "Patchwork color blocks."
    ],
    "translation": {
      "face": "a geometric, faceted face",
      "hair": "flat angular planes",
      "cloth": "interlocking flat planes of color",
      "leather": "angular dark planes",
      "metal": "faceted pale planes",
      "gear": "reduced to geometric shapes, still recognizable",
      "keep": "placed as color blocks within the teal, cream, and red palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PLANES",
    "detail": [
      "Geometric fragmentation.",
      "Textured paint.",
      "Patchwork color.",
      "Readable figure."
    ],
    "realismTitle": "PAINT FINISH",
    "realism": [
      "Thick, scraped paint.",
      "Weathered texture.",
      "Flat planes.",
      "Canvas grain."
    ],
    "avoid": "Avoid realistic rendering, smooth gradients, outlines, cartoon styling, and photorealism.",
    "compositionLabel": "Cubist painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Realistic, smooth rendering.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a Cubist painting.",
      "Has fragmented geometric planes and textured paint.",
      "The character is still recognizable."
    ],
    "directive": "Create a {style} painting of {name}. Match the geometric planes, textured paint, and palette of the supplied sample image."
  },
  "057": {
    "priority": "Prioritize the authentic psychedelic look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a psychedelic blacklight poster illustration",
    "intro": "The finished character must look like a psychedelic blacklight poster: neon pink, cyan, yellow, and violet, glowing against deep blue-black.",
    "constructionTitle": "MANDATORY PSYCHEDELIC CONSTRUCTION",
    "construction": [
      "Neon, fluorescent color: hot pink, cyan, acid yellow, orange, and violet.",
      "A deep blue-black and purple base.",
      "Bold outlines with flowing, organic linework.",
      "Glowing gradients like blacklight ink.",
      "Trippy, flowing, organic forms in the setting.",
      "Screen-printed poster feel."
    ],
    "translation": {
      "face": "a boldly outlined face in glowing neon color",
      "hair": "flowing, neon-lit linework",
      "cloth": "flat neon shapes with glowing edges",
      "leather": "dark violet shapes with neon highlights",
      "metal": "neon-yellow or cyan glowing shapes",
      "gear": "outlined and glowing in neon",
      "keep": "turned into fluorescent neon versions"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S TRIP",
    "detail": [
      "Flowing organic detail.",
      "Neon glow.",
      "Flowing organic forms.",
      "Dense poster composition."
    ],
    "realismTitle": "BLACKLIGHT POSTER FINISH",
    "realism": [
      "Fluorescent ink.",
      "Flat poster color.",
      "Glowing gradients.",
      "Screen-print texture."
    ],
    "avoid": "Avoid realistic or muted color, painterly rendering, photorealism, and plain backgrounds.",
    "compositionLabel": "Psychedelic poster composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Muted or natural color.",
      "Text or logos."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a psychedelic blacklight poster.",
      "Uses neon color against blue-black.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} poster of {name}. Match the neon color, glow, and flowing lines of the supplied sample image."
  },
  "058": {
    "priority": "Prioritize the authentic pop art look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "a pop art comic illustration",
    "intro": "The finished character must look like bold pop art: thick black outlines, flat primary color, big halftone dots, and a dramatic comic-book expression.",
    "constructionTitle": "MANDATORY POP ART CONSTRUCTION",
    "construction": [
      "Thick, bold black outlines.",
      "Flat, bright color: yellow, red, blue, pink.",
      "Large, visible halftone dots in skin and backgrounds.",
      "Glossy comic-book highlights on hair and lips.",
      "Dramatic, emotional comic expression.",
      "A background of bold, angled color blocks and halftone patterns."
    ],
    "translation": {
      "face": "a bold, outlined comic face with halftone skin and a dramatic expression",
      "hair": "flat color with bold black shapes and white shine",
      "cloth": "flat color with halftone dots",
      "leather": "flat color with black detail",
      "metal": "flat color with bold white shine",
      "gear": "outlined in thick black",
      "keep": "pushed to flat, bright pop colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S BOLDNESS",
    "detail": [
      "Thick outlines.",
      "Big halftone dots.",
      "Flat bright color.",
      "Graphic background blocks."
    ],
    "realismTitle": "PRINT FINISH",
    "realism": [
      "Flat, bright print color.",
      "Halftone dots.",
      "Crisp black lines.",
      "A screen-printed feel."
    ],
    "avoid": "Avoid gradients, painterly rendering, muted color, photorealism, and fine detail.",
    "compositionLabel": "Pop art composition",
    "background": "bold, angled blocks of flat color and halftone dots, with a hint of {s}",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Painterly or muted rendering.",
      "Speech bubbles or text."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as pop art.",
      "Has thick outlines, flat color, and halftone dots.",
      "Has a bold, recognizable face."
    ],
    "directive": "Create a bold {style} illustration of {name}. Match the outlines, halftone, and flat color of the supplied sample image."
  },
  "059": {
    "priority": "Prioritize the authentic Art Nouveau look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "an Art Nouveau fantasy illustration",
    "intro": "The finished character must look like an Art Nouveau print: flowing lines, soft muted color, and a decorative circular frame of vines.",
    "constructionTitle": "MANDATORY ART NOUVEAU CONSTRUCTION",
    "construction": [
      "Flowing, elegant outlines with graceful curves.",
      "Soft, muted, flat color: sage green, olive, peach, cream, and rust.",
      "A decorative circular frame of vines, leaves, and fruit.",
      "Long, flowing hair and cloth in decorative curves.",
      "Stylized natural ornament.",
      "Aged paper texture."
    ],
    "translation": {
      "face": "an elegant, delicately outlined face",
      "hair": "long, flowing, decorative curves",
      "cloth": "flowing fabric in graceful, decorative folds",
      "leather": "soft, flat shapes with elegant line",
      "metal": "soft gold shapes with fine ornament",
      "gear": "drawn with flowing, decorative line",
      "keep": "softened into the muted Art Nouveau palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ORNAMENT",
    "detail": [
      "Flowing line.",
      "Decorative frame.",
      "Stylized flowers.",
      "Muted flat color."
    ],
    "realismTitle": "PRINT FINISH",
    "realism": [
      "Flat, soft lithograph color.",
      "Elegant outlines.",
      "Aged paper.",
      "Decorative border."
    ],
    "avoid": "Avoid harsh contrast, saturated color, gritty texture, photorealism, and anime styling.",
    "compositionLabel": "Art Nouveau framed composition",
    "background": "{s}, stylized with decorative natural ornament, inside a circular decorative frame of vines and leaves",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Harsh, gritty, or saturated styling.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as an Art Nouveau print.",
      "Has flowing line, muted color, and a decorative frame.",
      "Has an elegant, recognizable face."
    ],
    "directive": "Create an {style} illustration of {name}. Match the flowing line, muted color, and decorative frame of the supplied sample image."
  },
  "060": {
    "priority": "Prioritize the authentic Art Deco look and recognizable character identity above all other considerations.",
    "resemble": "a newly made work by the same artist as the sample image",
    "medium": "an Art Deco relief artwork",
    "intro": "The finished character must look like an Art Deco gold relief: sculpted gold and black, symmetrical sweeping forms, and an ornate geometric frame.",
    "constructionTitle": "MANDATORY ART DECO CONSTRUCTION",
    "construction": [
      "Black and gold only, like gilded relief carving.",
      "Symmetrical, sweeping, stylized forms.",
      "Sculpted, three-dimensional relief with glossy gold highlights.",
      "An ornate, geometric black frame with corner ornaments.",
      "Bold, elegant, streamlined shapes.",
      "A star or sunburst motif at the top."
    ],
    "translation": {
      "face": "a sculpted gold relief face",
      "hair": "stylized, sweeping gold forms",
      "cloth": "sweeping, stylized gold drapery",
      "leather": "dark relief with gold edges",
      "metal": "polished gold relief",
      "gear": "sculpted as gold relief, clearly recognizable",
      "keep": "translated into gold and black (signature colors only as subtle tints)"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RELIEF",
    "detail": [
      "Sculpted relief depth.",
      "Symmetry.",
      "Ornate frame.",
      "Glossy gold highlights."
    ],
    "realismTitle": "GILDED RELIEF FINISH",
    "realism": [
      "Polished gold.",
      "Deep black.",
      "Sculpted depth.",
      "Crisp ornament."
    ],
    "avoid": "Avoid full color, painterly brushwork, gritty texture, cartoon styling, and asymmetrical chaos.",
    "compositionLabel": "Art Deco framed relief composition",
    "background": "a black field with an ornate geometric Art Deco frame, with {s} suggested in stylized gold relief behind",
    "negatives": [
      "A painted or photographed character.",
      "Full color.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as an Art Deco gold relief.",
      "Is black and gold, symmetrical, and sculpted.",
      "The character is recognizable."
    ],
    "directive": "Create an {style} gold relief of {name}. Match the black-and-gold palette, sculpted relief, and ornate frame of the supplied sample image."
  },
  "061": {
    "priority": "Prioritize authentic woodcut construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made print by the same hand as the sample image",
    "medium": "a medieval-style woodcut print",
    "intro": "The finished character must look like a hand-carved woodcut or wood engraving: bold black and white, gouged parallel lines, and a chunky, folk-medieval feel.",
    "constructionTitle": "MANDATORY WOODCUT CONSTRUCTION",
    "construction": [
      "Black and white only, printed from a carved block.",
      "Bold, chunky black shapes with white lines gouged out to show form.",
      "Rhythmic parallel cut lines describe shading, texture, and fabric.",
      "Simplified, sturdy, slightly stiff medieval figures.",
      "A square border around the image.",
      "Slightly uneven ink and paper texture."
    ],
    "translation": {
      "face": "a face built from carved parallel cut lines",
      "hair": "flowing strands of carved parallel cut lines",
      "cloth": "folds described with carved parallel cut lines",
      "leather": "textured shapes cut with carved parallel cut lines",
      "metal": "planes of carved parallel cut lines with bare-paper highlights",
      "gear": "rendered in the same carved parallel cut lines",
      "keep": "translated into black, white, and line density"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CARVING",
    "detail": [
      "Bold carved shapes.",
      "Rhythmic cut lines everywhere.",
      "Simplified figures.",
      "A square border."
    ],
    "realismTitle": "BLOCK PRINT REALISM",
    "realism": [
      "Real carved-block printing.",
      "Uneven ink coverage.",
      "Paper texture.",
      "Pure black and white."
    ],
    "avoid": "Avoid color, gray tones, smooth gradients, fine pen detail, photorealism, and modern styling.",
    "compositionLabel": "Woodcut print composition",
    "negatives": [
      "Any color or gray tones.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a carved woodcut print.",
      "Is pure black and white with rhythmic cut lines.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} print of {name}. Match the carved lines, bold black and white, and medieval feel of the supplied sample image."
  },
  "062": {
    "priority": "Prioritize authentic copperplate engraving construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made print by the same hand as the sample image",
    "medium": "a Renaissance copperplate engraving",
    "intro": "The finished character must look like an ornate copperplate engraving: extremely fine, crisp black lines, cross-hatching, and a decorative Gothic arch frame with roses and scrollwork.",
    "constructionTitle": "MANDATORY ENGRAVING CONSTRUCTION",
    "construction": [
      "Black ink on white only.",
      "Extremely fine, crisp, swelling engraved lines.",
      "Tone built from dense cross-hatching and stippling.",
      "Ornate, flowing scrollwork in hair, cloth, and decoration.",
      "A decorative Gothic arch frame with columns, roses, and tracery.",
      "A heraldic, ornamental feel."
    ],
    "translation": {
      "face": "a face built from fine engraved lines and cross-hatching",
      "hair": "flowing strands of fine engraved lines and cross-hatching",
      "cloth": "folds described with fine engraved lines and cross-hatching",
      "leather": "textured shapes cut with fine engraved lines and cross-hatching",
      "metal": "planes of fine engraved lines and cross-hatching with bare-paper highlights",
      "gear": "rendered in the same fine engraved lines and cross-hatching",
      "keep": "translated into black, white, and line density"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S FINE ENGRAVING",
    "detail": [
      "Extremely fine line detail.",
      "Dense cross-hatching.",
      "Ornate frame.",
      "Scrollwork flourishes."
    ],
    "realismTitle": "ENGRAVING REALISM",
    "realism": [
      "Crisp engraved lines.",
      "Pure black and white.",
      "Fine paper.",
      "Ornamental precision."
    ],
    "avoid": "Avoid color, gray washes, loose sketchy lines, photorealism, and modern styling.",
    "compositionLabel": "Ornamental engraving composition",
    "background": "an ornate Gothic arch frame with columns, roses, and tracery, with {s} engraved finely behind the figure",
    "negatives": [
      "Any color or gray wash.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as an ornate copperplate engraving.",
      "Uses extremely fine line and cross-hatching in black and white.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} engraving of {name}. Match the fine lines, cross-hatching, and ornate frame of the supplied sample image."
  },
  "063": {
    "priority": "Prioritize authentic etching and aquatint construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made print by the same hand as the sample image",
    "medium": "a sepia etching and aquatint print",
    "intro": "The finished character must look like a sepia etching with aquatint: fine etched lines over soft tonal washes, in warm brown ink, with dramatic light.",
    "constructionTitle": "MANDATORY ETCHING CONSTRUCTION",
    "construction": [
      "Warm sepia-brown ink only.",
      "Fine, slightly wandering etched lines for contours and detail.",
      "Soft, grainy aquatint tone for shadows and sky.",
      "Dramatic light breaking through clouds and mist.",
      "Rugged, atmospheric depth in the setting.",
      "Plate tone and soft, grainy texture overall."
    ],
    "translation": {
      "face": "a face built from fine etched lines over soft sepia tone",
      "hair": "flowing strands of fine etched lines over soft sepia tone",
      "cloth": "folds described with fine etched lines over soft sepia tone",
      "leather": "textured shapes cut with fine etched lines over soft sepia tone",
      "metal": "planes of fine etched lines over soft sepia tone with bare-paper highlights",
      "gear": "rendered in the same fine etched lines over soft sepia tone",
      "keep": "translated into black, white, and line density"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ATMOSPHERE",
    "detail": [
      "Fine etched line.",
      "Soft aquatint tone.",
      "Dramatic light.",
      "Rugged landscape."
    ],
    "realismTitle": "PRINT REALISM",
    "realism": [
      "Sepia ink.",
      "Grainy aquatint.",
      "Plate tone.",
      "Paper texture."
    ],
    "avoid": "Avoid full color, bold black outlines, digital gradients, photorealism, and cartoon styling.",
    "compositionLabel": "Etching and aquatint print composition",
    "negatives": [
      "Full color.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a sepia etching and aquatint.",
      "Has fine etched line, soft tone, and dramatic light.",
      "The character is recognizable."
    ],
    "directive": "Create an {style} print of {name}. Match the sepia ink, etched line, and dramatic light of the supplied sample image."
  },
  "064": {
    "priority": "Prioritize authentic illuminated manuscript construction and recognizable character identity above all other considerations.",
    "resemble": "a newly illuminated page from the same book as the sample image",
    "medium": "a page from a medieval illuminated manuscript",
    "intro": "The finished character must look like a miniature painted in a medieval book of hours: flat, jewel-bright color, gold leaf, patterned backgrounds, and a flowered border.",
    "constructionTitle": "MANDATORY ILLUMINATION CONSTRUCTION",
    "construction": [
      "Flat, opaque, jewel-bright color: lapis blue, vermilion, green, and gold leaf.",
      "Thin, fine outlines with minimal shading.",
      "Stylized, gentle medieval figures and faces.",
      "A patterned or diamond-checked background behind the figure.",
      "An ornate border of flowers, leaves, berries, and vines with gold.",
      "Photographed as an open book on vellum."
    ],
    "translation": {
      "face": "a gentle, stylized medieval face in fine line",
      "hair": "fine, flowing painted lines",
      "cloth": "flat, jewel-colored robes with simple folds",
      "leather": "flat painted shapes",
      "metal": "gold leaf",
      "gear": "painted flat and clear, edged in gold",
      "keep": "translated into flat jewel colors and gold"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S ILLUMINATION",
    "detail": [
      "Fine line and flat color.",
      "Gold leaf accents.",
      "Patterned background.",
      "Flowered border."
    ],
    "realismTitle": "MANUSCRIPT REALISM",
    "realism": [
      "Opaque pigment on vellum.",
      "Shining gold leaf.",
      "An open book with page curvature.",
      "Aged parchment."
    ],
    "avoid": "Avoid realistic shading, perspective depth, modern styling, photorealistic figures, and readable modern text.",
    "compositionLabel": "Illuminated manuscript page composition",
    "fullBody": "The full figure is shown in a framed miniature on the open page.",
    "background": "a diamond-patterned background inside the miniature, with a simple stylized hint of {s}; around it, an ornate flowered border with gold",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Realistic shading or depth.",
      "Anime, manga, or cartoon faces and proportions.",
      "Readable modern text."
    ],
    "checks": [
      "Immediately reads as an illuminated manuscript page.",
      "Has flat jewel color, gold leaf, and a flowered border.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} miniature of {name}. Match the flat color, gold leaf, and ornate border of the supplied sample image."
  },
  "065": {
    "priority": "Prioritize authentic Gothic manuscript construction and recognizable character identity above all other considerations.",
    "resemble": "a newly painted page from the same book as the sample image",
    "medium": "a late-Gothic illuminated manuscript spread",
    "intro": "The finished character must look like a late-Gothic book of hours: a realistic painted miniature in a red, blue, and gold patterned border, with the macabre edge of a dance of death.",
    "constructionTitle": "MANDATORY GOTHIC MANUSCRIPT CONSTRUCTION",
    "construction": [
      "A finely painted miniature with more realism than early manuscripts: modeled faces and natural landscape.",
      "Rich color: vermilion, blue, gold, and green.",
      "A checkered border of red and gold panels with flowers, acanthus, and small creatures.",
      "A memento mori touch: small skulls or skeletons in the border decoration.",
      "Shown as an open book with visible page edges.",
      "Fine, detailed brushwork."
    ],
    "translation": {
      "face": "a finely painted, modeled late-medieval face",
      "hair": "finely painted strands",
      "cloth": "richly colored fabric with painted folds",
      "leather": "finely painted leather",
      "metal": "painted metal with gold highlights",
      "gear": "painted in fine, careful detail",
      "keep": "enriched into vermilion, blue, and gold tones"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DETAIL",
    "detail": [
      "Fine painted miniature.",
      "Checkered border.",
      "Memento mori border motifs.",
      "Open book."
    ],
    "realismTitle": "MANUSCRIPT REALISM",
    "realism": [
      "Pigment on vellum.",
      "Gold accents.",
      "Open book with page edges.",
      "Aged parchment."
    ],
    "avoid": "Avoid modern styling, cartoon proportions, photorealism, and readable modern text.",
    "compositionLabel": "Gothic manuscript spread composition",
    "fullBody": "The full figure is shown in a framed miniature on the open page.",
    "background": "{s}, painted as a small scene inside the miniature; around it, a checkered red and gold flowered border with small memento mori motifs",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Modern or cartoon styling.",
      "Anime, manga, or cartoon faces and proportions.",
      "Readable modern text."
    ],
    "checks": [
      "Immediately reads as a late-Gothic manuscript spread.",
      "Has a painted miniature, checkered border, and macabre touches.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} spread featuring {name}. Match the miniature painting, checkered border, and macabre touch of the supplied sample image."
  },
  "066": {
    "priority": "Prioritize authentic Victorian illustration construction and recognizable character identity above all other considerations.",
    "resemble": "a newly engraved plate from the same Victorian book as the sample image",
    "medium": "a Victorian wood-engraved book illustration",
    "intro": "The finished character must look like a Victorian book illustration: dense, black wood-engraved line, crowded, whimsical composition, and a fairy-tale strangeness.",
    "constructionTitle": "MANDATORY VICTORIAN ENGRAVING CONSTRUCTION",
    "construction": [
      "Black ink only, with dense, fine engraved lines.",
      "Tone built from close parallel lines and cross-hatching.",
      "Dense, intimate detail full of objects and texture.",
      "Expressive, detailed faces.",
      "Patterned fabrics with dots and stripes.",
      "Aged, slightly yellowed book paper."
    ],
    "translation": {
      "face": "a face built from dense engraved lines",
      "hair": "flowing strands of dense engraved lines",
      "cloth": "folds described with dense engraved lines",
      "leather": "textured shapes cut with dense engraved lines",
      "metal": "planes of dense engraved lines with bare-paper highlights",
      "gear": "rendered in the same dense engraved lines",
      "keep": "translated into black, white, and line density"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DENSITY",
    "detail": [
      "Dense engraved line.",
      "Dense detail.",
      "Patterned fabrics.",
      "Expressive faces."
    ],
    "realismTitle": "PRINT REALISM",
    "realism": [
      "Wood-engraved printing.",
      "Black ink.",
      "Aged paper.",
      "Slight ink spread."
    ],
    "avoid": "Avoid color, gray washes, smooth gradients, photorealism, and modern styling.",
    "compositionLabel": "Victorian book plate composition",
    "negatives": [
      "Any color.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a Victorian engraved book illustration.",
      "Uses dense black engraved line.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} plate of {name}. Match the dense engraved line and whimsical detail of the supplied sample image."
  },
  "067": {
    "priority": "Prioritize authentic pulp painting construction and recognizable character identity above all other considerations.",
    "resemble": "a newly painted cover by the same artist as the sample image",
    "medium": "a vintage pulp fantasy cover painting",
    "intro": "The finished character must look like a 1970s pulp fantasy cover painting: loose, powerful oil brushwork, heroic anatomy, and dramatic tension.",
    "constructionTitle": "MANDATORY PULP PAINTING CONSTRUCTION",
    "construction": [
      "Loose, energetic, visible oil brushwork, tighter on the figure and loose at the edges.",
      "Powerful, muscular, heroic anatomy with dramatic tension.",
      "Rich, moody color: violet and blue shadows with warm, glowing highlights.",
      "A glowing backlight framing the figure.",
      "Loose, lush, painterly surroundings.",
      "Dramatic tension in light and mood."
    ],
    "translation": {
      "face": "a powerfully painted face with a fierce expression",
      "hair": "loose, wild brushstrokes",
      "cloth": "loosely painted fabric",
      "leather": "warm, loosely painted leather",
      "metal": "painted metal with bold, glinting highlights",
      "gear": "painted boldly and clearly",
      "keep": "enriched by the moody violet-and-gold palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S POWER",
    "detail": [
      "Tight figure, loose edges.",
      "Glowing backlight.",
      "Loose surroundings.",
      "Dramatic tension."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Loose oil brushwork.",
      "Rich, moody color.",
      "Glowing light.",
      "Canvas texture."
    ],
    "avoid": "Avoid tight digital rendering, outlines, flat color, photorealism, and cartoon proportions.",
    "compositionLabel": "Pulp fantasy cover composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Tight digital rendering or flat color.",
      "Anime, manga, or cartoon faces and proportions.",
      "Nudity.",
      "Signatures, titles, or text."
    ],
    "checks": [
      "Immediately reads as a 1970s pulp fantasy cover painting.",
      "Has loose, powerful brushwork and glowing backlight.",
      "The character is recognizable and fully clothed in their gear."
    ],
    "directive": "Create a {style} cover painting of {name}. Match the loose brushwork, moody color, and dramatic tension of the supplied sample image."
  },
  "068": {
    "priority": "Prioritize authentic pen-and-ink construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made print by the same hand as the sample image",
    "medium": "a classic pen-and-ink fantasy illustration",
    "intro": "The finished character must look like a classic black-and-white pen-and-ink fantasy illustration: fine, detailed line, rich hatching, and sweeping, detailed backgrounds.",
    "constructionTitle": "MANDATORY PEN-AND-INK CONSTRUCTION",
    "construction": [
      "Black ink on white only.",
      "Fine, controlled pen lines with rich hatching and cross-hatching.",
      "Stippling for soft textures and clouds.",
      "Sweeping, detailed backgrounds in the same fine line.",
      "Decorative detail in clothing borders."
    ],
    "translation": {
      "face": "a face built from fine pen hatching",
      "hair": "flowing strands of fine pen hatching",
      "cloth": "folds described with fine pen hatching",
      "leather": "textured shapes cut with fine pen hatching",
      "metal": "planes of fine pen hatching with bare-paper highlights",
      "gear": "rendered in the same fine pen hatching",
      "keep": "translated into black, white, and line density"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S FINE PEN",
    "detail": [
      "Fine hatching.",
      "Stippled clouds.",
      "Detailed figure.",
      "Detailed background."
    ],
    "realismTitle": "PEN-AND-INK REALISM",
    "realism": [
      "Real pen ink.",
      "Pure black and white.",
      "Fine line control.",
      "Paper texture."
    ],
    "avoid": "Avoid color, gray washes, digital gradients, photorealism, and cartoon styling.",
    "compositionLabel": "Pen-and-ink fantasy illustration composition",
    "negatives": [
      "Any color or gray wash.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a classic pen-and-ink fantasy illustration.",
      "Uses fine pen hatching in black and white.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} illustration of {name}. Match the fine pen line, hatching, and detailed backgrounds of the supplied sample image."
  },
  "069": {
    "priority": "Prioritize authentic linocut construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made print by the same hand as the sample image",
    "medium": "a two-color linocut print",
    "intro": "The finished character must look like a bold linocut: black and red ink on cream, chunky carved shapes, and rhythmic gouged textures.",
    "constructionTitle": "MANDATORY LINOCUT CONSTRUCTION",
    "construction": [
      "Only black, red, and cream (the paper).",
      "Bold, chunky carved shapes with gouged white lines for texture.",
      "Rhythmic curving cut marks describing feathers, bark, and folds.",
      "A flat red ground behind the black shapes.",
      "A carved border with organic shapes.",
      "Slightly uneven, hand-pressed ink."
    ],
    "translation": {
      "face": "a bold, simplified carved face",
      "hair": "chunky carved strands",
      "cloth": "bold carved shapes with gouged fold lines",
      "leather": "black carved shapes with cream cut marks",
      "metal": "cream cut-out highlights",
      "gear": "carved boldly and clearly",
      "keep": "translated into black, red, and cream"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CARVING",
    "detail": [
      "Bold carved shapes.",
      "Rhythmic cut marks.",
      "Two-color palette.",
      "Carved border."
    ],
    "realismTitle": "BLOCK PRINT REALISM",
    "realism": [
      "Hand-pressed ink.",
      "Uneven coverage.",
      "Cream paper.",
      "Carved edges."
    ],
    "avoid": "Avoid more than two ink colors, gradients, fine detail, photorealism, and cartoon styling.",
    "compositionLabel": "Linocut print composition",
    "negatives": [
      "More than black, red, and cream.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a two-color linocut.",
      "Uses black, red, and cream with carved texture.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} of {name}. Match the carved shapes, black-and-red palette, and texture of the supplied sample image."
  },
  "070": {
    "priority": "Prioritize authentic scratchboard construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made print by the same hand as the sample image",
    "medium": "a scratchboard illustration",
    "intro": "The finished character must look like a scratchboard drawing: thousands of fine white lines scratched out of solid black, creating realistic texture and form.",
    "constructionTitle": "MANDATORY SCRATCHBOARD CONSTRUCTION",
    "construction": [
      "Solid black background; all light is scratched out as fine white lines.",
      "Extremely fine, directional white strokes following hair, fur, and form.",
      "Realistic, detailed rendering built entirely from line density.",
      "Brightest areas are densely scratched; shadows stay black.",
      "Intense, detailed eyes.",
      "No color."
    ],
    "translation": {
      "face": "a face built from fine white scratched lines",
      "hair": "flowing strands of fine white scratched lines",
      "cloth": "folds described with fine white scratched lines",
      "leather": "textured shapes cut with fine white scratched lines",
      "metal": "planes of fine white scratched lines with bare-paper highlights",
      "gear": "rendered in the same fine white scratched lines",
      "keep": "translated into black, white, and line density"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S FINE SCRATCHING",
    "detail": [
      "Fine directional lines.",
      "Realistic texture.",
      "Solid black shadows.",
      "Detailed eyes."
    ],
    "realismTitle": "SCRATCHBOARD REALISM",
    "realism": [
      "White lines on black.",
      "Crisp, fine strokes.",
      "Pure monochrome.",
      "Physical board texture."
    ],
    "avoid": "Avoid color, gray washes, smooth gradients, outlines, photorealism, and cartoon styling.",
    "compositionLabel": "Scratchboard composition",
    "background": "{s}, mostly left as solid black, with only faint scratched detail",
    "negatives": [
      "Any color.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a scratchboard illustration.",
      "Is built from fine white lines on black.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} illustration of {name}. Match the fine white lines on black and realistic texture of the supplied sample image."
  },
  "071": {
    "priority": "Prioritize the authentic cel-shaded look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a cel-shaded fantasy game character illustration",
    "intro": "The finished character must look like official character art from a classic Japanese fantasy RPG: clean outlines, bright cel shading, chunky expressive proportions, and a plain white background.",
    "constructionTitle": "MANDATORY CEL-SHADED CONSTRUCTION",
    "construction": [
      "Clean, confident dark outlines of even weight.",
      "Bright, flat color with one crisp shadow tone and small highlights.",
      "Slightly stylized, chunky proportions: big hands and feet, an expressive face.",
      "Exaggerated, readable expressions.",
      "Gear drawn bold and simple, with clear shapes.",
      "A plain white background with no scenery."
    ],
    "translation": {
      "face": "an expressive, cleanly outlined cartoon face",
      "hair": "bold shapes with one crisp shadow tone",
      "cloth": "flat-colored fabric with crisp cel shadows",
      "leather": "flat brown shapes with one shadow tone",
      "metal": "gray or gold with a crisp shine highlight",
      "gear": "drawn bold and simple, each item clearly readable",
      "keep": "as bright, clean cel colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CLEAN SIMPLICITY",
    "detail": [
      "Clean outlines.",
      "Two-tone cel shading.",
      "Bold gear shapes.",
      "Plain white background."
    ],
    "realismTitle": "CEL ART FINISH",
    "realism": [
      "Flat, clean color.",
      "Crisp shadow shapes.",
      "Small white highlights.",
      "Even outlines."
    ],
    "avoid": "Avoid painterly rendering, gradients, gritty texture, detailed backgrounds, and photorealism.",
    "compositionLabel": "Character art composition",
    "background": "plain white, with no scenery",
    "negatives": [
      "A photorealistic version of the character.",
      "Painterly or gritty rendering.",
      "A detailed background."
    ],
    "checks": [
      "Immediately reads as cel-shaded fantasy game character art.",
      "Has clean outlines, flat color, and crisp shadows on white.",
      "Has an expressive, recognizable face."
    ],
    "directive": "Create {style} character art of {name}. Match the clean outlines, cel shading, and white background of the supplied sample image."
  },
  "072": {
    "priority": "Prioritize the authentic 1980s cartoon look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a 1980s Saturday-morning fantasy cartoon cel",
    "intro": "The finished character must look like a hand-painted animation cel from a 1980s Saturday-morning fantasy cartoon: bold outlines, flat painted color, and a painted night-time background.",
    "constructionTitle": "MANDATORY 1980s CEL CONSTRUCTION",
    "construction": [
      "Bold, slightly uneven black outlines.",
      "Flat, opaque cel paint with simple shadow shapes.",
      "Saturated, slightly retro color: greens, reds, purples, and deep blues.",
      "A separately painted background with soft gradients and texture.",
      "Simple, readable faces with clear expressions.",
      "Glowing magic effects painted as bright flat shapes."
    ],
    "translation": {
      "face": "a simple, boldly outlined cartoon face",
      "hair": "a flat cel-painted shape with simple shadow",
      "cloth": "flat cel paint with bold fold lines",
      "leather": "flat brown cel paint",
      "metal": "flat gray or gold with simple highlight shapes",
      "gear": "drawn as clear, simple shapes, with glowing magic effects where fitting",
      "keep": "as saturated 1980s cel colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S RETRO CEL",
    "detail": [
      "Bold outlines.",
      "Flat cel paint.",
      "Painted background.",
      "Glowing magic."
    ],
    "realismTitle": "ANIMATION CEL FINISH",
    "realism": [
      "Opaque cel paint.",
      "Painted background art.",
      "Slight film grain.",
      "Retro color."
    ],
    "avoid": "Avoid modern digital shading, gradients on characters, photorealism, and anime styling.",
    "compositionLabel": "1980s cartoon cel composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Modern digital or anime styling.",
      "Text or logos."
    ],
    "checks": [
      "Immediately reads as a 1980s Saturday-morning cartoon cel.",
      "Has bold outlines, flat cel paint, and a painted background.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} cel of {name}. Match the bold outlines, flat cel paint, and painted background of the supplied sample image."
  },
  "073": {
    "priority": "Prioritize the authentic stylized animation look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a stylized animation-style illustration",
    "intro": "The finished character must look like a frame from a stylized hand-painted animated film: soft, rounded proportions, richly detailed gear, and bright, airy color.",
    "constructionTitle": "MANDATORY STYLIZED ANIMATION CONSTRUCTION",
    "construction": [
      "Soft, rounded, stylized proportions with a large head and expressive pose.",
      "Clean line art with soft, painterly color.",
      "Richly detailed gear and props.",
      "A bright, airy palette with warm browns.",
      "Charming, detailed backgrounds."
    ],
    "translation": {
      "face": "a soft, rounded, expressive animated face",
      "hair": "soft, windswept painted shapes",
      "cloth": "softly painted fabric with gentle folds",
      "leather": "warm, softly painted leather with straps",
      "metal": "detailed brass and copper with soft highlights",
      "gear": "drawn in loving, detailed animation style",
      "keep": "softened into the bright, airy palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CHARM",
    "detail": [
      "Stylized, rounded figure.",
      "Detailed gear.",
      "Airy light.",
      "Detailed backgrounds."
    ],
    "realismTitle": "ANIMATION FINISH",
    "realism": [
      "Soft painterly color.",
      "Clean line.",
      "Airy light.",
      "Atmospheric depth."
    ],
    "avoid": "Avoid realistic proportions, gritty texture, dark mood, photorealism, and harsh contrast.",
    "compositionLabel": "Stylized animated film composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Gritty or dark styling.",
      "Realistic proportions."
    ],
    "checks": [
      "Immediately reads as a stylized animated film frame.",
      "Has rounded, charming proportions and detailed gear.",
      "The character is recognizable."
    ],
    "directive": "Create a charming {style} frame of {name}. Match the rounded proportions, detailed gear, and airy color of the supplied sample image."
  },
  "074": {
    "priority": "Prioritize the authentic stylized 3D animation look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a stylized 3D animated film render",
    "intro": "The finished character must look like a character from a modern stylized 3D animated film: soft, rounded forms, big expressive eyes, and warm light.",
    "constructionTitle": "MANDATORY STYLIZED 3D CONSTRUCTION",
    "construction": [
      "Stylized 3D forms: rounded, chunky shapes with appealing proportions.",
      "Big, glossy, expressive eyes.",
      "Soft, warm, cinematic lighting with gentle rim light.",
      "Tactile materials: soft fabric, moss, stone, and wood, with subtle texture.",
      "A gentle palette of greens, pinks, and warm light.",
      "Shallow depth of field with soft bokeh."
    ],
    "translation": {
      "face": "an appealing stylized 3D face with big, glossy eyes",
      "hair": "soft, sculpted 3D hair shapes",
      "cloth": "soft, slightly textured 3D fabric",
      "leather": "soft, rounded 3D leather",
      "metal": "rounded 3D metal with soft reflections",
      "gear": "sculpted as chunky, appealing 3D props",
      "keep": "softened into the warm, gentle palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S APPEAL",
    "detail": [
      "Appealing rounded forms.",
      "Glossy expressive eyes.",
      "Soft textures.",
      "Soft bokeh."
    ],
    "realismTitle": "3D ANIMATION FINISH",
    "realism": [
      "Soft global illumination.",
      "Subsurface skin glow.",
      "Gentle depth of field.",
      "Cinematic warmth."
    ],
    "avoid": "Avoid realistic proportions, harsh lighting, gritty texture, 2D linework, and photorealism.",
    "compositionLabel": "Stylized 3D animated film composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Realistic proportions or harsh lighting.",
      "2D drawn or painted styling."
    ],
    "checks": [
      "Immediately reads as a stylized 3D animated film character.",
      "Has rounded forms, big glossy eyes, and warm light.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} render of {name}. Match the rounded forms, big eyes, and warm light of the supplied sample image."
  },
  "075": {
    "priority": "Prioritize the authentic classic 2D animation look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a classic 2D animation-style illustration",
    "intro": "The finished character must look like classic 2D animated storybook art: clean ink line, soft color, and expressive, appealing characters.",
    "constructionTitle": "MANDATORY CLASSIC 2D CONSTRUCTION",
    "construction": [
      "Clean, confident ink line art.",
      "Soft, warm color with gentle shading.",
      "Expressive, appealing faces and poses.",
      "Sun-dappled light and detailed painted backgrounds.",
      "Warm palette of oranges, greens, and reds.",
      "A storybook charm."
    ],
    "translation": {
      "face": "an expressive, appealing animated face",
      "hair": "clean lined shapes with soft shading",
      "cloth": "softly colored fabric with clean fold lines",
      "leather": "warm, softly shaded leather",
      "metal": "softly shaded metal with clean highlights",
      "gear": "drawn cleanly and clearly",
      "keep": "warmed into the storybook palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S STORYBOOK CHARM",
    "detail": [
      "Clean ink line.",
      "Soft shading.",
      "Detailed painted background.",
      "Warm light shafts."
    ],
    "realismTitle": "2D ANIMATION FINISH",
    "realism": [
      "Clean ink.",
      "Soft color.",
      "Warm light.",
      "Painted background."
    ],
    "avoid": "Avoid gritty texture, harsh contrast, 3D rendering, photorealism, and dark mood.",
    "compositionLabel": "Classic 2D animated storybook composition",
    "negatives": [
      "A photorealistic version of the character.",
      "3D rendering.",
      "Gritty or dark styling."
    ],
    "checks": [
      "Immediately reads as classic 2D animated storybook art.",
      "Has clean ink line and soft, warm color.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} illustration of {name}. Match the clean line, soft color, and warm light of the supplied sample image."
  },
  "076": {
    "priority": "Prioritize the authentic anime film look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a hand-painted anime film background frame",
    "intro": "The finished character must look like a frame from a hand-painted anime film: simple, clean character art, lush watercolor-like backgrounds, and a quiet, nostalgic mood.",
    "constructionTitle": "MANDATORY ANIME FILM CONSTRUCTION",
    "construction": [
      "Simple, clean character line art with soft, flat color.",
      "Lush, hand-painted, watercolor-like backgrounds.",
      "Warm daylight and a nostalgic, gentle mood.",
      "Detailed, lived-in background painting."
    ],
    "translation": {
      "face": "a simple, gentle anime film face",
      "hair": "simple painted shapes",
      "cloth": "soft, flat-colored fabric",
      "leather": "simple, softly colored shapes",
      "metal": "simple shapes with soft highlights",
      "gear": "drawn simply and clearly",
      "keep": "softened into gentle anime film colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PAINTED WORLD",
    "detail": [
      "Simple character, lush background.",
      "Soft daylight.",
      "Detailed architecture."
    ],
    "realismTitle": "HAND-PAINTED FINISH",
    "realism": [
      "Watercolor-like background paint.",
      "Soft daylight.",
      "Gentle color.",
      "Clean character line."
    ],
    "avoid": "Avoid harsh contrast, heavy shadows, gritty texture, 3D rendering, and photorealism.",
    "compositionLabel": "Anime film frame composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Harsh or gritty styling.",
      "Text or signs."
    ],
    "checks": [
      "Immediately reads as a hand-painted anime film frame.",
      "Has lush, hand-painted backgrounds and soft daylight.",
      "The character is recognizable."
    ],
    "directive": "Create an {style} frame of {name}. Match the painted backgrounds, soft daylight, and gentle mood of the supplied sample image."
  },
  "077": {
    "priority": "Prioritize the authentic stop-motion look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a stop-motion puppet film still",
    "intro": "The finished character must look like a real stop-motion puppet in a film still: handmade fabric and sculpted parts, moody light, and a miniature set.",
    "constructionTitle": "MANDATORY STOP-MOTION CONSTRUCTION",
    "construction": [
      "A real, handmade puppet with sculpted head and hands, and real tailored fabric costume.",
      "Slightly exaggerated, spindly or chunky puppet proportions.",
      "Big, glossy eyes and a sculpted, characterful face.",
      "Moody, theatrical lighting.",
      "A miniature set with small props and haze.",
      "Shallow depth of field like a real macro camera."
    ],
    "translation": {
      "face": "a sculpted puppet face with glossy eyes",
      "hair": "sculpted or fiber puppet hair",
      "cloth": "real, miniature tailored fabric with visible weave",
      "leather": "miniature leather pieces with stitching",
      "metal": "miniature metal props",
      "gear": "handmade miniature props",
      "keep": "as real fabric and paint colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S HANDMADE DETAIL",
    "detail": [
      "Visible fabric weave.",
      "Sculpted face.",
      "Miniature props.",
      "Haze and depth."
    ],
    "realismTitle": "PHYSICAL PUPPET REALISM",
    "realism": [
      "Real handmade materials.",
      "Miniature set lighting.",
      "Shallow depth of field.",
      "Slight imperfections."
    ],
    "avoid": "Avoid 2D drawing, smooth CGI, realistic human proportions, and bright cheerful lighting.",
    "compositionLabel": "Stop-motion film still composition",
    "background": "{s}, built as a miniature set with haze and moody light",
    "negatives": [
      "A real human actor.",
      "2D drawing or smooth CGI.",
      "Bright, cheerful lighting."
    ],
    "checks": [
      "Immediately reads as a stop-motion puppet film still.",
      "Has handmade materials and eerie miniature-set lighting.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} still of {name} as a handmade puppet. Match the materials, eerie light, and miniature set of the supplied sample image."
  },
  "078": {
    "priority": "Prioritize the authentic claymation look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a claymation diorama photograph",
    "intro": "The finished character must look like a real claymation figure in a handmade diorama: sculpted clay, knitted textures, felt plants, and a cozy, colorful village.",
    "constructionTitle": "MANDATORY CLAYMATION CONSTRUCTION",
    "construction": [
      "The character is sculpted from polymer clay with visible fingerprints and tool marks.",
      "Expressive, slightly exaggerated clay features.",
      "Costume details made from clay, knitted yarn, or felt.",
      "A handmade diorama of the setting made of clay, felt, and fabric, with tiny practical lights.",
      "Bright, saturated, cheerful color.",
      "Real macro photography with soft depth of field."
    ],
    "translation": {
      "face": "a sculpted clay face with big, goofy, expressive features",
      "hair": "sculpted clay strands or yarn",
      "cloth": "knitted yarn or sculpted clay fabric",
      "leather": "sculpted brown clay with stitch marks",
      "metal": "painted clay or foil",
      "gear": "sculpted from clay, chunky and charming",
      "keep": "as bright, saturated clay colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S HANDMADE CHARM",
    "detail": [
      "Fingerprints and tool marks.",
      "Knitted textures.",
      "Detailed diorama.",
      "Tiny practical lights."
    ],
    "realismTitle": "PHYSICAL CLAY REALISM",
    "realism": [
      "Real clay and fabric.",
      "Macro lens.",
      "Soft depth of field.",
      "Warm practical lights."
    ],
    "avoid": "Avoid 2D drawing, smooth CGI, realistic proportions, and dark or gritty mood.",
    "compositionLabel": "Claymation diorama composition",
    "background": "{s}, rebuilt as a handmade clay-and-felt diorama with tiny practical lights",
    "negatives": [
      "A real human or drawn character.",
      "Smooth CGI.",
      "Signs or readable text."
    ],
    "checks": [
      "Immediately reads as a claymation figure in a handmade diorama.",
      "Has clay texture, fingerprints, and knitted details.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} figure of {name} in a handmade diorama. Match the clay, knitted textures, and cozy set of the supplied sample image."
  },
  "079": {
    "priority": "Prioritize the authentic flat vector look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "a flat vector cartoon illustration",
    "intro": "The finished character must look like a flat vector cartoon illustration: thick dark outlines, flat bold color, simple geometric shapes, and a simple blob background.",
    "constructionTitle": "MANDATORY FLAT VECTOR CONSTRUCTION",
    "construction": [
      "Thick, uniform dark outlines.",
      "Flat, bold color with one simple shadow tone and a few white shine marks.",
      "Simplified, geometric, rounded shapes.",
      "Simple, friendly face.",
      "Limited palette: orange, white, light blue, and dark navy, plus the character's colors.",
      "A simple soft-blue blob shape behind the figure, with a few dots."
    ],
    "translation": {
      "face": "a simple, friendly vector face",
      "hair": "a simple flat shape",
      "cloth": "flat geometric shapes",
      "leather": "flat shapes with a single shadow tone",
      "metal": "flat gray shapes with a white shine mark",
      "gear": "simplified into clean geometric shapes",
      "keep": "as flat, bold vector colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SIMPLICITY",
    "detail": [
      "Thick outlines.",
      "Flat color.",
      "Geometric shapes.",
      "Simple background blob."
    ],
    "realismTitle": "VECTOR FINISH",
    "realism": [
      "Crisp vector edges.",
      "Flat color.",
      "Uniform outlines.",
      "Clean shapes."
    ],
    "avoid": "Avoid gradients, textures, painterly rendering, realistic proportions, and detailed backgrounds.",
    "compositionLabel": "Flat vector character composition",
    "background": "a simple soft-blue blob shape with a few white dots, on white",
    "negatives": [
      "A photorealistic version of the character.",
      "Gradients, textures, or painterly rendering.",
      "A detailed background."
    ],
    "checks": [
      "Immediately reads as a flat vector cartoon.",
      "Has thick outlines, flat color, and geometric shapes.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} illustration of {name}. Match the thick outlines, flat color, and simple shapes of the supplied sample image."
  },
  "080": {
    "priority": "Prioritize the authentic adult animated fantasy look and recognizable character identity above all other considerations.",
    "resemble": "a newly made character from the same production as the sample image",
    "excludeTags": [
      "cartoon"
    ],
    "medium": "an adult animated dark fantasy key art poster",
    "intro": "The finished character must look like key art for an adult animated dark fantasy series: sharp anime-influenced line, a blood-red and black palette, and dramatic gothic atmosphere.",
    "constructionTitle": "MANDATORY ADULT ANIMATION CONSTRUCTION",
    "construction": [
      "Sharp, angular, anime-influenced line art.",
      "A limited palette of blood red, black, gray, and white.",
      "Cel-shaded figure with hard shadows.",
      "Dramatic, painterly skies in the limited palette."
    ],
    "translation": {
      "face": "an angular, sharply drawn face",
      "hair": "sharp, angular strands",
      "cloth": "cel-shaded fabric, with any red pushed to blood red",
      "leather": "dark, sharply shaded leather",
      "metal": "cold gray metal with sharp highlights",
      "gear": "drawn with sharp, angular line",
      "keep": "pushed into the red, black, and gray palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DRAMA",
    "detail": [
      "Sharp line.",
      "Hard cel shadows.",
      "Painterly sky.",
      "Gothic drama."
    ],
    "realismTitle": "KEY ART FINISH",
    "realism": [
      "Cel-shaded figure.",
      "Painterly red sky.",
      "Limited palette.",
      "High contrast."
    ],
    "avoid": "Avoid bright or cheerful color, cute styling, realistic rendering, and photorealism.",
    "compositionLabel": "Animated series key art composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Bright, cute, or cheerful styling.",
      "Any other characters or faces in the sky.",
      "Text or logos."
    ],
    "checks": [
      "Immediately reads as adult animated dark fantasy key art.",
      "Has sharp line, hard shadows, and a red-and-black palette.",
      "The character is recognizable."
    ],
    "directive": "Create {style} key art of {name}. Match the sharp line, red-and-black palette, and gothic drama of the supplied sample image."
  },
  "081": {
    "priority": "Prioritize the authentic grimdark look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a grimdark fantasy painting",
    "intro": "The finished character must look like grimdark fantasy art: rain, blood, black armor, despair, and cold, near-monochrome blue-gray.",
    "constructionTitle": "MANDATORY GRIMDARK CONSTRUCTION",
    "construction": [
      "Highly detailed, dark digital painting.",
      "Cold blue-gray, near-monochrome palette with dark red blood as the only color.",
      "Heavy rain or drifting ash, and wet, grimy surfaces.",
      "Battered, dented, blood-spattered gear.",
      "A weary, grieving, or brooding mood."
    ],
    "translation": {
      "face": "a grim, rain-soaked painted face",
      "hair": "painted strands catching the scarce light",
      "cloth": "heavy, painted fabric falling into shadow",
      "leather": "worn, painted leather",
      "metal": "painted metal with cold glints",
      "gear": "painted with the same mood and light",
      "keep": "drained toward cold blue-gray, with blood red as the only strong color"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DESPAIR",
    "detail": [
      "Detailed, battered gear.",
      "Rain and wet reflections.",
      "Blood accents.",
      "Grimy surroundings."
    ],
    "realismTitle": "DARK PAINT FINISH",
    "realism": [
      "Detailed digital paint.",
      "Cold palette.",
      "Rain streaks.",
      "Deep shadow."
    ],
    "avoid": "Avoid bright or warm color, clean shiny gear, heroic triumph, cartoon styling, and photorealism.",
    "compositionLabel": "Grimdark fantasy composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Bright, warm, or cheerful color.",
      "Anime, manga, or cartoon faces and proportions.",
      "Gore beyond blood spatter."
    ],
    "checks": [
      "Immediately reads as grimdark fantasy art.",
      "Has a cold blue-gray palette, blood accents, and battered gear.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} painting of {name}. Match the cold palette, blood accents, and despair of the supplied sample image."
  },
  "082": {
    "priority": "Prioritize the authentic cosmic horror look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a cosmic horror oil painting",
    "intro": "The finished character must look like a cosmic horror painting in the manner of an old maritime oil: churning, textured brushwork, a sickly green palette, and the sense of something vast and incomprehensible looming in the gloom.",
    "constructionTitle": "MANDATORY COSMIC HORROR CONSTRUCTION",
    "construction": [
      "Thick, textured, old-master-style oil brushwork.",
      "A sickly palette of murky green, teal, black, and pale yellow light.",
      "A sense of something vast and incomprehensible looming in the gloom, suggested rather than shown.",
      "Churning, stormy atmosphere.",
      "Pale, eerie light breaking through clouds."
    ],
    "translation": {
      "face": "a tense, awe-struck painted face",
      "hair": "painted strands catching the scarce light",
      "cloth": "heavy, painted fabric falling into shadow",
      "leather": "worn, painted leather",
      "metal": "painted metal with cold glints",
      "gear": "painted with the same mood and light",
      "keep": "muted to fit the murky green palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S SCALE",
    "detail": [
      "Textured oil brushwork.",
      "Vast, looming gloom.",
      "Churning atmosphere."
    ],
    "realismTitle": "OIL PAINT FINISH",
    "realism": [
      "Thick, textured oil paint.",
      "Murky green palette.",
      "Old varnish.",
      "Canvas texture."
    ],
    "avoid": "Avoid bright color, clean digital rendering, cute styling, and photorealism.",
    "compositionLabel": "Cosmic horror painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Bright or cheerful color.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a cosmic horror oil painting.",
      "Has a murky green palette and vast, looming gloom.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} painting of {name} facing something vast and incomprehensible. Match the brushwork, palette, and scale of the supplied sample image."
  },
  "083": {
    "priority": "Prioritize the authentic eldritch horror look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "an eldritch horror fantasy illustration",
    "intro": "The finished character must look like eldritch horror art: a sickly green glow, glowing arcane sigils, and creeping dread in deep shadow.",
    "constructionTitle": "MANDATORY ELDRITCH CONSTRUCTION",
    "construction": [
      "Detailed, dark digital painting.",
      "Palette of black, dark red, and sickly glowing green.",
      "Glowing green arcane sigils woven into the setting.",
      "Writhing, many-eyed shapes hinted in the darkness.",
      "Deep, oppressive shadow.",
      "Eerie green underlighting."
    ],
    "translation": {
      "face": "a defiant, green-lit painted face",
      "hair": "painted strands catching the scarce light",
      "cloth": "heavy, painted fabric falling into shadow",
      "leather": "worn, painted leather",
      "metal": "painted metal with cold glints",
      "gear": "painted with the same mood and light",
      "keep": "tinted by the eerie green glow"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S HORROR",
    "detail": [
      "Glowing sigils.",
      "Hinted, writhing shapes.",
      "Oppressive shadow.",
      "Green underlighting."
    ],
    "realismTitle": "DARK PAINT FINISH",
    "realism": [
      "Detailed digital paint.",
      "Glowing green light.",
      "Deep shadow.",
      "Rich texture."
    ],
    "avoid": "Avoid bright, cheerful color, cute styling, clean daylight, and photorealism.",
    "compositionLabel": "Eldritch horror composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Bright or cheerful color.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as eldritch horror art.",
      "Has glowing green sigils and creeping dread.",
      "The character is recognizable."
    ],
    "directive": "Create an {style} illustration of {name}. Match the green glow, glowing sigils, and dread of the supplied sample image."
  },
  "084": {
    "priority": "Prioritize the authentic biomechanical horror look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a biomechanical horror graphite drawing",
    "intro": "The finished character must look like a biomechanical horror drawing: sepia-gray graphite, sleek alien anatomy fused with tubes and pipes, and a claustrophobic industrial darkness.",
    "constructionTitle": "MANDATORY BIOMECHANICAL HORROR CONSTRUCTION",
    "construction": [
      "Monochrome sepia-gray graphite or airbrush.",
      "Smooth, glossy, elongated forms with ribbed, skeletal detail.",
      "Tubes, pipes, and cables woven into the body and background.",
      "Deep black shadows and soft, polished highlights.",
      "Claustrophobic pipe-and-tube textures in the setting.",
      "The character's gear subtly fused with ribbed, biomechanical detail without losing identity."
    ],
    "translation": {
      "face": "a pale, smoothly shaded graphite face",
      "hair": "glossy, cable-like strands",
      "cloth": "smooth, ribbed, organic-looking fabric",
      "leather": "glossy, ribbed material",
      "metal": "polished, fused metal with tubes",
      "gear": "subtly fused with ribbed tubes",
      "keep": "translated into sepia-gray tones"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DETAIL",
    "detail": [
      "Ribbed, skeletal detail.",
      "Tubes and pipes.",
      "Glossy highlights.",
      "Deep shadow."
    ],
    "realismTitle": "GRAPHITE FINISH",
    "realism": [
      "Smooth graphite or airbrush.",
      "Monochrome sepia-gray.",
      "Polished highlights.",
      "Paper texture."
    ],
    "avoid": "Avoid color, bright light, cartoon styling, clean comic inks, and photorealism.",
    "compositionLabel": "Biomechanical horror composition",
    "negatives": [
      "Any color.",
      "A photograph or 3D render of the character.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a biomechanical horror drawing.",
      "Is sepia-gray with ribbed, tube-fused forms.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} drawing of {name}. Match the sepia graphite, ribbed forms, and tubes of the supplied sample image."
  },
  "085": {
    "priority": "Prioritize the authentic surreal porcelain look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a body-horror surrealist portrait",
    "intro": "The finished character must look like a surreal porcelain sculpture-portrait: pale, cracked, glazed skin with coral, flowers, and fungus growing from the cracks.",
    "constructionTitle": "MANDATORY SURREAL PORCELAIN CONSTRUCTION",
    "construction": [
      "The character rendered as a hyperreal porcelain or ceramic sculpture.",
      "Pale, glazed surfaces with fine cracks and chipped patches.",
      "Delicate coral, flowers, and fungus sprouting from cracks.",
      "Small blue and red glaze details in exposed layers.",
      "Dark, muted backgrounds.",
      "A haunting, still mood."
    ],
    "translation": {
      "face": "a pale porcelain face with fine cracks, keeping the character's features",
      "hair": "sculpted porcelain forms with sprouting coral and flowers",
      "cloth": "glazed porcelain drapery with chips and cracks",
      "leather": "matte, cracked ceramic",
      "metal": "gilded or glazed ceramic",
      "gear": "sculpted in porcelain, clearly recognizable",
      "keep": "as glaze colors on pale porcelain"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DELICACY",
    "detail": [
      "Fine cracks.",
      "Delicate growths.",
      "Glaze textures.",
      "Dark backgrounds."
    ],
    "realismTitle": "SCULPTURAL REALISM",
    "realism": [
      "Hyperreal ceramic surface.",
      "Soft studio light.",
      "Fine detail.",
      "Black void."
    ],
    "avoid": "Avoid gore, wounds, blood, cartoon styling, and busy backgrounds.",
    "compositionLabel": "Surreal sculptural composition",
    "negatives": [
      "Gore, wounds, or blood.",
      "Anime, manga, or cartoon faces and proportions.",
      "A busy background."
    ],
    "checks": [
      "Immediately reads as a surreal porcelain portrait.",
      "Has cracked, glazed surfaces with delicate growths.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} portrait of {name} as a cracked porcelain figure. Match the glaze, cracks, and delicate growths of the supplied sample image."
  },
  "086": {
    "priority": "Prioritize the authentic gothic horror look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a gothic horror cinematic image",
    "intro": "The finished character must look like a gothic horror film still: warm candlelight, black and blood-red, and an ominous, commanding mood.",
    "constructionTitle": "MANDATORY GOTHIC HORROR CONSTRUCTION",
    "construction": [
      "Cinematic, photographic realism.",
      "Warm candlelight with deep shadows.",
      "Black and blood-red palette with warm amber light.",
      "An ominous, commanding mood."
    ],
    "translation": {
      "face": "a photorealistic face with real skin texture",
      "hair": "real, individually lit hair",
      "cloth": "real fabric with natural weight and folds",
      "leather": "real worn leather",
      "metal": "real metal with natural reflections",
      "gear": "real, physical props",
      "keep": "deepened toward black and blood red"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S GRANDEUR",
    "detail": [
      "Candlelight.",
      "Gothic atmosphere.",
      "Rich costume.",
      "Deep shadow."
    ],
    "realismTitle": "CINEMATIC REALISM",
    "realism": [
      "Real candlelight.",
      "Photographic textures.",
      "Deep shadow.",
      "Warm color grade."
    ],
    "avoid": "Avoid bright daylight, cartoon styling, flat lighting, and cheerful mood.",
    "compositionLabel": "Gothic horror film still composition",
    "negatives": [
      "A drawn, painted, or comic-book version of the character.",
      "Bright daylight.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a gothic horror film still.",
      "Has candlelight and a black-and-red palette.",
      "Has a real, recognizable face."
    ],
    "directive": "Create a {style} image of {name}. Match the candlelight, palette, and gothic atmosphere of the supplied sample image."
  },
  "087": {
    "priority": "Prioritize the authentic dark science-fantasy look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a dark science-fantasy cinematic painting",
    "intro": "The finished character must look like dark science-fantasy concept art: glowing blue tech woven into costume and gear, a stormy sunset palette, and an epic sense of scale.",
    "constructionTitle": "MANDATORY SCIENCE-FANTASY CONSTRUCTION",
    "construction": [
      "Cinematic, highly detailed digital painting.",
      "The setting mixes the ancient with glowing alien technology.",
      "Glowing cyan circuitry and lights woven into costume and gear.",
      "A stormy sunset palette with flashes of lightning.",
      "An epic sense of scale."
    ],
    "translation": {
      "face": "a cinematic, realistically painted face",
      "hair": "painted strands lit by sunset and cyan glow",
      "cloth": "fabric threaded with glowing cyan circuitry",
      "leather": "dark leather with glowing tech inlays",
      "metal": "dark alloy with glowing cyan lines",
      "gear": "fused with glowing cyan alien tech",
      "keep": "with glowing cyan tech accents added"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S EPIC SCALE",
    "detail": [
      "Glowing tech details.",
      "Ancient-meets-alien setting.",
      "Stormy sunset light."
    ],
    "realismTitle": "CINEMATIC FINISH",
    "realism": [
      "Detailed digital paint.",
      "Glowing light.",
      "Stormy sunset color.",
      "Epic depth."
    ],
    "avoid": "Avoid flat color, cartoon styling, clean bright daylight, and low detail.",
    "compositionLabel": "Science-fantasy cinematic composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Flat or cartoon styling.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as dark science-fantasy art.",
      "Has glowing cyan tech and a stormy sunset palette.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} image of {name}. Match the glowing tech and stormy sunset light of the supplied sample image."
  },
  "088": {
    "priority": "Prioritize the authentic dieselpunk look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a dieselpunk cinematic photograph",
    "intro": "The finished character must look like a dieselpunk film still: riveted, oily, early-20th-century machinery, worn leather and canvas, smoke, and hazy sunset light.",
    "constructionTitle": "MANDATORY DIESELPUNK CONSTRUCTION",
    "construction": [
      "Cinematic, photographic realism.",
      "Heavy, riveted, olive and rust-streaked metal in props and setting.",
      "Worn leather, shearling, canvas, and goggles in the costume.",
      "Smoke and hazy sunset light.",
      "A muted palette of olive, brown, rust, and amber.",
      "A weathered, stoic presence."
    ],
    "translation": {
      "face": "a photorealistic face with real skin texture",
      "hair": "real, individually lit hair",
      "cloth": "real fabric with natural weight and folds",
      "leather": "real worn leather",
      "metal": "real metal with natural reflections",
      "gear": "real, physical props with a riveted, early-20th-century feel",
      "keep": "weathered into olive, brown, and rust tones"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S GRIT",
    "detail": [
      "Rivets and rust.",
      "Worn leather.",
      "Smoke and haze.",
      "Riveted metal."
    ],
    "realismTitle": "CINEMATIC REALISM",
    "realism": [
      "Real materials.",
      "Warm sunset grade.",
      "Smoke haze.",
      "Shallow depth of field."
    ],
    "avoid": "Avoid clean, shiny surfaces, bright color, cartoon styling, and modern technology.",
    "compositionLabel": "Dieselpunk film still composition",
    "negatives": [
      "A drawn, painted, or comic-book version of the character.",
      "Modern technology.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a dieselpunk film still.",
      "Has riveted machinery, worn leather, and smoky sunset haze.",
      "Has a real, recognizable face."
    ],
    "directive": "Create a {style} image of {name}. Match the riveted machinery, worn materials, and smoky haze of the supplied sample image."
  },
  "089": {
    "priority": "Prioritize the authentic steampunk look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a steampunk fantasy painting",
    "intro": "The finished character must look like a warm steampunk fantasy painting: brass gears, glowing machinery, and warm lamplight.",
    "constructionTitle": "MANDATORY STEAMPUNK CONSTRUCTION",
    "construction": [
      "Warm, detailed digital painting.",
      "Brass, copper, and gold machinery with gears, rivets, and pipes.",
      "A glowing blue arcane power core.",
      "Cluttered, detailed props and machinery in the setting.",
      "Warm amber lamplight."
    ],
    "translation": {
      "face": "a warmly lit, painted face",
      "hair": "painted strands in warm lamplight",
      "cloth": "Victorian-flavored fabric in warm light",
      "leather": "polished brown leather with brass buckles",
      "metal": "polished brass and copper with gears and rivets",
      "gear": "given brass fittings and small gear details",
      "keep": "warmed toward brass, copper, and amber"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CLUTTER",
    "detail": [
      "Gears and rivets.",
      "Glowing core.",
      "Cluttered detail.",
      "Warm lamplight."
    ],
    "realismTitle": "PAINT FINISH",
    "realism": [
      "Warm digital paint.",
      "Glowing light.",
      "Metallic sheen.",
      "Rich detail."
    ],
    "avoid": "Avoid cold color, modern technology, cartoon styling, and empty backgrounds.",
    "compositionLabel": "Steampunk painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "Modern technology.",
      "Anime, manga, or cartoon faces and proportions."
    ],
    "checks": [
      "Immediately reads as a steampunk fantasy painting.",
      "Has brass gears, glowing machinery, and warm lamplight.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} painting of {name}. Match the brass machinery, warm light, and rich detail of the supplied sample image."
  },
  "090": {
    "priority": "Prioritize the authentic cyberpunk noir look and recognizable character identity above all other considerations.",
    "resemble": "a newly made image from the same series as the sample image",
    "medium": "a cyberpunk noir cinematic image",
    "intro": "The finished character must look like a cyberpunk noir film still: rain, night, neon, and teal and magenta reflections.",
    "constructionTitle": "MANDATORY CYBERPUNK NOIR CONSTRUCTION",
    "construction": [
      "Cinematic, photographic realism.",
      "Pouring rain and wet, mirror-like streets.",
      "Neon lines and signs in teal, cyan, and magenta.",
      "Dark, high-contrast noir lighting.",
      "Glowing neon light sources in the setting.",
      "A lonely, stoic mood."
    ],
    "translation": {
      "face": "a photorealistic face with real skin texture",
      "hair": "real, individually lit hair",
      "cloth": "real fabric, rain-soaked and catching neon",
      "leather": "real worn leather",
      "metal": "real metal with natural reflections",
      "gear": "real, physical props",
      "keep": "shifted under teal and magenta neon light"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S NEON NIGHT",
    "detail": [
      "Rain streaks.",
      "Neon reflections.",
      "Neon light.",
      "Dark silhouettes."
    ],
    "realismTitle": "CINEMATIC REALISM",
    "realism": [
      "Real rain and reflections.",
      "Neon color grade.",
      "High contrast.",
      "Shallow depth of field."
    ],
    "avoid": "Avoid daylight, warm cozy color, cartoon styling, and readable text.",
    "compositionLabel": "Cyberpunk noir film still composition",
    "negatives": [
      "A drawn, painted, or comic-book version of the character.",
      "Daylight or warm, cozy color.",
      "Anime, manga, or cartoon faces and proportions.",
      "Readable signs or text."
    ],
    "checks": [
      "Immediately reads as a cyberpunk noir film still.",
      "Has rain, neon reflections, and high-contrast noir light.",
      "Has a real, recognizable face."
    ],
    "directive": "Create a {style} image of {name}. Match the rain, neon, and noir contrast of the supplied sample image."
  },
  "091": {
    "priority": "Prioritize authentic pixel art construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a detailed pixel art game scene",
    "intro": "The finished character must look like a detailed 16-bit-style pixel art game scene: a small pixel sprite exploring a richly pixelled environment with glowing light.",
    "constructionTitle": "MANDATORY PIXEL ART CONSTRUCTION",
    "construction": [
      "Every element is made of visible, intentionally placed square pixels.",
      "A cohesive, limited retro palette: deep purples, browns, and glowing greens and oranges.",
      "The character is a readable sprite with a clear silhouette.",
      "Dithering and pixel clusters for shading and texture.",
      "Glowing light sources with pixel glow and sparkles.",
      "A detailed, layered environment."
    ],
    "translation": {
      "face": "a tiny pixel face with just a few pixels of expression",
      "hair": "a small pixel cluster in the hair color",
      "cloth": "pixel shapes with simple dithered shading",
      "leather": "brown pixel clusters",
      "metal": "gray or gold pixels with a one-pixel shine",
      "gear": "simplified into small, readable pixel shapes",
      "keep": "matched to the nearest colors in the limited retro palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PIXEL DETAIL",
    "detail": [
      "Crisp, visible pixels.",
      "Dithered shading.",
      "Glowing light sources.",
      "Layered environment."
    ],
    "realismTitle": "PIXEL ART FINISH",
    "realism": [
      "Hard-edged square pixels.",
      "Limited palette.",
      "No anti-aliasing blur.",
      "Pixel glow effects."
    ],
    "avoid": "Avoid smooth gradients, blurry pixels, painterly rendering, high-resolution detail, and photorealism.",
    "compositionLabel": "Pixel art game scene composition",
    "fullBody": "Full body visible as a detailed sprite, large enough to read clearly.",
    "negatives": [
      "A photorealistic version of the character.",
      "Smooth, painterly, or high-resolution rendering.",
      "UI, text, or health bars."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as pixel art.",
      "Uses visible square pixels and a limited palette.",
      "The character is recognizable as a sprite."
    ],
    "directive": "Create a {style} scene featuring {name}. Match the visible pixels, limited palette, and glowing light of the supplied sample image."
  },
  "092": {
    "priority": "Prioritize authentic isometric RPG construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "an isometric RPG map illustration",
    "intro": "The finished character must look like a detailed isometric RPG scene: a fixed isometric camera, richly inked buildings, fields, roads, and forests, with the character as a small figure in the world.",
    "constructionTitle": "MANDATORY ISOMETRIC CONSTRUCTION",
    "construction": [
      "A true isometric camera angle: parallel lines, no vanishing point.",
      "Detailed, inked-and-painted game-map art.",
      "Timber-framed buildings, stone walls, fields, roads, rivers, and forests.",
      "Warm, natural palette of greens, browns, and stone gray.",
      "The character appears as a small but detailed figure standing in the world.",
      "Rich environmental detail at every scale."
    ],
    "translation": {
      "face": "a small but clear face, seen from the isometric angle",
      "hair": "small, crisp painted shapes",
      "cloth": "small, crisply painted fabric",
      "leather": "small brown painted details",
      "metal": "small glinting painted details",
      "gear": "clearly readable at small scale",
      "keep": "as clear, readable colors at small scale"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S MAP DETAIL",
    "detail": [
      "Isometric angle.",
      "Detailed buildings and terrain.",
      "Small, readable figure.",
      "Warm palette."
    ],
    "realismTitle": "GAME MAP FINISH",
    "realism": [
      "Inked outlines with painted color.",
      "Consistent isometric projection.",
      "Soft daylight.",
      "Rich detail."
    ],
    "avoid": "Avoid perspective vanishing points, close-up portraits, photorealism, and flat empty terrain.",
    "compositionLabel": "Isometric RPG scene composition",
    "fullBody": "Full body visible as a small figure in the isometric world, clearly placed near the center.",
    "background": "{s}, laid out as an isometric RPG map with timber-framed buildings, fields, stone walls, roads, and a river",
    "negatives": [
      "A photorealistic version of the character.",
      "A perspective or close-up portrait view.",
      "UI, text, or icons."
    ],
    "checks": [
      "Immediately reads as an isometric RPG scene.",
      "Uses a true isometric angle with detailed terrain.",
      "The character is recognizable as a small figure."
    ],
    "directive": "Create an {style} scene featuring {name}. Match the isometric angle, map detail, and palette of the supplied sample image."
  },
  "093": {
    "priority": "Prioritize authentic low-poly construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a low-poly 3D render",
    "intro": "The finished character must look like a stylized low-poly 3D model: faceted triangular planes, soft gradient lighting, and a lavender-and-blue sunset sky.",
    "constructionTitle": "MANDATORY LOW-POLY CONSTRUCTION",
    "construction": [
      "Every form is built from flat, faceted triangular polygons.",
      "Simplified, intentionally low-detail topology.",
      "Each facet has a single flat shade, creating a crystalline look.",
      "A cool palette of blue, lavender, silver, and pink.",
      "Soft, sunset-like lighting.",
      "The setting is equally faceted, with a soft, blurred sky."
    ],
    "translation": {
      "face": "a faceted low-poly face that keeps the key features",
      "hair": "a few large faceted planes",
      "cloth": "large, flat faceted planes",
      "leather": "faceted darker planes",
      "metal": "bright faceted planes with sharp highlights",
      "gear": "simplified into faceted low-poly shapes",
      "keep": "as flat facet colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S FACETS",
    "detail": [
      "Visible triangular facets.",
      "Flat facet shading.",
      "Simplified forms.",
      "Soft sky."
    ],
    "realismTitle": "LOW-POLY RENDER FINISH",
    "realism": [
      "Flat-shaded polygons.",
      "Crisp facet edges.",
      "Soft light.",
      "Clean render."
    ],
    "avoid": "Avoid smooth surfaces, high-poly detail, painted textures on the figure, line art, and photorealism.",
    "compositionLabel": "Low-poly render composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Smooth, high-detail surfaces.",
      "Line art or painted textures."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as low-poly 3D.",
      "Is built from flat, faceted polygons.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} render of {name}. Match the faceted polygons, flat shading, and soft sky of the supplied sample image."
  },
  "094": {
    "priority": "Prioritize authentic paper-cut construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a layered paper-cut shadow box",
    "intro": "The finished character must look like a real layered paper-cut shadow box: stacked cut-paper layers, glowing backlight, and a framed scene.",
    "constructionTitle": "MANDATORY PAPER-CUT CONSTRUCTION",
    "construction": [
      "The whole scene is made of stacked, physically cut paper layers.",
      "Delicate, intricate cut edges on leaves, branches, and details.",
      "Real depth with soft shadows between layers.",
      "Warm glowing backlight behind the layers.",
      "Palette of deep green, cream, navy, tan, and amber.",
      "A paper frame, photographed against a dark wall."
    ],
    "translation": {
      "face": "a cut-paper silhouette face with a few cut details",
      "hair": "delicately cut paper shapes",
      "cloth": "layered cut paper in the costume colors",
      "leather": "tan or brown cut paper",
      "metal": "pale or metallic paper pieces",
      "gear": "cut cleanly so each item reads in silhouette",
      "keep": "matched to colored paper stock"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S PAPERCRAFT",
    "detail": [
      "Intricate cut edges.",
      "Stacked layers.",
      "Glowing backlight.",
      "Paper frame."
    ],
    "realismTitle": "PHYSICAL PAPER REALISM",
    "realism": [
      "Real paper texture.",
      "Shadows between layers.",
      "Warm backlight.",
      "Photographed object."
    ],
    "avoid": "Avoid painted or drawn rendering, smooth gradients on paper, photorealistic people, and flat illustration.",
    "compositionLabel": "Paper-cut shadow box composition",
    "fullBody": "The full figure is cut as one of the layers, standing in the scene.",
    "background": "{s}, built from layered cut-paper shapes, glowing with warm backlight inside a paper frame",
    "negatives": [
      "A painted, drawn, or real person.",
      "Flat illustration without real paper layers.",
      "Text."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a real layered paper-cut shadow box.",
      "Has stacked layers, cut edges, and glowing backlight.",
      "The character is recognizable in silhouette and color."
    ],
    "directive": "Create a {style} shadow box featuring {name}. Match the layered paper, cut edges, and glowing backlight of the supplied sample image."
  },
  "095": {
    "priority": "Prioritize authentic collage construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a vintage mixed-media collage",
    "intro": "The finished character must look like a vintage mixed-media collage: cut-out photographs, old maps, star charts, and circular frames layered on aged paper in muted teal and rose.",
    "constructionTitle": "MANDATORY COLLAGE CONSTRUCTION",
    "construction": [
      "Layered cut-paper fragments with visible edges.",
      "Vintage source material: old maps, star charts, engravings, and photos.",
      "Muted palette of teal, dusty rose, cream, and sepia.",
      "A large central circular frame holding the main figure.",
      "Aged paper textures, stains, and grain.",
      "Small floating vintage elements around the edges."
    ],
    "translation": {
      "face": "a cut-out vintage-photo-style face",
      "hair": "part of the cut-out figure",
      "cloth": "cut-out photographic fabric with a vintage tint",
      "leather": "vintage-tinted photo detail",
      "metal": "vintage-tinted photo detail",
      "gear": "cut out cleanly as part of the figure",
      "keep": "faded into the muted teal, rose, and sepia palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S LAYERS",
    "detail": [
      "Visible cut edges.",
      "Maps and charts.",
      "Central circle.",
      "Aged textures."
    ],
    "realismTitle": "COLLAGE REALISM",
    "realism": [
      "Real paper fragments.",
      "Aged textures.",
      "Muted vintage color.",
      "Layered depth."
    ],
    "avoid": "Avoid clean digital illustration, bright saturated color, cartoon styling, and readable modern text.",
    "compositionLabel": "Mixed-media collage composition",
    "fullBody": "The full figure is cut out and placed inside the central circular frame.",
    "background": "layered old maps, star charts, and engravings, with cut-out fragments of {s} in smaller circles and rectangles",
    "negatives": [
      "A clean digital illustration.",
      "Bright, saturated color.",
      "Readable modern text."
    ],
    "checks": [
      "Immediately reads as a vintage mixed-media collage.",
      "Has cut fragments, maps, and a central circle.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} featuring {name}. Match the layered fragments, vintage materials, and muted palette of the supplied sample image."
  },
  "096": {
    "priority": "Prioritize authentic silkscreen poster construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a silkscreen poster print",
    "intro": "The finished character must look like a silkscreen poster: three or four flat spot colors (black, red, orange, cream), bold stylized shapes, and visible print texture.",
    "constructionTitle": "MANDATORY SILKSCREEN CONSTRUCTION",
    "construction": [
      "Only three or four flat spot colors: black, deep red, orange, and cream paper.",
      "Bold, stylized, symmetrical shapes.",
      "Flowing decorative shapes.",
      "Visible ink texture and slight registration offset.",
      "A cream border around the print.",
      "Strong graphic silhouette."
    ],
    "translation": {
      "face": "a bold, stylized face in flat color",
      "hair": "flowing flat shapes",
      "cloth": "flat, stylized shapes",
      "leather": "flat black or red shapes",
      "metal": "flat orange or cream shapes",
      "gear": "stylized into bold, readable shapes",
      "keep": "translated into black, red, orange, and cream"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S BOLDNESS",
    "detail": [
      "Flat spot colors.",
      "Bold shapes.",
      "Print texture.",
      "Cream border."
    ],
    "realismTitle": "SCREEN PRINT REALISM",
    "realism": [
      "Flat ink.",
      "Grainy texture.",
      "Slight misregistration.",
      "Paper border."
    ],
    "avoid": "Avoid gradients, more than four colors, realistic rendering, fine detail, and photorealism.",
    "compositionLabel": "Silkscreen poster composition",
    "background": "{s}, stylized into bold, flat shapes in the spot colors",
    "negatives": [
      "A photorealistic version of the character.",
      "Gradients or many colors.",
      "Text or slogans."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a silkscreen poster.",
      "Uses three or four flat spot colors with print texture.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} print of {name}. Match the flat spot colors, bold shapes, and print texture of the supplied sample image."
  },
  "097": {
    "priority": "Prioritize authentic risograph-style construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a risograph-style gouache illustration",
    "intro": "The finished character must look like a flat, grainy risograph-style illustration: soft gouache-like shapes and a limited purple, teal, and yellow palette.",
    "constructionTitle": "MANDATORY RISOGRAPH CONSTRUCTION",
    "construction": [
      "Flat, matte, slightly grainy shapes with soft edges.",
      "A limited palette of violet, teal, warm yellow, coral, and cream.",
      "Simple, charming, stylized characters.",
      "Visible grain and slight overprint texture.",
      "Swirling, decorative skies.",
      "Lively energy."
    ],
    "translation": {
      "face": "a simple, charming, stylized face",
      "hair": "flat, soft shapes",
      "cloth": "flat, grainy color shapes",
      "leather": "flat warm shapes",
      "metal": "flat pale shapes with simple highlights",
      "gear": "simplified and charming, still readable",
      "keep": "shifted into the limited violet, teal, and yellow palette"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S CHARM",
    "detail": [
      "Flat, grainy shapes.",
      "Limited palette.",
      "Lively energy.",
      "Decorative skies."
    ],
    "realismTitle": "PRINT FINISH",
    "realism": [
      "Grainy riso texture.",
      "Matte gouache-like color.",
      "Slight overprint.",
      "Soft edges."
    ],
    "avoid": "Avoid realistic rendering, gradients, heavy black outlines, gritty texture, and photorealism.",
    "compositionLabel": "Risograph illustration composition",
    "negatives": [
      "A photorealistic version of the character.",
      "Realistic or gritty rendering.",
      "Signatures or text."
    ],
    "excludeTags": [
      "cartoon"
    ],
    "checks": [
      "Immediately reads as a risograph-style illustration.",
      "Has flat grainy shapes and a limited palette.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} of {name}. Match the flat, grainy shapes and limited palette of the supplied sample image."
  },
  "098": {
    "medium": "a stained-glass window",
    "intro": "The finished character must look like a real, photographed Gothic stained-glass window, with the character as its central figure, glowing with transmitted light inside a carved stone arch.",
    "constructionTitle": "MANDATORY STAINED-GLASS CONSTRUCTION",
    "construction": [
      "Every shape is a separate piece of colored glass outlined by thick, dark soldered lead lines (cames).",
      "Color is jewel-toned, saturated, and translucent: ruby, sapphire, emerald, amber, violet, and gold, lit from behind.",
      "Glass shows texture: streaks, bubbles, ripples, and small variations in color within each piece.",
      "Faces, hands, and fine details are painted on the glass in dark grisaille lines.",
      "Scales, chainmail, fur, and patterned cloth are built from many small mosaic pieces.",
      "An ornamental border of geometric and floral glass surrounds the scene, with iron support bars crossing the window.",
      "The window sits inside a weathered, carved stone Gothic arch, and colored light spills onto the stone around it."
    ],
    "translation": [
      "The {face} becomes a face painted in grisaille on pale glass, keeping its expression.",
      "The {hair} becomes flowing pieces of glass in the hair color, with painted strand lines.",
      "The {cloth} become large pieces of jewel-colored glass with lead lines following the folds.",
      "The {leather} become amber and brown glass with painted detail lines.",
      "The {metal} become silver-gray, gold, and pale glass with painted highlights.",
      "The {gear} are built from their own clearly separated glass pieces so each item is readable.",
      "Keep {keep}, translated into the matching jewel-toned glass."
    ],
    "resemble": "a newly made window from the same cathedral as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S GLASSWORK",
    "detail": [
      "Many small glass pieces in the figure, border, and sky, with consistent lead-line weight.",
      "The figure is clearly readable as a silhouette within the window.",
      "Ornamental swirls, stars, and leaves fill the space around the figure.",
      "The surrounding stone is carved and textured, lit by spilled colored light."
    ],
    "realismTitle": "GLASS AND LIGHT REALISM",
    "realism": [
      "Light genuinely passing through the glass, with glow and slight bloom.",
      "Physical lead cames with dark, slightly uneven edges.",
      "Visible texture and imperfections in the glass.",
      "Colored light cast onto the stone arch and floor."
    ],
    "avoid": "Avoid a flat illustration that only imitates stained glass, painterly or airbrushed shading, photorealistic people, missing lead lines, and dull or muddy color.",
    "compositionLabel": "Gothic stained-glass window composition",
    "background": "inside the window, behind the figure: {s}, simplified into glass shapes. Outside the window: a carved stone Gothic arch with columns",
    "fullBody": "The full window and the character's full body are visible.",
    "negatives": [
      "A real person standing in front of a window.",
      "A flat illustration without lead lines or glass texture.",
      "Anime, manga, or cartoon faces and proportions.",
      "Text, banners, or labels in the glass."
    ],
    "checks": [
      "Immediately reads as a real, photographed stained-glass window.",
      "Every shape is separate glass with dark lead lines and transmitted light.",
      "Shows the character as the central figure, recognizable in face (where visible) and gear."
    ],
    "directive": "Create a glowing Stained-Glass Fantasy window featuring {name}. Match the glasswork, lead lines, color, and light of the supplied sample image.",
    "priority": "Prioritize authentic stained-glass construction and recognizable character identity above all other considerations."
  },
  "099": {
    "priority": "Prioritize authentic tapestry construction and recognizable character identity above all other considerations.",
    "resemble": "a newly made piece from the same series as the sample image",
    "medium": "a medieval woven tapestry",
    "intro": "The finished character must look like a real medieval woven tapestry: visible threads, a deep navy millefleur background of tiny flowers, and a decorative woven border.",
    "constructionTitle": "MANDATORY TAPESTRY CONSTRUCTION",
    "construction": [
      "Everything is woven: visible thread texture throughout.",
      "A deep navy background densely filled with tiny flowers and plants (millefleur).",
      "Flattened, decorative figure with simple contours.",
      "A palette of navy, cream, red, green, and gold thread.",
      "A woven decorative border with floral scrolls.",
      "Flat, even light with no cast shadows."
    ],
    "translation": {
      "face": "a simple, flattened woven face",
      "hair": "woven thread strands",
      "cloth": "flat woven areas with simple fold lines",
      "leather": "brown woven areas",
      "metal": "gold or gray woven thread",
      "gear": "woven as flat, clear shapes",
      "keep": "translated into dyed thread colors"
    },
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S WEAVE",
    "detail": [
      "Visible thread texture.",
      "Millefleur background.",
      "Flattened figure.",
      "Woven border."
    ],
    "realismTitle": "TEXTILE REALISM",
    "realism": [
      "Real woven threads.",
      "Slight fabric irregularity.",
      "Flat, even light.",
      "Aged dyes."
    ],
    "avoid": "Avoid painted or drawn rendering, shading and perspective depth, photorealism, and modern styling.",
    "compositionLabel": "Medieval tapestry composition",
    "background": "a deep navy millefleur field of tiny woven flowers and plants, with a simple woven hint of {s}, inside a floral woven border",
    "negatives": [
      "A painted or drawn character.",
      "Realistic shading or perspective.",
      "Letters or monograms."
    ],
    "checks": [
      "Immediately reads as a woven medieval tapestry.",
      "Has visible thread, a millefleur background, and a woven border.",
      "The character is recognizable."
    ],
    "directive": "Create a {style} of {name}. Match the woven threads, millefleur background, and border of the supplied sample image."
  },
  "102": {
    "medium": "a surrealist oil painting",
    "intro": "The finished character must look like a carefully painted surrealist oil: believable, finely rendered realism in which the setting follows the logic of dreams, with impossible spaces, unexpected transformations, distorted scale, and symbolic details under luminous, atmospheric light.",
    "constructionTitle": "MANDATORY SURREALIST CONSTRUCTION",
    "construction": [
      "Carefully painted, believable realism: solid anatomy, convincing materials, and finely modeled light, so the impossible feels real.",
      "The character's own setting bends into dream logic: fragments of it float, hang, or repeat; distances and scale are subtly wrong; architecture leads nowhere or opens onto somewhere else.",
      "One or two unexpected transformations of the character's own costume or gear (for example, a cloak lining that holds a night sky, or a strap that turns to vine), while the item stays clearly recognizable.",
      "Symbolic details woven quietly into the scene rather than crowding it.",
      "Luminous, atmospheric light: clear, warm sunlight, soft hazy distance, and crisp cast shadows.",
      "A bright, airy palette of sky blue, cream, warm ochre, and stone, with deep jewel accents.",
      "Fine, textured oil brushwork with a visible canvas surface."
    ],
    "translation": {
      "face": "a realistically painted, warmly lit face that stays fully human and recognizable",
      "hair": "finely painted strands, lifted slightly by an impossible breeze",
      "cloth": "finely painted fabric with believable folds, with at most one dreamlike transformation",
      "leather": "worn, warmly lit painted leather",
      "metal": "softly gleaming painted metal",
      "gear": "painted realistically, each item still clearly identifiable",
      "keep": "kept true to the character, within the bright, luminous palette"
    },
    "resemble": "a newly painted work by the same artist as the sample image",
    "detailTitle": "DETAIL LEVEL: MATCH THE SAMPLE'S DREAMLIKE REALISM",
    "detail": [
      "Finely rendered figure and costume.",
      "Impossible elements painted as convincingly as real ones.",
      "Soft atmospheric depth.",
      "Crisp light and shadow."
    ],
    "realismTitle": "OIL PAINT REALISM",
    "realism": [
      "Textured oil brushwork.",
      "Luminous, natural light.",
      "Atmospheric perspective.",
      "Fine canvas texture."
    ],
    "avoid": "Avoid cartoon styling, flat color, outlines, glossy 3D rendering, photorealism, and chaotic clutter that hides the character.",
    "compositionLabel": "Surrealist painting composition",
    "negatives": [
      "A photograph or 3D render of the character.",
      "A cartoon or comic version of the character.",
      "Anime, manga, or cartoon faces and proportions.",
      "Transformations that make the character or their gear unrecognizable."
    ],
    "checks": [
      "Immediately reads as a surrealist oil painting.",
      "The setting follows dream logic, with impossible space or scale, painted convincingly.",
      "The character and every key item are still clearly recognizable."
    ],
    "directive": "Create a {style} painting of {name}. Match the dreamlike realism, luminous light, and fine brushwork of the supplied sample image.",
    "priority": "Prioritize the authentic surrealist look and recognizable character identity above all other considerations."
  }
};
