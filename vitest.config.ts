/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@data': new URL('./src/data', import.meta.url).pathname,
      '@data/': new URL('./src/data/', import.meta.url).pathname,
    },
  },
  test: {},
});
