/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
    theme: {
      fontFamily: {
        'gilory-bold': ['Gilroy-Bold','sans-sarif'],
        'gilory-semibold': ['Gilroy-SemiBold','sans-sarif'],
        'gilory-medium': ['Gilroy-Medium','sans-sarif'],
        'gilory-regular': ['Gilroy-Regular','sans-sarif'],
        'DMSans-regular': ['DMSans-Regular','sans-sarif'],
        'inter-regular': ['Inter-Regular','sans-sarif'],
        'inter-semibold': ['Inter-SemiBold','sans-sarif'],
      },
      colors:{
        "primary":"#FFFFFF",
        "secondary":"#1E1E1E",
        "ternary":"#E58411",
        "footertitle":"#footertitle",
        "background":"#f7f7f7",
        "cardbackground":"#fafafa",
        "footertitle":"#f6973F",
        "footertext":"#1E2833",
        "listbackground":"#EEEEEE",
        "producttype":"#8d8d8d",
        "productname":"#0d1b39",
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

