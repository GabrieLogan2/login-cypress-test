
describe('Login and register', function(){
  beforeEach(() => {
    cy.visit('https://seubarriga.wcaquino.me/login')
  })
  it('Mensagem de error usuário inexistente', () => {
    cy.get('#email').type('gabruekkhdg@gmail.com')
    cy.get('#senha').type('gabruek@123')
    cy.get('.btn').click()
    
    
    cy.get('.alert').should('be.visible');
  })
  it('Mensaggens de erros ao deixar campo vazio', () => {
    cy.get('.btn').click()
    
    cy.get('.alert').should('be.visible');
  })
  it('Acessando a página', () => {
  cy.contains('a', 'Novo usuário?').click()
  cy.contains('.btn', 'Cadastrar').should('be.visible')
  
  });
  it('Campos vazio registro e mensagem de erro', () => {
    cy.contains('a', 'Novo usuário?').click()
    cy.get('.btn').click()

    cy.get('.alert').should('be.visible')
  });
  it('Campos vazio registro e contabilizando mensagens de erro', () => {
    cy.contains('a', 'Novo usuário?').click()
    cy.get('.btn').click()

    cy.get('.alert').should('be.visible')

    cy.get('.alert')
    .should('have.length', 3)
    .each(function($alert){
      cy.wrap($alert).should('be.visible')
    })
  });
  it('Login com conta registrada', () => {
    cy.Login()

    cy.get('.alert').should('be.visible')

  

  })
})