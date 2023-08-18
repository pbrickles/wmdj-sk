/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "2rem",
			"4xl": "2.5rem",
			headlineSm: ["2.9rem", "100%"],
			headlineLg: ["4.375rem", "100%"]
		},
		extend: {
			spacing: {
				xs: "0.25rem",
				sm: "0.5rem",
				md: "1rem",
				lg: "2rem"
			},
			colors: {
				pinkDark: "#FC4966",
				pinkLight: "#FCD6E1",
				white: "#FFFFFF",
				grey: "#AAAAAA",
				darkGrey: "#444444",
				lightGrey: "#E5E5E5",
				black: "#202120",
				whamPink: "#FC4966",
				grey5: "#E0E0E0",
				coralPink: "#FDA4AE",
				blushPink: "#FDD9E3",
				bookBlack: "#0d222b",
				primary: "#FCD6E1",
				secondary: "#FCD6E1",
				link: "#202120",
				heading: "#202120",
				footer: "#FFFFFF",
				body: "#202120"
			}
		}
	},
	plugins: []
};
