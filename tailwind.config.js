/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0f1119',
          light: '#1a1b2e'
        }
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}