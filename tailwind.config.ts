/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './error.vue'],
  darkMode: ['class', '[data-theme]'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark'],
    logs: false,
  },
}
