const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./layouts/**/*.tsx",
    "./lib/**/*.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bgLight: "#FEFBF3",
        bgDark: "#161618",
        bgAccentLight: "#F8F0DF",
        primaryLight: "#9D9D9D",
        neptune: {
          DEFAULT: "#79B4B7",
          50: "#F0F7F7",
          100: "#E3EFF0",
          200: "#C9E1E2",
          300: "#AED2D4",
          400: "#94C3C5",
          500: "#79B4B7",
          600: "#579EA1",
          700: "#437A7D",
          800: "#2F5658",
          900: "#1C3334",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
        11: "2.75rem",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        yellow: "0 8px 30px rgba(245, 158, 11, 0.12)",
        neptune: "0 8px 30px rgba(121, 180, 183, 0.12)",
      },
      typography: ({ theme }) => ({}),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
