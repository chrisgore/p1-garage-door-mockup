import { defineConfig } from 'astro/config';

// Mockup is served from GitHub Pages under /p1-garage-door-mockup/.
// When the client's real domain is ready: set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://chrisgore.github.io',
  base: '/p1-garage-door-mockup',
  trailingSlash: 'always',
});
