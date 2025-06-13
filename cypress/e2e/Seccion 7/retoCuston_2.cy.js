//https://practicesoftwaretesting.com/contact
// VALIDAR INPUTS (CAMPO INCOMPLETO - CAMPO VACIO) - MAIL INVALIDO - FORMATO INCORRECTO - ETC 
/// <reference types="cypress" />

// Importar dependencias
import 'cypress-file-upload'; // Para carga de archivos
require('cypress-xpath'); // Para soporte de xpath
require('cypress-plugin-tab'); // Para simular teclas de tabulación
require('@4tw/cypress-drag-drop'); // Para simular arrastrar y soltar

describe('VALIDANDO CAMPOS', () => {
    it('Test 1 - VALIDAR CAMPOS', () => {
        cy.visit('https://practicesoftwaretesting.com/contact');
        cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0');

        // Intentar enviar el formulario sin completar los campos
        cy.get("[data-test='contact-submit']").click();
        cy.Validar_Campos("[data-test='email-error']", "Email is required", "Email", 1000);

        // Ahora probar con un email inválido
        cy.get('[data-test="email"]').type("correo-invalido");
        cy.get("[data-test='contact-submit']").click();
        cy.Validar_Campos("[data-test='email-error']", "Email format is invalid", "Email", 1000);
    });
});

