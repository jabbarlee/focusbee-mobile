/** @type {import('tailwindcss').Config} */
module.exports = {
  // update these paths to include all places you use className/nativewind classes
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // OKLCH color space colors
        background: "oklch(0.145 0 0)", // Dark background
        foreground: "oklch(0.985 0 0)", // Light text
        card: "oklch(0.205 0 0)", // Dark card
        primary: "oklch(0.922 0 0)", // Light primary
        "primary-foreground": "oklch(0.98 0.02 70)", // Light cream
        muted: "oklch(0.97 0 0)", // Subtle gray
        border: "oklch(0.922 0 0)", // Light border
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
      },
    },
  },
  plugins: [],
};
