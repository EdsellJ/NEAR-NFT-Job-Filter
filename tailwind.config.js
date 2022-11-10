/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
    screens: {
      'xl': { 'max': '1600px' },
      'lg': { 'max': '1200px' },
      'md': { 'max': '992px' },
      'sm': { 'max': '768px' },
      'xs': { 'max': '576px' },
      '2xl': '1600px',
    },
    colors: {
      'primary': '#007AFF',
      'background': '#E3F0F1',
      'white': '#FFF',
      'black': '#000'
    },
		extend: {},
	},
	plugins: [],
};
