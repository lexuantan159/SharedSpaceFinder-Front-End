/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2467BF',
        textBoldColor: '#061F40',
        textLightColor: '#B2B2B2',
        bgModalColor: 'rgba(0,0,0,0,4)'
      },
    },
  },
  plugins: [],
}

