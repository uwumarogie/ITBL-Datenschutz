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
      },
      height: {
        "reduced-40": "calc(100% - 60px)",
        "reduced-safari": "calc(100vh - 90px)",
      },
    },
  },
  plugins: [],
};
export default config;
