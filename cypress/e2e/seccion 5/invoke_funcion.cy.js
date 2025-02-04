/// <reference types="cypress" />

describe(" Manejo del INVOKE ", () => {
    it("Invoke text: validar el texto escrito  ", () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get('.page-body > :nth-child(5)').invoke('text').as('info')
        cy.get('@info').should("contain", "The information will be submitted to the server if it passes client side validation.")
    })

    it("Invoke text: validar el first name  ", () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get('[for="firstname"]').invoke('text').as('title')
        cy.get('@title').should("contain", "First name:").then(() => {
            cy.get('#firstname').type("Veronica")
        })
    })

    it("Invoke Styles: Cambiar color y tamaño de texto  ", () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get("[for='firstname']").invoke("attr", "style", "color:Red; font-size: 40px")

    })

    it("Invoke, ocultando elementos  ", () => {
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        cy.get("[for='firstname']").invoke("hide")
        cy.get('#firstname').invoke("hide")
        cy.wait(2000)
        cy.get('#firstname').invoke("show")

    })

    it("Invoke, Reto: hacer desaparecer los elementos y que aparezcan cuando el user tipee  ", () => {
        let t= 2000
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        //oculto los elementos
        cy.get("[for='firstname']").invoke("hide")
        cy.get('[for="surname"]').invoke("hide")
        //tipeo
        cy.get('#firstname').type("Veronica")
        cy.wait(t)
        //lo muestro
        cy.get("[for='firstname']").invoke("show")
        cy.wait(t)
        //tipeo
        cy.get('#surname').type("Ludemann")
        //muestro
        cy.get('[for="surname"]').invoke("show")

    })

    it("Invoke, otro forma del ejercicio anterior  ", () => {
        let t= 2000
        let t2= 4000
        cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html")
        cy.title().should("eq", "Input Validation")
        //oculto los elementos
        cy.get("[for='surname']").invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(t)
        //usando then
        cy.get('#firstname').should("be.visible").type("Veronica").then(() => {
            cy.wait(t2)
            cy.get("[for='surname']").invoke("show", "4s")
            cy.get("#surname").invoke("show", "4s")
            cy.wait(t2)
            cy.get("#surname").type("Ludemann")
        })
    })

    it.only("Invoke: validad si una img tiene atributo src  ", () => {
        
        cy.visit("https://automationexercise.com/")
        cy.title().should("eq", "Automation Exercise")
        cy.get(".logo img", { timeout: 10000 })
        .should("be.visible")
        .and("have.attr", "src")
        .and("include", "/home/logo.png");

        cy.log("-------------otra forma de hacerlo----------------")
        //otra opcion con invoque (la mejor practica es have.attr)
        cy.get(".logo img", { timeout: 10000 })
        .should("be.visible")
        .invoke("attr", "src")
        .should("include", "/home/logo.png");
        

        


        
    
    })
})
