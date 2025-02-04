

/// <reference types="cypress" />
require('cypress-plugin-tab')

describe('Prueba específica', () => {
    it('Debería ignorar errores de setup', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('setup is not a function')) {
            return false;
        }
    });

    });
});

describe('Primer Reto', () => {
    it('pass', () => {
        cy.visit('https://demoqa.com/webtables');
        // cy.title().should('eq', 'DEMOQA');
        
        // cy.get('#searchBox').should("be.visible").type('cierra');
        // cy.wait(500);
        // cy.get('#searchBox').clear();

        // //agregando campo
        // cy.get('#addNewRecordButton').should('be.visible').click();
        // cy.get('#firstName').should("be.visible").type('veronica').tab().
        // type('Ludemann').tab().
        // type('vero@gmail.com').tab().
        // type('25').tab().
        // type('1000').tab().
        // type('QA tester')
        // cy.get('#submit').should("be.visible").click();

        //verificar que se haya agregado
        // cy.get('#searchBox').should("be.visible").type('veronica');
        // cy.wait(500);
        // cy.get('#searchBox').clear();

        //editar campo (edad y salario)
        cy.get("#edit-record-2").should("be.visible").click();
        cy.get('#firstName').should("be.visible").clear().type('Luis').tab().type('Garcia')
        cy.get('#submit').should("be.visible").click();
        
        
    });
});