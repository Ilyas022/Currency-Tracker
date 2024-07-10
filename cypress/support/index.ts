export const setupInterceptors = () => {
	cy.intercept(
		'GET',
		`https://api.currencyapi.com/v3/latest?currencies=BTC,EUR,ARS,JPY,CNY,AUD,CAD,GBP&base_currency=USD`,

		{ fixture: 'currencyList.json' }
	).as('getCurrencyList')
	cy.intercept(
		'GET',
		`https://api.currencyapi.com/v3/latest?currencies=BTC,USD,EUR,JPY,CNY,AUD,CAD,GBP&base_currency=ARS`,

		{ fixture: 'currencyListBasedOnARS.json' }
	).as('getCurrencyListBasedOnARS')
	cy.intercept(
		'GET',
		`https://api.currencyapi.com/v3/latest?currencies=USD,EUR,ARS,JPY,CNY,AUD,CAD,GBP&base_currency=BTC`,

		{ fixture: 'currencyListBasedOnBTC.json' }
	).as('getCurrencyListBasedOnBTC')
}
