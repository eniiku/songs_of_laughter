/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgWhite : '#F2F2F2',
        textWhite: "#ECECEC",
        textBlack: "#111111"
      },
      fontFamily: {
        "libre" :['Libre Baskerville', 'serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
        "space" :['Space Grotesk', 'sans-serif'],
        "zilla": ['Zilla Slab', 'serif']
      },
    },
  },
  plugins: [],
}
