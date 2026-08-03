# Changelog

All notable changes to this site are recorded here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/); versions follow
[Semantic Versioning](https://semver.org/) — MAJOR for big structural/hosting
changes, MINOR for new features or content sections, PATCH for small fixes.

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
