# P1 Garage Door Repair — website

Astro static site. Gulf livery (powder blue, orange, navy). Live mockup: https://chrisgore.github.io/p1-garage-door-mockup/

## Run locally
```bash
npm install
npm run dev     # http://localhost:4321/p1-garage-door-mockup/
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

Pushing to `main` rebuilds and redeploys through GitHub Actions.

## Before launch
1. Replace every `PLACEHOLDER` in `src/config/site.ts` (phone, address, rating, owner).
2. Real reviews, real offers and prices, owner photo and bio.
3. Connect the estimate form (Formspree, Web3Forms or similar).
4. Point the real domain: set `site` and `base: '/'` in `astro.config.mjs`.
5. Set `isMockup: false` in `src/config/site.ts` (removes the banner and the noindex tag) and replace `public/robots.txt` with an allow rule plus a sitemap.
