/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette béton / terracotta — miroir des CSS vars de global.css
        bg:           'var(--bg)',
        'bg-deep':    'var(--bg-deep)',
        'bg-warm':    'var(--bg-warm)',
        ink:          'var(--ink)',
        'ink-soft':   'var(--ink-soft)',
        'ink-mute':   'var(--ink-mute)',
        line:         'var(--line)',
        accent:       'var(--accent)',
        'accent-deep':'var(--accent-deep)',
        'accent-soft':'var(--accent-soft)',
        dark:         'var(--dark)',
      },
      fontFamily: {
        display: ['var(--f-display)'],
        body:    ['var(--f-body)'],
        mono:    ['var(--f-mono)'],
      },
      letterSpacing: {
        tight2: '-0.02em',
        tight3: '-0.03em',
        wide4:  '0.04em',
        wide6:  '0.06em',
        wide12: '0.12em',
      },
      screens: {
        // Même breakpoint que notre @media (max-width: 768px)
        // Tailwind est min-width par défaut → on ajoute un alias "max-md" pour rétro-compat
        // (utilisé uniquement si besoin de cibler <768px explicitement)
        'max-md': { max: '768px' },
      },
    },
  },
  plugins: [],
}
