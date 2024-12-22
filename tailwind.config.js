/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#1a416b",
          300: "#0e5274",
          400: "#0d3663",
          500: "#002b5b"
        },
        gray: {
          50: "#64748b",
          100: "#66809d",
          200: "#869ab0"
        },
        cyan: {
          400: "#3ee0cf"
        }
      }
    },
  },
  plugins: [],
}

