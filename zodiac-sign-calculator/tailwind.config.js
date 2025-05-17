module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zodiac: {
          aries: '#FF5733',
          taurus: '#33FF57',
          gemini: '#3357FF',
          cancer: '#FF33A1',
          leo: '#FFDA33',
          virgo: '#33FFD5',
          libra: '#FF33B5',
          scorpio: '#8A33FF',
          sagittarius: '#FF8A33',
          capricorn: '#33FF8A',
          aquarius: '#33A1FF',
          pisces: '#A133FF',
        },
      },
      backgroundImage: {
        'galaxy': "url('/images/background.png')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}