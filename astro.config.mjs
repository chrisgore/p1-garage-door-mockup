import { defineConfig } from 'astro/config';

// Hosted on Cloudflare Pages at the domain root. SITE_URL overrides the address
// (set it to the client's real domain at launch).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://p1-garage-door.pages.dev',
  base: '/',
  trailingSlash: 'always',
});
