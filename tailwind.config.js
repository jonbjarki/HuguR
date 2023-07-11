/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'larger': '4.6rem'
      },
      colors: {
        'lm-very-light': '#ffffff',
        'lm-light': '#dddddd',
        'lm-medium-dark': '#747474',
        'lm-dark': '#373737',
        'lm-very-dark': '#202020',
        'dm-very-dark': '#000000',
        'dm-dark': '#222222',
        'dm-medium-light': '#8b8b8b',
        'dm-light': '#c8c8c8',
        'dm-very-light': '#dfdfdf',
        'lm-rose-light':'#f4dcd0',
        'lm-rose-default':'#dcae96',
        'lm-rose-dark':'#a77f6a',
        'lm-rose-very-dark':'#7d5845',
        'lm-whitesmoke-default':'#f5f5f5',
        'lm-whitesmoke-dark':'#e8e8e8'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      dropShadow: {
        'text': '0 0 8px rgba(125, 88, 69, 1)'
      }
    },
  },
  plugins: [],
}
