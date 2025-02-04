/// <reference types="cypress" />

describe("Abriendo ventanas y/o pestañas ", () => {
    it("Test 1 ", () => {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');

        cy.window().then((win) => {
            win.open('https://es.wikipedia.org/w/index.php?title=Wikipedia:Portada&action=edit')
        })
    


    })
})
