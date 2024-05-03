import { Theme } from 'src/types/interfaces'

const fonts = [14, 16, 20, 22, 30, 38, 46, 56]
const fontWeights = [300, 400, 500, 600]
const lineHeights = [24, 28, 33, 40, 60, 112]

export const colors = {
	primary: '#030304',
	secondary: '#002B4E',
	dark: '#2d2d2d',
	error: '#FF0000',
	btn: '#3c9e20',
	primaryBgGradient: 'linear-gradient(225deg, #121212 0%, #24794059 50%, transparent 100%)',
	secondaryBgGradient: 'linear-gradient(225deg, #2c5d2c 0%, #2c5d2c 50%, black 100%)',
	popUpBg: '#0000009e',
	textGradient: 'linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%)',
	white: '#fff',
	textPrimary: '#fff',
	textSecondary: '#d9d9d9',
	textTertiary: '#a7b2c3',
	textDark: '#898989',
	icon: '#00bc4f',
	iconBg: '#00bc4f4a',
	cardBorder: '#474747',
	cardBg: '#202025',
	chartGrid: '#424242',
	selectBg: '#a0a0a0',
	selectHover: '#626262',
}
const colorsLight = {
	primary: '#f5f5dc',
	secondary: '#002B4E',
	dark: '#ffe4c4',
	error: '#FF0000',
	btn: '#3c9e20',
	primaryBgGradient: '#ffebcd',
	secondaryBgGradient: '#e6e6fa',
	popUpBg: '#0000009e',
	textGradient: 'linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%)',
	white: '#fff',
	textPrimary: '#000',
	textSecondary: '#5e5e5e',
	textTertiary: '#a7b2c3',
	textDark: '#898989',
	icon: '#00bc4f',
	iconBg: '#00bc4f4a',
	cardBorder: '#88dd35',
	cardBg: '#ffebcd',
	chartGrid: '#424242',
	selectBg: '#a0a0a0',
	selectHover: '#626262',
}

export const light: Theme = {
	name: 'light',
	fonts,
	fontWeights,
	colors: colorsLight,
	lineHeights,
}

export const dark: Theme = {
	name: 'dark',
	fonts,
	fontWeights,
	colors,
	lineHeights,
}
