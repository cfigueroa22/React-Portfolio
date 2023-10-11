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
        live: "#539165",
        code: "#362FD9",
      },

      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        playfair: ["Playfair Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
