
/// <reference types="cypress" />

describe("probando funcion over", () => {
    it("Over", () => {
        cy.visit("https://www.way2automation.com/")
        cy.title().should('eq', 'Get Online Selenium Certification Course | Way2Automation')
        cy.get('.menu-link').contains('Selenium').trigger('mouseover', { force: true })
    })
})






