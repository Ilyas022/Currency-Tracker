import { fetchCurrencyList, fetchCurrencyExchange } from './slices/curencySlice'
import themeSlice from './slices/themeSlice'

const rootActions = {
	fetchCurrencyList,
	fetchCurrencyExchange,
	...themeSlice.actions,
}

export default rootActions
