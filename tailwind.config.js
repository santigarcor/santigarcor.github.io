// See https://tailwindcss.com/docs/configuration for details
const defaultTheme  = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        dark: '#282a36',
        darkpurple: '#44475a',
        lightWhite: '#f8f8f2',
        comment: '#6272a4',
        cyan: '#8be9fd',
        green: '#50fa7b',
        orange: '#ffb86c',
        pink: '#ff79c6',
        purple: '#bd93f9',
        red: '#ff5555',
        yellow: '#f1fa8c',
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: []
};



