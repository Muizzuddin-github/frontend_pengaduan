/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        "dark-blue": "#043873",
        "light-blue": "#4F9CF9",
        "light-blue-hover": "#2F80E1",
        "secondary-yellow": "#FFE492",
        "secondary-yellow-hover": "#E7C356",
      },
      boxShadow: {
        km: "1px 1px 5px 0px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
