import { createSlice } from '@reduxjs/toolkit'

import { fetchCurrencyExchange, fetchCurrencyList } from 'store/thunks/currencyThunks'
import { CurrencyExchangeList, ResponseDataItem } from 'types/interfaces'

interface CurrencySlice {
	currencyList: ResponseDataItem[]
	currencyExchangeList: CurrencyExchangeList
	baseCurrency: string
	status: string
}

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
