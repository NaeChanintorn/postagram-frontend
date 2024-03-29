import { SearchIcon } from "./src/icons/Icons";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      cur: ["Dancing Script", "cursive"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
