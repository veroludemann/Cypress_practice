
/// <reference types="cypress" />

describe("ciclos y repeticiones", () => {
    it("Each Remeras | Traer el nombre de todas las remeras publicadas", () => {
        cy.visit("https://automationexercise.com/category_products/3")
        cy.title().should("eq", "Automation Exercise - Tshirts Products")
        cy.wait(1000)

        cy.get('.productinfo > p').each(($el, index, $list) => {
            // cy.log("posicion del elemento ",index)
            // cy.log("nombre etiqueta del elemento ",$el)
            // cy.log("Estructura del elemento ",$list)

            // cy.log("NOMBRE PARA USAR: ",$el.text())
            cy.log("--------------- Nombre producto ------------------")
            let remeras=$el.text()
            cy.log(remeras)
        

        })
    })



    
    it.only("Each Remeras | Hacer click en VIEW PRODUCT", () => {
        cy.visit("https://automationexercise.com/category_products/3");
        cy.title().should("eq", "Automation Exercise - Tshirts Products");
        cy.wait(1000);
    
        cy.get('.productinfo > p').each(($el) => {
            let productName = $el.text(); // Obtener el texto del producto
            cy.log("------ Nombre producto ------");
            cy.log(productName);
    
            if (productName.includes('Men')) { // Verificar si el nombre contiene "Men"
                cy.wrap($el)
                    .closest('.product-image-wrapper') // Subir al contenedor principal del producto
                    .find('.choose a') // Buscar el enlace "VIEW PRODUCT" dentro de la sección .choose
                    .click(); // Hacer clic en el enlace
            }
        });
    });
    
})



