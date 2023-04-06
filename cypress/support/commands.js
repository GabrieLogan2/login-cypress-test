
Cypress.Commands.add('Login', function(){
    cy.get('#email').type('gabriellogan@gmail.com')
    cy.get('#senha').type('Biel@123')
    cy.get('button[type="submit"]').click()
})
