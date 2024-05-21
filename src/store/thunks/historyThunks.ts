import { createAsyncThunk } from '@reduxjs/toolkit'

import observable from 'components/Observable'
import { getHistory } from 'src/api/requests/history'
import { HistoryResponseResult, HistoryThunkArgs } from 'types/interfaces'

export const fetchHistory = createAsyncThunk<HistoryResponseResult, HistoryThunkArgs>(
	'history/fetchHistory',
	async ({ currency, date }, { rejectWithValue }) => {
		try {
			const res = await getHistory(currency, date)
			observable.notify({ isLoaded: true })
			return res.data
		} catch (error) {
			observable.notify({ isLoaded: false, isError: true })
			return rejectWithValue(error)
		}
	}
)
