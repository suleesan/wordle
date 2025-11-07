/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      light: {
        colors: {
          primary: "#FF5733", // Light theme primary color
          background: "#FFFFFF", // Light theme background color
        },
      },
      dark: {
        colors: {
          primary: "#FF5733", // Dark theme primary color
          background: "#000000", // Dark theme background color
        },
      },
    },
  },
  plugins: [],
};
