/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-30': 'linear-gradient(30deg, var(--tw-gradient-stops))',
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops'
      },
    },
    },
  }
  plugins: []

