import { expect, test } from 'vitest';
import site from '@data/site';

test('site metadata is ready for SEO output', () => {
  expect(site.siteName).toBe('Astro UnoCSS Starter');
  expect(site.siteUrl).toMatch(/^https:\/\//);
  expect(site.description).toContain('UnoCSS');
  expect(site.keywords).toContain('astro');
});
