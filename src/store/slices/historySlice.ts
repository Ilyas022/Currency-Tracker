import { createSlice } from '@reduxjs/toolkit'

import { fetchHistory } from 'store/thunks/historyThunks'

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
