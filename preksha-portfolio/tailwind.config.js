/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        grotesk: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#00d4ff',
        }
      },
      boxShadow: {
        glow: '0 20px 40px rgba(0, 212, 255, 0.15)'
      },
      keyframes: {
        bounceX: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '40%': { transform: 'translateX(-50%) translateY(-10px)' },
          '60%': { transform: 'translateX(-50%) translateY(-5px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        bounceX: 'bounceX 2s infinite',
        fadeInUp: 'fadeInUp 1s ease forwards',
      },
    },
  },
  plugins: [],
}

