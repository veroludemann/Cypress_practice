class ProyectoDos_po {
    visitHome_v2() {
        cy.log('esto se repite antes de cada test');
        cy.visit("https://practicesoftwaretesting.com/contact");
        cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0');
        cy.wait(1000); // No uses variables innecesarias
    }

    seccion_2(nombre, apellido, email, motivo, mensaje, tiempo = 1000) {
        cy.wait(tiempo);
        cy.get('[data-test="first-name"]').should('be.visible').type(nombre);
        cy.get('#last_name').should('be.visible').type(apellido);
        cy.get('#email').should('be.visible').type(email);
        cy.get('#subject').should('be.visible').select(motivo);
        cy.get('#message').should('be.visible').type(mensaje);
        cy.get('.btnSubmit').should('be.visible').click();

        // Validaciones después del envío del formulario
    


    }
}

export default ProyectoDos_po;
