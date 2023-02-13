/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        app_background_stripe: "#00a884",
        app_background: "#eae6df",
        text_default: "#41525d",
        alternative_app_background: "#f0f2f5",
      },
    },
  },
  plugins: [],
};
