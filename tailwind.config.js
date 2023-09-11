/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroud: "#f9fbfa",
        primaryBtn: "#536b74",
        secondaryBtn: "#edeef2",
        main: "#c2b29c",
        titleColor: "hsla(35, 24%, 69%, 1)",
      },

      fontFamily: {
        lato: ["Lato", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
