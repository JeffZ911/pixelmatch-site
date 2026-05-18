# pixelmatch-site

Astro blog for **pixelmatch.art/blog** — the editorial arm of
PixelMatch (AI product image generation for ecommerce sellers).

Content (markdown + images) is written into this repo by the
autonomous pipeline in
[`traffic-ops-core`](https://github.com/JeffZ911/traffic-ops-core);
this repo only renders + deploys.

## Stack
- Astro 4
- Tailwind 3 (light palette, violet accent — matches the SaaS landing)
- Cloudflare Pages (deploy target, project: `pixelmatch-blog`)
- AdSense (once approved) + GA4

## Identity
- Domain (canonical): `pixelmatch.art/blog`
- Deploy target (Phase 1-2): `blog.pixelmatch.art`
- Vertical: ecommerce image tools (Amazon FBA / Shopify / Etsy / TikTok Shop)
- `sites.config.niche`: `"ecommerce_tools"`

## URL routing

`astro.config.mjs` sets `base: '/blog'`, so:
- Internal hrefs emit with the `/blog/` prefix.
- Canonical = `https://pixelmatch.art/blog/<slug>`.
- `public/_redirects` rewrites `/blog/*` → `/*` on the bare subdomain
  so prefixed URLs still resolve on `blog.pixelmatch.art`.

Phase 3 will add a Cloudflare Worker on `pixelmatch.art` that rewrites
`/blog/*` to the Pages deployment, dropping the subdomain entirely.
Canonical was always `pixelmatch.art/blog/...`, so Google sees no
change at cutover.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321/blog/
npm run build        # produces dist/ + dist/_pagefind/
```

## Content collections (mirror PATH_BY_TYPE in publish.py)

```
src/content/learn/   → tool_guide articles      → /blog/learn/<slug>/
src/content/compare/ → vs_comparison articles   → /blog/compare/<slug>/
src/content/stories/ → use_case articles        → /blog/stories/<slug>/
src/content/policy/  → policy_guide articles    → /blog/policy/<slug>/
```

## Deployment

Triggered by the `content_pixelmatch.yml` cron in `traffic-ops-core`:
1. Generates articles via the multi-tenant pipeline (`SITE_DOMAIN=pixelmatch.art`)
2. Writes `.md` + images into this repo
3. `git commit + push` back here
4. `wrangler pages deploy dist` ships to Cloudflare Pages

No manual ops once Phase 2 smoke is green.
