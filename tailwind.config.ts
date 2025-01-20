import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B3442F',    // Marron/Orange du logo
        secondary: '#FFA500',  // Orange de l'Afrique
        accent: '#30A5BF',     // Bleu turquoise
      },
    },
  },
  plugins: [],
}

export default config
