/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

describe("Validaciones generales", () => {
    let tiempo = 200;

    before(() => {
        cy.log("Inicio de todo");
    });

    beforeEach(() => {
        cy.log('esto se repite antes de cada test');
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM');
        cy.wait(tiempo);

        // Autenticación (para que siempre quede autenticado y puede dividir los casos de prueba)
        cy.get('input[name="username"]').type("Admin");
        cy.get('input[name="password"]').type("admin123");
        cy.get('button[type="submit"]').click();
        cy.wait(tiempo);
    });

    after(() => {
        cy.log('######## Final de todo ########')
    
        // Esperar a que el menú de usuario sea visible antes de hacer clic
        cy.get('.oxd-userdropdown-tab').should('be.visible').click();
    
        // Esperar a que el enlace de Logout sea visible antes de hacer clic
        cy.contains('a.oxd-userdropdown-link', 'Logout')
        .should('be.visible')
        .click();
    
        // Esperar que la URL sea la de la pantalla de login para confirmar que se cerró sesión
        cy.url().should('include', '/auth/login');
    });

    
    it("TC 1: Navegar hacia opción ADMIN y usar el buscador", () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.wait(tiempo);
        cy.get(':nth-child(2) > .oxd-input').type("Admin");
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    });

    it("TC 2: Navegar hacia opción DASHBOARD", () => {
        cy.get(':nth-child(8) > .oxd-main-menu-item').click();
        cy.wait(tiempo);

    });

    it("TC 3: Navegar hacia opción DICTORY", () => {
        cy.get(':nth-child(9) > .oxd-main-menu-item').click();
        cy.wait(tiempo);

    });

});