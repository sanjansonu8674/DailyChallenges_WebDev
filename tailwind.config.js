/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 10s linear infinite", // Set a 10s infinite float animation
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(50vh)" },  // Start at the middle of the second page
          "100%": { transform: "translateY(-50vh)" }, // End at the middle of the first page
        },
      },
    },
  },
  plugins: [],
};

