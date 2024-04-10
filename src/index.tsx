import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { App } from 'src/App'

import { dark } from './constants/theme'
import { GlobalStyles } from './styles/global.styles'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={dark}>
				<App />
				<GlobalStyles />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
