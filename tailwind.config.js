/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      height:{
        "custom":"555px",
        
      },
      right:{
        "1/10":"10%"
      },
      left:{
        "0/02":"2%"
      }
     
    },
  },
  plugins: [],
}


