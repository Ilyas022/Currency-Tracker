import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstanceCurrency } from 'src/utils/axios'
import { currencyNames } from 'store/config'
import { IResponse, IResponseDataItem } from 'types/interfaces'

export interface ICurrencySlice {
	currencyList: IResponseDataItem[]
	currencyExchangeList: IResponseDataItem[]
	baseCurrency: string
	status: string
}

export const fetchCurrencyList = createAsyncThunk<
	{ data: IResponseDataItem[]; currency: string },
	string | undefined
>('currency/getList', async (currency = 'USD') => {
	const res = await axiosInstanceCurrency.get('/latest', {
		params: {
			currencies: 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,GBP'.replace(`${currency},`, ''),
			base_currency: currency,
		},
		transformResponse: (response) => {
			const data: IResponse = JSON.parse(response)
			const result = {
				data: Object.values(data.data).map((item) => ({
					...item,
					name: currencyNames[item.code],
				})),
				currency,
			}
			return result
		},
	})
	return res.data
})
export const fetchCurrencyExchange = createAsyncThunk<IResponseDataItem[], string>(
	'currency/getExchangeList',
	async (currency) => {
		const res = await axiosInstanceCurrency.get('/latest', {
			params: {
				currencies: 'BTC,USD,EUR,ARS,JPY,CNY,AUD,CAD,GBP'.replace(`${currency},`, ''),
				base_currency: currency,
			},
			transformResponse: (response) => {
				const data: IResponse = JSON.parse(response)
				const result = Object.values(data.data).map((item) => ({
					...item,
					name: currencyNames[item.code],
				}))

				return result
			},
		})
		return res.data
	}
)

const initialState: ICurrencySlice = {
	currencyList: [],
	currencyExchangeList: [],
	baseCurrency: 'USD',
	status: '',
}

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCurrencyList.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCurrencyList.fulfilled, (state, action) => {
				state.status = 'fulfiled'
				state.currencyList = action.payload.data
				state.baseCurrency = action.payload.currency
			})
			.addCase(fetchCurrencyList.rejected, (state) => {
				state.status = 'failed'
			})
			.addCase(fetchCurrencyExchange.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchCurrencyExchange.fulfilled, (state, action) => {
				state.status = 'fulfiled'
				state.currencyExchangeList = action.payload
			})
			.addCase(fetchCurrencyExchange.rejected, (state) => {
				state.status = 'failed'
			})
	},
})

export default currencySlice.reducer
