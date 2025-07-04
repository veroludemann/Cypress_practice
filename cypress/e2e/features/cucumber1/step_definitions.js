const { Given, Then, When} = require("@badeball/cypress-cucumber-preprocessor");
const tiempo = 1000; // 

Given("Abrir la pagina de contacto", () => {
    cy.visit("https://practicesoftwaretesting.com/contact");
});

When ("cargando el nombre", ()=>{
    cy.get('#first_name').should('be.visible').type('VERO');
    cy.wait(tiempo);
    
}),

When ("cargando el apellido", ()=>{
    cy.get('#last_name').should('be.visible').type('LUDEMANN');
    cy.wait(tiempo);
}),

When ("cargando el email", ()=>{
    cy.get('#email').should('be.visible').type('vero@mail.com')
    cy.wait(tiempo);
}),

When ("cargando el mensaje", ()=>{
    cy.get('#message').should('be.visible').type('Este es un mensaje de prueba con más de cincuenta caracteres para que pase la validación.')
    cy.wait(tiempo);
}),

When("cargando el subject", () => {
    cy.get('#subject').should('be.visible').select('Webmaster');
    cy.wait(tiempo);
}),

When ("click en boton Send", ()=>{
    cy.get("input[type='submit']").click()
    cy.wait(tiempo);

}),

Then ("veo que se envio correctamente",()=>{
    cy.get('.alert-success')
    .should('be.visible')
    .and('contain.text', "Thanks for your message");
})
// Then ("validar titulo de la pagina"),()=>{
//     cy.title().should('eq', 'titulo');
//     cy.wait(tiempo);

// }