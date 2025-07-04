//https://testpages.eviltester.com/styled/basic-html-form-test.html

/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

describe("Completar formulario: Basic HTML Form Example", () => {
    let tiempo = 1000;

    before(() => {
        cy.log("Inicio de todo");
    });

    beforeEach(() => {
        cy.log('esto se repite antes de cada test');
        cy.visit("https://testpages.eviltester.com/styled/basic-html-form-test.html");
        cy.title().should('eq', 'HTML Form Elements');
        cy.wait(tiempo);
    });

    it("Test 1: Completar todos los campos con customCommands", () => {
        cy.CompletarFormulario_V2(
            "Veronica",
            "123456",
            "Comentario de prueba",
            "C:/Users/veron/Desktop/cypress_pract/cy_2022_rodrigo/cypress/fixtures/motivacion.png",
            "cb2", // Checkbox
            "rd2", // Radio button
            "ms3", // Select múltiple
            "dd3", // Dropdown simple
            1000,  // Tiempo de espera
            'input[type="submit"]'
        )
    });
    // seria ideal hacer este test con un form con validaciones de mail, pass, nombre, etc
    it("Test 2: prueba invalida usuario vacio", () => {
        cy.CompletarFormulario_V2(
            "",
            "123456",
            "Comentario de prueba",
            "C:/Users/veron/Desktop/cypress_pract/cy_2022_rodrigo/cypress/fixtures/motivacion.png",
            "cb2", // Checkbox
            "rd2", // Radio button
            "ms3", // Select múltiple
            "dd3", // Dropdown simple
            1000,  // Tiempo de espera
            'input[type="submit"]'
        )
    });
});