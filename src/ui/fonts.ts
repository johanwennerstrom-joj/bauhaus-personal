import localFont from '@next/font/local'

const hkGrotesk = localFont({
	src: [
		{ path: 'fonts/HKGrotestk-Light.woff2', weight: '300', style: 'light' },
		{ path: 'fonts/HKGrotestk-Medium.woff2', weight: '600', style: 'medium' },
		{ path: 'fonts/HKGrotestk-Regular.woff2', weight: '400', style: 'regular' }
	],
	variable: '--grotesk',
	display: 'swap'
})

export default hkGrotesk.variable
