import localFont from 'next/font/local'

const hkGrotesk = localFont({
	src: [
		{ path: '../../public/fonts/HKGrotesk-Light.woff2', weight: '300', style: 'light' },
		{ path: '../../public/fonts/HKGrotesk-Medium.woff2', weight: '600', style: 'medium' },
		{ path: '../../public/fonts/HKGrotesk-Regular.woff2', weight: '400', style: 'regular' }
	],
	variable: '--grotesk',
	display: 'swap'
})

export default hkGrotesk.variable
