/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-picture': "url('./src/assets/prodotti/galaxy-s24.png')",
        'header-picture-2': "url('./src/assets/prodotti/classifica20smartphone20giugno202024-Photoroom.png')",
      },
      height: {
        'misura-header-picture': "30rem"
      },
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '1/3': '29%',
      },
    },
  },
  plugins: [],
}

