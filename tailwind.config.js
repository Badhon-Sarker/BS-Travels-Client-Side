/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair' : '"Playfair Display", serif;'
      },

      backgroundImage: {
        'login-bg' : "url('https://i.ibb.co/3Ms79X5/cool-background-1.png')",

        'register-bg' : "url('https://i.ibb.co/T2KGt3k/cool-background-2.png')",

        'slider-one' : "url('https://i.ibb.co/f1GbyMM/Cheapest-time-to-go-to-Paris-October23-Getty-Images.webp')",

        'slider-two' : "url('https://i.ibb.co/vLg4GTh/TAL-colosseum-rome-italy-BEAUTEURO0323-9e56ee65cf1b44f1975af842dfc2624c.webp')",

        'slider-three' : "url('https://i.ibb.co/wMhGYx8/TAL-san-fruttuoso-italy-BEAUTEURO0323-d6d5f4069761485b88c44c19c4de24a4.webp')",

        'slider-four' : "url('https://i.ibb.co/cwQXh9M/TAL-la-sagrada-familia-barcelona-spain-BEAUTEURO0323-2086aa94f2184b3e913381cb141b80e7.webp')",
        

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

