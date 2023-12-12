/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#161616',
        white: '#FEF9EC',
        accent: '#5492F0',
        'light-accent': '#DEEBFF',
        'dark-black': '#000000',
      },
      backdropBlur: {
        xs: '1px',
      },
      boxShadow: {
        sd: '0 0 1rem 0.1rem #5492F0',
      },
      backgroundSize: {
        full: '100% 100%',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
