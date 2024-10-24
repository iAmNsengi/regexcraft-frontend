/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burntOrange: '#D35400', // Primary Color
        deepForestGreen: '#0B5345', // Secondary Color
        richBlack: '#1C1C1C', // Secondary Color
        goldenYellow: '#F39C12', // Accent Color
        warmCream: '#F7F4E3', // Accent Color
      },
    },
  },
  plugins: [],
}

