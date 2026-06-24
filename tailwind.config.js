/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        black: '#050505',
        charcoal: '#0b0b0b',
        panel: '#111',
        panel2: '#15120e',
        gold: '#C5A880',
        gold2: '#e7d2a8',
        ivory: '#f4f0ec',
      },
    },
  },
  plugins: [],
}
