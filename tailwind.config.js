/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#14279b",
      },
      keyframes: {
        slowBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        slowBounce: "slowBounce 2s ease-in-out infinite", 
      },
    },
  },
  plugins: [],
};
