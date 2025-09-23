/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales para e-commerce de café
        coffee: {
          50: '#faf8f6',
          100: '#f5f1ec',
          200: '#e8ddd4',
          300: '#d4c4b0',
          400: '#b8a082',
          500: '#8b6914', // Color café principal
          600: '#7a5a12',
          700: '#654a0f',
          800: '#4f3a0c',
          900: '#3d2d09',
          950: '#2d2007',
        },
        // Color turquesa para acentos (manteniendo el original)
        turquoise: {
          50: '#f0fdfc',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#00afac', // Color turquesa principal
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Tonos neutros cálidos
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'Georgia', 'serif'],
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
