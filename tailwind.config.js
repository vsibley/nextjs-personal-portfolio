
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
    },
  },
};
