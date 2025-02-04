/// <reference types="cypress" />

describe("Probando los fixtre y archivos Json ", () => {
    beforeEach(()=>{
        cy.visit("https://es.wikipedia.org/w/index.php?returnto=Wikipedia%3APortada&title=Especial:Entrar&centralAuthAutologinTried=1&centralAuthError=Not+centrally+logged+in")
    })
    
    //llamo al json
    it("Passes ", () => {
        for (let i = 0; i < 4; i++) {
            cy.fixture('usuarios.json').then((datos) => {
                const usuario = datos[i]
                cy.get('#wpName1').type(usuario.nombre)
                cy.get('#wpPassword1').type(usuario.password)
                cy.get('#wpLoginAttempt').click()
                cy.wait(3000)
                cy.get ('#wpName1').clear()
            })
        }

    })

    




})
