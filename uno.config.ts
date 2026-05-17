import {
  defineConfig,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'btn-primary':
        'inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-700 text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-sage focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sage/35',
      'btn-ghost':
        'inline-flex items-center justify-center gap-2 rounded-full border border-ink/12 bg-paper/70 px-5 py-3 text-sm font-700 text-ink transition hover:-translate-y-0.5 hover:border-sage/45 hover:text-sage focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sage/30',
      'panel':
        'rounded-2xl border border-ink/10 bg-paper/82 p-6 shadow-soft backdrop-blur',
      'eyebrow':
        'text-xs font-800 uppercase tracking-0 text-coral',
    },
  ],
  theme: {
    colors: {
      ink: '#16201d',
      paper: '#f8f5ef',
      mist: '#e7ece5',
      sage: '#3f7f68',
      coral: '#d45d4c',
      ochre: '#c79d45',
    },
  },
  rules: [
    ['shadow-soft', { 'box-shadow': '0 24px 70px rgba(22, 32, 29, 0.12)' }],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetWind4(),
    presetIcons({
      collections: {
        logos: () => import('@iconify-json/logos/icons.json').then((i) => i.default),
        lucide: () => import('@iconify-json/lucide/icons.json').then((i) => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
