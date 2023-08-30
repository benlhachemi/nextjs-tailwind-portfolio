import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0%, 0%) scale(1.7)"
          },
          "33%": {
            transform: "translate(-25%, -25%) scale(1.9)"
          },
          "66%": {
            transform: "translate(-50%, -50%) scale(1.4)"
          },
          "100%": {
            transform: "translate(0%, 0%) scale(1.7)"
          }
        },
        circle: {
          "0%": {
            transform: "translateX(0) translateY(0)"
          },
          "25%": {
            transform: "translateX(50%) translateY(-50%)"
          },
          "50%": {
            transform: "translateX(100%) translateY(0)"
          },
          "75%": {
            transform: "translateX(50%) translateY(50%)"
          },
          "100%": {
            transform: "translateX(0) translateY(0)"
          }
        },
        circle2: {
          "0%": {
            transform: "translateX(0) translateY(0) scale(1.7)"
          },
          "25%": {
            transform: "translateX(-50%) translateY(50%) scale(1.4)"
          },
          "50%": {
            transform: "translateX(-100%) translateY(0) scale(1.9)"
          },
          "75%": {
            transform: "translateX(-50%) translateY(-50%) scale(1.6)"
          },
          "100%": {
            transform: "translateX(0) translateY(0) scale(1.7)"
          }
        },
      },
      animation: {
        blob: 'blob 30s infinite linear',
        circle: 'circle 30s infinite linear',
        circle2: 'circle2 30s infinite linear'
      }
    },
  },
  plugins: [],
}
export default config
