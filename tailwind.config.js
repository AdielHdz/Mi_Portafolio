/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ["Itim", "cursive"],
        jaldi: ["Jaldi", "sans-serif"],
        dongle: ["Dongle", "sans-serif"],
      },
      colors: {
        whites: "#ffffff",
        blacks: "#000000",
        veryDarkGray: "#282828",
        blue_icons: "#39B4CF",
        blue_gray: "#4E6E81",
      },
      width: {
        noventaCinco: "95%",
      },
      maxWidth: {
        little: "400px",
      },
      boxShadow: {
        little: "0 0 2px 1px rgba(0,0,0,0.5)",
        little_dark: "0 0 2px 1px rgba(255,255,255,0.5)",
        little_in: "inset 0 0 5px 1px rgba(0,0,0,0.2)",
        mid_in: "inset 0 0 10px 1px rgba(0,0,0,0.3)",
        mid: "0 0 10px 0px rgba(0,0,0,0.3)",
        mid_white: "0 0 10px 0px rgba(255,255,255,0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
