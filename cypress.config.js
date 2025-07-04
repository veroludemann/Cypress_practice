const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {},
    // baseUrl: "https://practicesoftwaretesting.com", // Base URL para evitar escribirla en cada test
    // viewportWidth: 1280, // Ancho de pantalla en pruebas
    // viewportHeight: 720, // Alto de pantalla en pruebas

    pageLoadTimeout: 90000, // Espera 60s para la carga completa de la página
    // defaultCommandTimeout: 10000, // Tiempo máximo de espera para comandos de Cypress

    video: true, // 💡 Habilita la grabación de video
    screenshotOnRunFailure: true, // 💡 Guarda capturas en caso de fallo
    async setupNodeEvents(on, config) {
      await cucumber.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});

