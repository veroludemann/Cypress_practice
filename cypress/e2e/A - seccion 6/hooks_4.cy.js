/// <reference types="cypress" />

// Importar dependencias
import 'cypress-file-upload'; // Para carga de archivos
require('cypress-xpath'); // Para soporte de xpath
require('cypress-plugin-tab'); // Para simular teclas de tabulación
require('@4tw/cypress-drag-drop'); // Para simular arrastrar y soltar

describe('Título', () => {
    it('Test', () => {
        let tiempo = 1000;
        cy.visit('URL');
        cy.title().should('eq', 'titulo');
        cy.wait(tiempo);
    });
});