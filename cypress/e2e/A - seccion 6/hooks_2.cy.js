/// <reference types="cypress" />


/// ESTO ES SOLO UNA DEMOSTRACION DE COMO SE USA EL BEFORE PQ LA REALIDAD ES QUE TODOS ESTOS PASOS HABRIA QUE HACERLOS DENTRO DE UN MISMO IT
/// PERO PARA DEMOSTRAR COMO FUNCIONA EL BEFORE LO HACEMOS DE ESTA MANERA


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

    it("Test 1 ", () => {
        cy.get('input[name="firstname"]').type("VERONICA")
        cy.wait(tiempo)
    })

    it("Test 2 ", () => {
        cy.get('input[name="surname"]').type('LUDEMANN')
        cy.wait(tiempo)
    })

    it("Test 3 ", () => {
        cy.get('#age').type('37')
        cy.wait(tiempo)
    })

    it("Test 4 - Seleccionar Bahamas", () => {
        cy.get('select[name="country"]').select('Bahamas')
        cy.wait(tiempo)
    })

    it("Test 4 - Seleccionar campo Notes", () => {
        cy.get('#notes').type('Esto es una prueba de cypress')
        cy.wait(tiempo)
    })

    it("Test 5 - Btn Enviar", () => {
        cy.get('[type="submit"]').click()
        cy.wait(tiempo)
    })

    

    
})

