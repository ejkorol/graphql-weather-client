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
        light: "#fafafa",
        dark: "#212121",
        gray: "#757575",
        grayLight: "#bdbdbd",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
