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
        // "secondary-light": "",
      },
    },
  },
  plugins: [],
};
