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
      screens: {
        xxs: "0",
        xsm: "420px",
        sm: "640px",
        md: "768px",
        lg: "1124px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
