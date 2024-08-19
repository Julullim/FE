/** @type {import('tailwindcss').Config} */
import textshadow from 'tailwindcss-textshadow';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'pt': ['Pretendard'], 
      },

      textShadow: {
        'white-blur-15': '0px 0px 15px rgba(255, 255, 255, 1)', 
      },

      
    },
  },
  plugins: [
    textshadow, 
  ],
}


