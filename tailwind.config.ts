import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-background": "#013A63",
        "blue-contrast": "#014F86",
        "blue-master": "#5543A5",
        "module-blue": "#A9D6E5",
      },
      height: {
        "reduced-40": "calc(100% - 38px)",
        "reduced-safari": "calc(100vh - 50px)",
      },
    },
    keyframes: {
      slideIn: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(100%)" },
      },
      shake: {
        "0%, 100%": { transform: "translateX(0)" },
        "25%": { transform: "translateX(-5px)" },
        "50%": { transform: "translateX(5px)" },
        "75%": { transform: "translateX(-5px)" },
      },
      pointIncrease: {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.4)" },
        "100%": { transform: "scale(1)" },
      },
      slideUp: {
        "0%": { transform: "translateY(20%)" },
        "100%": { transform: "translateY(0)" },
      },
      slideDown: {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    animation: {
      slideIn: "slideIn 0.5s ease-out forwards",
      slideOut: "slideOut 0.5s ease-out forwards",
      shake: "shake 0.5s ease-in-out",
      pointIncrease: "pointIncrease 0.3s ease-in-out",
      slideUp: "slideUp 0.5s ease-out forwards",
      slideDown: "slideDown 0.5s ease-out forwards",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
