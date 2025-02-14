class proyectoUno_po{
    visitHome(){
        let tiempo = 1000;

        before(() => {
            cy.log("Inicio de todo");
        });
    
        beforeEach(() => {
            cy.log('esto se repite antes de cada test');
            cy.visit("https://testpages.eviltester.com/styled/validation/input-validation.html");
            cy.title().should('eq', 'Input Validation');
            cy.wait(tiempo);
        });
    } //final de la funcion visitHome
    
    seccion_1(nombre, apellido, edad, pais, notas,t) {
        let tiempo = t;

        // Esperar una vez al principio
        cy.wait(tiempo);
        // Interacciones con los campos del formulario
        cy.get('#firstname').should('be.visible').type(nombre);
        cy.get('#surname').should('be.visible').type(apellido);
        cy.get('#age').should('be.visible').type(edad);
        cy.get('#country').should('be.visible').type(pais);
        cy.get('#notes').should('be.visible').type(notas);

        // Hacer clic en el botón con selector único
        cy.get('[type="submit"]').should('be.visible').click();

    }

} // FINAL



export default proyectoUno_po;

