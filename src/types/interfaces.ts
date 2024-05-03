// Theme
interface ThemeColors {
	primary: string
	secondary: string
	primaryBgGradient: string
	secondaryBgGradient: string
	popUpBg: string
	error: string
	btn: string
	textGradient: string
	dark: string
	white: string
	textPrimary: string
	textSecondary: string
	textTertiary: string
	textDark: string
	icon: string
	iconBg: string
	cardBorder: string
	cardBg: string
	chartGrid: string
	selectBg: string
	selectHover: string
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
