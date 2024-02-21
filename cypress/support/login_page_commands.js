///<reference types="cypress"/>

///Actions / Methods / Functions
Cypress.Commands.add('accessLoginPage', () => {
    cy.visit('/').get('.header-logo')
    cy.get('.fa-user').click() //doubleClick //rightClick
})

Cypress.Commands.add('loginUser', () => {
    cy.get('#btnLogin').click()
})