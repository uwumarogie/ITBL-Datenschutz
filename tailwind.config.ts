import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/services/**/*.{js,ts,jsx,tsx,mdx}",
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
      fadeOut: {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
      blurOut: {
        "0%": { filter: "blur(6px)" },
        "100%": { filter: "blur(0px)" },
      },
      blurIn: {
        "0%": { filter: "blur(0px)" },
        "100%": { filter: "blur(6px)" },
      },
      slideIn: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" },
      },
      slideOut: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(100%)" },
      },
      bounce: {
        "0%": {
          transform: "translateY(-30%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        },
        "100%": {
          transform: "translateY(-30%)",
          animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
        },
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
      scaleIn: {
        "0%": { transform: "scale(0)" },
        "100%": { transform: "scale(1)" },
      },
      scaleOut: {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      pulse: {
        "0%": { opacity: "100%" },
        "100%": { opacity: "60%" },
      },
    },
    animation: {
      blurOut: "blurOut 2s ease-in-out",
      blurIn: "blurIn 2s ease-in-out",
      slideIn: "slideIn 0.5s ease-out forwards",
      slideOut: "slideOut 0.5s ease-out forwards",
      shake: "shake 0.5s ease-in-out",
      pointIncrease: "pointIncrease 0.3s ease-in-out",
      slideUp: "slideUp 0.5s ease-out forwards",
      slideDown: "slideDown 0.5s ease-out forwards",
      bounce: "bounce 1s infinite",
      scaleIn: "scaleIn 0.3s ease-in-out",
      scaleOut: "scaleOut 0.3s ease-in-out",
      fadeOut: "fadeOut 0.5s ease-in-out",
      rotate: "rotate 6s linear infinite",
      rotateInv: "rotate 6s linear reverse infinite",
      pulse: "pulse 1s ease-in-out",
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
