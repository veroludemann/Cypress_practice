// Funciones personalidas y reutilizables
function login (user, password) {
    cy.get('.user-name').type(user)
    cy.get('.password').type(password)
    cy.get('.login-button').click()
}

//llamo al login
login('carlos@gmail.com', 'carlos55')