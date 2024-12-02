/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstcolor: "#E10914",
        cardcolor_1: "#FFF3E1",
        cardcolor_2: "#FFE4E9",
        cardcolor_3: "#FFED8A",
        cardcolor_4: "#EAD6C0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        }
      },
      borderRadius: {
        'custom-rounded': '10px',
      },
      boxshadow: {
        "custome-shodow": "0px 0px 15px 0px #0ef"
      }
    },
  },
  plugins: [],
}