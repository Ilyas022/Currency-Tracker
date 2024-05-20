import { Response, ResponseDataItem } from 'types/interfaces'

import { axiosInstanceCurrency } from '../axios'
import { currencyNames } from '../config'

export const getCurrency = (currency: string) => {
	return axiosInstanceCurrency.get('/latest', {
		params: {
			currencies: 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,GBP'.replace(`${currency},`, ''),
			base_currency: currency,
		},

		transformResponse: (response) => {
			const data: Response = JSON.parse(response)
			const result = Object.values(data.data).map((item) => ({
				...item,
				label: currencyNames[item.code],
			}))
			const resData: { [key: string]: ResponseDataItem[] } = {}
			resData[currency] = result
			return resData
		},
	})
}

export const getCurrencyList = (currency: string) => {
	return axiosInstanceCurrency.get('/latest', {
		params: {
			currencies: 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,GBP'.replace(`${currency},`, ''),
			base_currency: currency,
		},
		transformResponse: (response) => {
			const data: Response = JSON.parse(response)
			const result = {
				data: Object.values(data.data).map((item) => ({
					...item,
					label: currencyNames[item.code],
				})),
				currency,
				updatedAt: data.meta.last_updated_at,
			}
			return result
		},
	})
}
