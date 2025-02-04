describe('Table Test', () => {
    it('Verifica que la tabla tenga 10 filas', () => {
        cy.visit('http://127.0.0.1:5500/cypress/fixtures/tabla.html'); // Cambia la ruta según corresponda
        cy.get('table#example tbody tr').should('have.length', 10);
    });

    it('Extraer datos de la tabla', () => {
        cy.visit('http://127.0.0.1:5500/cypress/fixtures/tabla.html');
        //extraer datos
        const datos= []
        cy.get (".odd td").each(($el, index, $list) => {
            datos[index] = $el.text()

        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
            }
        })
    })

    it('Sumar EL VALOR DE LOS CAMPOS AGE obtenidos de la clase odd', () => {
        cy.visit('http://127.0.0.1:5500/cypress/fixtures/tabla.html');
        
        const datos= []
        let cantidadOdd=0
        cy.get (".odd td").each(($el, index, $list) => {
            datos[index] = $el.text()

        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                // cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd+=Number(datos[i])
                }
            }
            cy.log('La cantidad de total es: '+ cantidadOdd)
            //verificar que efectivamente es esa la cantidad 
            expect(cantidadOdd).eq(202)
        })
    })

    it.only('Traer la edad de un usuario a travez del elemento', () => {
        cy.visit('http://127.0.0.1:5500/cypress/fixtures/tabla.html');

        const campo= cy.get(':nth-child(7) > :nth-child(2)')
        // cy.log(campo)
        campo.each(($el, index, $list) => {
            const dato= $el.text()
            cy.log(dato)

            if(dato.includes('Javascript Developer')){
                campo.eq(index).next().next().then((age)=>{
                    const Edad= age.text()
                    cy.log(Edad)
                    cy.log('La edad del usuario Javascript Developer es: '+ Edad)
                    expect(Edad).to.eq('39')
                })
            }
        })
        
        
        
        

    })
})
