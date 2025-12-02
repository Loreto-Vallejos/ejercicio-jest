const obtenerUsuario = require("../src/api");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ nombre: "Loreto" })
  })
);

test("mock de API", async () => {
  const data = await obtenerUsuario();
  expect(data.nombre).toBe("Loreto");
});
