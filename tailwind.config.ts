import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#E8E0C8",
        olive: "#65743A",
        forest: "#233F0B",
        amber: "#D9A15B",
        orange: "#C17025",
        ivory: "#F7F1E3",
        linen: "#DDD1B8",
        bark: "#2B271F"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-manrope)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(35, 63, 11, 0.12)",
        lift: "0 16px 44px rgba(43, 39, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
