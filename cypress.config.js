const { defineConfig } = require("cypress");
const CryptoJS = require('crypto-js');

// Desencriptamos BaseURL64
var baseUrl = (host) => {
  return CryptoJS.enc.Base64url.parse(host).toString(CryptoJS.enc.Utf8);
}

module.exports = defineConfig({
  // implement node event listeners here 
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporte-API-Testing',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: { 
    setupNodeEvents(on, config) { 
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
  env: {
    baseURL: baseUrl('aHR0cHM6Ly9hcGkucmVzdGZ1bC1hcGkuZGV2Lw')
  },
});


