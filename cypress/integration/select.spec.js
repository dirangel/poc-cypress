/// <reference types="cypress" />


describe('Select', () => {  
  beforeEach(() => {
      cy.visit('/?path=/story/components-web-atoms-select--select-base');
      cy.url().should('contain', 'components-web-atoms-select--select-base');
  });
  
  it('Search for a value inside the dropdown', () => {
      cy.iframe().find('.e1oqxcck2').should('be.visible').type('quis ut nam');
      cy.iframe().find('.e13ar8800').should('be.visible').contains('quis ut nam')
      cy.iframe().find('div[data-testid="div_MenuItem"] > .e13ar8800').should('be.visible').contains('quis ut nam')
      cy.iframe().find('.e1oqxcck2').should('be.visible').clear();
      cy.iframe().find('.e1oqxcck2').should('not.have.value','quis ut nam')
  });

  it('Search item with click event', () => {
      cy.iframe().find('.e1oqxcck2').should('be.visible').click();  
      cy.iframe().find('.evida4x2 > .e13ar8800').eq(0).click().should('have.text', 'delectus aut autem')
      cy.iframe().find('.evida4x2').eq(1).click().should('have.text', 'quis ut nam')
      cy.iframe().find('.evida4x2').eq(2).click().should('have.text', 'et porro tempora')
      cy.iframe().find('.evida4x2').eq(3).click().should('have.text', 'laboriosam mollitia')
      cy.iframe().find('.evida4x2').eq(4).click().should('have.text', 'qui ullam ratione')
      cy.iframe().find('.evida4x2').eq(5).click().should('have.text', 'illo expedita')
      cy.iframe().find('.evida4x2').eq(6).click().should('have.text', 'quo adipisci')
      cy.iframe().find('.evida4x2').eq(7).click().should('have.text', 'molestiae perspiciatis')
      cy.iframe().find('.evida4x2').eq(8).click().should('have.text', 'illo est ratione')
  });

  it('Search item with keyword', () => {
      cy.iframe().find('.e1oqxcck2').should('be.visible').type('illo').click();
      cy.iframe().find('.evida4x2 > .e13ar8800').eq(0).should('have.text', 'illo expedita')
      cy.iframe().find('.evida4x2 > .e13ar8800').eq(1).should('have.text', 'illo est ratione')
  });
}); 