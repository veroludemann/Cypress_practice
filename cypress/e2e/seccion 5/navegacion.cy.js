/// <reference types="cypress" />

describe("Navegacion ", () => {
    it("Nav entre paginas part1", () => {
        cy.visit("https://automationexercise.com/test_cases")
        // cy.title().should("eq", "DEMOQA")
        cy.get('[href="/products"]').should('be.visible').click({force:true})
        cy.go('back')


    })
})
