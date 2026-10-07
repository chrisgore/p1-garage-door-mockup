# P1 Garage Door Repair — website

Astro static site. Gulf livery (powder blue, orange, navy). Live mockup: https://p1-garage-door.pages.dev/

## Run locally
```bash
npm install
npm run dev     # http://localhost:4321/
npm run build   # output in dist/
```

## Where things live
| What | File |
|---|---|
| Business name, phone, address, hours | `src/config/site.ts` |
| Service pages (8) | `src/data/services.ts` |
| City pages (12) | `src/data/cities.ts` |
| FAQ page | `src/data/faqs.ts` |
| Reviews, specials, symptom picker | `src/data/reviews.ts`, `specials.ts`, `diagnose.ts` |
| Colors and layout | `src/styles/global.css` |

Deploy: `npm run deploy` (builds, then uploads to Cloudflare Pages project `p1-garage-door`).

## Before launch
1. Replace every `PLACEHOLDER` in `src/config/site.ts` (phone, address, rating, owner).
2. Real reviews, real offers and prices, owner photo and bio.
3. Connect the estimate form (Formspree, Web3Forms or similar).
4. Point the real domain at the Cloudflare Pages project and build with `SITE_URL=https://<domain>`.
5. Set `isMockup: false` in `src/config/site.ts` (removes the banner and the noindex tag) and replace `public/robots.txt` with an allow rule plus a sitemap.
