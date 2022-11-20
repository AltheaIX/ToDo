/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
      colors: {
        yellow: {
          50: '#FCF7E3',
          100: '#FAF0CC',
          200: '#F4E19A',
          300: '#EFD167',
          400: '#E9C234',
          500: '#CEA716',
          600: '#A68612',
          700: '#7C640D',
          800: '#534309',
          900: '#292104',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.bg-hero': { 'background-image': "url('Hero.png')", 'background-size': '100%' },
      };
      addUtilities(utilities);
    }),
  ],
};
