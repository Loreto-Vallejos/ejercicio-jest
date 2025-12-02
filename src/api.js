async function obtenerUsuario() {
  const res = await fetch("https://ejemplo.api/usuario");
  return res.json();
}

module.exports = obtenerUsuario;
