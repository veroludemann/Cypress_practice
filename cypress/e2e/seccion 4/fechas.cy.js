
/// <reference types="cypress" />

describe("probando funcion over", () => {
    it("Over", () => {
        cy.visit("https://demo.automationtesting.in/Datepicker.html")
        cy.title().should('eq', 'Datepicker')
        cy.get('#datepicker1').should('be.visible').type('10/01/2022', {force: true})
        cy.get('#datepicker2').should('be.visible').type('25/05/2024 {enter}', {force: true})
        
    })
})

