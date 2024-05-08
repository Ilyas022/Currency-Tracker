import { fetchCurrencyList, fetchCurrencyExchange } from './slices/curencySlice'
import { fetchHistory } from './slices/historySlice'
import themeSlice from './slices/themeSlice'

const rootActions = {
	fetchCurrencyList,
	fetchCurrencyExchange,
	fetchHistory,
	...themeSlice.actions,
}

export default rootActions
