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
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#1d4ed8",
          600: "#1e40af",
          700: "#1e3a8a",
          DEFAULT: "#1d4ed8",
        },
        teal: {
          500: "#0d9488",
          600: "#0f766e",
          700: "#115e59",
        },
        accent: {
          DEFAULT: "#f97316",
          600: "#ea580c",
        },
        navy: "#0f172a",
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
