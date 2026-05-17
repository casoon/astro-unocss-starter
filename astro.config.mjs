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
      sitemap: {
        priority: [
          { pattern: '/', priority: 1.0 },
          { pattern: /^\/blog\//, priority: 0.8 },
        ],
        changefreq: [
          { pattern: '/', changefreq: 'weekly' },
          { pattern: /.*/, changefreq: 'monthly' },
        ],
        audit: { warnOnEmpty: true, errorOnDuplicates: true },
      },
      robots: {
        sitemap: true,
        agents: [
          { userAgent: '*', allow: ['/'] },
          { userAgent: 'GPTBot', allow: ['/'] },
          { userAgent: 'ClaudeBot', allow: ['/'] },
        ],
      },
      llms: {
        title: 'Astro UnoCSS Starter',
        description:
          'A modern Astro starter demonstrating UnoCSS utilities, shortcuts, icons, variant groups, and build-time SEO checks.',
        sections: [
          {
            title: 'Documentation',
            links: [
              { title: 'UnoCSS', url: 'https://unocss.dev/', description: 'Atomic CSS engine' },
              { title: 'Astro', url: 'https://docs.astro.build/', description: 'Web framework' },
            ],
          },
        ],
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
