// ✅ Correct postcss.config.js
export default {
  plugins: {
    tailwindcss: {},   // ✅ use this, not @tailwindcss/postcss
    autoprefixer: {},
  },
}
