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
        xl: '22px',
      },

      colors: {
        black: '#28354d',
        gray: 'hsl(220, 15%, 55%)',
      },

      spacing: {
        '500': '500px',
      }
    },
  },
  plugins: [],
}
