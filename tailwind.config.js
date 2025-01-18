/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
      extend: {
          colors: {
              'dark-blue': 'hsl(209, 23%, 22%)',
              'very-dark-blue': 'hsl(207, 26%, 17%)',
              'white': 'hsl(0, 0%, 100%)',
          },
      },
  },
  darkMode: 'class',
  plugins: [],
};