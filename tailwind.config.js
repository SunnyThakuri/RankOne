/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      romantica: ['Romantica', 'sans-serif'],
    },
  },
  plugins: [],
}

