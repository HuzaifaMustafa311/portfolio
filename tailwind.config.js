/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        superman: 'superman 10s ease-in-out infinite', // Define the animation timing
      },
      keyframes: {
        superman: {
          '0%': {
            borderColor: '#13FFAA',
            transform: 'translate(0, 0px)',
            boxShadow: '0 10px 100px 10px #13FFAA',
          },
          '33%': {
            borderColor: '#1E67C6',
            transform: 'translate(0, 10px)',
            boxShadow: '0 10px 100px 10px #1E67C6',
          },
          '66%': {
            borderColor: '#CE84CF',
            transform: 'translate(0, 0px)',
            boxShadow: '0 10px 100px 10px #CE84CF',
          },
          '100%': {
            borderColor: '#FF6A13',
            boxShadow: '0 10px 100px 10px #FF6A13',
          },
        },
      },
    },
  },

  plugins: [],
}