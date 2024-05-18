import { createAsyncThunk } from '@reduxjs/toolkit'

import observable from 'components/Observable'
import { axiosInstanceHistory } from 'utils/axios'

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
