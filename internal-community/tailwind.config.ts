import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
