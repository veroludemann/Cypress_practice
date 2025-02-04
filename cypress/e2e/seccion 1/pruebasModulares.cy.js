// pruebas modulares

describe('Autenticacion', () => {
    /// beforeEach se ejecuta antes de cada prueba
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })

    it('Debemos Iniciar sesion con credenciales validas', () => {
        //pruebas inicio de sesion exitosa
    })

    it('Se debe mostrar mensaje de error sin las credenciales son invalidas', () => {
        //pruebas inicio de sesion exitosa
    })

    it('Se debe mostrar mensaje de sesion exitosa', () => {
        //pruebas inicio de sesion exitosa
    })

})