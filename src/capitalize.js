function capitalize(texto) {
  if (typeof texto !== "string") return "";
  if (texto.length === 0) return "";
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

module.exports = capitalize;
