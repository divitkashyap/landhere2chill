/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_purple: {
          DEFAULT: '#0d0221', 100: '#030007', 200: '#05010d', 300: '#080114', 400: '#0a021b', 500: '#0d0221', 600: '#30077b', 700: '#530cd5', 800: '#874cf5', 900: '#c3a5fa'
        },
        federal_blue: {
          DEFAULT: '#0f084b', 100: '#03020f', 200: '#06031e', 300: '#09052c', 400: '#0b063b', 500: '#0f084b', 600: '#1d1097', 700: '#2d18e5', 800: '#7264ef', 900: '#b8b1f7'
  },
        marian_blue: {
          DEFAULT: '#26408b', 100: '#080d1c', 200: '#0f1a38', 300: '#172654', 400: '#1f3370', 500: '#26408b', 600: '#3558c0', 700: '#637fd4', 800: '#97aae2', 900: '#cbd4f1'
        },
        white: {
          DEFAULT: '#ffffff', 100: '#333333', 200: '#666666', 300: '#999999', 400: '#cccccc', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff', 800: '#ffffff', 900: '#ffffff'
        },
        auburn: {
          DEFAULT: '#9e2b25', 100: '#1f0907', 200: '#3f110f', 300: '#5e1a16', 400: '#7e221d', 500: '#9e2b25', 600: '#cf3a32', 700: '#db6b65', 800: '#e79c99', 900: '#f3cecc'
        },
        persian_red: {
          DEFAULT: '#C93932',
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
