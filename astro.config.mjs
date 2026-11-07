// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Feeds canonical URLs, OG tags, and the sitemap. Change this if the site
  // moves to a custom domain — and change it only once, since each change
  // reshuffles what search engines have indexed.
  site: 'https://ethanli.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
