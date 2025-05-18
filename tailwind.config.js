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
        other7: "#0f0f0f8a",
        other8: "#27ae60",
        other9: "#f7f9fc",
        other10: "#e9f1fc",
      },
    },
  },
  plugins: [],
}

