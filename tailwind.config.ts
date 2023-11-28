import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		colors: {
			'dystopi-yellow': '#FFB800',
			'dystopi-black': '#09090B',
			'dystopi-sand': '#D5CFC2'
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			fontFamily: {
				chillax: ['var(--font-chillax)'],
				vanguard: ['var(--font-vanguard)']
			},
			screens: {
				'3xl': '2500px'
			}
		}
	},
	plugins: []
};
export default config;
