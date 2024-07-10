import { setupInterceptors } from '../support'

describe('My First Test', () => {
	beforeEach(() => {
		setupInterceptors()
		cy.visit('/')
		cy.wait('@getCurrencyList', { timeout: 0 })
	})
	it('Should navigate to contacts', () => {
		cy.get('[data-testid="navLink"][href="/contacts"]').click()
		cy.get('[data-testid="contacts form"').should('exist')
	})
	it('should change theme', () => {
		cy.get('[data-testid="theme toggler"]').first().should('exist').click()
		cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(245, 245, 220)')
	})
	it('should open menu burger', () => {
		cy.viewport(550, 600)
		cy.get('[data-testid="burger btn"').should('exist').click()
		cy.get('[data-testid="menu burger"').should('have.css', 'display').and('eq', 'flex')
	})
})
