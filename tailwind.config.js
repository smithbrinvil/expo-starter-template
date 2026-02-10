/** @type {import('tailwindcss').Config} */
module.exports = {
  // Indique à Tailwind de scanner tous les fichiers dans le dossier "app"
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
