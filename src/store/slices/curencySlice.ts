import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstanceCurrency } from 'src/utils/axios'
import { currencyNames } from 'store/config'
import { CurrencyExchangeList, Response, ResponseDataItem } from 'types/interfaces'

interface CurrencySlice {
	currencyList: ResponseDataItem[]
	currencyExchangeList: CurrencyExchangeList
	baseCurrency: string
	status: string
}

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

const initialState: CurrencySlice = {
	currencyList: [],
	currencyExchangeList: {},
	baseCurrency: 'USD',
	status: '',
}

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCurrencyList.pending, (state) => {
				return { ...state, status: 'loading' }
			})
			.addCase(fetchCurrencyList.fulfilled, (state, action) => {
				const { currency, data } = action.payload
				return { ...state, baseCurrency: currency, currencyList: data, status: 'fulfiled' }
			})
			.addCase(fetchCurrencyList.rejected, (state) => {
				return { ...state, status: 'failed' }
			})
			.addCase(fetchCurrencyExchange.fulfilled, (state, action) => {
				const data = action.payload
				return {
					...state,
					currencyExchangeList: { ...state.currencyExchangeList, ...data },
				}
			})
	},
})

export default currencySlice
