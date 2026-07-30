// Edit issue titles here. This is a plain JS file (not JSON) on purpose —
// it lets the site open directly from your file browser, no server needed.
//
// Issues are grouped into campaigns. Exactly one campaign should have
// "status": "active" — that's the one shown large in the center of the
// archive page. Every other campaign shows up as a collapsed tab in the
// side rails; click one to expand its issue list.
//
// To start a new campaign: add a new entry to "campaigns", set its
// "status" to "active", and change the old active campaign's status to
// "past". Keep issue "number" values unique and increasing across every
// campaign (don't restart at 1) — the reader page looks issues up by
// number alone.
window.CLUTCH_DATA = {
  "series": "The Clutch",
  "arc": "Tales from the Table",
  "campaigns": [
    {
      "id": "expedition-barrier-peaks",
      "name": "Expedition to the Barrier Peaks",
      "status": "active",
      "issues": [
        { "id": 1, "number": 1, "title": "Issue 1", "folder": "issue-01" },
        { "id": 2, "number": 2, "title": "Issue 2", "folder": "issue-02" },
        { "id": 3, "number": 3, "title": "Issue 3", "folder": "issue-03" },
        { "id": 4, "number": 4, "title": "Issue 4", "folder": "issue-04" },
        { "id": 5, "number": 5, "title": "Issue 5", "folder": "issue-05" },
        { "id": 6, "number": 6, "title": "Issue 6", "folder": "issue-06" },
        { "id": 7, "number": 7, "title": "Issue 7", "folder": "issue-07" },
        { "id": 8, "number": 8, "title": "Issue 8", "folder": "issue-08" },
        { "id": 9, "number": 9, "title": "Issue 9", "folder": "issue-09" }
      ]
    }
  ]
};
