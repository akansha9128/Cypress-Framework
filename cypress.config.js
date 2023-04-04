const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: 'cypress/integration/examples/*.js'
    specPattern: 'cypress/integration/examples/TestFramework2.js'
    //supportFile: 'cypress/support/commands.js'
  },
});
