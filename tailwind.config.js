/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'SF Pro Display',
          'SF Pro Text',
          'system-ui',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ],
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#10b981',
        dark: {
          bg: '#1a1a1a',
          text: '#ffffff'
        },
        light: {
          bg: '#ffffff',
          text: '#1a1a1a'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}