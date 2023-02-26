import resolveConfig from 'tailwindcss/resolveConfig'
import config from 'tailwind.config'

export const getTailwindTheme = () => {
	return resolveConfig(config).theme!
}
