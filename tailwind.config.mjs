/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: 'var(--blue)',
				white: 'var(--white)',
				black: 'var(--black)',
			},
			keyframes: {
				scaleAnim: {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				scale: 'scaleAnim 300ms ease-in-out',
			},
		},
	},
	plugins: [],
};
