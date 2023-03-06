/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#211522",
        emeraldgreen: "#02894B",
        emeraldgreenlight: "#017b43",
        emeraldgreenlighter: "#016d3c",
        forestgreen: "#016236",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        sourcecodepro: ["Source Code Pro", "sans-serif"],
        sanfrancisco: ["San Francisco", "sans-serif"],

      },
    },
  },
  plugins: [],
}