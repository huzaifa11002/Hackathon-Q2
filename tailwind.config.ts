import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        "xs" :"480px"
      },
      colors: {
        "main" : "#272343",
        "primary" : "#029FAE",
        "secondary" : "#9A9CAA",
        "gray" : "#636270",
        "sky" : "#F0F2F3"
      }
    },
  },
  plugins: [],
};
export default config;
