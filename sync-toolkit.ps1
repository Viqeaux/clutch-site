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
    authored. This script does not read or modify anything inside it, and
    does not touch the Basic Auth gate protecting /toolkit/* - that's
    configured via `wrangler secret put TOOLKIT_PASSWORD` (see README.md).

.PARAMETER SourceDir
    Path to the DM Toolkit Folder. Defaults to
    "..\..\Unified DM workspace (1)\DM Toolkit Folder" relative to this
    script - override if your folders aren't laid out the same way.

.PARAMETER DryRun
    Print what would happen without changing anything on disk.

.EXAMPLE
    .\sync-toolkit.ps1

.EXAMPLE
    .\sync-toolkit.ps1 -SourceDir "D:\DND\DM Toolkit Folder" -DryRun
#>
param(
    [string]$SourceDir = (Join-Path $PSScriptRoot "..\..\Unified DM workspace (1)\DM Toolkit Folder"),
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
