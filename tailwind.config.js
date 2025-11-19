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
        background: "#ffffff", // oklch(1 0 0)
        foreground: "#252525", // oklch(0.145 0 0)
        primary: "#bb4d00", // oklch(55.5% 0.163 48.998)
        "primary-foreground": "#fef5db", // oklch(0.98 0.02 70)
        secondary: "#f7f7f7", // oklch(0.97 0 0)
        "secondary-foreground": "#353535", // oklch(0.205 0 0)
        destructive: "#b72f24", // oklch(0.4966 0.1808 19.64)
        "destructive-foreground": "#f5f0e8",
        accent: "#f7f7f7", // oklch(0.97 0 0)
        "accent-foreground": "#353535", // oklch(0.205 0 0)
        success: "#00b86b", // oklch(50.8% 0.118 165.612)
        muted: "#f7f7f7", // oklch(0.97 0 0)
        "muted-foreground": "#8e8e8e", // oklch(0.556 0 0)
        card: "#ffffff", // oklch(1 0 0)
        "card-foreground": "#252525", // oklch(0.145 0 0)
        popover: "#ffffff", // oklch(1 0 0)
        "popover-foreground": "#252525", // oklch(0.145 0 0)
        border: "#ebebeb", // oklch(0.922 0 0)
        input: "#ebebeb", // oklch(0.922 0 0)
        ring: "#b5b5b5", // oklch(0.708 0 0)
        // Charts
        "chart-1": "#df6515", // oklch(0.646 0.222 41.116)
        "chart-2": "#2775e8", // oklch(0.6 0.118 184.704)
        "chart-3": "#3d3fa8", // oklch(0.398 0.07 227.392)
        "chart-4": "#edb822", // oklch(0.828 0.189 84.429)
        "chart-5": "#e89717", // oklch(0.769 0.188 70.08)
        // Sidebar
        sidebar: "#fafafa", // oklch(0.985 0 0)
        "sidebar-foreground": "#252525", // oklch(0.145 0 0)
        "sidebar-primary": "#353535", // oklch(0.205 0 0)
        "sidebar-primary-foreground": "#fafafa", // oklch(0.985 0 0)
        "sidebar-accent": "#f7f7f7", // oklch(0.97 0 0)
        "sidebar-accent-foreground": "#353535", // oklch(0.205 0 0)
        "sidebar-border": "#ebebeb", // oklch(0.922 0 0)
        "sidebar-ring": "#b5b5b5", // oklch(0.708 0 0)
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
