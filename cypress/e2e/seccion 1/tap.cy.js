/// <reference types="cypress" />
require('cypress-plugin-tab')

describe("Ejemplo funcion TAP ", () => {
    it("Test validar Type Up", () => {
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/");
        cy.title().should("eq", "Formulario de Ejemplo")
        cy.wait(1000)
        
        cy.get("#nombre").type('{pageup}')
        cy.wait(1000)
    })

})