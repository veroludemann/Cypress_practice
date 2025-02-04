/// <reference types="cypress" />

describe("Trabajando ventanas windows", () => {
    it("Validar que tengo UTF-8", () => {
        cy.visit("https://testsheepnz.github.io/index.html#the-number-game")
        cy.title().should('eq', 'TestSheepNZ Resource Page')
        cy.wait(2000)
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    it.only("Validar URL", () => {
        cy.visit("https://testsheepnz.github.io/index.html#the-number-game")
        cy.title().should('eq', 'TestSheepNZ Resource Page')
        cy.wait(2000)
        cy.url().should("include", "the-number-game")
        cy.url().should("eq", "https://testsheepnz.github.io/index.html#the-number-game")
        cy.viewport(1500, 900)
    })
})