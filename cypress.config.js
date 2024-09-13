const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 100000,
    pageLoadTimeout: 60000,
  },
});
