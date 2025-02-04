/// <reference types = "cypress" />
require ('cypress-plugin-tab')

describe ("Probado Wikipedia V2", () => {

    it("BUSCANDO ELEMENTOS", () => {
        cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Portada")
        //Verficiar si el elemento existe
        // cy.get('title').should('exit')
        cy.title().should('eq', 'Wikipedia, la enciclopedia libre')

        //verificar la existencia de una img
        cy.get('#main-potd > div.main-box-content > figure > a > img').should('be.visible')

        //verificar atributos de un elemento
        cy.get('input[name="search"]').should('have.attr', 'placeholder', 'Buscar en Wikipedia')
        

    })

})
