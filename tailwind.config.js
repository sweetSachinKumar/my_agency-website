/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#010851',
        'secondary': '#9A7AF1',
        'tartiary': '#707070',
        'pink': "#EE9AE5",
        'color1': "#fafafa",
        'color2':"#c7eeff",
        "color3" :"#0077c0",
        "color4": "#1d242b"
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0,0,0,0.15)'
      }
    },
  },
  plugins: [],
}

