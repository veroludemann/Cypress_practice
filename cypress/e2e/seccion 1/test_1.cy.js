/// <reference types="cypress" />

describe('Test cypress 2022', () => {
  it('hola mundo desde cy', () => {
    cy.visit('https://validaciones.rodrigovillanueva.com.mx/')

    cy.get('#nombre').type('veronica')
    cy.wait(1000)
    cy.get('#apellidos').type('Ludemann')
    cy.wait(1000)
    cy.get('#tel').type('3515390022')
    cy.get('#email').type('veronicaludemail.com')
    cy.get('#direccion').type('calle gramme 5690')
    cy.get('.btn-primary').click()
    



    


  })
})