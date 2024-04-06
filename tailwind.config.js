/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "red": "#FF5E5E",
          "dark-red": "#BC4747",
        },
        secondary: {
          "cyan-blue": "#E7ECF1",
          "tealish-blue": "#242942",
        },
        neutral: {
          "very-dark-blue": "hsl(230, 29%, 20%)",
          "dark-grayish-blue": "hsl(230, 11%, 40%)",
          "grayish-blue": "hsl(231, 7%, 65%)",
          "light-grayish-blue": "hsl(207, 33%, 95%)",
        },
      },
    },
    plugins: [],
  },
};
