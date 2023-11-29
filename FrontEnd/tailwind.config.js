/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "main-light": "#DAEBFF",
        "main-dark": "#121212",
        "acBox-light": "#f7f7f7",
        "acBox-dark": "#282828",
        "icon-light": "#F7F7F7",
        "icon-dark": "#121212",
      },
      textColor: {
        "acBox-light": "#101D42",
        "acBox-dark": "#D3D7D7",
        "icon-light": "#101D42",
        "icon-dark": "#F7F7F7",
        "danger-light": "#d70000",
      },
      colors: {
        acSky: "#bdddff",
        acBlue: "#101D42",
        acWhite: "#F7F7F7",
        acBlack: "#121212",
        acCoal: "#282828",
        acGray: "#3F3F3F",
        acSmoke: "#f0f0f0",
        acRed: "#af0505",
        acGreen: "#42a548",
        acYellow: "#dfb213",
        acOrange: "#de691b"
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1240px",
      },
    },
  },
  plugins: [],
};