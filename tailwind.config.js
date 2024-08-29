/**@type {import('tailwindcss').config }*/

const { MinusIcon } = require('lucide-react');

module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },
      borderWidth: {
        6: '6px'
      },

      maxWidth: {
        app: '700px',
      },
      colors: {
        violet: {
          25: '#fcfaff',
        },
      },
    },
  },
  plugins: [],
}