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

// Response

export interface IResponseMeta {
	last_updated_at: string
}
export interface IResponseDataItem {
	code: string
	value: number
	name: string
}
export interface IResponse {
	meta: IResponseMeta
	data: IResponseDataItem[]
}
