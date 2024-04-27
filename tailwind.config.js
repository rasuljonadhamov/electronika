/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#443085",
      },
      backgroundImage: {
        hero: "clip-path: polygon(25% 58.25%, 75% 75%, 25% 75%);",
      },
    },
  },
  plugins: [],
};
