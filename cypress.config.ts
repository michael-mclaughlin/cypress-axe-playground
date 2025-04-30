import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1000,
  viewportWidth: 2600,
  env: {
    devServer: false,
  },
  video: false,
  projectId: '9n1r6k',
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // setupNodeEvents(on, config) {
    //   return require('./cypress/plugins/index.js')(on, config)
    // },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
