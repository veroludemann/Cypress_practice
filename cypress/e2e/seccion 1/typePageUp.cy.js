/// <reference types="cypress" />

describe("Ejemplo de Type up, page down ", () => {
    it("Test validar Type Up", () => {
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/");
        cy.title().should("eq", "Formulario de Ejemplo")
        cy.log ("la funcion title fue exitosa")
        cy.wait(1000)
        
        cy.get("#nombre").type('{pageup}')
        cy.wait(1000)
    });

    it("Test validar Page down", () => {
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/");
        cy.title().should("eq", "Formulario de Ejemplo")
        cy.log ("la funcion title fue exitosa")
        cy.wait(1000)
        
        cy.get("#nombre").type('{pagedown}')
        cy.wait(1000)
    });
});
