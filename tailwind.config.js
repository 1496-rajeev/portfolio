const colors = require("./assets/colors/index");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //fonts
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      //colors
      colors: colors
    },
    plugins: [],
  }
}