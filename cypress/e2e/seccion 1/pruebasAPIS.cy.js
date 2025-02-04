/// <reference types="cypress" />


describe("APIS ", () => {
    it("Probando APIs", () => {
        cy.request('GET', "https://reqres.in/api/users?page=2").then((response)=>{
            expect(response.status).to.eq(200)

            //ver si hay propiedad llamada "data"
            expect(response.body).to.have.property('data')
            //ver si la propiedad "data" es un array
            expect(response.body.data).to.be.an('array')

            //verificar si existe un correo particular
            const users= response.body.data
            const michael= users.find(user => user.email == 'michael.lawson@reqres.in')
                expect(michael).to.exist
            
            //correo que no existe
            const lindsayl= users.find(user => user.email == 'lindsay2.ferguson@reqres.in')
                expect(lindsayl).to.exist

        })


    })

})

describe('Crear nuevo usuario en la api', ()=>{
     //Crear un usuario (CREATE)
    it("Crear un usuario", () => {
        const newUser = {
            "name": "Vero",
            "job": "tester QA"
        }
    

        cy.request('POST', "https://reqres.in/api/users", newUser).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('name',newUser.name)
            expect(response.body).to.have.property('job',  newUser.job)
        })
    })

})