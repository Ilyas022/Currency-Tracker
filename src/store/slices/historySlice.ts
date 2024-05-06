import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import observable from 'components/Observable'
import { axiosInstanceHistory } from 'utils/axios'

interface HistorySlice {
	data: {
		[key: string]: {
			time_open: string
			price_open: number
			price_high: number
			price_low: number
			price_close: number
		}[]
	}
	status: string
}

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
>('history/fetchHistory', async ({ currency, date }) => {
	try {
		const res = await axiosInstanceHistory.get(
			`BITSTAMP_SPOT_${currency}_USD/history?period_id=${date}`,
			{
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
			}
		)
		observable.notify({ isLoaded: true })
		return res.data
	} catch (error) {
		observable.notify({ isLoaded: false, isError: true })
		return error
	}
})

const initialState: HistorySlice = {
	data: {},
	status: '',
}

const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchHistory.pending, (state) => {
				return { ...state, status: 'loading' }
			})
			.addCase(fetchHistory.fulfilled, (state, action) => {
				return { ...state, data: { ...state.data, ...action.payload }, status: 'fulfiled' }
			})
			.addCase(fetchHistory.rejected, (state) => {
				return { ...state, status: 'failed' }
			})
	},
})

export default historySlice
