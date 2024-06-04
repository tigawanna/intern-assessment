/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#18d26e",
        background: "#26374b",
        buttons: "#25be70",
      },
    },
  },
  plugins: [],
};
