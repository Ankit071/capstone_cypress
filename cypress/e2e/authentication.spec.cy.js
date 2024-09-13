Cypress.Commands.add('loginWithToken', (token) => {
    cy.setCookie('session_token', token);
    cy.visit('/inventory.html');
});
