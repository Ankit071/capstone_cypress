    // Visit the login page
    describe('Homepage', () => {
        it('should load the homepage and verify the Swag Labs logo', () => {
          cy.visit('/');
          
          // Verify the URL to ensure it is the login page
          cy.url().should('eq', 'https://www.saucedemo.com/');
          
          // Check that the Swag Labs logo is visible on the login page
          cy.get('.login_logo').should('be.visible');
          
          // Optionally, you can also verify the text if needed
          cy.get('.login_logo').should('contain', 'Swag Labs');
        });
    });
