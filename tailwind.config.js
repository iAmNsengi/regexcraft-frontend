/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#228be6",
        secondary: "#495057",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
