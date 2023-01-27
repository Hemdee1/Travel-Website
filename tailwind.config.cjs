/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        fullScreen: "1440px",
      },
      colors: {
        primary: "#14183E",
        "text-clr": "#5E6282",
      },
      fontFamily: {
        Volkhov: "Volkhov, serif",
        Poppins: "Poppins, sans-serif",
        OpenSans: "Open Sans, sans-serif",
      },
      screens: {
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
