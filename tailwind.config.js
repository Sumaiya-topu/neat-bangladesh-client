/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "974px",
      xl: "1440px",
    },
    colors: {
      primary: "#257A3D",
      secondary: "#272F30",
      lightGray: "#8D8D8D",
      accent: "#303030",
      info: "#06AA9A",
      gray: "#535353",
      smoke: "#FEFEFE",
      white: "#FFFFFF",
      black: "#000",
      red: "#b91c1c;",
      lightPink: "#DFD6D6",
    },
    extend: {},
  },
  plugins: [],
};
