// Jest unit test
const { validateEmail } = require('../../script.js');

test('valid email passes validation', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('invalid email fails validation', () => {
  expect(validateEmail('invalid-email')).toBe(false);
});
