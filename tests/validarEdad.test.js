const validarEdad = require("../src/validarEdad");

describe("validarEdad", () => {

  test("edad válida: 20", () => {
    expect(validarEdad(20)).toBe(true);
  });

  test("edad inválida: 15", () => {
    expect(validarEdad(15)).toBe(false);
  });

  test("edad límite: 18", () => {
    expect(validarEdad(18)).toBe(true);
  });

});
