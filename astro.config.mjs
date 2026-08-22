// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before launch.
  // Drives canonical URLs, og:url/og:image, sitemap.xml, and robots.txt.
  site: 'https://example.com',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});