<#
.SYNOPSIS
    Re-syncs the DM Toolkit into clutch-site/toolkit/.

.DESCRIPTION
    Replaces clutch-site/toolkit/ with a fresh copy of the DM Toolkit Folder's
    contents, renaming its main HTML file to index.html.

    The toolkit itself stays untouched by this: it's copied wholesale as a
    self-contained offline bundle, exactly as it's authored. This script
    does not read or modify anything inside it, and does not touch the
    Cloudflare Access gate protecting /toolkit/* — that's configured
    separately in the Cloudflare dashboard (see README.md).

.PARAMETER SourceDir
    Path to the DM Toolkit Folder. Defaults to
    "..\..\Unified DM workspace (1)\DM Toolkit Folder" relative to this
    script — override if your folders aren't laid out the same way.

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

Write-Host "[SYNC-TOOLKIT] Source: $SourceDir"
Write-Host "[SYNC-TOOLKIT] Dest:   $DestDir"
if ($DryRun) { Write-Host "[SYNC-TOOLKIT] Mode:   DRY RUN — nothing will be changed`n" }
else { Write-Host "" }

# Find the toolkit's main HTML file. Named "Dungeon Master's Toolkit.html" as
# of this writing, but matched loosely (any .html directly in the source
# root) in case a future export renames it slightly.
$mainHtml = Get-ChildItem -LiteralPath $SourceDir -Filter "Dungeon Master's Toolkit.html" -File -ErrorAction SilentlyContinue
if (-not $mainHtml) {
    $mainHtml = Get-ChildItem -LiteralPath $SourceDir -Filter "*.html" -File | Select-Object -First 1
}
if (-not $mainHtml) {
    Write-Error "No .html file found directly inside $SourceDir — is this really the DM Toolkit Folder?"
    exit 1
}
Write-Host "[SYNC-TOOLKIT] Main HTML file: $($mainHtml.Name)"

if ($DryRun) {
    Write-Host "[SYNC-TOOLKIT] Would remove existing $DestDir (if present)"
    Write-Host "[SYNC-TOOLKIT] Would copy all contents of $SourceDir -> $DestDir"
    Write-Host "[SYNC-TOOLKIT] Would rename toolkit\$($mainHtml.Name) -> toolkit\index.html"
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
Rename-Item -LiteralPath $copiedHtml -NewName "index.html" -Force
Write-Host "[SYNC-TOOLKIT] Renamed $($mainHtml.Name) -> index.html"

Write-Host "`n[DONE] clutch-site/toolkit/ is up to date with:"
Write-Host "  $SourceDir"
Write-Host "`nThis repo IS tracked by git — review before committing:"
Write-Host "  git status"
Write-Host "  git add toolkit/"
Write-Host "  git commit -m `"Update DM Toolkit`""
Write-Host "  git push"
