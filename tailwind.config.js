/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./**/*.html", "./**/*.js"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#0D0D25",
        secondary: "#0B4B66",
        light: "#B1D0D2",
        yellow: "#FFE68C",
        orange: "#F5841A",
        background: "#F7F7F7"
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
