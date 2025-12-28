// tests/script.test.js
const { test, expect } = require('@playwright/test');
const { validateEmail } = require('../script.js');

test('valid email passes validation', async () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('invalid email fails validation', async () => {
  expect(validateEmail('invalid-email')).toBe(false);
});
