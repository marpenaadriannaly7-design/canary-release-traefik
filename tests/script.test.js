const { validateEmail } = require("../script");

test("valid email passes validation", () => {
  expect(validateEmail("test@example.com")).toBe(true);
});

test("invalid email fails validation", () => {
  expect(validateEmail("invalidemail")).toBe(false);
});
