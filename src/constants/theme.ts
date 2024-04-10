import { ITheme } from 'src/types/interfaces'

const fonts = [14, 16, 20, 22, 30, 38, 46, 56]
const fontWeights = [300, 400, 500, 600]
const lineHeights = [24, 28, 33, 40, 60, 112]
const colors = {
	primary: '#030304',
	secondary: '#002B4E',
	bgGradient: 'linear-gradient(225deg, #121212 0%, #24794059 50%, transparent 100%)',
	textGradient: 'linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%)',
	white: '#fff',
}

export const light: ITheme = {
	name: 'light',
	fonts,
	fontWeights,
	colors,
	lineHeights,
}

export const dark: ITheme = {
	name: 'dark',
	fonts,
	fontWeights,
	colors,
	lineHeights,
}
