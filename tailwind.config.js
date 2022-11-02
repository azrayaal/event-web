/** @type {import('tailwindcss').Config} */
module.exports = {
  // borderRadius: {
  //   '4xl': '2rem',
  // },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.html', './node_modules/flowbite-react/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};
