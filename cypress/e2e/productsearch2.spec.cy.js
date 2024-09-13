describe('Login and Product Search', () => {
    beforeEach(() => {
        cy.fixture('user').as('user');
    });

    it('should log in with valid credentials', function() {
        cy.login(this.user.validUser.username, this.user.validUser.password);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });

    it('should search for a product after login', function() {
        cy.login(this.user.validUser.username, this.user.validUser.password);
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('.product_sort_container').select('Name (A to Z)');
        cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
    });
});
