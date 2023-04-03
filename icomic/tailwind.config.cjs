/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { strip: "url('./src/assets/bg.jpg')" },
      fontFamily: {
        comic: ['Comic Neue'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
