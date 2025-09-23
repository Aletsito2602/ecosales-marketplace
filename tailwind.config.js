/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color (turquoise)
        primary: {
          50: '#e6fffe',
          100: '#b8fffa', 
          200: '#80fcf4',
          300: '#4ae9e1',
          400: '#1cd0c8',
          500: '#00afac', // Main brand color
          600: '#009a97',
          700: '#008582',
          800: '#006c6a',
          900: '#004f4d',
          950: '#003f3d',
        },
        // Secondary accent color (warm yellow)
        accent: {
          50: '#fffef7',
          100: '#fffce6',
          200: '#fff7b8',
          300: '#fff181',
          400: '#fbe85b',
          500: '#f4d03f', // Warmer, more coffee-like yellow
          600: '#d4ac0d',
          700: '#b7950b',
          800: '#9a7d0a',
          900: '#7d6608',
          950: '#5d4e06',
        },
        // Coffee bean colors (rich browns)
        bean: {
          50: '#faf8f7',
          100: '#f2ede9',
          200: '#e6d7cf',
          300: '#d4bfb0',
          400: '#c0a08a',
          500: '#a67c52', // Rich coffee bean brown
          600: '#8b5a3c',
          700: '#6f4518',
          800: '#5d3914',
          900: '#4a2c0f',
          950: '#2d1a09',
        },
        // Espresso colors (dark browns)
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
          950: '#231b18', // Deep espresso
        },
        // Warm neutrals
        warm: {
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
          950: '#0c0a09',
        },
        // Legacy support (will be deprecated)
        coffee: {
          50: '#e6fffe',
          100: '#b8fffa',
          200: '#80fcf4',
          300: '#4ae9e1',
          400: '#1cd0c8',
          500: '#00afac',
          600: '#009a97',
          700: '#008582',
          800: '#006c6a',
          900: '#004f4d',
          950: '#003f3d',
        },
        cream: {
          50: '#fffef7',
          100: '#fffce6',
          200: '#fff7b8',
          300: '#fff181',
          400: '#fbe85b',
          500: '#f4d03f',
          600: '#d4ac0d',
          700: '#b7950b',
          800: '#9a7d0a',
          900: '#7d6608',
          950: '#5d4e06',
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
