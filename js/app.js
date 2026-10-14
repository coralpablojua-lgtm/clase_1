console.log("El archivo app.js se cargo correctamente")

const nombre = "Juan Pablo";
const edad = 17;
const ciudad = "Montenegro";

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof ciudad);

const añoActual = 2026;
const añoNacimiento = añoActual - edad;

console.log(`Mi año aproximado de nacimiento es ${añoNacimiento}.`);

const edadTexto = "18";

console.log(edadTexto + 1);

const edadnumero= Number(edadTexto);
console.log(Number(edadTexto) + 1);
