export interface CurrencySelectProps {
	value: { code: string; value: number; label: string }
	options: {
		code: string
		value: number
		label: string
	}[]
	handleSelect: (currency: { code: string; value: number; label: string }) => void
}
