import { createAsyncThunk } from '@reduxjs/toolkit'

import { axiosInstanceCurrency } from 'src/utils/axios'
import { currencyNames } from 'store/config'
import { Response, ResponseDataItem } from 'types/interfaces'

export const fetchCurrencyExchange = createAsyncThunk<
	{ [key: string]: ResponseDataItem[] },
	string
>('currency/getExchangeList', async (currency) => {
	const res = await axiosInstanceCurrency.get('/latest', {
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
	return res.data
})

export const fetchCurrencyList = createAsyncThunk<
	{ data: ResponseDataItem[]; currency: string },
	string | undefined
>('currency/getList', async (currency = 'USD') => {
	const res = await axiosInstanceCurrency.get('/latest', {
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
			}
			return result
		},
	})
	return res.data
})
