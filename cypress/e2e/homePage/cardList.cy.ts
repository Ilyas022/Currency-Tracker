import { setupInterceptors } from '../../support'

describe('My First Test', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')
		cy.wait('@getCurrencyList', { timeout: 0 })
	})
	it('Should open currency card and change base currency', () => {
		cy.get('[data-testid="currency card"]').first().should('exist').click()
		cy.wait('@getCurrencyListBasedOnARS', { timeout: 0 })
		cy.get('[data-testid="currency card select"]').should('exist').click()
		cy.get('[data-testid="currency select item"]').contains('Bitcoin').should('exist').click()
		cy.wait('@getCurrencyListBasedOnBTC', { timeout: 0 })
		cy.get('[data-testid="exchange item"]').contains('ARS to BTC').should('exist')
	})
})
