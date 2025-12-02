const suma = require("../src/suma");

test("suma 2 + 3 debe devolver 5", () => {
  expect(suma(2, 3)).toBe(5);
});
