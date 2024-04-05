/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'mobile': '1.5rem',
      },
      backgroundColor: {
        'custom-black': '#191919',
      },
    },
  },
  plugins: [],
}
