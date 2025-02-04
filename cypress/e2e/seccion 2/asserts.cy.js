/// <reference types="cypress" />

describe("Trabajando con asserts", () => {
    it("Assert Contain", () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.wait(2000)
        cy.get('#accordian').contains('Women').click()


    })

    it("Assert Find", () => {
        cy.visit("https://automationexercise.com/category_products/1")
        cy.title().should('eq', 'Automation Exercise - Dress Products')
        cy.wait(2000)
        // cy.get('.features_items').find(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img')
        cy.get('.features_items').find(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
    })

    it("Assert Text, validar que la prenda sea nueva  ", () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
        cy.wait(2000)
        cy.get('.features_items').find(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > :nth-child(7)').then((e) =>{
            // cy.log(e.text())
            const estado=e.text().trim()
            cy.log(`Estado encontrado: ${estado}`); // Muestra el estado extraído
            if (estado == " New") {
                cy.log('La prenda es nueva');
            } else {
                cy.log('La prenda no es nueva');    
            }
        })
    })

    it.only("Assert Invoke, validar que la prenda sea nueva  ", () => {
        let tiempo=1000
        cy.visit("https://automationexercise.com")
        cy.title().should('eq', 'Automation Exercise')
        cy.wait(tiempo)
        cy.contains("[type='button']", "Test Cases").click()
        //usamos el assert invoke para validar 
        cy.visit("https://automationexercise.com/login")
        cy.get('.signup-form input[name="email"]').invoke("attr", "placeholder").should("contain", "Email Address").then(()=>{
            cy.get('.signup-form input[name="email"]').type("vero@gmail.com")
            cy.get('.signup-form input[name="email"]').invoke('attr',"style", "color:red")
        })       
    })








})
