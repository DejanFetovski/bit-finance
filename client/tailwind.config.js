/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'CircularStd',
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 1rem',
      },
      aspectRatio: {
        '7/5': '7 / 5',
      },
    },
  },
  plugins: [],
}
