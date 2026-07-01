import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#ffffff",

        primary: "#2563eb",

        card: "#111827",

        accent: "#7c3aed",
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },
    },
  },

  plugins: [],
};

export default config;
