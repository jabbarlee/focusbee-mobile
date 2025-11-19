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
        // Light mode colors (OKLCH converted to hex)
        background: "#ffffff", // oklch(1 0 0)
        foreground: "#252525", // oklch(0.145 0 0)
        primary: "#f59e0b", // oklch(55.5% 0.163 48.998) - Honey gold
        "primary-foreground": "#fef3c7", // oklch(0.98 0.02 70) - Light cream
        secondary: "#f7f7f7", // oklch(0.97 0 0)
        "secondary-foreground": "#353535", // oklch(0.205 0 0)
        accent: "#f7f7f7", // oklch(0.97 0 0)
        "accent-foreground": "#353535", // oklch(0.205 0 0)
        destructive: "#ef4444", // oklch(0.4966 0.1808 19.64)
        "destructive-foreground": "#f5f0e8",
        success: "#4ade80", // oklch(50.8% 0.118 165.612)
        muted: "#f7f7f7", // oklch(0.97 0 0)
        "muted-foreground": "#8e8e8e", // oklch(0.556 0 0)
        card: "#ffffff", // oklch(1 0 0)
        "card-foreground": "#252525", // oklch(0.145 0 0)
        border: "#ebebeb", // oklch(0.922 0 0)
        input: "#ebebeb", // oklch(0.922 0 0)
        ring: "#b5b5b5", // oklch(0.708 0 0)
        // Chart colors
        "chart-1": "#f59e0b", // oklch(0.646 0.222 41.116) - Warm orange
        "chart-2": "#3b82f6", // oklch(0.6 0.118 184.704) - Cool blue
        "chart-3": "#6366f1", // oklch(0.398 0.07 227.392)
        "chart-4": "#fbbf24", // oklch(0.828 0.189 84.429)
        "chart-5": "#f59e0b", // oklch(0.769 0.188 70.08)
      },
      borderRadius: {
        sm: "8px",
        md: "10px", // 0.625rem
        lg: "12px",
        xl: "20px",
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
