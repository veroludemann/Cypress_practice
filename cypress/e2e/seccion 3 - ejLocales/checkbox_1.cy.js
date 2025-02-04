describe('Checkbox Testing', () => {
    it('should load the checkboxes page', () => {
        cy.visit('http://127.0.0.1:5500/cypress/fixtures/checkboxes.html');

        // Verifica los checkboxes
        cy.get('#option1').check().should('be.checked');
        cy.get('#option2').should('not.be.checked');
        cy.get('#option3').check().should('be.checked');
    
        // Desmarca un checkbox
        cy.get('#option1').uncheck().should('not.be.checked');
    });
});
