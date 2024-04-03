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
						height: '20rem',
						width: '20rem',
						top: '0',
						left: '50%',
						borderRadius: '1rem',
						transform: 'translateX(-50%) translateY(-4rem)',
					},
					to: {
						height: '8rem',
						width: '8rem',
						borderRadius: '50%',
						left: '0%',
						transform: 'translateX(0) translateY(0)',
					}
				},
			}
		},
		animation: {
			scale: 'scale linear both',
			imageFade: 'imageFade linear both',
		}
	},
	plugins: [],
}
