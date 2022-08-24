
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      fontFamily: {
        mont: [ 'Montserrat', 'sans-serif'
],
      },
    },
  },
  plugins: [],
};
