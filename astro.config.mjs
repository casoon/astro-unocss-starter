import { defineConfig } from 'astro/config';
import crawlerPolicy from '@casoon/astro-crawler-policy';
import postAudit from '@casoon/astro-post-audit';
import astroSitemap from '@casoon/astro-sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  site: 'https://example.com',
  server: { port: 8080 },
  integrations: [
    UnoCSS(),
    astroSitemap(),
    crawlerPolicy({
      preset: 'citationFriendly',
      sitemaps: ['/sitemap.xml'],
      output: {
        llmsTxt: true,
      },
    }),
    postAudit({
      preset: 'relaxed',
      failOn: 'errors',
      rules: {
        html_basics: {
          meta_description_required: true,
        },
        sitemap: {
          require: true,
        },
        robots_txt: {
          require: true,
          require_sitemap_link: true,
        },
      },
    }),
  ],
});
