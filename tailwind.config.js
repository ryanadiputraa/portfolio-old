/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#161616",
        white: "#F1F1F1",
        accent: "#5492F0",
        "light-accent": "#DEEBFF",
        "dark-black": "#000000",
      },
      backdropBlur: {
        xs: "1px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
