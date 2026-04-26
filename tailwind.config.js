/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#32b3ea",
          dark: "#1f9bd1",
          light: "#e6f5fc",
        },
        accent: {
          DEFAULT: "#3ad19c",
          dark: "#2bb583",
          light: "#e8faf3",
        },
        dark: {
          DEFAULT: "#213b60",
          deep: "#172a45",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
