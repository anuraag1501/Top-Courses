/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bgDark': 'rgb(34 34 59)',
        'bgDark2': 'rgb(74 78 105)'
      },
    },
  },
  plugins: [],
}

