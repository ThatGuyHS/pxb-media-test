import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ABF5',
        primaryAlt: '#0066F1',
        secondary: '#F63249',
        secondaryAlt: '#C9184A',
        black: '#040407',
        element: '#0B0B16',
        elementAlt: '#151C38',
        white: '#E3E3E3',
        green: '#2FD261',
        yellow: '#F6A923',
        orange: '#F0622A',
        pink: '#EE7782',
        purple: '#7123D2',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        custom: ['Campton', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
        heaters: ['Heaters', 'sans-serif'],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        "pop": 'pop 1s infinite',
        "pulse": 'pulse 3s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        pulse: {
          '0%, 100%': { opacity: "0.7" },
          '50%': { opacity: "1" },
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
