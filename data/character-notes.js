// Flavor text that isn't tracked on the Google Sheet — keyed by character
// slug (see characters/README.txt for the slug list). This gets merged
// onto whichever character data loads (live sheet or the local fallback),
// so it always shows regardless of which source is active.
window.CLUTCH_CHARACTER_NOTES = {
  'alfie': {
    personality: [
      "He's the guy who's always got a plan, a gadget, and a sandwich somehow, no matter what's going on around him. Talks fast, thinks faster, and has this habit of being genius and reckless in the exact same move, so you're never totally sure if he pulled off something brilliant or just got lucky again. Big showman energy too, cracks jokes nonstop and will absolutely let you know when he's the one who saved the day, even if three other people did most of the work. Acts like nothing rattles him, cocky and confident about basically everything, except mind flayers turn him into a completely different person, dead silent, dead pale, gone before you can blink. Sharp and a little sneaky, the type to sit on bad news if he's decided you can't handle it, which is either considerate or kind of shady depending on how you look at it. Deep down he's loyal as hell though, drops everything the second a friend's actually in trouble. Just don't expect him to let you forget about it after.",
    ],
  },
  'tom-jones': {
    personality: [
      "Tom Jones is the steady one, big guy, calm energy, the type who just quietly handles things while everybody else is losing it around him. Doesn't say much unless it matters, but when he does it's usually dry as hell and lands way harder because he never seems like he's trying to be funny. Reliable to a fault, always the one keeping everyone patched up and moving, methodical about it too, not flashy, just gets it done. His faith runs deep and mostly unshakeable, but every once in a while a prayer just doesn't land the way it's supposed to, and in that one quiet beat you can see him actually wonder about it before he shakes it off and keeps working. Quietly observant too, notices stuff before anyone else does and just kind of mentions it sideways instead of making a big deal out of it. Protective as hell without ever announcing it, he'll just show up right when you need him.",
    ],
  },
  'derder-erder': {
    personality: [
      `Derder Erder is the chill one, always got that laid back, nothing really fazes me energy, like he's two steps removed from panicking about literally anything. Talks slow, calls everybody "man," and somehow makes even the wildest stuff sound completely normal once he explains it. Weirdly resourceful too, always got some trick or transformation up his sleeve, just never makes a big show out of using it. Genuinely soft hearted underneath the stoner calm though, the type who actually listens when something's in pain, plants included, and it visibly gets to him even when he plays it off. Surprisingly sharp for how mellow he acts, notices stuff other people miss and just casually mentions it like it's no big deal. Doesn't take himself too seriously either, happy to shrug off his own mistakes and laugh along when a plan doesn't quite land right.`,
    ],
  },
  'wyatt-smithereen': {
    personality: [
      "Wyatt's the chill musician type, always got an instrument nearby and somehow never loses his rhythm even when everything around him is falling apart. Talks like he's half in a daydream, low key clever, and picks up on tiny details other people totally miss cause he's always sort of listening for something underneath the noise. Turns basically anything into a creative project too, doesn't matter what's in front of him, he's already figuring out how to make it louder, weirder, or more interesting. Weirdly unshakeable, the type to stay completely calm even treading water in the middle of a total disaster, like his brain just refuses to panic on schedule. Perceptive in this quiet way, catches on to things before anyone actually says them out loud, and just files it away instead of making a scene about it. Genuinely thoughtful with people he cares about too, the type to go out of his way to take care of somebody properly instead of doing the easy version.",
    ],
  },
  'willa': {
    personality: [
      "Willa's the one who just says the quiet part out loud, no hesitation calling people out when they're being cowards about something, even giant winged demigod things twice her size. Sharp tactical brain too, actually stops and thinks through what's gonna work instead of just throwing the same spell at a problem twice, and she'll deadpan roast her own bad idea the second it flops. Fiercely protective of her rabbit familiar, the two of them are basically a package deal, and it clearly means something to her whenever somebody looks out for him too.",
      "Comes across pretty composed most of the time, holding the group together while things fall apart around her, but she's not above getting swept into the chaos herself, and when somebody actually helps her out of it she's genuinely grateful about it, no ego getting in the way. Blunt almost to a fault, the type who'll tell an ancient powerful being exactly what she thinks their obligations are and not blink. Quietly whip smart, mostly lets her actions do the talking instead of announcing her own cleverness.",
    ],
  },
  'snivel-sarcat': {
    personality: [
      "Snivel's the sneaky one, moves through a room like he was born checking it for traps, but underneath that cool professional exterior he's actually kind of a nervous wreck, jumps at every shadow and swears every rabbit shaped thing on this ship is out to get him. Constant one liners too, dry and a little morbid, narrating his own retreat out loud like it's the most reasonable plan in the world. Weirdly great shot when it actually counts, but somehow still manages to whiff the easy ones in the most embarrassing way possible, and he'll blame the bow before he ever blames himself.",
      "Doesn't trust magic one bit, avoids messing with it when he can help it, and needs a real nudge, or a genuinely good song, to actually talk himself into the scary stuff. Takes credit for things he clearly didn't do and blames unrelated disasters for his own bad calls, all completely straight faced about it. Underneath the jokes and the self preservation instinct though, he's loyal as hell, first one panicking the second a friend goes missing, and he'll tell you exactly what you did wrong if you actually earned it, no sugarcoating.",
    ],
  },
  'vigeaux-the-carcajian': {
    personality: [
      "Vigeaux's the guy who just moves first cause he's tired of standing around waiting on everybody else to decide something. Talks in this flat, dry, no-extra-words way, doesn't matter if he's joking around or telling you to get moving. Handles chaos like it's just another Tuesday, nothing really rattles him.",
      "Pretty much fearless about most stuff, but he's got this one specific thing that gets under his skin every single time (you'll have to ask him what it is, he won't just tell you). Total softie for his people though, no hesitation jumping in if someone needs help, but he's also weirdly strict about being fair even while he's the first one eyeballing anything shiny and trying to figure out how he can keep some for himself. Gives everybody endless grief, can take a joke thrown back at him without getting pouty about it, and basically leads just by being the first idiot to move.",
    ],
  },
};
