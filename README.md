# The Clutch — site

## To view it on your computer

Just double-click **index.html**. It'll open in your browser. That's it —
no server, no terminal, nothing to install.

(Reopen it any time the same way, or bookmark the file.)

## To add panels to an issue

Say you're adding pages to Issue 7:

1. Copy your page images (PNG or JPG) into the `panels/issue-07/` folder.
   Name them something you can put in order, like `page-01.png`,
   `page-02.png`, `page-03.png`...

2. Open `panels/issue-07/manifest.js` in a plain text editor (Notepad on
   Windows, TextEdit on Mac — set to plain text mode, not rich text).

3. It looks like this:

   ```
   window.CLUTCH_MANIFEST = {
     "issue": 7,
     "pages": []
   };
   ```

4. Type your filenames into the `"pages": []` part, in the order you want
   them read, like this:

   ```
   window.CLUTCH_MANIFEST = {
     "issue": 7,
     "pages": [
       "page-01.png",
       "page-02.png",
       "page-03.png"
     ]
   };
   ```

   Each filename needs quotes around it and a comma after it (except the
   last one). Save the file.

5. Double-click `index.html` again (or hit refresh if it's already open).
   Issue 7 should now show a page count instead of "awaiting panels," and
   clicking into it opens the reader with your pages.

**Optional cover image:** drop a file named `cover` into `panels/issue-07/`
— `.jpg`, `.jpeg`, `.png`, or `.webp` all work — and it'll automatically
show as the thumbnail on the archive page.

## To rename an issue's title

Open `data/issues.js` in a text editor. Each issue has a `"title"` field —
change the text between the quotes, save, refresh.

## Reader controls

- Click the left or right edge of the page, or use the arrow keys / spacebar
- The thumbnail strip at the bottom jumps to any page
- The counter in the top bar shows where you are in the issue

## Putting it on your buddy's hosting

Once he gives you access (either cPanel or FTP login):

**cPanel:** log in, open **File Manager**, go to `public_html` (or
whatever folder he tells you to use), and upload everything that's
*inside* this `clutch-site` folder — `index.html`, `css/`, `js/`, `data/`,
`panels/` — directly into that folder.

**FTP:** use a free program like [FileZilla](https://filezilla-project.org/),
connect with the login he gives you, and drag the same files over into
`public_html`.

Updating later is the same either way: overwrite the changed file(s) on
the server. No rebuilding, no redeploying — it's just files.

## Before uploading your real art

Full-resolution PNGs get large fast. Before dropping panels into the
`panels/` folders, resize the long edge down to roughly 1800–2000px and
save as `.jpg` or `.webp` instead of `.png`. That alone usually cuts file
size by 70–90% with no visible difference on screen, and keeps things
fast to upload and load. Keep your full-res originals wherever you
already store them — the site only needs the smaller copies.
