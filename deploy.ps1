<#
.SYNOPSIS
    Deploys the site's current tagged version to Puck.

.DESCRIPTION
    This is the piece that makes "which version is live" a fact you can
    check instead of something you have to remember: it refuses to run
    unless the working tree is clean and HEAD is exactly on a git tag, so
    it's not possible to deploy something that wasn't versioned first. It
    then exports exactly the git-tracked files at that commit (via `git
    archive` - nothing untracked, nothing gitignored, ever goes out),
    ships that to Puck over SSH, and finally checks the live site's
    /VERSION file to confirm what actually landed matches what was sent.

    Known limitation: this only adds/overwrites files on the server, it
    doesn't delete files there that were removed locally since the last
    deploy. Fine for a site that mostly grows (new issues, new pages); if
    a deploy ever needs to *remove* something from Puck, that file has to
    be deleted there by hand (or ask Aaron about rsync --delete).

.PARAMETER RemoteUser
    SSH username on Puck. Defaults to "chad".

.PARAMETER RemoteHost
    Puck's hostname. Defaults to "puck.balconylabs.com".

.PARAMETER RemotePath
    Destination folder on Puck, resolved relative to that user's home
    directory. Defaults to "theclutch" (a symlink to /var/www/theclutch).

.PARAMETER SiteUrl
    Base URL to check /VERSION against after deploying.

.PARAMETER SkipPush
    Don't push the commit/tag to GitHub first - just deploy whatever's
    tagged locally.

.PARAMETER SkipVerify
    Don't check the live /VERSION after deploying.

.PARAMETER DryRun
    Print what would happen without changing anything.

.EXAMPLE
    .\deploy.ps1

.EXAMPLE
    .\deploy.ps1 -DryRun
#>
param(
    [string]$RemoteUser = "chad",
    [string]$RemoteHost = "puck.balconylabs.com",
    [string]$RemotePath = "theclutch",
    [string]$SiteUrl = "https://theclutch.quest",
    [switch]$SkipPush,
    [switch]$SkipVerify,
    [switch]$DryRun
)

$ErrorActionPreference = "Stop"
$remote = "$RemoteUser@$RemoteHost"

Write-Host "[DEPLOY] Checking working tree is clean..."
$dirty = git status --porcelain
if ($dirty) {
    Write-Error "Working tree has uncommitted changes - commit (or stash) them first, so what gets deployed matches a real commit:`n$dirty"
    exit 1
}

Write-Host "[DEPLOY] Checking HEAD is exactly on a tag..."
$tag = $null
try { $tag = (git describe --tags --exact-match HEAD 2>$null) } catch {}
if (-not $tag) {
    Write-Error "HEAD isn't exactly on a tag. Cut a release first:`n  1. Update CHANGELOG.md and VERSION`n  2. git commit -am `"Release vX.Y.Z`"`n  3. git tag vX.Y.Z`n  then re-run this script."
    exit 1
}
Write-Host "[DEPLOY] On tag: $tag"

$localVersion = (Get-Content -LiteralPath (Join-Path $PSScriptRoot "VERSION") -Raw).Trim()
if ($tag -ne "v$localVersion" -and $tag -ne $localVersion) {
    Write-Warning "VERSION file says '$localVersion' but the git tag is '$tag' - they should normally match. Continuing anyway."
}

if ($DryRun) {
    if (-not $SkipPush) { Write-Host "[DEPLOY] Would run: git push origin main --tags" }
    Write-Host "[DEPLOY] Would export tracked files at $tag via git archive"
    Write-Host "[DEPLOY] Would scp the archive to ${remote}:/tmp"
    Write-Host "[DEPLOY] Would ssh into $RemoteHost and extract it into $RemotePath"
    if (-not $SkipVerify) { Write-Host "[DEPLOY] Would then check $SiteUrl/VERSION" }
    Write-Host "`n[DRY RUN COMPLETE] Nothing was deployed."
    exit 0
}

if (-not $SkipPush) {
    Write-Host "[DEPLOY] Pushing commit and tags to GitHub..."
    git push origin main --tags
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "git push failed - continuing with the deploy anyway, but GitHub won't have $tag until you push manually."
    }
}

$tempTar = Join-Path $env:TEMP "clutch-site-$tag.tar"
Write-Host "[DEPLOY] Exporting tracked files at $tag..."
git archive --format=tar --output=$tempTar HEAD
if ($LASTEXITCODE -ne 0) { Write-Error "git archive failed"; exit 1 }

Write-Host "[DEPLOY] Copying to ${remote}:/tmp ..."
scp $tempTar "${remote}:/tmp/clutch-site-deploy.tar"
if ($LASTEXITCODE -ne 0) { Write-Error "scp failed"; exit 1 }

Write-Host "[DEPLOY] Extracting into $RemotePath on $RemoteHost ..."
# -m (--touch) skips restoring original timestamps: some folders under
# toolkit/assets/ are owned by a different collaborator's account (matt),
# and only a file's owner (or root) can call utime() on it - a non-root
# `chad` extracting on top of them can still write the file contents fine,
# it just can't touch their mtime. Without -m, tar exits nonzero on that
# even though every file extracted correctly.
ssh $remote "tar -xmf /tmp/clutch-site-deploy.tar -C $RemotePath && rm -f /tmp/clutch-site-deploy.tar"
if ($LASTEXITCODE -ne 0) { Write-Error "Remote extract failed"; exit 1 }

Remove-Item -LiteralPath $tempTar -Force -ErrorAction SilentlyContinue
Write-Host "[DEPLOY] Sent $tag to $RemoteHost."

if (-not $SkipVerify) {
    Write-Host "[DEPLOY] Verifying live /VERSION..."
    try {
        # -UseBasicParsing's .Content can come back as a raw byte array
        # instead of a string depending on the response's content type -
        # handle both rather than assuming .Content is always a string.
        $response = Invoke-WebRequest -Uri "$SiteUrl/VERSION" -UseBasicParsing
        if ($response.Content -is [byte[]]) {
            $liveVersion = [System.Text.Encoding]::UTF8.GetString($response.Content).Trim()
        } else {
            $liveVersion = $response.Content.Trim()
        }
        if ($tag -eq "v$liveVersion" -or $tag -eq $liveVersion) {
            Write-Host "[DEPLOY] Confirmed: $SiteUrl/VERSION reports '$liveVersion' - matches $tag."
        } else {
            Write-Warning "$SiteUrl/VERSION reports '$liveVersion', expected something matching $tag. Give it a moment (caching) and check again before assuming something's wrong."
        }
    } catch {
        Write-Warning "Couldn't fetch $SiteUrl/VERSION to verify ($_). Check it manually in a browser."
    }
}

Write-Host "`n[DONE] $tag is live on $RemoteHost."
