// Theme
interface ThemeColors {
	primary: string
	secondary: string
	bgGradient: string
	textGradient: string
	white: string
}

export interface Theme {
	name: 'light' | 'dark'
	fonts: number[]
	fontWeights: number[]
	lineHeights: number[]
	colors: ThemeColors
}

// Response

export interface ResponseMeta {
	last_updated_at: string
}
export interface ResponseDataItem {
	code: string
	value: number
	name: string
}
export interface Response {
	meta: ResponseMeta
	data: ResponseDataItem[]
}
