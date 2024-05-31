/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Slab", "serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        sea: "#07284B",
        surf: "#1f76bb",
        wave: "#29aae1",
      },
    },
  },
  plugins: [],
};
