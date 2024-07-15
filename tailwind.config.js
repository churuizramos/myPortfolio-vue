/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.hhtml",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'beige': '#F5F5DC',
      }
    },
  },
  plugins: [],
}
