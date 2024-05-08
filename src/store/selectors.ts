import { RootState } from 'store'

export const selectCurrency = (state: RootState) => state.currency
export const selectTheme = (state: RootState) => state.theme
