import { ReactNode } from 'react'
import 'ui/globals.css'
import font from 'ui/fonts'

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang='en' className={font}>
			<head />
			<body>{children}</body>
		</html>
	)
}

export default RootLayout
