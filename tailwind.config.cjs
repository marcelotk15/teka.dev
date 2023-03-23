// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2.5rem',
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-dystopian)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        'music-bar-one': {
          '0%': { transform: 'scaleY(1.0) translateY(0rem)' },
          '50%': { transform: 'scaleY(1.5) translateY(-0.082rem)' },
          '100%': { transform: 'scaleY(1.0) translateY(0rem)' },
        },

        'music-bar-two': {
          '0%': { transform: 'scaleY(1.0) translateY(0rem)' },
          '50%': { transform: 'scaleY(3) translateY(-0.083rem)' },
          '100%': { transform: 'scaleY(1.0) translateY(0rem)' },
        },

        'music-bar-three': {
          '0%': { transform: 'scaleY(1.0)  translateY(0rem)' },
          '50%': { transform: 'scaleY(0.5) translateY(0.37rem)' },
          '100%': { transform: 'scaleY(1.0)  translateY(0rem)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'waving-hand': 'wave 2s linear infinite',
        'music-bar-one': 'music-bar-one 1s linear infinite',
        'music-bar-two': 'music-bar-two 1.5s linear infinite',
        'music-bar-three': 'music-bar-three 2s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

module.exports = config
