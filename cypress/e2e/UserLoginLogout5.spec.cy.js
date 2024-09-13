describe('Login and Logout', () => {
    it('should log in with valid credentials', () => {
        cy.login();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    });

    it('should log out successfully', () => {
        cy.login();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});
