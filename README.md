**Ejercicio de Jest**

Mini proyecto creado para practicar pruebas unitarias usando Jest en JavaScript.

🧪 Objetivo

Aprender la base del testing en JavaScript:

Crear funciones en src/

Escribir tests en tests/

Ejecutar pruebas con Jest

Validar comportamientos esperados

Probar errores y valores límite

🚀 Tecnologías

Node.js

JavaScript Vanilla

Jest

📂 Estructura del proyecto
📦 ejercicio-jest
 ┣ 📂 src
 ┃ ┗ suma.js
 ┣ 📂 tests
 ┃ ┗ suma.test.js
 ┣ .gitignore
 ┣ package.json
 ┗ package-lock.json

▶ Ejecutar pruebas
npm install
npm test

📄 Ejemplo probado
// src/suma.js
function suma(a, b) {
  return a + b;
}
module.exports = suma;

// tests/suma.test.js
const suma = require("../src/suma");

test("suma 2 + 3 debe devolver 5", () => {
  expect(suma(2, 3)).toBe(5);
});

###Resultado de las pruebas ejecutadas con Jest

Todas las pruebas del proyecto fueron ejecutadas exitosamente:


