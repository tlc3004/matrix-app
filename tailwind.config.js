/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF41',
      },
      dropShadow: {
        neon: '0 0 5px #00FF41, 0 0 10px #00FF41, 0 0 20px #00FF41',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 2px #0f0) drop-shadow(0 0 4px #0f0) drop-shadow(0 0 8px #0f0)',
          },
          '20%, 22%, 24%, 55%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
      },
      animation: {
        flicker: 'flicker 1.5s infinite',
      },
    },
  },
  plugins: [],
}