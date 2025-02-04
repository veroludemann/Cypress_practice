/// <reference types="cypress" />
import '@4tw/cypress-drag-drop'

//https://github.com/4teamwork/cypress-drag-drop

describe("Cypress evento Mouse", () => {
    it("Drag and Drop", () => {
        cy.intercept('http://298279967.log.optimizely.com/event*', {
            statusCode: 200,
            body: {}
        }).as('optimizely');

        let tiempo = 1000;
        cy.visit("http://the-internet.herokuapp.com/drag_and_drop");
        cy.title().should('eq', 'The Internet');

        cy.wait(tiempo);

        // Drag and drop usando el plugin
        cy.get('#column-a').drag('#column-b');
    });

    it("Drag and Drop", () => {
        let tiempo = 1000;
        cy.visit("https://commitquality.com/practice-drag-and-drop");
        // Drag and drop usando el plugin
        cy.get('[data-testid="small-box"]').drag('[data-testid="large-box"]');
    });
});
