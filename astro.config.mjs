import { defineConfig } from 'astro/config';
import postAudit from '@casoon/astro-post-audit';
import siteFiles from '@casoon/astro-site-files';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  site: 'https://example.com',
  server: { port: 8080 },
  integrations: [
    UnoCSS(),
    siteFiles({
      sitemap: true,
      robots: { sitemap: true },
      llms: {
        title: 'Astro UnoCSS Starter',
        description:
          'A modern Astro starter that demonstrates UnoCSS utilities, shortcuts, icons, variant groups, and build-time SEO checks.',
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
