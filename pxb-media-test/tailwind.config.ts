import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: { custom: ['Compton', 'sans-serif'], // Add fallback fonts if necessary 
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
