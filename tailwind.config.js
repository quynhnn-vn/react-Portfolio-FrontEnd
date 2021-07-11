module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'about': "url('/background.png')",
      })
    },
    fontFamily: {
      "sorts-mill": ["Sorts Mill Goudy", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}