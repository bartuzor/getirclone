/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4c3398",
        "primary-light": "#5d3ebc",
        secondary: "#ffd300",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
