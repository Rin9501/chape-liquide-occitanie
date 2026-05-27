import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://chapeliquide-occitanie.fr',
  integrations: [tailwind({ applyBaseStyles: false })],
});