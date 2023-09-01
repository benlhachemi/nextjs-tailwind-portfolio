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
        card: {
          "0%": {
            transform: "scale(0.95) translateX(0) translateY(0) rotate(-3deg)"
          },
          "20%": {
            transform: "scale(0.95) translateX(0) translateY(0) rotate(-3deg)"
          },
          "35%": {
            transform: "scale(1.05) translateX(0%) translateY(-20%) rotate(-10deg)"
          },
          "85%": {
            transform: "scale(1.05) translateX(0%) translateY(-20%) rotate(-10deg)"
          },
          "100%": {
            transform: "scale(0.95) translateX(0) translateY(0) rotate(-3deg)"
          }
        },
        card2: {
          "0%": {
            transform: "scale(0.99) translateX(0) translateY(0)"
          },
          "20%": {
            transform: "scale(0.99) translateX(0) translateY(0)"
          },
          "35%": {
            transform: "scale(1.02) translateX(0%) translateY(-20%)"
          },
          "85%": {
            transform: "scale(1.02) translateX(0%) translateY(-20%)"
          },
          "100%": {
            transform: "scale(0.99) translateX(0) translateY(0)"
          }
        },
        card3: {
          "0%": {
            transform: "scale(0.9) translateX(0) translateY(0) rotate(6deg)"
          },
          "20%": {
            transform: "scale(0.9) translateX(0) translateY(0) rotate(6deg)"
          },
          "35%": {
            transform: "scale(1.05) translateX(50%) translateY(-20%) rotate(10deg)"
          },
          "85%": {
            transform: "scale(1.05) translateX(50%) translateY(-20%) rotate(10deg)"
          },
          "100%": {
            transform: "scale(0.9) translateX(0) translateY(0) rotate(6deg)"
          }
        },
      },
      animation: {
        blob: 'blob 30s infinite linear',
        circle: 'circle 30s infinite linear',
        circle2: 'circle2 30s infinite linear',
        card: 'card 10s infinite linear',
        card2: 'card2 10s infinite linear',
        card3: 'card3 10s infinite linear',
      }
    },
  },
  plugins: [],
}
export default config
