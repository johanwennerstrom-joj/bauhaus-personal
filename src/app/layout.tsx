import { ReactNode } from 'react'
import 'ui/globals.css'
import font from 'ui/fonts'
import ScrollIndicator from 'components/ScrollIndicator/ScrollIndicator'

export const metadata = {
	title: 'Johan Wennerström',
	description: 'Personal website for me. Just for fun'
}

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='en' className={font}>
			<body className='bg-whiteish'>
				<ScrollIndicator />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
