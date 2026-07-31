// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://amoremore.hr',
  // clean URLs without trailing slashes: /guest instead of /guest/
  // (GitHub Pages serves guest.html for a /guest request)
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/guest'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', hr: 'hr', de: 'de', pl: 'pl', cs: 'cs', it: 'it' },
      },
    }),
  ],
  i18n: {
    locales: ['en', 'hr', 'de', 'pl', 'cs', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
