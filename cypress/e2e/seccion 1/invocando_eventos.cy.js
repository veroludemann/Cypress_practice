/// <reference types="cypress" />

describe("Abriendo ventanas y/o pestañas ", () => {
    it("Test 1 ", () => {
        cy.visit('https://es.wikipedia.org/w/index.php?returnto=Wikipedia%3APortada&title=Especial:Entrar&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in');
        cy.get('a[title="Cookie (informática)"]').trigger('mouseover')

    


    })
})
