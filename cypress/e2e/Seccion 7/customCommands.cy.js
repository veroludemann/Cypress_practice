// Demo comandos personalizados
//https://testpages.eviltester.com/styled/validation/input-validation.html
//cypress\support\commands.js

/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

describe("Comandos personalizados", () => {
    

    before(() => {
        cy.log("Inicio de todo");
        
    });

    beforeEach(() => {
        cy.log('esto se repite antes de cada test');
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
        cy.title().should('eq', 'Input Validation');
        
    });

    it("Demo 1 - completar formulario", () => {
        cy.Campo_visible('#firstname','Veronica',1500)
        cy.Campo_visible('#surname','Garcia Ludemann',1000)
        cy.Campo_visible('#age','40',1000)
        //comando para seleccionar un pais
        cy.Seleccionar_opcion('#country', 'Argentina', 1000)
        //comando campo visible con xpath 
        cy.Campo_visible_xpath("//*[@id='notes']", "prueba 123", 1000)
        //comando click boton
        // cy.Click_boton('[type="submit"]',1000)

        //comando click boton con force true
        cy.Click_force('[type="submit"]',1000)
    });

    it("Demo 2 - completar formulario con un bloque de comandos completo", () => {
        cy.Bloque_InputForm ("Veronica", "Garcia Ludemann", "40", "Argentina", "prueba 123", 1000);
    });

    it.only('Demo 3 - completar el form usando const para los parametros solicitados', () => {
        // Valores para completar el formulario
        const firstName = 'Juan';
        const lastName = 'Pérez Garcia';
        const age = '30';
        const country = 'Argentina';
        const notes = 'Algunas notas de prueba';
        const tiempoDeEspera = 1000;  // 1 segundo de espera entre cada acción

        // Llamar al comando personalizado BloqueInputForm con los parámetros necesarios
        cy.Bloque_InputForm(firstName, lastName, age, country, notes, tiempoDeEspera);

       // Esperar la redirección y verificar la nueva URL
        cy.url().should('include', '/validate/input-validation'); // Ajusta la URL de destino

       // Verificar que el formulario se haya enviado correctamente
        cy.get('h1').should('contain', 'Input Validation Response');
    });
});