// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Drives canonical URLs, og:url/og:image, sitemap.xml, and robots.txt.
  site: 'https://www.asquaretechservices.com',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});