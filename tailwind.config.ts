import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: { DEFAULT: "#014034", 950: "#00241d", 900: "#014034", 800: "#0b5243", 700: "#1d6a59", 600: "#3a8170", 200: "#c5dbd3", 100: "#e3eee9", 50: "#f1f6f3" },
        gold: { DEFAULT: "#D9A13B", 700: "#8a6114", 600: "#a77a22", 500: "#D9A13B", 300: "#ecc985", 100: "#f8ead0" },
        ivory: { DEFAULT: "#FFF6EB", 50: "#fffbf5", 100: "#FFF6EB", 200: "#f5e9d8" },
        slate: { DEFAULT: "#25362F", 900: "#1a2722", 800: "#25362F", 700: "#3a4d45", 600: "#55665f", 500: "#73827b", 400: "#98a49f", 300: "#c3cbc7", 200: "#dfe4e1", 100: "#eef1ef" },
        sand: { 50: "#faf7f2", 100: "#f3eee5", 200: "#e8e0d2", 300: "#d6cab6" },
        ev: { verified: "#1d6a59", reported: "#2f5d8a", interpretation: "#6b5a9b", hypothesis: "#a7562a", recommendation: "#8a6114", illustrative: "#7a6f62", pending: "#a23b3b", approved: "#2e7d32", implemented: "#14532d" },
      },
      fontFamily: {
        sans: ["var(--font-ar)", "var(--font-en)", "system-ui", "sans-serif"],
        en: ["var(--font-en)", "system-ui", "sans-serif"],
      },
      maxWidth: { read: "72ch", page: "1240px" },
      boxShadow: { soft: "0 1px 2px rgba(1,64,52,.04), 0 8px 24px -12px rgba(1,64,52,.18)" },
    },
  },
  safelist: [{ pattern: /^(bg|text|border)-ev-(verified|reported|interpretation|hypothesis|recommendation|illustrative|pending|approved|implemented)$/ }],
  plugins: [],
};
export default config;
