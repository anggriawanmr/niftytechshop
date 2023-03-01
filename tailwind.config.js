/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './src/common/**/*.{js,ts,jsx,tsx}',
    './src/common/pages/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js, jsx, tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Aboreto', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
