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
        'header-picture-2': "url('https://cdn.discordapp.com/attachments/1222916938527674419/1264159529516662878/classifica20smartphone20giugno202024-Photoroom.png?ex=669cdbce&is=669b8a4e&hm=4299d09eaf4ea7eaa89ccf4766ef44a2f7c9a77ca8f0d2aef66fbb71a6031d1a&')"
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

