// Theme
interface IThemeColors {
	primary: string
}

export interface ITheme {
	name: 'light' | 'dark'
	colors: IThemeColors
}
