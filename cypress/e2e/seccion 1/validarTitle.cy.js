/// <reference types="cypress" />

describe("Seccion 1, validando el titulo ", () => {
    it("Test validar titulo de pagina", () => {
        cy.visit("https://fabricarg.com/");
        cy.title().should("eq", "Fabricarg")
        cy.log ("la funcion title fue exitosa")
    });
});
