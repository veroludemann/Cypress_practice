/// <reference types="cypress" />

describe("usando el enter ", () => {
    it("Test validar que funcione el ENTER", () => {
        cy.visit("https://www.google.com.ar/");
        cy.title().should("eq", "Google")
        cy.wait(1500)

        cy.get("[name='q']").type("cypress{enter}")
        cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    });
});
