// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User/organization GitHub Pages site (served at the domain root),
// so no `base` path is required. If you ever host this under a
// project repo (e.g. github.com/simardhillon17/portfolio), set
// `base: '/portfolio'` and update links accordingly.
export default defineConfig({
  site: 'https://simardhillon17.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
