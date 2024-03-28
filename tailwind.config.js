/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
          "other": {'min': '340px', 'max': '1200px'},
        },
        colors: {
          darkbg: "#98ABEF",
          blue: {
            850: "#1e40af"
          }
        }
    },
  },
  plugins: [],
}

