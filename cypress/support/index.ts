export const setupInterceptors = () => {
	cy.intercept(
		'GET',
		`https://api.currencyapi.com/v3/latest?currencies=BTC,EUR,ARS,JPY,CNY,AUD,CAD,GBP&base_currency=USD`,

		{ fixture: 'currencyList.json' }
	).as('getCurrencyList')
}
