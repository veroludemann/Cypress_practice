

    describe('Hooks', () => {
        before(() => {
        // runs once before all tests in the block
        cy.log('######## Inicio de todo ########')
        })

        beforeEach(() => {
        // runs before each test in the block
        cy.log('esto se repite antes de cada test')
        })

        afterEach(() => {
        // runs after each test in the block
        cy.log('esto se repite al final de cada test')
        })

        after(() => {
        // runs once after all tests in the block
        cy.log('######## Final de todo ########')
        })

        it("test 1", () => {
            cy.log("test 1")
    
    
        })

        it("test 2", () => {
            cy.log("test 2")
    
    
        })
})