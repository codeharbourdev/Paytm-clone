/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  // 👈 Yeh line zaroori hai
      },

      colors: {
        other1: "#002970",
        other2: "#e8f8fd",
        other3: "#00baf2",
        other4: "#00b9f5",
        other5: "#29394f",
        other6: "#f5f9fe",
      },
    },
  },
  plugins: [],
}

