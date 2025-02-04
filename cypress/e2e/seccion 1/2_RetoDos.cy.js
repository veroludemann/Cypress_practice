/// <reference types="cypress" />
import 'cypress-xpath'
require('cypress-plugin-tab')

describe(" Reto 2 ", () => {
    it(" passed ", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq', 'Computers database')
        cy.wait(2000)
        // cy.get('#searchbox').type('Apple')

        cy.xpath('//input[@id="searchbox"]').type('Apple')
        cy.get('#searchsubmit').should("be.visible").click()
        //agregar add
        cy.get("#add").should("be.visible").click()
        //utilizar el selector
        cy.get("[name='name']").should("be.visible").type("Cypress")
        cy.get("#introduced").should("be.visible").type("2021-10-10").tab().type("2024-10-10")
        cy.get ("#company").should("be.visible").select("Tandy Corporation").should("have.value", "5").wait(500)
        cy.get('.primary').should("be.visible").click() 
        cy.xpath('//input[@id="searchbox"]').type('Cypress').click()

        


    })
})
