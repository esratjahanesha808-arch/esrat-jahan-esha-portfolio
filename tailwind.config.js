/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: {
            primary: '#08080a',
            surface: '#111113',
            surfaceElevated: '#1a1a1e',
          },
          text: {
            primary: '#f5f5f4',
            secondary: '#a8a8a0',
            muted: '#666660',
          },
          accent: {
            DEFAULT: '#b8965a',
            light: '#d4b07a',
            dark: '#8a6e3e',
            glow: 'rgba(184, 150, 90, 0.15)',
          },
          border: {
            DEFAULT: '#1e1e22',
            light: '#2a2a30',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      animation: {
        'orbit-slow': 'spin 120s linear infinite',
        'orbit-medium': 'spin 80s linear infinite',
        'orbit-fast': 'spin 40s linear infinite',
      },
      boxShadow: {
        'premium-sm': '0 2px 8px -2px rgba(0,0,0,0.6), 0 1px 3px -1px rgba(184,150,90,0.05)',
        'premium': '0 10px 30px -10px rgba(0,0,0,0.8), 0 1px 10px -2px rgba(184,150,90,0.1)',
        'premium-lg': '0 20px 50px -15px rgba(0,0,0,0.9), 0 1px 20px -2px rgba(184,150,90,0.15)',
        'glow-accent': '0 0 24px 0 rgba(184,150,90,0.28)',
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
      },
      lineHeight: {
        relaxedBody: '1.7',
      }
    },
  },
  plugins: [],
}
