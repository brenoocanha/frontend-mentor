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
    },
    colors: {
      background: "#EFF5FF",
      border: "#D6D9E6",
      denim: "#022959",
      grey: "#9699AA",
      lightblue: "#ABBCFF",
      lightgrey: "#D6D9E6",
      orange: "#FFAF7E",
      pink: "#F9818E",
      purple: "#483EFF",
      rederrors: "#EE374A",
      skyblue: "#BEE2FD",
      verylightgrey: "#F8F9FF",
    }
  },
  plugins: [],
};
export default config;
