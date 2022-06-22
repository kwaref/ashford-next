module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '576px',
			emexs: '756px',
			xsm: '768px',
			sm: '800px',
			msm: '814px',
			xsd: '860px',
			sd: '916px',
			xmd: '956px',
			md: '992px',
			lg: '1024px',
			xl: '1057px',
			xxl: '1068px',
			xxxl: '1136px',
			ivxl: '1400px',
			'2xl': '1440px',
		},
		extend: {
			colors: {
				silver: '#F6F8FC',
				blackNavlink: '#27364B',
				navyFooter: '#002554',
				greenArrow: '#3eb1c8',
				silverMedia: '#cbd4e1',
				silverContact: '#EFF3F8',
			},
		},
		images: {
			formats: ['image/avif', 'image/webp'],
		},
	},
	plugins: [require('tailwindcss-animate')],
}
