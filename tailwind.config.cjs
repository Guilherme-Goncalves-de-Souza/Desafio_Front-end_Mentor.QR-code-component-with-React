/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },

      fontSize: {
        xl: '22.2px',
      },

      colors: {
        black: '#28354d',
      }
    },
  },
  plugins: [],
}
