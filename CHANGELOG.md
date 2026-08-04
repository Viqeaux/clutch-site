# Changelog

All notable changes to this site are recorded here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/); versions follow
[Semantic Versioning](https://semver.org/) — MAJOR for big structural/hosting
changes, MINOR for new features or content sections, PATCH for small fixes.

## [1.2.0] - 2026-08-04

### Added
- New campaign: **Journey of the Rod of Seven Parts**, now the active
  campaign. Issue 10 published (cover + 29 pages), converted from raw
  PNG to WebP (94 MB -> 14 MB, 85% smaller).

### Changed
- **Expedition to the Barrier Peaks** archived (`status: "past"`) — its
  9 issues are unaffected, just collapsed into a side-rail tab now.
- Panel folders are now campaign-scoped:
  `panels/<campaign-id>/issue-NN/` instead of a flat `panels/issue-NN/`.
  All 9 existing issues moved under `panels/expedition-barrier-peaks/`;
  `data/issues.js`'s `"folder"` values updated to match. The site's own
  JS needed no changes (folder was already treated as an opaque path);
  `publish_issue.py`, `optimize_published_panels.py`, and the
  `githooks/pre-commit` PNG-catch pattern were all updated to know about
  the nested structure.

## [1.1.3] - 2026-08-02

### Removed
- The Cloudflare Worker Basic Auth gate for `/toolkit` (`worker.js`,
  `wrangler.toml`, `.dev.vars`, `.assetsignore`) — it stopped doing
  anything once hosting moved to Puck, since Cloudflare Workers is no
  longer what serves the site. Confirmed dead (a plain `200`, no login
  prompt) before removing rather than leaving non-functional security
  code in place. `/toolkit` is currently unprotected except for a
  `noindex, nofollow` meta tag; real access control, if wanted again, is
  a server-side conversation with Aaron.

## [1.1.2] - 2026-08-02

### Fixed
- `deploy.ps1`'s post-deploy `/VERSION` check crashed instead of verifying,
  since `Invoke-WebRequest -UseBasicParsing`'s `.Content` came back as raw
  bytes rather than a string on this PowerShell version. Now decodes
  either shape instead of assuming it's always a string.

## [1.1.1] - 2026-08-02

### Fixed
- `deploy.ps1` extraction failed on Puck when it hit `toolkit/assets/`
  subfolders owned by a different collaborator account (`matt`) — `tar`
  can't restore timestamps on files it doesn't own as a non-root user,
  even though it can still write their contents fine. Added `-m` so tar
  stops trying to restore timestamps at all, since it doesn't matter for
  deployed site files.

## [1.1.0] - 2026-08-02

### Added
- `deploy.ps1` — deploys the site to Puck over SSH. Refuses to run unless
  the working tree is clean and `HEAD` is exactly on a git tag (so it's
  not possible to deploy something that wasn't versioned first), exports
  exactly the git-tracked files at that commit via `git archive`, pushes
  the commit/tags to GitHub, ships the archive to Puck, and checks the
  live site's `/VERSION` afterward to confirm what landed matches what
  was sent.

## [1.0.0] - 2026-08-02

Baseline release — the site as it stood when formal versioning started.

### Added
- Comic reader: issue archive grid, full-screen page-flip lightbox with
  pinch/scroll/double-click zoom and drag-to-pan.
- Character pages pulling live stats from the party's Google Sheet, with a
  saved-snapshot fallback when that fetch isn't available.
- Canonical `data/character-art-notes.js` and `data/world-bible.js` —
  shared source of truth between this site and the `clutch_automation`
  image-generation pipeline.
- DM Toolkit hosted at `/toolkit`, gated behind HTTP Basic Auth, with a
  back-link wrapper to return to the main site.
- Cloudflare Web Analytics beacon.
- Automated issue publishing (`publish_issue.py`) and a git pre-commit
  hook that auto-converts any manually-dropped PNGs under `panels/` to
  WebP before they're committed.

### Changed
- All previously-published issue art converted from PNG to WebP for
  smaller downloads.

### Fixed
- Cover-image filename case sensitivity, which only showed up under real
  case-sensitive web hosting (not local Windows testing).
