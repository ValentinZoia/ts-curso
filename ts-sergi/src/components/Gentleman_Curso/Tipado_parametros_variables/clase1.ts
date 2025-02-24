/*
  🧐 ¿Qué es el tipado en TypeScript?
  TypeScript es un lenguaje con tipado **estricto y explícito**. Esto significa que nos obliga a respetar
  los tipos de datos que definimos.
*/



// 🚀 TypeScript: Tipado explícito
let a: number = 1;
a = "2"; // ⛔ ERROR: 'Type string is not assignable to type 'number'

// 🚀 JavaScript: Tipado dinámico e implícito
let b = 1;
b = "2"; // ✅ No hay problema, JavaScript es flexible.

// 🚀 TypeScript con `any`: Similar a JavaScript
let z: any = 1;
z = "2"; // ✅ No hay problema, pero perdemos los beneficios de TypeScript.




/*
  🌍 Aspecto socio-cultural de TypeScript:
  1. 🔒 Seguridad: Nos brinda un control extra sobre nuestro código.
  2. 🛠️ Mantenibilidad: Facilita la lectura y el mantenimiento del código.
  3. 🔄 Refactorización: Simplifica la refactorización al saber qué tipos de datos se manejan.
*/

// 🚀 Ejemplo en JavaScript: Sin seguridad de tipos
const metodo = (d) => d + 1;
metodo("hola"); // ✅ "hola1" (pero esto puede no ser lo que queríamos)

// 🚀 Ejemplo en TypeScript: Con seguridad de tipos
const metodoTS = (n: number): number => n + 1;
metodoTS("hola"); // ⛔ ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
metodoTS(1); // ✅ 2

/*
  🧠 Beneficio adicional:
  Con solo leer la función en TypeScript, sabemos qué recibe y qué devuelve.
  Esto facilita la refactorización y el mantenimiento del código.
*/
const metodo2 = (n: number): number => n + 1;