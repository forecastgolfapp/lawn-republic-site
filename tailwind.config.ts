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
          green: "#2E7D32",
          navy: "#0B1F4D",
          gold: "#F5C400",
          cream: "#F7F3EA",
          mist: "#F2EFE7",
          pine: "#133D2B",
          slate: "#334155"
        }
      },
      boxShadow: {
        soft: "0 18px 45px -35px rgba(11, 31, 77, 0.5)",
        card: "0 24px 60px -40px rgba(11, 31, 77, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
