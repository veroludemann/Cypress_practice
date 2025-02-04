/// <reference types="cypress" />
import 'cypress-file-upload';

describe("Cargando archivos ", () => {
    it("Pass", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'DEMOQA');
        cy.get('#firstName').type('VERO')
        cy.get('#lastName').type('lude')
        cy.get('#userEmail').type('vero@gmail.com', { force: true })
        cy.get('input[value="Female"]').check({ force: true }).should('be.checked');
        cy.get('#userNumber').type('1234567890')
        cy.get('#dateOfBirth').type('1990-01-01')
        cy.get('input[value="3"]').check({ force: true }).should('be.checked');

        //carga de archivo
        const ruta= 'motivacion.png'
        cy.get('#uploadPicture').attachFile(ruta)
        cy.wait(1500)
        cy.get('#currentAddress').type('Calle 123')
        cy.get('#state').click(); // Abre el menú
        cy.contains('NCR').click({force:true}); // Selecciona la opción "NCR"
        cy.get('#submit').click()
        cy.get('.modal').should('be.visible')
        cy.wait(3000)
        cy.get('#closeLargeModal').click({force: true})








        







    })
})
