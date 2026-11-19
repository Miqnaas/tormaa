# TORMA 2027 — Strategic Intelligence Platform

Arabic-first (RTL) interactive research & decision platform built from the source document
`Torma (Refrence os strategy__).docx` (≈497 pages). Next.js 15 (App Router) · TypeScript · Tailwind · fully static (SSG) · Vercel-ready.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static generation of ~606 pages
npm run start
```

Optional checks:

```bash
npm run validate   # every curated block reference resolves to the source inventory
npm run linkcheck  # crawl a running server (default http://localhost:3100) for broken internal links
```

## Deploy to Vercel

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel: **Add New → Project → Import** the repository. Framework preset: **Next.js** (auto-detected). No environment variables are needed.
3. Build command `npm run build`, output handled by Next.js. Node ≥ 18.18.
4. The site sets `robots: noindex`. To restrict access, enable **Vercel Deployment Protection** (password / Vercel Authentication) in Project → Settings → Deployment Protection.

Alternatively: `npx vercel` from this folder, then `npx vercel --prod`.

## Re-ingesting the source (only if the DOCX changes)

Requires `pandoc` and Python 3.

```bash
cd source && unzip -o -q torma-reference.docx -d unz && pandoc torma-reference.docx -t json -o ast.json
python3 -I ../scripts/ingest/extract.py ast.json elements.json && cd ..
npm run ingest && npm run validate
```

The build fails if any source element is left without a block, or any block without a section.
Block IDs (`Dxx-Byy`) are stable for a given source + segmentation rules (`scripts/ingest/architecture.py`).
If rules change, `npm run validate` flags any curated reference that no longer resolves.

## Architecture

| Route | Purpose |
|---|---|
| `/` | Executive Decision Center (reality, discoveries, opportunities, risks, choices, priorities, roadmap, chapters) |
| `/chapters/[slug]` | Chapter landing: strategic question, narrative, interactive section index with evidence mix |
| `/chapters/[slug]/[section]` | 71 sections: Layer 1 insight → interactive visual → Layer 2 full source text → Layer 3 evidence strip per block |
| `/research-library` | Search + filters (chapter, source study, evidence class) across all 519 blocks |
| `/research-library/[id]` | Any block in full, with source record, canonical home and citations |
| `/research-library/sources` | 34-source public evidence register + missing workbook register |
| `/decisions`, `/roadmap` | Decision register & gates; 2027 roadmap & 90-day Gantt |
| `/methodology` | Ingestion method, coverage matrix summary, QA/contradiction register, platform architecture (00.01) |

```
source/                      original DOCX + extracted elements.json (5,857 ordered elements)
scripts/ingest/              extract.py (pandoc AST → elements), architecture.py (6 chapters / 71 sections / 34 source docs), build_content.py
scripts/validate/            validate.mjs (curated refs), linkcheck.mjs
src/content/generated/       per-section JSON (server-only), block index, sources, assets, stats
src/content/curated/         hand-verified datasets for visuals + Layer-1 insights (every value cites a block ID)
src/components/chapter01/    Store audit, Shofy audit, market dashboard, competitor explorer, pricing ranges, geo map, JTBD, trends, white space, baseline
src/components/strategy/     Growth scenario, engines & flywheel, product roles, decision gates, exhibition, segments, unit economics + waterfall, CRM pilot, budgets, roadmap
src/lib/formatting/bidi.tsx  RTL/LTR isolation (every Latin/number run wrapped in <bdi dir="ltr">)
public/research/             9 figures embedded in the DOCX + lazy-loaded search index
reports/                     coverage-matrix.csv, curated-reference-check.txt, MISSING-ASSETS.md, QA-REPORT.md
```

## Evidence rules
Statuses: verified · reported · interpretation · hypothesis · recommendation · illustrative · pending · approved · implemented.
Block-level classifications are editorial (by study type / section heading) and say so on hover. The source contains **no approved decisions and no implemented actions**, so those two statuses are never shown on content.
