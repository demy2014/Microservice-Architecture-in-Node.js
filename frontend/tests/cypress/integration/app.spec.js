describe('Frontend Test', () => {
    it('should display a list of items', () => {
      cy.visit('/');
      cy.contains('h1', 'Items');
      cy.get('ul > li').should('have.length', 2); // Assuming there are 2 items in the DB
    });
  });
  