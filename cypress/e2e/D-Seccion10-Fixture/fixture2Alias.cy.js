/// <reference types="cypress" />
import 'cypress-file-upload';

describe("Pruebas carga por Fixture con ALIAS ", () => {

    before(function(){
        cy.fixture('ArchivosJson/datos.json').as("Datos_json") //el alias
    })
    it("Test 1 -> Cargando desde Json", () => {
        cy.visit("https://practicesoftwaretesting.com/contact")
        cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0')
        cy.wait(2000)
        //LLAMAMOS AL ALIAS
        cy.get('@Datos_json').then((data)=>{
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
})
