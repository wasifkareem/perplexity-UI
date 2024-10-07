/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "oklch(0.304 0.04 213.681)",
        light: "oklch(0.502 0.008 106.677)",
      },
      fontFamily: {
        sans: ["grotesk", "ui-sans-serif", "system-ui"],
      },
      transitionDuration: {
        smooth: "200ms",
      },
      spacing: {
        "word-spacing": "0.25em", // You can adjust the value as needed
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
    },
  },
  plugins: [],
};
