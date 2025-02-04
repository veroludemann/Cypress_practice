/// <reference types="cypress" />


describe(" Verificando tablas ", () => {
    it(" verificando padres e hijos en el DOM ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get(".example").children('#table1')
        cy.get(".example").children('#table1').should('contain', 'Last Name')
        cy.get(".example").children('#table1')
        cy.get(".example").children('#table2').should('contain', 'Email')
    })

    it("Seleccionar por medio EQ y Filter ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get("thead").eq(1).should('contain', 'First Name')

        cy.get('th.header') // Selecciona todos los th con clase 'header'
        .filter(':contains("Web Site")') // Filtra los que contienen el texto 'Web Site'
        .should('be.visible'); // Verifica que el elemento sea visible

        
    })

    it("Seleccionar por medio FIND ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get("thead").eq(1).should('contain', 'First Name')

        cy.get('#table2 > tbody > tr').find('.email').should('contain', 'jdoe@hotmail.com')
    })

    it("Seleccionar por medio FIRST ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.get("#table2").first().should('contain','Last Name' )

        //buscando por find y last
        cy.get('#table2').find("tr")
        cy.get('#table2').last("tr")
    })

    it("Seleccionar todos los elementos mediante NEXTALL ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.title().should("eq", "The Internet")
        cy.get('#table2').should('contain','Last Name' )
        cy.wait(1500)
        cy.get('#table2 .header ').should('contain','Last Name' ).nextAll().should("have.length", 5)       
    })

    it("Seleccionar un elemento HIJO y q me lleve al PADRE ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://the-internet.herokuapp.com/tables")
        cy.title().should("eq", "The Internet")
        cy.get('.last-name').should('contain','Doe' ).parent().should('have.class', 'header')
    })
})


describe(" Verificando tablas_v2 Checks ", () => {
    it.only(" Seleccionar un elemento para luego seleccionar todos ", () => {
        //interceptar la peticion a la url de optim
        cy.intercept('GET', 'https://*.optimizely.com/**', { statusCode: 200, body: {} }).as('blockOptimizely');

        cy.visit("https://demoqa.com/checkbox")
        cy.title().should("eq", "DEMOQA")
        cy.get('.rct-collapse').first().click() // Expande el árbol
        cy.get('.rct-checkbox').eq(1).click()


    })
})
