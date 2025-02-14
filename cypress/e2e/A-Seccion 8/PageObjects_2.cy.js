import ProyectoDos_po from "../../support/PageObject/Proyecto-1_PO/Proyecto-2_PO";
/// <reference types="cypress" />

describe('Page Object Models 2', () => {
    const main = new ProyectoDos_po();

    beforeEach(() => {
        main.visitHome_v2(); // Llamar la función dentro de beforeEach()
    });

    it('Test 1 - rellenar otro form', () => {
        main.seccion_2("Juan", "Pérez", "juan@example.com", "Webmaster", "Mensaje de prueba con mas de 50 caracteres asi que tengo que escribir mucho mas ", 1000);
        cy.url().should('include', '/practicesoftwaretesting.com/contact'); // Ajusta la URL esperada
        cy.log("La url redireccionada es correcta")
        cy.get('.col-md-8').should('contain', 'Thanks for your message! We will contact you shortly.'); // Verificar mensaje de éxito
        cy.log("el mensaje de exito es correcto")
        
    });

    it('Test 2 - vaidar campo MENSAJE', () => {
        main.seccion_2("pablo", "reuiz", "jpablo@example.com", "Webmaster", "hola", 1000);
        cy.Validar_Campos("#message_alert > div", "Message must be minimal 50 characters", "Message", 1000)
    });
})
