/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MOCHIY: ["Mochiy Pop One", "sans-serif"],
        BEBAS: ["Bebas Neue", "sans-serif"],
        ROBOTO: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
