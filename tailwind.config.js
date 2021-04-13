module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.jsx",
    "./components/**/*.tsx",
    "./components/**/*.jsx",
    "./public/index.html",
    "./styles/tailwind.css"
  ],
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "active"],
    spinner: ["responsive"],
    transitionProperty: ["responsive"]
  },
  plugins: []
}
