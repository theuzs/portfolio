/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef6fd',
          100: '#d9ecfb',
          200: '#b3d8f7',
          300: '#7ebeef',
          400: '#469fe0',
          500: '#0a6ed1',
          600: '#0857a8',
          700: '#06437f',
          800: '#052f5c',
          900: '#031b35',
        },
        accent: {
          300: '#f8d878',
          400: '#f5c242',
          500: '#f0ab00',
          600: '#c48a00',
        },
        ink: {
          700: '#1a2233',
          800: '#121826',
          900: '#0b0f17',
          950: '#05070c',
        },
        paper: {
          50: '#ffffff',
          100: '#f7f9fc',
          200: '#eef2f8',
        },
      },
    },
  },
  plugins: [],
}
