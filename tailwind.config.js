/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary-accent) / <alpha-value>)', 
        secondary: 'rgb(var(--hover-accent) / <alpha-value>)', 
        accent: 'rgb(var(--primary-accent) / <alpha-value>)', 
        background: 'rgb(var(--bg-color) / <alpha-value>)', 
        surface: 'rgb(var(--surface-color) / <alpha-value>)',
        main: 'rgb(var(--main-text) / <alpha-value>)',
        muted: 'rgb(var(--secondary-text) / <alpha-value>)',
        border: 'rgb(var(--border-color) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'liquid': 'liquid 8s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        liquid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
