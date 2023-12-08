/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './mdx-components.tsx'],
  theme: {
    extend: {
      minHeight: {
        card: '33rem',
      },
      height: {
        card: '32rem',
      },
      borderRadius: {
        larger: '4.6rem',
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
        'lm-rose-light': '#f4dcd0',
        'lm-rose-default': '#dcae96',
        'lm-rose-dark': '#a77f6a',
        'lm-rose-very-dark': '#7d5845',
        'lm-whitesmoke-default': '#f5f5f5',
        'lm-whitesmoke-dark': '#e8e8e8',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      dropShadow: {
        text: '0 0 8px rgba(125, 88, 69, 1)',
        'text-white': '0 0 4px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography'),],
  daisyui: {
    themes: [
      {
        lightmode: {
          primary: '#dcae96',
          secondary: '#F5F5F5',
          accent: '#E52C08',
          neutral: '#373737',
          'base-100': '#ffffff',
          info: '#86efac',
          success: '#bef264',
          warning: '#fdba74',
          error: '#fb7185',
        },
        darkmode: {
          primary: '#a77f6a',
          secondary: '#222222',
          accent: '#B32205',
          neutral: '#e6e6e6',
          'base-100': '#111111',
          info: '#065f46',
          success: '#3f6212',
          warning: '#854d0e',
          error: '#9f1239',
        },
      },
    ],
  },
};
