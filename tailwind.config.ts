import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#172554",
        },
        crimson: {
          DEFAULT: "#9B1C1C",
          deep: "#6B1111",
          light: "#FEF2F2",
          50: "#FFF5F5",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          600: "#dc2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        ink: {
          DEFAULT: "#111111",
          soft: "#444444",
          muted: "#888888",
        },
        bone: {
          DEFAULT: "#FAFAF8",
          dark: "#F0EDE8",
          border: "#E5E0D8",
        },
        gold: "#C9A84C",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  plugins: [],
};
export default config;
