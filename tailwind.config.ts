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
          // Primary palette (sampled by eye from logo — re-sample if vector logo is provided)
          navy: "#16265C",
          "navy-hover": "#0F1B45",
          green: "#1F9D3C",
          "green-hover": "#17802F",

          // Background neutrals
          white: "#FFFFFF",
          offwhite: "#F6F7F4",

          // Muted text / borders
          slate: "#334155",
          ink: "#0B1220",
          border: "#E3E5DE",

          // Legacy aliases kept temporarily so older components keep building.
          // Migrate to the new tokens above; these alias to the closest new value.
          gold: "#16265C",
          "gold-hover": "#0F1B45",
          cream: "#F6F7F4",
          mist: "#F6F7F4",
          pine: "#17802F"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
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
