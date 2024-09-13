describe('Search Product and try add to cart faunctionalities', () => {
    beforeEach(() => {
        cy.login();
    });

    it('should add a product to the cart, navigate to the cart', () => {
        cy.addItemToCart('sauce-labs-backpack');
        cy.get('.shopping_cart_badge').should('contain', '1');
        cy.get('.shopping_cart_link').click();
    });
});
