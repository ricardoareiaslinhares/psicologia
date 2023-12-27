import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        whiteRose: "rgb(255, 250, 250)",
        middleBackground: "rgb(246,241,228)"
      },
      height: {
        cardHeight:"200px"
      },
      width:{
        cardHeight:"300px"
      }
    },
  },
  plugins: [],
}
export default config


