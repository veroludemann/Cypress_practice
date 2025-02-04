/// <reference types="cypress" />


describe ("Probado Wikipedia", () => {

    it("Test validar Title", () => {
        cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Portada");
        cy.title().should("eq", "Wikipedia, la enciclopedia libre")

        //hacer una busqueda en el buscador
        cy.get('#p-search > .cdx-button--fake-button').type ("cypress")
        cy.contains('button', 'Buscar').click()

        //CONTROL DE TIEMPO
        cy.wait(2000)

        //aserciones y validaciones
        // cy.get ('searchmatch').should('have.text', 'cypress')
        cy.get ('.searchmatch:contains("Cypress")').should('exist')

        //clear
        cy.get('#ooui-php-1').clear()

        //recargar la pagina
        cy.reload()

        //ejecutar comandos en el sistema operativo
        cy.exec('start calc')


        
    })

})