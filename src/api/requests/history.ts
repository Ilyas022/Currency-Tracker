import { axiosInstanceHistory } from '../axios'

export const getHistory = (currency: string, date: string) => {
	return axiosInstanceHistory.get(`BITSTAMP_SPOT_${currency}_USD/history?period_id=${date}`, {
		transformResponse: (response) => {
			const data = JSON.parse(response)

			const result: {
				[key: string]: {
					time_open: string
					price_open: number
					price_high: number
					price_low: number
					price_close: number
				}[]
			} = {}
			result[`${currency}-${date}`] = data
			return result
		},
	})
}
