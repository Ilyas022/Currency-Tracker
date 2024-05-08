import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { dark, light } from 'constants/theme'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { App } from 'src/App'
import { persistor, store } from 'store'
import { selectTheme } from 'store/selectors'

import { GlobalStyles } from './styles/global.styles'

function RootComponent() {
	const { name } = useTypedSelector(selectTheme)

	return (
		<ThemeProvider theme={name === 'dark' ? dark : light}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	)
}

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RootComponent />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
