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
        'error-bg' : "url('https://i.ibb.co/nj2pYsp/layered-steps-haikei.png')"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

