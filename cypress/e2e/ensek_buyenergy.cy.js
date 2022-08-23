describe('Navigate to the buy energy screen and do some validation on the screen', () => {

    it('Given values are not entered in the Email Textbox & Password textbox , When i Click on Submit , Then i should get an error message', () => {
      cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/');
      cy.get('a[href*=Buy]').click();
      cy.url().should('contains','Energy/Buy');
      cy.get('div>h2').should('be.visible')
            .and('include.text', 'Buy Energy') ;
    
    })
})