module.exports = {
  purge: ['./src/.js', './src/**/*.js'],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      transitionDelay: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
      },
      transitionDuration: {
        '0': '0ms',
      },
      transitionProperty: {
        'basic': 'opacity, transform',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};