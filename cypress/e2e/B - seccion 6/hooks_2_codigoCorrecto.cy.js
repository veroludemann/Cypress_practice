/// <reference types="cypress" />

require('@4tw/cypress-drag-drop')

describe("Hooks ejemplos", () => {
    let tiempo = 500

    before(() => {
        cy.log("Inicio de todo")
    })

    beforeEach(() => {
        cy.log('esto se repite antes de cada test')
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should('eq', 'Input Validation')
        cy.wait(tiempo)
    })

    it("Completar formulario y enviar", () => {
        cy.get('input[name="firstname"]').type("VERONICA")
        cy.wait(tiempo)
        
        cy.get('input[name="surname"]').type('LUDEMANN GARCIA')
        cy.wait(tiempo)
        
        cy.get('#age').type('37')
        cy.wait(tiempo)
        
        cy.get('select[name="country"]').select('Bahamas')
        cy.wait(tiempo)
        
        cy.get('#notes').type('Esto es una prueba de cypress')
        cy.wait(tiempo)
        
        cy.get('[type="submit"]').click()
        cy.wait(tiempo)
    })
})