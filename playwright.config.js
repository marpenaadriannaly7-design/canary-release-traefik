// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/e2e',  // only run E2E tests
  timeout: 30000,
  use: {
    headless: true,
  },
});
