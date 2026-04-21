/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        magenta: '#B71556',
        pink: '#E22E64',
        orange: '#F26B38',
        gold: '#F8A232',
        sun: '#FDE08B',
        bg: '#FAFAFA',
      },
      fontFamily: {
        display: ['Recoleta', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
