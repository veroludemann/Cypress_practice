import proyectoUno_po from '../../support/PageObject/Proyecto-1_PO/Proyecto-1_PO';
/// <reference types="cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')
require('@4tw/cypress-drag-drop')

describe("Page object Models 1", () => {

    const master = new proyectoUno_po();
    
    
    master.visitHome();
    

    it("Test 1 - completar formulario con una seccion de pageObjects", () => {
        cy.log("Comienzo del test 1");
        master.seccion_1("veronica", "ludemann garcia", "39", "argentina", "prueba 123456",1000)
    });
});





