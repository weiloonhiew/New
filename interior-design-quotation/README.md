# Interior Design Quotation Toolkit

Two ways to speed up quotation preparation, both built from your own past
contracts and real 2021-2025 subcontractor/supplier price lists:

1. **Quotation Builder (web app)** — pick items from a searchable, priced
   catalog, watch totals calculate live, and export a client-ready Excel
   file in your own contract wording. This is the primary tool going
   forward.
2. **Excel toolkit** — the same idea as a self-contained spreadsheet, for
   working entirely inside Excel/WPS without a browser.

## Quotation Builder (web app)

Live at: https://claude.ai/artifact/AGKZt79Bx5QFK1QkSpdroQ

Source: `webapp/` (`index.html`, `app.js`, `data.js`, `style.css`) — open
`index.html` directly in a browser if you ever want to run it outside
Claude.

What it does:

- **Quotation tab** — fill in client/site details, then add items to any
  of the 17 work sections (Professional Services, Preliminaries, Hacking,
  Plumbing, Masonry, Waterproofing, Plasterceil, Plastering, Painting,
  Glass, Aluminium & Steel, Carpentry, Worktop, Electrical, Flooring,
  Aircon, Miscellaneous) from a searchable picker. Costs are grounded in
  your own past contracts and in the contractor/supplier price lists you
  supplied (Chang Tou & Unique Home carpentry, GC Electrical, Unique
  Glass, ST Construction hacking, PH Plumbing, GEM plasterceil, Evorich
  flooring, Rainbow Palette painting, and more) — each catalog item shows
  its source on hover. The 25% markup you've used consistently is applied
  automatically to get the client-facing selling price; you can still
  override any unit price per line. Add a custom item any time something
  isn't in the catalog yet.
- **Payment Terms & T&Cs tab** — your standard clauses, pre-filled and
  editable per project.
- **Contractor Directory tab** — your full contact list (~185 contacts
  across ~65 trades), searchable, for quick reference while quoting.
- **Export to Excel** — generates a branded workbook (company header,
  client/site details, numbered sections with subtotals, discount, GST,
  grand total, payment terms, T&Cs) using your contracts' exact wording,
  and hands it to you as a download. Open it in Excel/WPS and export to
  PDF yourself.
- Your in-progress quotation is saved to your browser automatically
  (nothing is sent anywhere except when you export).

## Excel toolkit

- `Interior_Design_Quotation_Toolkit.xlsx` — a two-sheet workbook (Price
  Catalog + Quotation Template) with the same 25% markup logic, built for
  people who'd rather stay entirely inside Excel/WPS. See the workbook's
  own **Read Me** tab for instructions. Its starter catalog predates the
  contractor price lists behind the web app, so treat it as a fallback
  rather than the primary tool.
