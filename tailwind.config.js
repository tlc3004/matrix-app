/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#0f0', 
      },
      animation: {
        flicker: 'flicker 2s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 1,
            filter: 'drop-shadow(0 0 4px #0f0) drop-shadow(0 0 8px #0f0)',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}
