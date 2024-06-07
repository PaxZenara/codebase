const { join } = require('path');

/** @type {import('tailwindcss').Config} */

export default {
  presets: [require(join(__dirname, '../../tailwind-config.base'))],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        body: ['Oxygen', 'sans-serif'],
        special: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
