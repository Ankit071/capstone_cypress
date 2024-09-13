describe('Cart Management', () => {
    beforeEach(() => {
        cy.login();
    });

    it('should add two products to the cart, calculate total, and remove them', () => {
        cy.addItemToCart('sauce-labs-backpack');
        cy.addItemToCart('sauce-labs-bike-light');
        cy.get('.shopping_cart_badge').should('contain', '2');
        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('have.length', 2);
        cy.removeItemFromCart('sauce-labs-backpack');
        cy.removeItemFromCart('sauce-labs-bike-light');
        cy.get('.cart_item').should('have.length', 0);
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});
