module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "600px": "600px",
        "15.5rem": "15.5rem",
        "600px-4rem": "calc(600px - 4rem)",
      },
      colors: {
        aliceblue: "#EAF3FC",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
