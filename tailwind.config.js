/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fde4ad',
          300: '#fbd27a',
          400: '#f9b943',
          500: '#f8a21b',
          600: '#e97d0d',
          700: '#c1590f',
          800: '#9a4514',
          900: '#7d3a15',
          950: '#431c09',
        },
        secondary: {
          50: '#fcf8f1',
          100: '#f8e6b6',
          200: '#f3d17f',
          300: '#ecb754',
          400: '#e69934',
          500: '#dd7721',
          600: '#c35d1a',
          700: '#a24518',
          800: '#85381a',
          900: '#723607',
          950: '#3c1805',
        },
        accent: {
          50: '#fef2f2',
          100: '#fde3e3',
          200: '#fccccc',
          300: '#f9a7a7',
          400: '#f67474',
          500: '#f44236',
          600: '#e12b2b',
          700: '#be1e1e',
          800: '#9d1c1c',
          900: '#821d1d',
          950: '#470c0c',
        },
        beige: '#f8e6b6',
        brown: '#723607',
        red: '#f44236',
        dark: '#010101',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
};