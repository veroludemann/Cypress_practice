//LA IDEA DE ESTE RETO ES CARGAR VARIOS CONJUNTOS DE DATOS EN EL TEST 

/// <reference types="cypress" />
import 'cypress-file-upload';

describe("Pruebas carga por Fixture con ALIAS ", () => {
    it("Test 1 -> Cargando desde Json", () => {

        cy.fixture('ArchivosJson/MOCK_DATA.json').then(testData=>{
        testData.forEach(data => {
            const d_nombre=data.nombre
            const d_apellido=data.apellido
            const d_email=data.email
            const d_mensaje=data.mensaje
        cy.visit("https://practicesoftwaretesting.com/contact")
        cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0')
        cy.wait(2000)
        
        cy.get('#first_name').should('be.visible').type(d_nombre)
        cy.get('#last_name').should('be.visible').type(d_apellido)
        cy.get('#email').should('be.visible').type(d_email)
        cy.get('[data-test="subject"]').select('payments')
        cy.get('#message').should('be.visible').type(d_mensaje)
        // const ruta= 'prueba.txt'
        // cy.get('[data-test="attachment"]').attachFile(ruta)
        cy.get('.btnSubmit').click()    
        })
    })
        
    })
})
