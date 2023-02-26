'use client'
import useScrollProgress from 'hooks/useScrollProgress'

const ScrollIndicator = () => {
	const scroll = useScrollProgress()
	return (
		<div
			role='progressbar'
			className='h-xxxs bg-crimson-100 width-transition fixed top-[0px] z-50'
			style={{ width: `${scroll}%` }}
		/>
	)
}

export default ScrollIndicator
