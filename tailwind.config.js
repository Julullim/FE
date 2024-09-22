/** @type {import('tailwindcss').Config} */
import textshadow from 'tailwindcss-textshadow';
import scrollbarHide from 'tailwind-scrollbar-hide';


export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      textShadow: {
        'white-blur-15': '0px 0px 15px rgba(255, 255, 255, 1)',
        'black-blur-5' : '0px 0px 5px rgba(0, 0, 0, 0.25)',
        'm3-elavationLight-1' : '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px rgba(0, 0, 0, 0.15)',

      },

      boxShadow:{
        'black-blur-5' : '0px 0px 5px rgba(0, 0, 0, 0.25)',
        'inner-shadow-200' : 'inset 0px 1px 4px rgba(12, 12, 13, 0.05)'
      },

      fontWeight: {
        'regular': 400,
      },

      colors:{
        main:'#F2DCC2',
        lightgray:'#F2F2F2',
        textgray:'#9A9A9A',
        darkgray:'#737373',
        blue:'#1C2B59',
        red:'#FF8080',
        yellow:'#FFE57B',
        lightyellow:'#FFF7B2'

      },

      
    },
  },
  plugins: [
    textshadow, 
    scrollbarHide,
  ],
}

