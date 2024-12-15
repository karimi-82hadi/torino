/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: {
        100: "#d8ffe1",
        300: "#28a74540",
        500: "#28a7454d",
        700: "#28a745",
        900: "#10411b",
      },
      secondary: "#282828",
      complementry: "#009eca",
      red: "#d40000",
      yellow: {
        500: "#d1b9004d",
        700: "#d1b900",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: ".75rem",
      },
    },
    extend: {
      fontFamily: {
        vazirmatn: "var(--font-vazirmatn)",
      },
    },
  },
  plugins: [],
};
