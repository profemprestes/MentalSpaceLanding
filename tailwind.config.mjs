/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		mytheme: {
			"primary": "#9400ff",
			"secondary": "#ff0000",
			"accent": "#7c3a00",
			"neutral": "#1b2d3e",
			"base-100": "#fffdff",
			"info": "#00d5ff",
			"success": "#94c600",
			"warning": "#c32600",
			"error": "#ff8783",
		},
	},
	plugins: [],
}
