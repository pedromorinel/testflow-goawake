const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: '189t7q',

  e2e: {
    setupNodeEvents(on, config) {
     
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
