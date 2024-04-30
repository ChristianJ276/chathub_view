import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/menu/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/users/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/chat/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", 
        "font-chat": "url('/imgs/fondoChat.png')"         
      },
      gridAutoColumns:{
        "grid-template-col": "grid-template-columns:2% 10% 85%",
      }
    },
  },
  plugins: [],
};
export default config;
