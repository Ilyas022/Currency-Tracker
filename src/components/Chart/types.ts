type Unit = 'month' | 'day' | 'year'

export interface ChartItemProps {
	optionsData: {
		time_open: string
		price_open: number
		price_high: number
		price_low: number
		price_close: number
	}[]
	unit: Unit
}
