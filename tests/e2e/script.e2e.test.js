// Playwright E2E test
const { test, expect } = require('@playwright/test');
const { validateEmail } = require('../../script.js');

test('valid email passes validation', async () => {
  expect(validateEmail('test@example.com')).toBe(true);
});
