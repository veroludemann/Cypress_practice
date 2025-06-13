/// <reference types="cypress" />
import 'cypress-file-upload';

describe("Pruebas carga por Fixture ", () => {

    before(function(){
        cy.fixture('ArchivosJson/datos.json').then(function(data){
            // this.data=data
            globalThis.data=data
        })
    })
    it("Test 1 -> Cargando desde Json", () => {
        cy.visit("https://practicesoftwaretesting.com/contact")
        cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0')
        cy.wait(2000)
        cy.get('#first_name').should('be.visible').type(data.nombre)
        cy.get('#last_name').should('be.visible').type(data.apellido)
        cy.get('#email').should('be.visible').type(data.email)
        cy.get('[data-test="subject"]').select('payments')
        cy.get('#message').should('be.visible').type(data.mensaje)
        // const ruta= 'prueba.txt'
        // cy.get('[data-test="attachment"]').attachFile(ruta)
        cy.get('.btnSubmit').click()
    })
})
