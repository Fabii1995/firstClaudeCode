/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-high':    '#2a2a2a',
        'surface-container-low':     '#1b1b1b',
        'surface-container':         '#1f1f1f',
        'surface-container-highest': '#353535',
        'surface-container-lowest':  '#0e0e0e',
        'surface-bright':            '#393939',
        'surface-variant':           '#353535',
        'surface':                   '#131313',
        'background':                '#131313',
        'primary':                   '#ffc887',
        'primary-container':         '#fca311',
        'on-primary':                '#472a00',
        'on-surface':                '#e2e2e2',
        'on-surface-variant':        '#d9c3ad',
        'on-background':             '#e2e2e2',
        'outline':                   '#a18e79',
        'outline-variant':           '#534433',
        'tertiary-container':        '#1dc4ff',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg:      '0.25rem',
        xl:      '0.5rem',
        full:    '0.75rem',
        '2xl':   '1rem',
        '3xl':   '1.5rem',
      },
    },
  },
  plugins: [],
}
