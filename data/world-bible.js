// The World Bible — campaign lore: locations, recurring threats, notable
// items, and open plot threads. This is the canonical, human-edited home
// for that information going forward.
//
// It supersedes clutch_automation/instructions/Character_Arcs.md as the
// place to EDIT this content (that file remains the fuller session-by-session
// working log the table keeps during play — locations/threats/items/threads
// should be kept in sync here whenever that log changes, but this file is
// what the site and the pipeline actually read).
//
// This is NOT the same file as clutch_automation's
// world_bible_<campaign>.json — that file is a different thing: a cache the
// image-generation pipeline writes to automatically every run (AI-extracted
// visual descriptions of one-off props/NPCs, for panel-to-panel art
// consistency). It has no locations or plot threads in it and isn't meant to
// be hand-edited. Leave it alone; it keeps working as before.
//
// Keep this object plain-JSON-shaped (double-quoted strings, no trailing
// commas, no comments inside the object) — clutch_automation's
// Claude_API_ Prompts.py reads this file directly for prompt-building.
window.CLUTCH_WORLD_BIBLE = {
  "campaign": {
    "id": "expedition-barrier-peaks",
    "name": "Expedition to the Barrier Peaks",
    "module": "Expedition to the Barrier Peaks (Gygax, 1980 — AD&D)",
    "setting": "Fantasy adventurers exploring a crashed alien spaceship/research-station complex, where medieval gear and laser rifles coexist. Dilapidated industrial sci-fi tone with mold, puddles, and biological/synthetic life mixed together.",
    "tone": "Dilapidated industrial sci-fi meets fantasy — mold, puddles, fluorescent-equivalent lighting. Not clean/sterile sci-fi (think Bioshock's Rapture, not Star Trek)."
  },

  "locations": [
    {
      "name": "The Barrier Peaks Complex (overall)",
      "description": "A crashed alien spaceship / research station, partly buried, partly flooded, partly overgrown. Mixes medieval and sci-fi: walls of plastic and concrete, biological mold, fluorescent lighting that powers down for artificial day/night cycles, color-coded keycard doors, mechanical rooms with pumps and pipes. The party is exploring it across multiple levels, with a rough map of Level 4 but nothing lower yet."
    },
    {
      "name": "Level 4 — The Reservoir / Jungle Level",
      "description": "A roughly octagonal level with terraced walls feeding down into a central swampy \"corkscrew-jungle\" surrounding a 100-foot-deep reservoir/lake with an island in the middle.",
      "features": [
        "Corkscrew-jungle — covered in corkscrew grass (hazard), dotted with rabbit-on-stump creatures",
        "Reservoir/lake — 100 feet deep, the frog-hemoth's former lair at the bottom, gem deposits in the muck, spiral staircase connecting surface to bottom",
        "Underwater observatory — mid-level platform with broken windows and debris; contains the diving-suit closet",
        "Maintenance back-areas / burrows — behind the terraces, suggesting the level was a built habitat for a specific creature/ecosystem",
        "Camp/safe zone — a clearing cleared by an old Ice Storm spell, used as the long-rest site",
        "Paved area to the north — tested clear of mimics/lurkers, contains a hatch down to a sub-level"
      ]
    },
    {
      "name": "Level 4 → Sub-Level (Mechanical Room)",
      "description": "Reached via a hatch in the north paved area, then a 90-degree corridor, then a keycard door (brown card). A large open mechanical/boiler room — loud air-conditioning units, water pumps, pipes everywhere, patches of harmless mold, humid, puddled. Pillars on the right, an unidentified larger structure on the left. Just entered as of the most recent session; unexplored."
    },
    {
      "name": "Other levels",
      "description": "TODO — fill in as the party encounters them."
    }
  ],

  "threats": [
    {
      "name": "Frog-hemoth",
      "description": "Massive frog/behemoth hybrid, module-canon creature. Lair was at the bottom of the underwater observatory shaft. Presumed dead after the party drained the reservoir and drove it out, but the body was never recovered — unconfirmed."
    },
    {
      "name": "Rabbit-on-Stump (\"the killer rabbit\")",
      "description": "A creature that mimics a rabbit perched on a tree stump — the stump itself is the creature, with roots that lash out. One was killed in the corkscrew-jungle clearing; more may exist."
    },
    {
      "name": "Floor Mimic",
      "description": "Paving stones that are actually creatures, snapping up at anyone who steps on them."
    },
    {
      "name": "Lurker",
      "description": "Lies under flat surfaces and lunges upward to ambush."
    },
    {
      "name": "Green Slime",
      "description": "Green-fluorescent slime that adheres to flesh and dissolves it. Recurring throughout Level 4 — standard procedure is to burn it on sight."
    },
    {
      "name": "Corkscrew Grass",
      "description": "Environmental hazard — helical green stalks like wine-bottle openers that bore through the soles of feet, hold victims down, and drink blood. Countered by burning with a sprayer or magical fire. Covers most of Level 4."
    },
    {
      "name": "Four-Winged Ornithopters",
      "description": "Bird-sized flying creatures with four dragonfly-like wings, possibly synthetic/robotic — like Dune's ornithopters but seagull-sized. Don't engage the party. Open mystery: possibly the first confirmed mechanical/synthetic creature in this campaign."
    },
    {
      "name": "Pug-Sized Grub Worms",
      "description": "Large grubs that emerge from the soil when the artificial lights power down, and retreat by morning. Cool to thermals; reportedly taste like gummy bears. A survivor population from an earlier Ice Storm freeze of the clearing."
    }
  ],

  "npcs": [
    {
      "name": "Mickey, the Magic Mop",
      "description": "Tom Jones's animated magic-mop companion (command word \"Mop mop mop\"). An animated walking mop creature — the wooden handle is his body/spine, two stick-arms end in tiny wooden fists, he walks on a single rounded-base foot, and a mop-head of damp cream-colored rope strands serves as his \"head\" (no face). Water drips from him constantly. Excitable and eager-to-please; treated by the table as a full companion, not an inventory item."
    }
  ],

  "itemsOfNote": [
    {
      "name": "The Rod of Seven Parts",
      "majorArc": true,
      "description": "A multi-piece artifact recovery — 7 total pieces, campaign-defining if pursued. Two pieces are currently in party hands (Tom Jones holds one, Vigeaux holds one). Not actively being pursued, but looming."
    },
    {
      "name": "The Deck of Many Things",
      "description": "Held by Vigeaux, who carries it for the party (he refuses to draw or hand-pick — he passes the whole deck to whoever wants to draw). Acquired when Snivel traded his soul for it. Drawing a card is treated by the table as a high-stakes ritual where the whole scene pauses."
    },
    {
      "name": "The Mass-Altering Gold Chest",
      "description": "No formal name yet. A dial controls the chest's mass — full down is normal weight, full up is nearly weightless. About 3 cubic feet, roughly the size of a water cooler. Was full of 1,200 gold bars, already banked into the party's coffers."
    },
    {
      "name": "Diving Suits",
      "description": "Recovered from the underwater observatory closet. Powered by power discs; breathing apparatus lasts about 90 minutes per pair of discs, with a buzzing alarm at 3 turns remaining. Bizarre-looking: black leather padded undersuit, plated joints, weighted girdle, ribbed flipper-slippers, bubble helmet."
    }
  ],

  "openArcThreads": [
    { "thread": "Snivel's soul, held by a wandering nomadic woman", "status": "Open quest hook, not actively pursued" },
    { "thread": "Vigeaux's lost fight with Death (mechanism of his survival)", "status": "Open mystery" },
    { "thread": "The Rod of Seven Parts (5 pieces remaining)", "status": "Open campaign-spanning quest" },
    { "thread": "The frog-hemoth's confirmed-or-not death", "status": "Unconfirmed, presumed dead" },
    { "thread": "Synthetic/robotic creature mystery (ornithopters as first candidate)", "status": "Open mystery" },
    { "thread": "Mechanical room exploration", "status": "Open cliffhanger" },
    { "thread": "Snivel's secret 10,000 gp azurite gem", "status": "Undisclosed asset, Snivel only" }
  ],

  "visualStyleNotes": [
    "Character contrast: heavy size mismatch in the party — Snivel (4'8\", 84 lbs) versus Alfie/Vigeaux (5'6\"-5'10\", 180-200 lbs). Lean into this visually.",
    "Equipment contrast: chainmail and laser rifles, plate armor and power discs, flying brooms and diving suits — the medieval/sci-fi mashup is the campaign's signature visual joke.",
    "Color palette: gritty earth tones for organic spaces (corkscrew jungle, mold); cool grays/blues for mechanical spaces; pops of fluorescent green (slime, glowing tech) for hazards and treasure.",
    "Vigeaux's wings stay folded when stationary, half-spread when alert or surveying, and fully spread only at climactic, issue-defining moments — reserve the full reveal for one big beat per issue.",
    "No D&D mechanics in panel text — dice rolls and mechanics get translated into narrative voice and observable action, never named directly.",
    "Cinematic touchstones invoked by the table: Animorphs-style transformation (DerDer), the Holy Grail killer rabbit, Jurassic Park's \"clever girl,\" Bedknobs and Broomsticks, Free Willy, Dune's ornithopters — mostly 1980s-1990s references."
  ]
};
