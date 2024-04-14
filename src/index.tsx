import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { App } from 'src/App'
import { store } from 'store'

import { dark } from './constants/theme'
import { GlobalStyles } from './styles/global.styles'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ThemeProvider theme={dark}>
					<App />
					<GlobalStyles />
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
