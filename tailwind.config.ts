// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        brand: {
          light: '#FEFEFD',
          beige: '#AD8B5D',
          dark: '#1E1E1B',
          red: {
            DEFAULT: '#870A09', // akcent
            dark: '#681912',    // głębszy akcent (np. hover)
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
