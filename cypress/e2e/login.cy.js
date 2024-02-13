describe('login', () => {
    it('access login screen', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click() //doubleClick //rightClick

        cy.get('.account_form h3')
            .then((element) => {
                expect(element.text()).eq('Login')
                expect(element).to.be.visible
                expect(element).not.disabled
            })
    })

    it('validate login field', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.fa-user')
            .click() //doubleClick //rightClick

        cy.get('.account_form h3')
            .should('contain', 'Login')
            .should('have.text', 'Login')

        cy.get('.default-form-box label')
            .should('contain', 'E-mail')
            .should('be.visible')

        cy.get('#user')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })

        cy.get('.default-form-box label')
            .should('contain', 'Senha')
            .should('be.visible')

        cy.get('#password')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })

        //btnLogin
        cy.get('#btnLogin')
            .then((element) => {
                expect(element).to.be.visible
                expect(element).not.disabled
            })




    })
})