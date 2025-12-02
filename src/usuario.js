function crearUsuario(nombre, edad) {
  if (!nombre || edad < 0) throw new Error("Datos inválidos");
  return { nombre, edad };
}

module.exports = crearUsuario;
