const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5iwqax',
  e2e: {
    "baseUrl": "https://react-redux.realworld.io/",
    "chromeWebSecurity": false,
    "specPattern": "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    "includeShadowDom": true,
    "textContent": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      
    },
  },
});
