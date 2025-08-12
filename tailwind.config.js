const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--laranja-color)',
        secondary: 'var(--azul-color)',
      },
      keyframes: {
        rotateOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        grow: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'rotate-once': 'rotateOnce 1s ease-out forwards',
        grow: 'grow 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
