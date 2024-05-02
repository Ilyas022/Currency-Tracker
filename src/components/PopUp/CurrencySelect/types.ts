export interface CurrencySelectProps {
	options: {
		code: string
		value: number
		name: string
	}[]
	handleSelect: (code: string) => void
}
