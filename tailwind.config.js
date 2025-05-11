// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#4263eb",
//         secondary: "#63e6be",
//       },
//       container: {
//         center: true,
//         padding: {
//           DEFAULT: "1rem",
//           sm: "3rem",
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4F46E5",   // Light mode primary
          dark: "#6366F1",    // Dark mode primary
          DEFAULT: "#4F46E5", // Fallback default
        },
        secondary: {
          light: "#E5E7EB",   // Light mode secondary (borders/cards)
          dark: "#1F2937",    // Dark mode secondary
          DEFAULT: "#E5E7EB",
        },
        background: {
          light: "#F9FAFB",
          dark: "#111827",
        },
        text: {
          light: "#111827",
          dark: "#F9FAFB",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
