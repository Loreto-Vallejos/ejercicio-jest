const crearUsuario = require("../src/usuario");

describe("Módulo usuario", () => {

  test("crea usuario válido", () => {
    const u = crearUsuario("Hackerman", 30);
    expect(u).toEqual({ nombre: "Hackerman", edad: 30 });
  });

  test("lanza error con datos inválidos", () => {
    expect(() => crearUsuario("", -1)).toThrow("Datos inválidos");
  });

});
