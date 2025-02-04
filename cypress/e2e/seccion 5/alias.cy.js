/// <reference types="cypress" />
// Los alias son COMO variables y sierven para ponerle nombres a los elementos y ese dato queda "guardado" en el alias
//para usar alias en diferentes its si o si se deben crear en el beforeEach

describe("Manejo de Alias", () => {
    beforeEach(() => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")

        // Creando los alias en beforeEach para que estén disponibles en cada it
        cy.get('#firstname').as("nom")
        cy.get('#surname').as("ape")
        cy.get('#age').as("ed")
        cy.get('#country').as("pai")
        cy.get('#notes').as("note")
    });

    it("Alias_version 1", () => {
        cy.get('@nom').type('Veronica')
        cy.get('@ape').type('Ludemann Garcia')
        cy.get('@ed').type('30')
        cy.get('@pai').select('Armenia').should("have.value", "Armenia")
        cy.get('@note').type('Esto es una prueba de Cypress')
        cy.get("[type='submit']").click()
        cy.wait(2500)
        cy.get('#backtoform').click()
    });

    it("Alias_version 2 - usando los alias creados", () => {
        cy.get('@nom').type('Nacho')
        cy.get('@ape').type('Garcia Ludemann')
        cy.get('@ed').type('23')
        cy.get('@pai').select('Armenia').should("have.value", "Armenia")
        cy.get('@note').type('Esto es una prueba de Cypress v2')
        cy.get("[type='submit']").click()
    });
});

