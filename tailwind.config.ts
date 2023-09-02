import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-roboto)",
        alt: "var(--font-raleway)",
      },
      colors: {
        "brand-primary-blue": "#151f27",
        "brand-secondary-blue": "#25313d",
        "brand-orange": "#ff914d",
        "brand-gray": "#b9c1be",
      },
    },
  },
  plugins: [],
};
export default config;
