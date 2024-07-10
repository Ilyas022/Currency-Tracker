import { setupInterceptors } from '../../support'

describe('Footer', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')
		cy.wait('@getCurrencyList', { timeout: 0 })
	})
	it('Should navigate to market page which is not found', () => {
		cy.get('[data-testid="footer link"][href="/market"]').should('exist').click()
		cy.contains('p', 'not found page').should('exist')
	})
	it('Should navigate to market page which is not found on mobile phones', () => {
		cy.viewport(550, 600)
		cy.get('[data-testid="footer accordion link"][href="/market"]').should('exist').click()
		cy.contains('p', 'not found page').should('exist')
	})
})
