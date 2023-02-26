import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const getDocHeight = () => {
	return Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	)
}

const handleScroll = (setter: Dispatch<SetStateAction<number>>, docHeight: number) => {
	requestAnimationFrame(() => {
		setter(Math.floor((window.scrollY / (docHeight - window.innerHeight)) * 100))
	})
}

const useScrollProgress = () => {
	const [scroll, setScroll] = useState(0)

	useEffect(() => {
		setScroll(Math.floor((window.scrollY / (getDocHeight() - window.innerHeight)) * 100))
		document.addEventListener('scroll', () => handleScroll(setScroll, getDocHeight()))
		return () => {
			document.removeEventListener('scroll', () => handleScroll(setScroll, getDocHeight()))
		}
	}, [])

	return scroll
}

export default useScrollProgress
