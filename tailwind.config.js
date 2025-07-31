/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 2px #fff) drop-shadow(0 0 4px #fff) drop-shadow(0 0 8px #0ff)',
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
