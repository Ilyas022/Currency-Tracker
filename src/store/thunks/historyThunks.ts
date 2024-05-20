import { createAsyncThunk } from '@reduxjs/toolkit'

import observable from 'components/Observable'
import { getHistory } from 'src/api/requests/history'

export const fetchHistory = createAsyncThunk<
	{
		[key: string]: {
			time_open: string
			price_open: number
			price_high: number
			price_low: number
			price_close: number
		}[]
	},
	{
		date: string
		currency: string
	}
>('history/fetchHistory', async ({ currency, date }, { rejectWithValue }) => {
	try {
		const res = await getHistory(currency, date)
		observable.notify({ isLoaded: true })
		return res.data
	} catch (error) {
		observable.notify({ isLoaded: false, isError: true })
		return rejectWithValue(error)
	}
})
