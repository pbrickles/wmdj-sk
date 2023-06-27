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
		}
	},
	plugins: []
};
