/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        detour: {
          green: "#0B462A",
          gold: "#FFC72C",
          lightGreen: "#E6EEE9",
          darkText: "#1E1E1E",
          cardBg: "#FFFFFF",
          alertRed: "#DC2626",
          alertBg: "#FEE2E2",
        },
        // Expose as top-level aliases for shorter class names
        border: "#E5E7EB",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
