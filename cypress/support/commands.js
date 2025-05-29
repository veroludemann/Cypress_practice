// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//COMANDO PARA TYPEAR EN UN CAMPO DE TEXTO
Cypress.Commands.add('Campo_visible', (selector, texto, t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto);
    cy.wait(tiempo)
})

//COMANDO PARA SELECCIONAR UNA OPCION DE UN SELECT
Cypress.Commands.add('Seleccionar_opcion', (selector, valor, t) => { 
    let tiempo = t;
    cy.get(selector).should('be.visible').select(valor);
    cy.wait(tiempo);
});

//COMANDO PARA HACER CLICK EN UN BOTON
Cypress.Commands.add('Click_boton', (selector, t) => { 
    let tiempo = t;
    cy.get(selector).should('be.visible').click();
    cy.wait(tiempo);
});

//COMANDO PARA HACER CLICK EN UN BOTON CON FORCE TRUE
Cypress.Commands.add('Click_force', (selector, t) => { 
    let tiempo = t;
    cy.get(selector).should('be.visible').click({force:true});
    cy.wait(tiempo);
});


//COMANDO PARA TYPEAR EN UN CAMPO DE TEXTO CON XPATH
Cypress.Commands.add('Campo_visible_xpath', (selector, texto, t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto);
    cy.wait(tiempo)
})

//FUNCIONES GLOBALES PARA HACER UN CICLO COMPLETO
//Creando una funcion para el ciclo del The Input Form de la pagina: https://testpages.eviltester.com/styled/validation/input-validation.html
Cypress.Commands.add('Bloque_InputForm', (nombre, apellido, edad, pais, notas,t) => {
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
    
});
// COMPLETAR FORMULARIO VERSION 2
Cypress.Commands.add('CompletarFormulario_V2', (usuario, clave, comentario, archivo, check, radio, select, drop, t, btn) => {
    let tiempo = t;

    // Esperar una vez al principio
    cy.wait(tiempo);
    cy.get('input[name="username"]').should('be.visible').type(usuario);
    cy.get('input[name="password"]').should('be.visible').type(clave);
    cy.get('textarea[name="comments"]').should('be.visible').type(comentario);
    //Subir archivo
    cy.get('input[name="filename"]').selectFile(archivo);
    // Marcar checkbox (ejemplo: 'checkboxes[]' tiene varios, usamos el valor pasado)
    cy.get(`input[name="checkboxes[]"][value="${check}"]`).check();

    // Seleccionar radio button
    cy.get(`input[name="radioval"][value="${radio}"]`).check();

    // Seleccionar opción en multiple select
    cy.get('select[name="multipleselect[]"]').select(select)

    // Interactuar con Dropdown
    cy.get('select[name="dropdown"]').select(drop).should('have.value', drop);


    // Click en el botón para enviar el formulario
    cy.get(btn).click();

})

// funcion para validar campos incorrectos
Cypress.Commands.add('Validar_Campos', (selector, mensError, nombre_campo, t) => {
    cy.wait(t); // Espera antes de validar el mensaje

    cy.get(selector).should('be.visible').then((val) => {
        let dato = val.text().trim(); // Quita espacios extra
        cy.log("el valor de log es *************: " + dato)
        cy.log("Mensaje encontrado: " + dato);

        expect(dato).to.equal(mensError);

        cy.log(`✅ Validación exitosa: ${nombre_campo} muestra el mensaje correcto`);
    });
});


