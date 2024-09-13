describe('Mocking and Stubbing', () => {
    it('should mock API responses', () => {
        cy.intercept('GET', '/api/products', { fixture: 'products.json' }).as('getProducts');
        cy.visit('/inventory.html');
        cy.wait('@getProducts');
        cy.get('.inventory_item').should('have.length', 6); // Assuming the fixture has 6 products
    });
});
