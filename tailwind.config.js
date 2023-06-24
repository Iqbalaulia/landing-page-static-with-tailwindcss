/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		fontFamily: {
			sans: ["Work Sans", "sans-serif"],
		},
		extend: {
			colors: {
				bs: {
					background: {
						bg_1: "#F7F8FB",
						bg_2: "#FFE3C8",
					},
					bg: "#F8F9FA",
					line: "#E2E9F3",
					white: {
						primary: "#FFFFFF",
						secondary: "#FAFAFA",
					},
					black: {
						primary: "#110F14",
						secondary: "#424C5A",
						third: "#1d1b20",
						four:"#A09FA1"
					},
					red: {
						primary: "#FE5842",
					},
					orange: {
						primary: "#F15A23",
						secondary: "#FDE6DE",
					},
					yellow: {
						primary: "#FFEBCD",
					},
				},
			},
			height: {
				128: "32rem",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
