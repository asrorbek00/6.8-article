/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'sm': {'min': '200px', 'max': '500px'},
    },
    extend: {},
  },
  plugins: [],
}

