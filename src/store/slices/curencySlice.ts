import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstanceCurrency } from 'src/utils/axios'
import { currencyNames } from 'store/config'
import { IResponse, IResponseDataItem } from 'types/interfaces'

export interface ICurrencySlice {
	currency: IResponseDataItem[]
	status: string
}

export const fetchCurrencyList = createAsyncThunk<IResponseDataItem[], void>(
	'currency/getList',
	async () => {
		const res = await axiosInstanceCurrency.get('/latest', {
			params: {
				currencies: 'BTC,GEL,EUR,ARS,JPY,CNY,AUD,CAD,GBP',
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
	currency: [],
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
				state.currency = action.payload
			})
			.addCase(fetchCurrencyList.rejected, (state) => {
				state.status = 'failed'
			})
	},
})

export default currencySlice.reducer
