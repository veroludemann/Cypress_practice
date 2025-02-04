/// <reference types="cypress" />

describe("Reto ciclos y repeticiones", () => {
    it("Flujo de agregar 4 prendas en cada producto vestido", () => {
        cy.visit("https://automationexercise.com/products")
        cy.title().should("eq", "Automation Exercise - All Products")
        cy.wait(1000)
        const datos=[]

        cy.get('a[href="#Women"]').click()

        //Ingreso a la categoria que quiero verificar
        cy.get('a[href="/category_products/1"]')
            .should('be.visible') // Verifica que sea visible
            .click(); // Haz clic en la opción "Dress"
        
            //hacer click en todos los elementos
        cy.get('.productinfo > p').each(($el, index, $list) => {
            datos[index]=$el.text()
        })
        cy.log(datos)

        //1) ingresar al producto
        //2) agregar cantidad al carrito
        //3) agregar al carrito 
        //4) Volver a la pantalla de vestido y repetir ciclo
        
        //Vamos a interactuar con los elementos de la página con ciclos
        for(let x=0; x<=2; x++){
            cy.get('.choose').eq(x).click()
            cy.wait(2000)
            cy.get('#quantity').clear().type('4')
            cy.get('.cart').click();
            cy.wait(1500)
            cy.get('.btn-block').click()
            // Expande el menú "Women"
            cy.get('a[href="#Women"]').click(); 

            // Esperar a que el panel se expanda
            cy.get('#Women').should('not.have.class', 'collapse'); 

            // Hacer clic en el enlace "Dress"
            cy.get('a[href="/category_products/1"]').should('be.visible').click(); 

            // Verificar que la URL cambió correctamente
            cy.url().should('include', '/category_products/1');
        }


    })
})