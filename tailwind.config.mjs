/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				scale: {
					from: {
						scale: '0.5',
						boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
					},
					to: {
						scale: '1',
						boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
					}
				},
				imageFade: {
					from: {
						borderRadius: '1rem',
						transform: 'translateX(200%)',
					},
					to: {
						left: '0%',
						transform: 'translateX(0)',
					}
				},
				shake: {
					'0%': {
						transform: 'rotateZ(0) scale(1.2)',
					},
					'33%': {
						transform: 'rotateZ(-15deg)',
					},
					'66%': {
						transform: 'rotateZ(15deg)',
					},
					'100%': {
						transform: 'rotateZ(0) scale(1)',
					},
				},
			}
		},
		animation: {
			scale: 'scale linear both',
			imageFade: 'imageFade linear both',
			shake: 'shake linear both',
		}
	},
	plugins: [],
}
