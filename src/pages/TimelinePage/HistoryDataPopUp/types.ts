export interface HistoryDataPopUpProps {
	handleClose: () => void
	handleAdd: (data: {
		time_open: string
		price_open: number
		price_high: number
		price_low: number
		price_close: number
	}) => void
}
