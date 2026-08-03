<#
.SYNOPSIS
    Re-syncs the DM Toolkit into clutch-site/toolkit/.

.DESCRIPTION
    Replaces clutch-site/toolkit/ with a fresh copy of the DM Toolkit
    Folder's contents, renamed to app.html, then (re)writes a thin
    index.html wrapper around it - a small bar with a link back to the
    main site, plus an iframe loading app.html. This is what makes "back
    to the site" possible without ever editing the toolkit bundle itself.

    The toolkit bundle itself stays untouched by this: it's copied
    wholesale as a self-contained offline bundle, exactly as it's
    authored. This script does not read or modify anything inside it.
    Note: /toolkit is not currently password-gated (see README.md).

.PARAMETER SourceDir
    Path to the DM Toolkit Folder. Defaults to
    "..\..\Unified DM workspace (1)\DM Toolkit Folder" relative to this
    script - override if your folders aren't laid out the same way. If
    that folder is a git repo (it is, as of the dm-toolkit GitHub repo),
    this pulls the latest there first, so you always sync whatever the
    team's most recently pushed - including Matt's "Update Toolkit"
    button runs - without a separate manual git pull step.

.PARAMETER SkipPull
    Don't pull the source folder even if it's a git repo - just sync
    whatever's there right now.

.PARAMETER DryRun
    Print what would happen without changing anything on disk.

.EXAMPLE
    .\sync-toolkit.ps1

.EXAMPLE
    .\sync-toolkit.ps1 -SourceDir "D:\DND\DM Toolkit Folder" -DryRun
#>
param(
    [string]$SourceDir = (Join-Path $PSScriptRoot "..\..\Unified DM workspace (1)\DM Toolkit Folder"),
    [switch]$SkipPull,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"

$SourceDir = (Resolve-Path -LiteralPath $SourceDir -ErrorAction Stop).Path
$DestDir = Join-Path $PSScriptRoot "toolkit"

$WrapperHtml = @'
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>The Clutch &mdash; DM Toolkit</title>
<meta name="robots" content="noindex, nofollow">
<style>
  html, body { margin: 0; padding: 0; height: 100%; background: #0b0a0d; }
  .toolkit-bar {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 1rem;
    background: #161319;
    border-bottom: 1px solid #33303c;
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 0.78rem;
    letter-spacing: 0.05em;
  }
  .toolkit-bar a {
    color: #e3c583;
    text-decoration: none;
  }
  .toolkit-bar a:hover { color: #9377cf; }
  .toolkit-frame {
    display: block;
    width: 100%;
    height: calc(100% - 40px);
    border: 0;
  }
</style>
</head>
<body>
  <div class="toolkit-bar"><a href="../index.html">&larr; Back to The Clutch</a></div>
  <iframe class="toolkit-frame" src="app.html" title="Dungeon Master Toolkit"></iframe>
</body>
</html>
'@

Write-Host "[SYNC-TOOLKIT] Source: $SourceDir"
Write-Host "[SYNC-TOOLKIT] Dest:   $DestDir"
if ($DryRun) { Write-Host "[SYNC-TOOLKIT] Mode:   DRY RUN - nothing will be changed`n" }
else { Write-Host "" }

$sourceIsGitRepo = Test-Path -LiteralPath (Join-Path $SourceDir ".git")
if ($sourceIsGitRepo -and -not $SkipPull) {
    if ($DryRun) {
        Write-Host "[SYNC-TOOLKIT] Would pull the latest from git in $SourceDir first"
    } else {
        Write-Host "[SYNC-TOOLKIT] Source is a git repo - pulling the latest first..."
        # Best-effort: git writes "Already on 'main'" etc. to stderr, which
        # PowerShell can treat as a terminating error under
        # $ErrorActionPreference = "Stop" even though it's not a real
        # failure - wrap in try/catch rather than relying on 2>$null.
        try { git -C $SourceDir checkout main 2>&1 | Out-Null } catch {}
        # Known quirk on this git/Windows combo: a pull can leave behind a
        # stale .lock file (AUTO_MERGE.lock, packed-refs.lock, etc.) without
        # cleaning it up, which then blocks the *next* pull with a
        # scary-looking (but harmless) lock error. If nothing else is using
        # this repo right now, any .lock file sitting in .git/ is stale -
        # clear them all first so this doesn't compound run after run.
        Get-ChildItem -LiteralPath (Join-Path $SourceDir ".git") -Filter "*.lock" -Recurse -ErrorAction SilentlyContinue |
            Remove-Item -Force -ErrorAction SilentlyContinue
        git -C $SourceDir pull origin main
        if ($LASTEXITCODE -ne 0) {
            Write-Warning "git pull failed in $SourceDir - continuing with whatever's on disk there now. Run with -SkipPull to silence this, or fix the pull manually first."
        }
    }
}

# Find the toolkit's main HTML file. Named "Dungeon Master's Toolkit.html" as
# of this writing, but matched loosely (any .html directly in the source
# root) in case a future export renames it slightly.
$mainHtml = Get-ChildItem -LiteralPath $SourceDir -Filter "Dungeon Master's Toolkit.html" -File -ErrorAction SilentlyContinue
if (-not $mainHtml) {
    $mainHtml = Get-ChildItem -LiteralPath $SourceDir -Filter "*.html" -File | Select-Object -First 1
}
if (-not $mainHtml) {
    Write-Error "No .html file found directly inside $SourceDir - is this really the DM Toolkit Folder?"
    exit 1
}
Write-Host "[SYNC-TOOLKIT] Main HTML file: $($mainHtml.Name)"

if ($DryRun) {
    Write-Host "[SYNC-TOOLKIT] Would remove existing $DestDir (if present)"
    Write-Host "[SYNC-TOOLKIT] Would copy all contents of $SourceDir -> $DestDir"
    Write-Host "[SYNC-TOOLKIT] Would rename toolkit\$($mainHtml.Name) -> toolkit\app.html"
    Write-Host "[SYNC-TOOLKIT] Would (re)write toolkit\index.html as the back-link wrapper"
    Write-Host "`n[DRY RUN COMPLETE] No files were changed."
    exit 0
}

if (Test-Path -LiteralPath $DestDir) {
    Write-Host "[SYNC-TOOLKIT] Removing existing $DestDir ..."
    Remove-Item -LiteralPath $DestDir -Recurse -Force
}

Write-Host "[SYNC-TOOLKIT] Copying toolkit contents..."
New-Item -ItemType Directory -Path $DestDir -Force | Out-Null
Copy-Item -Path (Join-Path $SourceDir "*") -Destination $DestDir -Recurse -Force

$copiedHtml = Join-Path $DestDir $mainHtml.Name
Rename-Item -LiteralPath $copiedHtml -NewName "app.html" -Force
Write-Host "[SYNC-TOOLKIT] Renamed $($mainHtml.Name) -> app.html"

$WrapperHtml | Set-Content -LiteralPath (Join-Path $DestDir "index.html") -NoNewline
Write-Host "[SYNC-TOOLKIT] Wrote index.html (back-link wrapper around app.html)"

Write-Host "`n[DONE] clutch-site/toolkit/ is up to date with:"
Write-Host "  $SourceDir"
Write-Host "`nThis repo IS tracked by git - review before committing:"
Write-Host "  git status"
Write-Host "  git add toolkit/"
Write-Host "  git commit -m `"Update DM Toolkit`""
Write-Host "  git push"
