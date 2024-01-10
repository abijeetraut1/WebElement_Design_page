/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        33: '33%',
      },
      borderColor: {
        'borderColor': '#6a6c6a',
      },
      textColor: {
        'fontBlue': '#2f81f7',
      },
      backgroundColor: {
        'testBg': '#191919',
      },
    },
  },
  plugins: [],
}