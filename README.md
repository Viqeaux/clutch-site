# The Clutch — site

Deployment is moving off Cloudflare/GitHub to a new server (Puck) as of
2026-07 — the "Updating the live site" section below describes the old
GitHub->Cloudflare flow, which is being retired. Check with whoever's
handling the Puck side for the current upload step if it's not documented
here yet.

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
the entry to `data/issues.js` (the step everyone used to forget), and copies
any updated character portraits — all locally in this folder, nothing gets
deployed automatically, so you can review the art before uploading it. See
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

### It's currently not password-gated

`/toolkit` used to be protected by HTTP Basic Auth enforced in a
Cloudflare Worker (`worker.js` + `wrangler.toml`), from when the site was
deployed as a Cloudflare Worker. That whole mechanism only worked because
Cloudflare Workers was the thing actually serving the site — now that
hosting has moved to Puck (see [`deploy.ps1`](deploy.ps1) and the
"Updating the live site" section below), Cloudflare isn't in the request
path anymore, so that gate wasn't doing anything — confirmed by
`/toolkit` returning a plain `200` with no login prompt. Removed rather
than left in place quietly not working.

The only protection right now is `<meta name="robots" content="noindex,
nofollow">` in `toolkit/index.html`, which keeps it out of search engines
but does **not** stop anyone with the direct URL from opening it. If this
needs real access control again, that's a server-side conversation with
Aaron (e.g. HTTP Basic Auth in the Puck web server's config for the
`/toolkit` path) rather than anything this repo can enforce on its own
now that it's just static files being served by someone else's server.

## Reader

Issue pages show as a click-through grid; clicking a page opens it in a
full-screen lightbox with page-flip animation between pages, pinch/scroll/
double-click zoom, and drag-to-pan while zoomed in.

## Versioning

This site uses [semantic versioning](https://semver.org/) — `MAJOR.MINOR.PATCH`:

- **MAJOR** — big structural changes (a redesign, a hosting pivot like the
  Puck move, restructuring how issues/campaigns work).
- **MINOR** — new features or content sections (a new issue, a new page, a
  new tool like the Toolkit or Party Tracker).
- **PATCH** — small fixes and tweaks that don't add anything new.

The current version lives in [`VERSION`](VERSION) (a single line, e.g.
`1.0.0`) and every release is written up in [`CHANGELOG.md`](CHANGELOG.md).

**To cut a new release**, once your changes are committed and ready to go
out:

1. Add an entry to the top of `CHANGELOG.md` under a new `## [x.y.z] -
   YYYY-MM-DD` heading, describing what changed.
2. Update `VERSION` to match.
3. Commit both together: `git commit -am "Release vX.Y.Z"`.
4. Tag that commit: `git tag vX.Y.Z`.
5. Deploy that exact commit (see below) — so whatever's live always
   corresponds to a tag you can look up later with `git tag -l` or
   `git show vX.Y.Z`.

Push tags along with your branch so GitHub has them too:
`git push origin main --tags`.

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

### A safety net for manually-dropped PNGs

If you ever drop page images straight into `panels/issue-NN/` by hand
(bypassing `publish_issue.py` entirely, the way Issue 2 got its first
draft), there's a git pre-commit hook that catches it: the moment you try
to commit a `.png` under `panels/`, it runs the optimizer automatically,
converts it to WebP, rewrites the manifest, and re-stages before the
commit completes — you never end up committing a raw PNG by accident.

It's not on by default (git hooks live outside the tracked repo, so every
clone has to opt in once):

```
git config core.hooksPath githooks
```

Run that once per machine/clone and it's permanent from then on. Tested
end-to-end (staged PNG → converted → committed as WebP; a commit with no
PNGs passes through untouched, no delay).
