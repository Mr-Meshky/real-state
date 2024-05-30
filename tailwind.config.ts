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
        primary: "#028391",
        secondary: "#01204E",
        danger: "rgb(219, 5, 5)",
        success: "#00a800",
      },
    },
  },
  plugins: [],
};
export default config;
