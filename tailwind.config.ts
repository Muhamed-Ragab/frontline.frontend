import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/*",
  ],
  theme: {
    screens: {
      large: { max: "1530px" },
      medium: { max: "1280px" },
      tablet: { max: "1024px" },
      mobile: { max: "768px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
    extend: {
      maxWidth: {
        large: "1800px",
        medium: "1600px",
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        background: "hsl(var(--background))",
        customBlue: "rgba(0, 102, 255, 1)",
        customPrimary: "rgba(175, 243, 0, 1)",
        customSecondary: "rgba(240, 240, 240, 1)",
        whiteBackground: "rgba(255, 255, 255, 1)",
        foreground: "hsl(var(--foreground))",
        "foreground-secondary": "#a0a0a0",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        "roobert-pro": ["Roobert PRO", "sans-serif"],
        "clash-display": ["Clash Display", "sans-serif"],
        "basement-grotesque": ["Basement Grotesque", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1920px",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          colors: {},
        },
      },
    }),
  ],
} satisfies Config;
