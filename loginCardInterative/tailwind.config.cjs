/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    fontFamily:{
      sans: ['Space Grotesk', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        bgPurpple:"url('/bg-main-web.png')",
      },
    },
  },
  plugins: [],
}
