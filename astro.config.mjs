import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chapeliquide-occitanie.fr',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Exclu : pages de remerciement post-formulaire (transitoires, pas de valeur
      // de recherche) et guide-pdf (deja en noindex, voir guide-pdf.astro).
      filter: (page) =>
        !page.includes('/merci') && !page.includes('/guide-pdf'),
      // Horodate chaque URL a la date du build -> le sitemap ne peut plus jamais
      // rester fige (probleme trouve lors de l'audit SEO du 03/08/2026 : l'ancien
      // sitemap statique n'avait pas bouge depuis juin malgre des mises a jour
      // de contenu).
      lastmod: new Date(),
    }),
  ],
  build: {
    // Genere des fichiers .html a plat (chape-liquide-foix.html) plutot que des
    // dossiers avec index.html. Sans ca, Netlify redirige en 301 chaque page
    // vers sa version avec slash final, alors que canonical/sitemap/liens
    // internes utilisent tous la forme sans slash (audit SEO du 03/08/2026).
    format: 'file',
  },
});