/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.hhtml",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    darkMode: false,
    extend: {
      backgroundColor: {
        'c-emerald-1': '#80be9f',
        'c-emerald-2': '#669675',
        'c-emerald-3': '#2a4849',
        'c-emerald-4': '#203524',

        'c-orange-1': '#d79130',
        'c-orange-2': '#7e3a14',
      },
      textColor: {
        'c-emerald-1': '#80be9f',
        'c-emerald-2': '#669675',
        'c-emerald-3': '#2a4849',
        'c-emerald-4': '#203524',

        'c-orange-1': '#d79130',
        'c-orange-2': '#7e3a14',
      },
      fontFamily: {
        'archivo-black': ["Archivo Black"],
        'archivo-narrow': ["Archivo Narrow"],
        'archivo-regular': ["Archivo"]
      },
    },
  },
  plugins: [],
}
