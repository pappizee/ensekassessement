
describe('Registering for an Ensek User Account', () => {

    it('Given values are not entered in the Email Textbox, When i Click on Submit , Then i should get an error message', () => {
      cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/');
      cy.get('#registerLink').click();
      cy.url().should('contains','https://ensekautomationcandidatetest.azurewebsites.net/Account/Register');
      cy.get('.btn').click();
      cy.get(':nth-child(4)').should('be.visible')
            .and('include.text', 'The Email field is required.') 
            .and ('include.text','The Password field is required.')
    })
})