// Theme
interface IThemeColors {
	primary: string
	secondary: string
	bgGradient: string
	textGradient: string
	white: string
}

export interface ITheme {
	name: 'light' | 'dark'
	fonts: number[]
	fontWeights: number[]
	lineHeights: number[]
	colors: IThemeColors
}
