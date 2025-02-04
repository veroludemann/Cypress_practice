/// <reference types="cypress" />

// Importar dependencias

describe('Título', () => {
    it('Test', () => {
        let tiempo = 1000;
        cy.visit('URL');
        cy.title().should('eq', 'titulo');
        cy.wait(tiempo);
    });
});