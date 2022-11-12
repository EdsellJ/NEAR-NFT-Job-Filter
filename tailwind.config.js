/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
    screens: {
      'xl': { 'max': '1600px' },
      'lg': { 'max': '1200px' },
      'md': { 'max': '992px' },
      'sm': { 'max': '768px' },
      'xs': { 'max': '480px' },
      '2xl': '1600px',
    },
    colors: {
      'primary': '#404471',
      'secondary': '#F7623F',
      'theme': '#1DB8E2',
      'lighttheme': '#CAF4FF',
      'success': '#007513',
      'warning': '#C93131',
      'yellow': '#FFD159',
      'lightblue': '#6B6F9D',
      'darkblue': '#242854',
      'darkgrey': '#605866',
      'lightgrey': '#F1EBF5',
      'grey': '#AEA8B2',
      'white': '#FFF',
      'black': '#000'
    },
		extend: {},
	},
	plugins: [],
};
