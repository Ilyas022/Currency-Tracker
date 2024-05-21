import { HistoryResponseResult } from 'types/interfaces'

import { axiosInstanceHistory } from '../axios'

export const getHistory = (currency: string, date: string) => {
	return axiosInstanceHistory.get(`BITSTAMP_SPOT_${currency}_USD/history?period_id=${date}`, {
		transformResponse: (response) => {
			const data = JSON.parse(response)

			const result: HistoryResponseResult = {}
			result[`${currency}-${date}`] = data
			return result
		},
	})
}
