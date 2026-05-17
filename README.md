# Astro UnoCSS Starter

A small, modern Astro starter for projects that want utility-first styling without taking Tailwind CSS as the default.

It demonstrates the parts of UnoCSS that matter in day-to-day Astro work:

- Wind4 utility classes
- project shortcuts in `uno.config.ts`
- Iconify icons as CSS classes
- variant groups like `hover:(-translate-y-1 text-coral)`
- `@apply` for shared CSS helpers
- build-time sitemap, crawler policy, and post-build SEO checks

## Why UnoCSS?

Tailwind is still the safest default for teams, client projects, and ecosystem compatibility. UnoCSS is a good alternative when you want a smaller, more configurable atomic CSS engine:

- CSS is generated on demand from the classes used in your templates.
- Presets let you stay close to Tailwind syntax or define your own system.
- Icons can be used directly as utility classes.
- Shortcuts keep repeated class sets readable without creating extra components.
- Transformers keep templates expressive while avoiding long repeated class lists.

## Stack

- Astro 6
- UnoCSS 66 with the Wind4 preset
- `@casoon/astro-sitemap`
- `@casoon/astro-crawler-policy`
- `@casoon/astro-post-audit`
- Vitest

## Project Structure

```txt
src/
  components/     Reusable Astro components
  data/           Site metadata used by SEO output
  layouts/        HTML shell and global CSS imports
  pages/          Route entry points
  styles/         Global CSS and @apply examples
uno.config.ts     UnoCSS presets, theme tokens, shortcuts, icons
astro.config.mjs  Astro integrations and build checks
```

## Commands

```sh
yarn install
yarn dev
yarn build
yarn check
yarn test
```

This repository uses Yarn 4 via `packageManager`. If your global Yarn is not available, the checked-in release can be run directly:

```sh
node .yarn/releases/yarn-4.0.1.cjs install
node .yarn/releases/yarn-4.0.1.cjs dev
```

## UnoCSS Examples

### Direct utilities

```astro
<article class="rounded-2xl border border-ink/10 bg-paper/82 p-6 shadow-soft">
  ...
</article>
```

### Shortcuts

Defined in `uno.config.ts`:

```ts
shortcuts: [
  {
    'btn-primary':
      'inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-700 text-paper',
  },
]
```

Used in Astro:

```astro
<a class="btn-primary" href="https://unocss.dev/">UnoCSS docs</a>
```

### Icons

```astro
<span class="i-lucide-sparkles text-3xl text-sage" aria-hidden="true" />
```

### Variant groups

```astro
<article class="panel transition hover:(-translate-y-1 border-sage/40)">
  ...
</article>
```

### `@apply`

```css
.code-token {
  @apply rounded-md border border-ink/10 bg-ink/6 px-2 py-1 text-[0.84rem] font-700 text-ink;
}
```

## Build Output

`yarn build` creates:

- static Astro output in `dist/`
- `sitemap.xml`
- `robots.txt`
- `llms.txt`
- a post-build audit report in the terminal

The audit is intentionally relaxed for a starter, but it still checks the important baseline signals.
