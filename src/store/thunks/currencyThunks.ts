import { createAsyncThunk } from '@reduxjs/toolkit'

import { getCurrency, getCurrencyList } from 'src/api/requests/currency'
import { CurrencyExchangeProps, CurrencyListProps } from 'types/interfaces'

export const fetchCurrencyExchange = createAsyncThunk<CurrencyExchangeProps, string>(
	'currency/getExchangeList',
	async (currency, { rejectWithValue }) => {
		try {
			const res = await getCurrency(currency)
			return res.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const fetchCurrencyList = createAsyncThunk<
	CurrencyListProps,
	string | undefined
	// eslint-disable-next-line default-param-last
>('currency/getList', async (currency = 'USD', { rejectWithValue }) => {
	try {
		const res = await getCurrencyList(currency)
		return res.data
	} catch (error) {
		return rejectWithValue(error)
	}
})
