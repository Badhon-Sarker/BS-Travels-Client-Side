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
        'register-bg' : "url('https://i.ibb.co/gd1XDDw/cool-background-2.png')",
        

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

