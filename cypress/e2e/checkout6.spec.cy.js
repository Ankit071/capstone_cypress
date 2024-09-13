describe('Checkout Process', () => {
    beforeEach(() => {
        cy.login();
    });

    it('should complete the checkout process and verify order confirmation', () => {
        cy.addItemToCart('sauce-labs-backpack');
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Ankit');
        cy.get('[data-test="lastName"]').type('Warathe');
        cy.get('[data-test="postalCode"]').type('452003');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
    });
});
