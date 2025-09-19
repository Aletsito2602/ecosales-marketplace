/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f9f5f0',
          100: '#f1e6d8',
          200: '#e6d0b8',
          300: '#d9b795',
          400: '#c99c70',
          500: '#bb8251', // Main coffee color
          600: '#a06b45',
          700: '#85563c',
          800: '#6b4632',
          900: '#5a3a2b',
          950: '#2c1c14',
        },
        cream: {
          50: '#fefbf7',
          100: '#fdf7ee',
          200: '#f8ebd6',
          300: '#f3dbb7',
          400: '#eac288',
          500: '#e0a65a', // Main cream color
          600: '#d28a37',
          700: '#b06e2a',
          800: '#8f5825',
          900: '#754a22',
          950: '#432711',
        },
        espresso: {
          50: '#f8f7f7',
          100: '#e9e6e4',
          200: '#d5cec9',
          300: '#baada4',
          400: '#a08a7e',
          500: '#8c7265',
          600: '#745a4f',
          700: '#5e4941',
          800: '#4d3c36',
          900: '#3d302c',
          950: '#231b18', // Main dark color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'coffee-pattern': "url('/src/assets/images/coffee-pattern.png')",
        'hero-image': "url('/src/assets/images/coffee-hero.jpg')",
      },
      animation: {
        'steam': 'steam 2s ease-in-out infinite',
        'pour': 'pour 3s ease-in-out infinite',
      },
      keyframes: {
        steam: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        pour: {
          '0%': { height: '0%' },
          '50%': { height: '100%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
}
