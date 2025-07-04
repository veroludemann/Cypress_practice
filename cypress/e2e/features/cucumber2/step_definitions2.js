const { Given, Then, When} = require("@badeball/cypress-cucumber-preprocessor");
const tiempo = 1000; // 

Given("Abrir la pagina de contacto", () => {
    cy.visit("https://practicesoftwaretesting.com/contact");
});

When ("cargando el nombre {word}", (name)=>{
    cy.get('#first_name').should('be.visible').type(name);
    cy.wait(tiempo);
    
}),

When ("cargando el apellido {word}", (lastName)=>{
    cy.get('#last_name').should('be.visible').type(lastName);
    cy.wait(tiempo);
}),

When ("cargando el email {word}", (email)=>{
    cy.get('#email').should('be.visible').type(email)
    cy.wait(tiempo);
}),

When ("cargando el mensaje {string}", (sms)=>{
    cy.get('#message').should('be.visible').type(sms)
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
