import themeSlice from './slices/themeSlice'
import { fetchCurrencyExchange, fetchCurrencyList } from './thunks/currencyThunks'
import { fetchHistory } from './thunks/historyThunks'

const rootActions = {
	fetchCurrencyList,
	fetchCurrencyExchange,
	fetchHistory,
	...themeSlice.actions,
}

export default rootActions
