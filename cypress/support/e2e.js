// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

// Cypress.Commands.add('silenciarLogs', () => {
//     cy.intercept('GET', '**/users/me', { statusCode: 401 }).as('silenciarUsuario');
//     cy.intercept('POST', '**/google-analytics.com/**', { statusCode: 204 }).as('silenciarAnalytics');
// });

//   // Llamar al comando antes de cada test
//     beforeEach(() => {
//         cy.silenciarLogs();
// });
