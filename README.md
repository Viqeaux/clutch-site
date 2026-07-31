# The Clutch — site

Live at: https://clutch-site.theclutchcomic.workers.dev

## To view it on your computer

Just double-click **index.html**. It'll open in your browser, no server or
install needed. (Live character stats won't load this way since browsers
block that kind of request from a local file — you'll see the saved
snapshot instead, which is normal.)

## To add a new issue (automated)

If the issue came out of the `clutch_automation` pipeline (GPT Image
Generator/clutch_automation), don't do this by hand — run:

```
python publish_issue.py --issue 10
```

from `clutch_automation/`. It resizes the pages, writes `manifest.js`, adds
the entry to `data/issues.js` (the step everyone used to forget), copies any
updated character portraits, and stages everything with `git add` in this
repo — but does not commit or push, so you can review the art first. See
`clutch_automation/README.md` for details.

## To add a new issue (manual)

Say you're adding Issue 10 by hand:

1. Create `panels/issue-10/` and drop the page images in (PNG or JPG),
   named so they sort in order — `p1.png`, `p2.png`, `p3.png`... A file
   named `cover` (`.jpg`/`.jpeg`/`.png`/`.webp`) is optional and becomes
   the thumbnail on the archive page.

2. In that same folder, create `manifest.js`:

   ```
   window.CLUTCH_MANIFEST = {
     "issue": 10,
     "pages": [
       "cover.png",
       "p1.png",
       "p2.png",
       "p3.png"
     ]
   };
   ```

   List filenames in reading order, each in quotes with a comma after
   (except the last). If you list a page here before the image exists yet,
   it's fine — the site just skips anything it can't find rather than
   showing a broken image.

3. **Don't skip this step** — open `data/issues.js` and add an entry to
   the active campaign's `issues` array:

   ```
   { "id": 10, "number": 10, "title": "Issue 10", "folder": "issue-10" }
   ```

   The manifest alone isn't enough — this is the part that actually makes
   the site aware the issue exists. (This has been the cause of "why isn't
   my new issue showing up" every time so far.)

4. Refresh the site. The homepage cover automatically shows whichever
   issue has the highest number, so a new issue becomes the featured one
   as soon as it's registered.

## To rename an issue's title, or start a new campaign

Both are edited in `data/issues.js` — there's a comment at the top of that
file explaining the campaign structure and the rule about issue numbers
always counting up, never restarting.

## Characters

- Stats pull live from the party's Google Sheet (`js/characters-shared.js`
  has the sheet ID). If that fetch fails — no internet, sheet made
  private, viewing the site as a local file — it falls back to the saved
  snapshot in `data/characters.js`.
- Personality blurbs aren't on the sheet — they live in
  `data/character-notes.js`, keyed by character slug.
- Portrait photos go in `characters/`, named to match either the
  character's first name or full slug (see `characters/README.txt`).
- A character marked `"status": "resting"` in the sheet is hidden from
  the Meet The Clutch gallery but still has a working page if linked
  directly.
- Character *appearance* (for keeping art prompts consistent — outfit,
  colors, distinguishing details) lives in `data/character-art-notes.js`.
  This is a different thing from stats or personality, and it's the
  canonical file both this site and the `clutch_automation` image-gen
  pipeline read — edit it, don't edit the old docx/PDF in the GPT Image
  Generator folder, which are historical only now.

## World Bible

Campaign lore — locations, recurring threats, notable items, open plot
threads — lives in `data/world-bible.js`. Same deal as the character art
notes: this is the canonical, human-edited copy that both a future site
page and the `clutch_automation` pipeline can read. It's kept in sync with
(but is not the same file as) `clutch_automation/instructions/Character_Arcs.md`,
which is the fuller session-by-session log the table keeps during play.

## Reader

Issue pages show as a click-through grid; clicking a page opens it in a
full-screen lightbox with page-flip animation between pages, pinch/scroll/
double-click zoom, and drag-to-pan while zoomed in.

## Updating the live site

This folder is a git repo connected to Cloudflare (auto-deploys on push
to `main`). The usual flow, once changes are ready:

```
git add -A
git commit -m "describe the change"
git push
```

Cloudflare picks it up and it's live within about a minute — no manual
uploading, no dragging folders anywhere.

## Before uploading your real art

Full-resolution PNGs get large fast. Before dropping panels into the
`panels/` folders, resize the long edge down to roughly 1800–2000px and
save as `.jpg` or `.webp` instead of `.png`. That alone usually cuts file
size by 70–90% with no visible difference on screen, and keeps things
fast to upload and load. Keep your full-res originals wherever you
already store them — the site only needs the smaller copies.
