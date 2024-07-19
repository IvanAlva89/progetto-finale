/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-picture': "url('./src/assets/prodotti/galaxy-s24.png')",
        'header-picture-2': "url(https://media-assets.wired.it/photos/666869709d6bb6d1aef15523/16:9/w_1920%2Cc_limit/classifica%2520migliori%2520smartphone%2520top%2520giugno%25202024.jpg)"
      },
      height: {
        'misura-header-picture': "46.88rem"
      }
    },
  },
  plugins: [],
}

