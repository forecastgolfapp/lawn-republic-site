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
          50: "#f4fbf7",
          100: "#e4f7ed",
          200: "#c5edd9",
          300: "#93dbb7",
          400: "#57c58d",
          500: "#2aa36a",
          600: "#1c8254",
          700: "#186845",
          800: "#145339",
          900: "#0f3a2a"
        },
        earth: {
          50: "#faf7f2",
          100: "#f3ece2",
          200: "#e6d7c2",
          300: "#d2b894",
          400: "#c09c6c",
          500: "#aa7c4b",
          600: "#8a623a",
          700: "#6f4c2e",
          800: "#583c25",
          900: "#412c1c"
        }
      },
      boxShadow: {
        soft: "0 18px 45px -35px rgba(15, 58, 42, 0.45)",
        card: "0 20px 50px -30px rgba(15, 58, 42, 0.5)"
      }
    }
  },
  plugins: []
};

export default config;
