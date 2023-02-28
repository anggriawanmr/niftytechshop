/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/common/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './common/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.js',
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
