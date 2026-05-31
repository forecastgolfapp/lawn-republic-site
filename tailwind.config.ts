import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#16265C",
          "navy-hover": "#0F1B45",
          green: "#1F9D3C",
          "green-hover": "#17802F",
          white: "#FFFFFF",
          offwhite: "#F6F7F4",
          slate: "#334155",
          ink: "#0B1220",
          border: "#E3E5DE",
          // legacy aliases
          gold: "#16265C",
          "gold-hover": "#0F1B45",
          cream: "#F6F7F4",
          mist: "#F6F7F4",
          pine: "#17802F"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Manrope", "Inter", "Helvetica Neue", "sans-serif"],
        body: ["var(--font-body)", "Source Sans 3", "Helvetica Neue", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px -35px rgba(22, 38, 92, 0.45)",
        card: "0 24px 60px -40px rgba(22, 38, 92, 0.50)"
      }
    }
  },
  plugins: []
};

export default config;
