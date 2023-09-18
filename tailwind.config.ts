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
        barlow: "var(--font-barlow)",
      },
      colors: {
        "brand-primary-blue": "#151f27",
        "brand-secondary-blue": "#25313d",
        "brand-orange": "#ff914d",
        "brand-gray": "#b9c1be",
      },
      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
      },
    },
  },
  plugins: [],
};
export default config;
