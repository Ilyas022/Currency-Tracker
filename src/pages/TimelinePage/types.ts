import { fetchHistory } from 'store/slices/historySlice'

export interface TimelinePageProps {
	data: {
		[key: string]: {
			time_open: string
			price_open: number
			price_high: number
			price_low: number
			price_close: number
		}[]
	}
	fetchHistory: typeof fetchHistory
}

export interface TimelinePageState {
	date: string
	currency: string
	isLoaded: boolean
	isError: boolean
}
