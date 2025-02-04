/// <reference types="cypress" />
require('cypress-xpath')

describe(" probando selector Xpath ", () => {
    it("pass", () => {
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/")
        
        cy.xpath("//*[@id='nombre']").should('be.visible').type('Rodrigo')


    })
})
