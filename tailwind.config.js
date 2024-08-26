/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				'primary': '#FF914C',
				'primary_2': '#eb4d4b',
				'secondary': '#999999',
				'success': '#1E8449',
				'danger': '#df2234',
				'warning': '#ffc107',
				'info': '#3390FF',
				'light': '#ffffff',
				'dark': '#2E4053',
				'darker': '#212F3C',
				'nico':'#DD5D5C',
				'akzm_orange': '#FF914C',
        'akzm_red': '#FF6868',
        'akzm_red_variant': '#DD5D5C',
        'akzm_gray': '#707070'
			},
      fontFamily: {
        primaryLight:['Light'],
        primaryRegular:['Regular'],
        primaryMedium:['Medium'],
        primaryBold:['Bold'],
        sans: ["Regular", "sans-serif"],
      }
		},
  },
  plugins: [],
});

