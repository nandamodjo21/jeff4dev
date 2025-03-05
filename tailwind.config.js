/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0CA7FF',
        primary2: '#D7F0FF',
        secondary: '#EBF7FF',
      }
    },
  },
  plugins: [],
}

