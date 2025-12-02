const capitalize = require("../src/capitalize");

describe("capitalize", () => {

  test("texto normal", () => {
    expect(capitalize("hola")).toBe("Hola");
  });

  test("cadena vacía", () => {
    expect(capitalize("")).toBe("");
  });

  test("número como entrada", () => {
    expect(capitalize(123)).toBe("");
  });

});
