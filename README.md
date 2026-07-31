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

## DM Toolkit

`toolkit/` is a hosted copy of the Dungeon Master's Toolkit — a big
self-contained offline bundle (spell library, maps, party portraits). It's
deliberately untouched/unmodified when copied in: no live data, no site
styling, just the toolkit as authored (renamed to `app.html`, with a thin
`index.html` wrapper adding the "back to the site" bar). Update it with:

```
.\sync-toolkit.ps1
```

**How the toolkit's content itself gets updated:** `Unified DM workspace
(1)/DM Toolkit Folder` — the folder this pulls from — is its own git repo
(github.com/Viqeaux/dm-toolkit), so multiple people can contribute without
clobbering each other. Matt (who builds the toolkit bundle) has an
"Update Toolkit" button that pulls the latest, replaces the repo's
contents with his fresh export, and pushes — no git commands for him to
learn. `sync-toolkit.ps1` pulls that repo's latest automatically before
syncing, so you're always grabbing whatever's newest on GitHub, not
whatever happened to be sitting in the folder last. Run with `-DryRun`
first to preview, `-SourceDir` if that folder isn't in its usual place, or
`-SkipPull` to sync whatever's on disk right now without pulling first.

### It's gated behind a password (not Cloudflare Access)

`/toolkit` is protected by HTTP Basic Auth, enforced server-side in
`worker.js` — the browser's native login prompt, one shared
username/password. The password is never shipped to the browser (unlike a
JS-based prompt, there's nothing to find by viewing page source), but it's
also not per-person and there's no login audit trail. Good enough to keep
this off search engines and out of randoms' hands; not meant to withstand
a determined, targeted attacker. (Cloudflare Access — real per-person
login — was the original plan, but it wanted a credit card on file even
for the free tier, so this is the no-cost alternative.)

**One-time setup**, from this folder, after `wrangler login`:

```
wrangler secret put TOOLKIT_PASSWORD
```

It'll prompt you to type the real password directly into your terminal —
it's stored on Cloudflare's side and never written into this repo. The
username is hardcoded in `worker.js` as `clutch` (not a secret — change it
there directly if you want something else).

`wrangler.toml` has `run_worker_first = ["/toolkit", "/toolkit/*"]` so only
requests to those paths run through `worker.js` at all — every other page
on the site is still served directly as a static file, same as before.

If the secret is ever unset (fresh deploy before running the command
above), the toolkit fails closed with a 500 rather than serving the
content unprotected — but set it before your first deploy of `toolkit/`
so there's no window where it's reachable at all.

For local testing only: `.dev.vars` (gitignored, never deployed) holds a
throwaway password for `wrangler dev` — that file is not the real secret
and doesn't need to match it.

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

`clutch_automation/publish_issue.py` does this automatically (defaults to
WebP now — smaller than JPG at equivalent quality, universal browser
support). If you ever need to retroactively convert issues that were
published before this existed (or as raw PNG for any other reason), run
`clutch_automation/optimize_published_panels.py` — it converts every
`panels/issue-*/` folder still holding PNGs, rewrites each `manifest.js`
to match, and stages the change (same "review before you push" pattern as
everything else here). One thing it can't see: cover images some issues
reference outside the manifest (found by `js/campaign-shared.js`'s
`findCover()` scanning for `cover`/`Cover`/`COVER` + any extension) — check
for those by hand with `find panels -iname "*.png"` after running it.
