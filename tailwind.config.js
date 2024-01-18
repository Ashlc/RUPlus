/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		screens: {
			'tall': { 'raw': '(min-height: 800px)' }
		},
		extend: {
			colors: {
				stdblue: "#005CA9",
				silver: "#BDC3C7",
				moonstone: "#2571CF",
				stdorange: "#E67E22",
				midnight: "#2D3436",
				stdred: "#EB3B5A",
				concrete: "#7f8c8d",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
