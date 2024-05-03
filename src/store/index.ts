import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import currencySlice from './slices/curencySlice'
import themeSlice from './slices/themeSlice'

const persistConfig = {
	key: 'theme',
	storage,
}

const persistedThemeReducer = persistReducer(persistConfig, themeSlice.reducer)

const rootReducer = combineReducers({
	currency: currencySlice.reducer,
	theme: persistedThemeReducer,
})
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		}),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
