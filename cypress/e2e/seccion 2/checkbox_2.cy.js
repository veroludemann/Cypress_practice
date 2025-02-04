//Esta prueba se realiza en local con el index.html de la carpeta fixtures

//gfg.cy.js

describe('Form with Checkboxes and Radio Buttons', () => {
    beforeEach(() => {
        // Visit the webpage containing the form
        cy.visit('http://127.0.0.1:5500/cypress/fixtures/index.html'); 
    });

    it('should check and uncheck checkboxes', () => {
        // Check the "Subscribe to Newsletter" checkbox
        cy.get('#newsletter').check().should('be.checked');

        // Check the "Receive Updates" checkbox
        cy.get('#updates').check().should('be.checked');

        // Check the "Receive Special Offers" checkbox
        cy.get('#offers').check().should('be.checked');

        // Uncheck the "Receive Updates" checkbox
        cy.get('#updates').uncheck().should('not.be.checked');

        // Assert other checkboxes remain checked
        cy.get('#newsletter').should('be.checked');
        cy.get('#offers').should('be.checked');
    });

    it('should check radio buttons and ensure only one is selected at a time', () => {
        // Check the "Male" radio button
        cy.get('#male').check().should('be.checked');

        // Assert "Female" and "Other" radio buttons are not checked
        cy.get('#female').should('not.be.checked');
        cy.get('#other').should('not.be.checked');

        // Check the "Female" radio button
        cy.get('#female').check().should('be.checked');

        // Assert "Male" and "Other" radio buttons are not checked
        cy.get('#male').should('not.be.checked');
        cy.get('#other').should('not.be.checked');

        // Check the "Other" radio button
        cy.get('#other').check().should('be.checked');

        // Assert "Male" and "Female" radio buttons are not checked
        cy.get('#male').should('not.be.checked');
        cy.get('#female').should('not.be.checked');
    });

    it('should submit the form with selected checkboxes and radio button', () => {
        // Check the "Subscribe to Newsletter" checkbox
        cy.get('#newsletter').check();

        // Check the "Receive Special Offers" checkbox
        cy.get('#offers').check();

        // Check the "Other" radio button
        cy.get('#other').check();

        // Submit the form
        cy.get('#test-form').submit();

        // Confirm the form submission alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Form submitted!');
        });
    });
});