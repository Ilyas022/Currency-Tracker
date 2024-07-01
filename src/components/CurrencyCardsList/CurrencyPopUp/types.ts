export interface CurrencyPopUpProps {
	handleClose: () => void
	currency: { code: string; label: string; value: number }
}

export interface CurrencyOption {
	code: string
	label: string
	value: number
}
