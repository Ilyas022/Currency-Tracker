type Unit = 'month' | 'day' | 'year'

interface optionsData {
	time_open: string
	price_open: number
	price_high: number
	price_low: number
	price_close: number
}

export interface ChartItemProps {
	optionsData: optionsData[]
	unit: Unit
}
