# TypeScript

## Que es TypeScript?

Es JavaScript pero con sintaxis de tipos. Un lenguaje de programación que utiliza de base JavaScript y lo incorpora, es totalmente compatible con el y lo que hace es añadir tipos estáticos. TS no funciona en tiempos de ejecución, osea lo que llevamos al navegador es JS plano. Se transpila mediante un bundler.

Al dia de hoy es muy utilizado, y muy demandado. Fue creado por Microsoft en 2012. El motivo? Js estaba ganando popularidad y uso, pero para apps muy grandes Js no era lo suficientemente confiable, le faltaba sintaxis y especialmente le faltaban los tipos, que lo convierta en más seguro, legible,etc.

### Como o cuando se actualiza?

Se actualiza con la ultima versión de javascript 👌.

### JavaScript es tipado?

Si, tipado dinamico

### Que tipado es TypeScript?

Tipado estricto. Nos obliga a respetar los tipos de datos.

```tsx
*
  🧐 ¿Qué es el tipado en TypeScript?
  TypeScript es un lenguaje con tipado **estricto y explícito**. Esto significa que nos obliga a respetar
  los tipos de datos que definimos.
*/

// 🚀 TypeScript: Tipado explícito
let a: number = 1;
a = "2"; // ⛔ ERROR: 'Type string is not assignable to type 'number'
a = 1; // ✅

// 🚀 JavaScript: Tipado dinámico e implícito
let b = 1;
b = "2"; // ✅ No hay problema, JavaScript es flexible.

// 🚀 TypeScript con `any`: Similar a JavaScript
let c: any = 1;
c = "2"; // ✅ No hay problema, pero perdemos los beneficios de TypeScript.

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

```

## Inferencia

La inferencia es que sin escribir el tipo de dato, typescript lo deduce.

```tsx
//como a y b infiere que son number sin decirle nada
const a = 1
const b = 2
const c = a + b
//c también será number
```

---

## 📚 **Introducción a `unknown` vs `any`**

En TypeScript, tanto `any` como `unknown` son tipos que permiten flexibilidad en el manejo de datos. Sin embargo, tienen diferencias clave que afectan la seguridad y robustez de tu código:

- **`any`**: Es el tipo más flexible. Cuando usas `any`, TypeScript no realiza verificaciones de tipo, lo que puede llevar a errores en tiempo de ejecución. Es como desactivar el sistema de tipos.
- **`unknown`**: Es una versión más segura de `any`. Con `unknown`, TypeScript te obliga a verificar o hacer una conversión explícita (type assertion) antes de usar el valor. Esto ayuda a prevenir errores comunes.

En este capítulo, exploraremos cómo funcionan `any` y `unknown`, y cuándo es preferible usar uno sobre el otro.

---

## 🧑‍💻 **Código: `any` vs `unknown`**

### 1. **Uso de `any`: Flexibilidad sin restricciones**

```tsx
let numero: any = 1;
numero = "2"; // ✅ Al ser de tipo `any`, puedo asignar cualquier tipo de dato
```

**Explicación:**

Con `any`, puedes asignar cualquier valor sin que TypeScript te advierta. Esto puede ser útil, pero también peligroso, ya que pierdes la seguridad de tipos.

---

### 2. **Type Assertion con `any` y `unknown`**

### a. **Type Assertion con `any`**

```tsx
let numero2: number = 1;
const texto: string = numero2 as string; // ⛔ ERROR: No se puede convertir `number` a `string`
```

**Explicación:**

TypeScript no permite una conversión directa de `number` a `string` porque son tipos incompatibles.

### b. **Type Assertion con `unknown`**

```tsx
let numeroUnknown: unknown = 1;
const texto2: string = numeroUnknown as string; // ✅ No hay error, pero no es seguro
const texto3: string = <string>numeroUnknown; // ✅ Otra forma de hacer type assertion
```

**Explicación:**

Con `unknown`, TypeScript permite la conversión explícita, pero debes tener cuidado, ya que no hay garantía de que el valor sea realmente del tipo que afirmas.

---

### 3. **`unknown` obliga a verificar el tipo**

```tsx
const texto4: string = numeroUnknown; // ⛔ ERROR: Type 'unknown' is not assignable to type 'string'
```

**Explicación:**

A diferencia de `any`, `unknown` no permite asignaciones directas sin una verificación o conversión explícita. Esto hace que tu código sea más seguro.

---

### 4. **Uso práctico de `unknown`**

### a. **Función que maneja `unknown`**

```tsx
const metodoU = (texto: unknown) => {
    // Verificamos el tipo de dato antes de usarlo
    if (Array.isArray(texto)) {
        return (texto as []).length; // ✅ Si es un array, obtenemos su longitud
    }

    if (typeof texto === "string") {
        return (texto as string).concat(" - hola"); // ✅ Si es un string, lo concatenamos
    }

    if (typeof texto === "number") {
        return (texto as number) + 1; // ✅ Si es un número, lo incrementamos
    }

    return "Tipo de dato no soportado"; // ⚠️ Si no es ninguno de los anteriores
};
```

**Explicación:**

Con `unknown`, TypeScript nos obliga a verificar el tipo de dato antes de usarlo. Esto evita errores en tiempo de ejecución y hace que el código sea más robusto.

---

## 🧐 **Conclusión**

- **`any`**: Úsalo con precaución, ya que desactiva las verificaciones de tipo. Es útil en casos muy específicos, pero puede llevar a errores difíciles de detectar.
- **`unknown`**: Es una alternativa más segura a `any`. Te obliga a verificar o convertir el tipo antes de usarlo, lo que mejora la seguridad y mantenibilidad del código.

---

## 🚀 **Código completo**

```tsx
// Uso de `any`
let numero: any = 1;
numero = "2"; // ✅ Al ser de tipo `any`, puedo asignar cualquier tipo de dat

// Type Assertion con `any`
let numero2: number = 1;
const texto: string = numero2 as string; // ⛔ ERROR: No se puede convertir `number` a `string`

// Type Assertion con `unknown`
let numeroUnknown: unknown = 1;
const texto2: string = numeroUnknown as string; // ✅ No hay error, pero no es seguro
const texto3: string = <string>numeroUnknown; // ✅ Otra forma de hacer type assertion

// `unknown` obliga a verificar el tipo
const texto4: string = numeroUnknown; // ⛔ ERROR: Type 'unknown' is not assignable to type 'string'

// Función que maneja `unknown`
const metodoU = (texto: unknown) => {
    if (Array.isArray(texto)) {
        return (texto as []).length; // ✅ Si es un array, obtenemos su longitud
    }

    if (typeof texto === "string") {
        return (texto as string).concat(" - hola"); // ✅ Si es un string, lo concatenamos
    }

    if (typeof texto === "number") {
        return (texto as number) + 1; // ✅ Si es un número, lo incrementamos
    }

    return "Tipo de dato no soportado"; // ⚠️ Si no es ninguno de los anteriores
};
```

---

## 📖 **Resumen de conceptos clave**

- **`any`**: Desactiva las verificaciones de tipo. Útil, pero peligroso.
- **`unknown`**: Obliga a verificar o convertir el tipo antes de usarlo. Más seguro que `any`.
- **Type Assertion**: Permite convertir explícitamente un valor a un tipo específico usando `as` o `<tipo>`.

---

## 📚 **Introducción a Tipos e Interfaces en TypeScript**

En TypeScript, los **tipos** y las **interfaces** son herramientas fundamentales para definir la estructura de los datos. Ambos permiten describir la forma de los objetos, pero tienen diferencias sutiles que los hacen más adecuados para ciertos casos.

### ¿Qué son los **tipos**?

- **Definición**: Los tipos (`type`) son una forma de crear alias para cualquier tipo de dato, ya sea primitivo, unión, intersección, etc.
- **Flexibilidad**: Pueden combinar múltiples tipos usando operadores como `|` (unión) y `&` (intersección).
- **Uso común**: Ideal para definir tipos complejos o combinaciones de tipos.

### ¿Qué son las **interfaces**?

- **Definición**: Las interfaces (`interface`) son una forma de definir la estructura de un objeto. Especifican qué propiedades y métodos debe tener un objeto.
- **Extensibilidad**: Pueden extenderse (`extends`) para heredar propiedades de otras interfaces.
- **Uso común**: Ideal para definir la forma de objetos y clases.

### ¿Cuándo usar tipos y cuándo interfaces?

- **Usa tipos** cuando necesites combinar tipos o definir uniones/intersecciones.
- **Usa interfaces** cuando trabajes con objetos o clases y quieras aprovechar la herencia.

---

## 🧑‍💻 **Código: Tipos e Interfaces en Acción**

### 1. **Definición de un Tipo de Unión**

Creamos un tipo que representa los métodos de pago posibles:

```tsx
type PaymentMethodType = "debito" | "credito" | "efectivo";
```

**Explicación:**

`PaymentMethodType` es un tipo que solo puede ser `"debito"`, `"credito"` o `"efectivo"`. Esto limita los valores posibles y mejora la seguridad del código.

---

### 2. **Definición de una Interfaz**

Definimos una interfaz base para productos:

```tsx
interface IProductoBase {
    price: number;
    paymentMethod: PaymentMethodType; // Usamos el tipo que declaramos arriba
    nameClient: string;
}
```

**Explicación:**

`IProductoBase` es una interfaz que define las propiedades básicas de un producto: precio, método de pago y nombre del cliente.

---

### 3. **Definición de un Tipo**

Creamos un tipo equivalente a la interfaz anterior:

```tsx
type ProductoBaseType = {
    price: number;
    paymentMethod: PaymentMethodType; // Usamos el tipo que declaramos arriba
    nameClient: string;
};
```

**Explicación:**

`ProductoBaseType` es un tipo que tiene la misma estructura que `IProductoBase`. Aunque son similares, los tipos son más flexibles para combinaciones.

---

### 4. **Herencia en Interfaces**

Extendemos la interfaz base para crear una interfaz de productos físicos:

```tsx
interface IFisica extends IProductoBase {
    productName: string;
    clientAdress: string;
    quantity: number;
}
```

**Explicación:**

`IFisica` hereda todas las propiedades de `IProductoBase` y añade nuevas propiedades específicas para productos físicos.

---

### 5. **Combinación de Tipos**

Creamos un tipo para productos virtuales combinando `ProductoBaseType` con propiedades adicionales:

```tsx
type VirtualType = ProductoBaseType & {
    templateName: string;
    format: 'jpg' | 'png' | 'pdf';
};
```

**Explicación:**

`VirtualType` combina las propiedades de `ProductoBaseType` con nuevas propiedades específicas para productos virtuales.

---

### 6. **Implementación de Clases**

Implementamos las interfaces y tipos en clases:

### a. **Clase para Productos Físicos**

```tsx
class ProductoFisico implements IFisica {
    price: number = 500;
    paymentMethod: PaymentMethodType = "efectivo";
    nameClient: string = "Juan";
    productName: string = "Bicicleta";
    clientAdress: string = "Calle falsa 123";
    quantity: number = 1;
}
```

**Explicación:**

`ProductoFisico` implementa la interfaz `IFisica`, lo que garantiza que tenga todas las propiedades requeridas.

### b. **Clase para Productos Virtuales**

```tsx
class ProductoVirtual implements VirtualType {
    price: number = 100;
    paymentMethod: PaymentMethodType = "credito";
    nameClient: string = "Valen";
    templateName: string = "Template 1";
    format: 'jpg' | 'png' | 'pdf' = "jpg";
}
```

**Explicación:**

`ProductoVirtual` implementa el tipo `VirtualType`, asegurando que cumpla con la estructura definida.

---

## 🧐 **Conclusión**

- **Interfaces**: Ideales para definir la forma de objetos y clases. Permiten herencia con `extends`.
- **Tipos**: Flexibles para combinar tipos y definir uniones/intersecciones. Usan `&` para combinar.
- **Elección**: Usa interfaces para objetos/clases y tipos para combinaciones complejas.

---

## 🚀 **Código completo**

```tsx
// Definición de un Tipo de Unión
type PaymentMethodType = "debito" | "credito" | "efectivo";

// Definición de una Interfaz
interface IProductoBase {
    price: number;
    paymentMethod: PaymentMethodType;
    nameClient: string;
}

// Definición de un Tipo
type ProductoBaseType = {
    price: number;
    paymentMethod: PaymentMethodType;
    nameClient: string;
};

// Herencia en Interfaces
interface IFisica extends IProductoBase {
    productName: string;
    clientAdress: string;
    quantity: number;
}

// Combinación de Tipos
type VirtualType = ProductoBaseType & {
    templateName: string;
    format: 'jpg' | 'png' | 'pdf';
};

// Implementación de Clases
class ProductoFisico implements IFisica {
    price: number = 500;
    paymentMethod: PaymentMethodType = "efectivo";
    nameClient: string = "Juan";
    productName: string = "Bicicleta";
    clientAdress: string = "Calle falsa 123";
    quantity: number = 1;
}

class ProductoVirtual implements VirtualType {
    price: number = 100;
    paymentMethod: PaymentMethodType = "credito";
    nameClient: string = "Valen";
    templateName: string = "Template 1";
    format: 'jpg' | 'png' | 'pdf' = "jpg";
}
```

---

## 📖 **Resumen de conceptos clave**

- **Interfaces**: `interface` para definir la forma de objetos y clases.
- **Tipos**: `type` para alias y combinaciones complejas.
- **Herencia**: `extends` en interfaces, `&` en tipos.
- **Implementación**: `implements` para clases.

---

## 📚 **Introducción a Union Types e Intersection Types**

En TypeScript, los **Union Types** (`|`) y los **Intersection Types** (`&`) son herramientas poderosas para combinar tipos de manera flexible y segura. Ambos permiten crear nuevos tipos a partir de tipos existentes, pero tienen comportamientos diferentes:

- **Union Types (`|`)**: Representan un valor que puede ser de uno de varios tipos. Es como decir "esto puede ser A **o** B".
- **Intersection Types (`&`)**: Representan un valor que debe cumplir con **todos** los tipos combinados. Es como decir "esto debe ser A **y** B".

En este capítulo, exploraremos cómo funcionan estos tipos y cuándo usarlos en tu código.

---

## 🧑‍💻 **Código: Union Types e Intersection Types**

### 1. **Union Types (`|`)**

```tsx
type A = string | number;
```

**Explicación:**

El tipo `A` puede ser un `string` **o** un `number`. Esto permite flexibilidad en el manejo de valores.

### Ejemplo de uso:

```tsx
const d: A = 4; // ✅ Correcto, porque 4 es un número
const e: A = "Hola"; // ✅ Correcto, porque "Hola" es un string
```

---

### 2. **Intersection Types (`&`)**

```tsx
type B = string & number;
```

**Explicación:**

El tipo `B` debe ser tanto un `string` **como** un `number`. Esto es imposible en la práctica, ya que un valor no puede ser de ambos tipos al mismo tiempo. Por eso, este tipo es raramente útil en casos simples.

### Ejemplo de uso:

```tsx
const c: B = 4; // ❌ Error, porque 4 no es un string
```

---

### 3. **Union e Intersection con Interfaces**

### a. **Definición de Interfaces**

```tsx
interface Alumno {
    nombre: string;
    nota: number;
}

interface Profesor {
    nombre: string;
    legajo: string;
}
```

### b. **Union Type (`|`)**

```tsx
type AlumnoOProfesor = Alumno | Profesor;
```

**Explicación:**

El tipo `AlumnoOProfesor` puede ser un `Alumno` **o** un `Profesor`.

### Ejemplo de uso:

```tsx
const persona2: AlumnoOProfesor = {
    nombre: "Sergio",
    nota: 10,
}; // ✅ Correcto, porque cumple con el tipo `Alumno`

const persona3: AlumnoOProfesor = {
    nombre: "Sergio",
}; // ❌ Error, porque no cumple ni con `Alumno` ni con `Profesor`
```

### c. **Intersection Type (`&`)**

```tsx
type AlumnoUProfesor = Alumno & Profesor;
```

**Explicación:**

El tipo `AlumnoUProfesor` debe cumplir con **ambos** tipos: `Alumno` **y** `Profesor`.

### Ejemplo de uso:

```tsx
const persona4: AlumnoUProfesor = {
    nombre: "Sergio",
    nota: 10,
}; // ❌ Error, porque falta la propiedad `legajo`

const persona5: AlumnoUProfesor = {
    nombre: "Sergio",
    nota: 10,
    legajo: "1234",
}; // ✅ Correcto, porque cumple con ambos tipos
```

---

### 4. **Uso de Union e Intersection en Funciones**

### a. **Función con Union Type**

```tsx
const metodo4 = (persona: AlumnoOProfesor) => {
     persona.nota; // ❌ No se puede acceder directamente, porque `Profesor` no tiene `nota`
     persona.legajo; // ❌ No se puede acceder directamente, porque `Alumno` no tiene `legajo`
    console.log(persona.nombre); // ✅ Correcto, porque ambos tipos tienen `nombre`
}
```

**Explicación:**

Con Union Types, solo puedes acceder a propiedades que sean comunes a todos los tipos posibles.

### b. **Función con Intersection Type**

```tsx
const metodo5 = (persona: AlumnoUProfesor) => {
    console.log(persona.nota); // ✅ Correcto, porque el tipo incluye `Alumno`
    console.log(persona.legajo); // ✅ Correcto, porque el tipo incluye `Profesor`
    console.log(persona.nombre); // ✅ Correcto, porque ambos tipos tienen `nombre`
};
```

**Explicación:**

Con Intersection Types, puedes acceder a todas las propiedades de los tipos combinados.

---

## 🧐 **Conclusión**

- **Union Types (`|`)**: Útiles cuando un valor puede ser de uno de varios tipos. Te permiten flexibilidad, pero limitan el acceso a propiedades comunes.
- **Intersection Types (`&`)**: Útiles cuando un valor debe cumplir con múltiples tipos. Te permiten combinar propiedades, pero son más restrictivos.

---

## 🚀 **Código completo**

```tsx
// Union Types
type A = string | number;

const d: A = 4; // ✅ Correcto
const e: A = "Hola"; // ✅ Correcto

// Intersection Types
type B = string & number;

const c: B = 4; // ❌ Error

// Interfaces
interface Alumno {
    nombre: string;
    nota: number;
}

interface Profesor {
    nombre: string;
    legajo: string;
}

// Union Type
type AlumnoOProfesor = Alumno | Profesor;

const persona2: AlumnoOProfesor = {
    nombre: "Sergio",
    nota: 10,
}; // ✅ Correcto

const persona3: AlumnoOProfesor = {
    nombre: "Sergio",
}; // ❌ Error

// Intersection Type
type AlumnoUProfesor = Alumno & Profesor;

const persona4: AlumnoUProfesor = {
    nombre: "Sergio",
    nota: 10,
}; // ❌ Error

const persona5: AlumnoUProfesor = {
    nombre: "Sergio",
    nota: 10,
    legajo: "1234",
}; // ✅ Correcto

// Funciones
const metodo4 = (persona: AlumnoOProfesor) => {
    console.log(persona.nombre); // ✅ Correcto
};

const metodo5 = (persona: AlumnoUProfesor) => {
    console.log(persona.nota); // ✅ Correcto
    console.log(persona.legajo); // ✅ Correcto
    console.log(persona.nombre); // ✅ Correcto
};
```

---

## 📖 **Resumen de conceptos clave**

- **Union Types (`|`)**: "A **o** B". Útil para valores que pueden ser de varios tipos.
- **Intersection Types (`&`)**: "A **y** B". Útil para combinar propiedades de múltiples tipos.
- **Propiedades comunes**: Con Union Types, solo puedes acceder a propiedades compartidas por todos los tipos.

---

## 📚 **Introducción a los Genéricos en TypeScript**

Los **genéricos** son una de las características más poderosas de TypeScript. Permiten crear componentes, funciones y estructuras de datos que pueden trabajar con cualquier tipo de dato, sin perder la seguridad del tipado. En otras palabras, los genéricos nos permiten escribir código **reutilizable** y **flexible**, manteniendo la robustez del sistema de tipos.

### ¿Qué son los genéricos?

Los genéricos son como "plantillas" de código que pueden adaptarse a diferentes tipos de datos. En lugar de escribir una función o clase específica para un tipo de dato (como `number` o `string`), puedes escribir una versión genérica que funcione con cualquier tipo.

### ¿Por qué usar genéricos?

- **Reutilización**: Puedes escribir una función o clase que funcione con múltiples tipos de datos.
- **Seguridad**: TypeScript sigue verificando los tipos, evitando errores comunes.
- **Flexibilidad**: Los genéricos se adaptan a tus necesidades, ya sea que trabajes con números, strings, objetos o incluso tipos personalizados.

### Conceptos clave:

- **Parámetros de tipo**: Son como "variables" que representan tipos. Se definen entre `< >` (por ejemplo, `<T>`).
- **Inferencia de tipos**: TypeScript puede inferir automáticamente el tipo de un genérico basado en el valor que le pasas.
- **Restricciones**: Puedes limitar los tipos que un genérico puede aceptar usando `extends`.

---

## 🧑‍💻 **Código: Genéricos en Acción**

### 1. **Interfaz Genérica**

Creamos una interfaz genérica que puede trabajar con cualquier tipo:

```tsx
interface MyGenericInterface<T> {
    myGenericType: T;
}
```

**Explicación:**

- `MyGenericInterface<T>` es una interfaz que puede trabajar con cualquier tipo `T`.
- `myGenericType` es una propiedad de tipo `T`.

### Ejemplo de uso:

```tsx
const example: MyGenericInterface<string> = {
    myGenericType: 'string'
};
```

---

### 2. **Funciones Genéricas**

Creamos una función genérica que puede trabajar con cualquier tipo:

```tsx
function getValue<T>(value: T) {
    console.log(value);
}

getValue(`Hola soy un texto de tipo ${typeof "Hola"}`);
```

**Explicación:**

- `getValue<T>` es una función que toma un argumento de tipo `T` y lo imprime en la consola.
- TypeScript infiere el tipo de `T` basado en el valor que le pasas.

### Función flecha genérica:

```tsx
const getValueFlecha = <T>(value: T) => {
    console.log(value);
};

getValueFlecha(2); // ✅ 2
```

---

### 3. **Tipos Genéricos**

Creamos un tipo genérico que puede trabajar con cualquier tipo:

```tsx
type MyGenericType<T> = {
    myGenericType: T;
};
```

**Explicación:**

- `MyGenericType<T>` es un tipo que tiene una propiedad `myGenericType` de tipo `T`.

---

### 4. **Clases Genéricas**

Creamos una clase genérica que puede trabajar con cualquier tipo:

```tsx
class GenericClass<T> {
    value!: T;
    constructor(value: { new(): T }) {
        this.value = new value();
    }
}
```

**Explicación:**

- `GenericClass<T>` es una clase que puede trabajar con cualquier tipo `T`.
- El constructor toma una clase (no una instancia) y crea una nueva instancia de esa clase.

### Ejemplo de uso:

```tsx
class Valentin {
    public name: string = "Valentin";
    public age: number = 19;
}

class Maria {
    public nameMaria: string = "Maria";
    public ageMaria: number = 20;
}

class Greet extends GenericClass<Valentin> {
    constructor() {
        super(Valentin);
    }

    public greet(): void {
        console.log(`Hello ${this.value.name}`);
    }
}

const greet = new Greet();
greet.greet(); // ✅ "Hello Valentin"
```

---

## 🧐 **Conclusión**

- **Genéricos**: Permiten crear código reutilizable y seguro.
- **Interfaces genéricas**: Pueden adaptarse a múltiples tipos.
- **Funciones genéricas**: Trabajan con cualquier tipo de dato.
- **Clases genéricas**: Pueden instanciar cualquier tipo de objeto.

---

## 🚀 **Código completo**

```tsx
// Interfaz Genérica
interface MyGenericInterface<T> {
    myGenericType: T;
}

const example: MyGenericInterface<string> = {
    myGenericType: 'string'
};

// Funciones Genéricas
function getValue<T>(value: T) {
    console.log(value);
}

getValue(`Hola soy un texto de tipo ${typeof "Hola"}`);

const getValueFlecha = <T>(value: T) => {
    console.log(value);
};

getValueFlecha(2); // ✅ 2

// Tipos Genéricos
type MyGenericType<T> = {
    myGenericType: T;
};

// Clases Genéricas
class GenericClass<T> {
    value!: T;
    constructor(value: { new(): T }) {
        this.value = new value();
    }
}

class Valentin {
    public name: string = "Valentin";
    public age: number = 19;
}

class Maria {
    public nameMaria: string = "Maria";
    public ageMaria: number = 20;
}

class Greet extends GenericClass<Valentin> {
    constructor() {
        super(Valentin);
    }

    public greet(): void {
        console.log(`Hello ${this.value.name}`);
    }
}

const greet = new Greet();
greet.greet(); // ✅ "Hello Valentin"
```

---

## 📖 **Resumen de conceptos clave**

- **Genéricos**: `<T>` permite trabajar con cualquier tipo.
- **Interfaces genéricas**: Adaptables a múltiples tipos.
- **Funciones genéricas**: Trabajan con cualquier tipo de dato.
- **Clases genéricas**: Pueden instanciar cualquier tipo de objeto.

---

## 📚 **Introducción a la Programación Orientada a Objetos (POO) en TypeScript**

La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el código en "objetos", los cuales son instancias de clases. TypeScript, al ser un superset de JavaScript, soporta POO y añade características adicionales como tipos, modificadores de acceso y clases abstractas.

### Conceptos clave en POO con TypeScript:

1. **Clases**: Plantillas para crear objetos. Definen propiedades y métodos.
2. **Herencia**: Permite que una clase herede propiedades y métodos de otra clase.
3. **Modificadores de acceso**: Controlan el acceso a las propiedades y métodos de una clase.
    - **`public`**: Accesible desde cualquier lugar (por defecto).
    - **`private`**: Solo accesible dentro de la clase.
    - **`protected`**: Accesible dentro de la clase y sus subclases.
4. **Clases abstractas**: No pueden ser instanciadas directamente. Sirven como plantillas para otras clases.
5. **Constructor**: Método especial que se ejecuta al crear una instancia de una clase.
6. **`super()`**: Llama al constructor de la clase padre en una clase heredada.

---

## 🧑‍💻 **Código: POO en TypeScript**

### 1. **Clase Abstracta `User`**

Definimos una clase abstracta que servirá como base para otras clases:

```tsx
import { v4 as uuid } from 'uuid';

abstract class User {
    protected id: string = uuid(); // Solo accesible desde la clase y sus subclases
    protected name!: string; // Propiedad protegida
    protected role!: "teacher" | "student"; // Propiedad protegida con valores específicos

    // Método abstracto que debe ser implementado por las subclases
    abstract getDataUser(): void;
}
```

**Explicación:**

- `User` es una clase abstracta, por lo que no se puede instanciar directamente.
- Las propiedades `id`, `name` y `role` son `protected`, lo que significa que solo son accesibles dentro de la clase y sus subclases.
- El método `getDataUser` es abstracto, por lo que las clases que hereden de `User` deben implementarlo.

---

### 2. **Clase `Teacher` (Hereda de `User`)**

Creamos una clase `Teacher` que hereda de `User`:

```tsx
class Teacher extends User {
    private course!: string; // Propiedad privada, solo accesible dentro de la clase

    constructor(name: string, course: string) {
        super(); // Llama al constructor de la clase padre (User)
        this.name = name;
        this.role = "teacher";
        this.course = course;
    }

    // Implementación del método abstracto
    public getDataUser(): void {
        console.log({
            id: this.id,
            name: this.name,
            role: this.role,
            course: this.course,
        });
    }
}
```

**Explicación:**

- `Teacher` hereda de `User` y añade una propiedad privada `course`.
- El constructor inicializa las propiedades y llama a `super()` para ejecutar el constructor de `User`.
- El método `getDataUser` imprime los datos del profesor.

---

### 3. **Clase `Student` (Hereda de `User`)**

Creamos una clase `Student` que también hereda de `User`:

```tsx
class Student extends User {
    private courses: string[] = []; // Propiedad privada, solo accesible dentro de la clase

    constructor(name: string) {
        super(); // Llama al constructor de la clase padre (User)
        this.name = name;
        this.role = "student";
    }

    // Método para añadir un curso
    public addCourse(course: string): void {
        this.courses.push(course);
    }

    // Implementación del método abstracto
    public getDataUser(): void {
        console.log({
            id: this.id,
            name: this.name,
            role: this.role,
            courses: this.courses,
        });
    }
}
```

**Explicación:**

- `Student` hereda de `User` y añade una propiedad privada `courses`.
- El método `addCourse` permite añadir cursos a la lista.
- El método `getDataUser` imprime los datos del estudiante.

---

### 4. **Uso de las Clases**

Creamos instancias de `Teacher` y `Student` y llamamos a sus métodos:

```tsx
const newTeacher = new Teacher("Sergi", "React");
newTeacher.getDataUser(); // ✅ Muestra los datos del profesor

const newStudent = new Student("Valen");
newStudent.getDataUser(); // ✅ Muestra los datos del estudiante
newStudent.addCourse("Framer Motion"); // ✅ Añade un curso
newStudent.getDataUser(); // ✅ Muestra los datos actualizados del estudiante
```

**Explicación:**

- `newTeacher` es una instancia de `Teacher` con nombre "Sergi" y curso "React".
- `newStudent` es una instancia de `Student` con nombre "Valen". Se añade un curso y se muestran los datos actualizados.

---

## 🧐 **Conclusión**

- **Clases abstractas**: Sirven como plantillas para otras clases. No se pueden instanciar directamente.
- **Herencia**: Permite reutilizar código y extender funcionalidades.
- **Modificadores de acceso**: Controlan la visibilidad de propiedades y métodos (`public`, `private`, `protected`).
- **Constructor y `super()`**: Inicializan propiedades y llaman al constructor de la clase padre.

---

## 🚀 **Código completo**

```tsx
import { v4 as uuid } from 'uuid';

// Clase Abstracta
abstract class User {
    protected id: string = uuid();
    protected name!: string;
    protected role!: "teacher" | "student";

    abstract getDataUser(): void;
}

// Clase Teacher
class Teacher extends User {
    private course!: string;

    constructor(name: string, course: string) {
        super();
        this.name = name;
        this.role = "teacher";
        this.course = course;
    }

    public getDataUser(): void {
        console.log({
            id: this.id,
            name: this.name,
            role: this.role,
            course: this.course,
        });
    }
}

// Clase Student
class Student extends User {
    private courses: string[] = [];

    constructor(name: string) {
        super();
        this.name = name;
        this.role = "student";
    }

    public addCourse(course: string): void {
        this.courses.push(course);
    }

    public getDataUser(): void {
        console.log({
            id: this.id,
            name: this.name,
            role: this.role,
            courses: this.courses,
        });
    }
}

// Uso de las Clases
const newTeacher = new Teacher("Sergi", "React");
newTeacher.getDataUser(); // ✅ Muestra los datos del profesor

const newStudent = new Student("Valen");
newStudent.getDataUser(); // ✅ Muestra los datos del estudiante
newStudent.addCourse("Framer Motion"); // ✅ Añade un curso
newStudent.getDataUser(); // ✅ Muestra los datos actualizados del estudiante
```

---

## 📖 **Resumen de conceptos clave**

- **Clases abstractas**: `abstract class` para plantillas no instanciables.
- **Herencia**: `extends` para heredar propiedades y métodos.
- **Modificadores de acceso**: `public`, `private`, `protected`.
- **Constructor y `super()`**: Inicialización y llamada al constructor padre.

---

## 📚 **Introducción a los Tipos Condicionales (Conditional Types)**

Los **tipos condicionales** en TypeScript son una herramienta avanzada que permite definir tipos que dependen de una condición. Es similar a cómo funcionan los condicionales en JavaScript (`if/else`), pero aplicado a tipos. Esto nos permite crear tipos dinámicos que se adaptan a diferentes situaciones, mejorando la flexibilidad y seguridad del código.

### ¿Qué son los tipos condicionales?

- **Definición**: Son tipos que se evalúan en función de una condición. Si la condición es verdadera, se elige un tipo; si es falsa, se elige otro.
- **Sintaxis**: `T extends U ? X : Y`, donde:
    - `T` es el tipo que se evalúa.
    - `U` es el tipo con el que se compara.
    - `X` es el tipo que se devuelve si la condición es verdadera.
    - `Y` es el tipo que se devuelve si la condición es falsa.

### ¿Para qué se usan?

- **Tipos dinámicos**: Crear tipos que cambian según las condiciones.
- **Reutilización**: Evitar la duplicación de código al definir tipos similares.
- **Seguridad**: Garantizar que los tipos sean correctos en tiempo de compilación.

---

## 🧑‍💻 **Código: Tipos Condicionales en Acción**

### 1. **Definición de Tipos Base**

Creamos dos tipos base: `Perro_v2` y `Gato`.

```tsx
type Perro_v2 = {
    nombrePerro: string;
    edad: number;
    ladra: boolean;
};

type Gato = {
    nombreGato: string;
    edad: number;
    trepa: boolean;
};
```

**Explicación:**

- `Perro_v2` define las propiedades de un perro.
- `Gato` define las propiedades de un gato.

---

### 2. **Definición de un Tipo Condicional**

Creamos un tipo condicional que selecciona entre `Perro_v2` y `Gato`:

```tsx
type SeleccionAnimal<T extends 'perro' | 'gato'> = T extends 'perro' ? Perro_v2 : Gato;
```

**Explicación:**

- `SeleccionAnimal<T>` es un tipo condicional que depende del valor de `T`.
- Si `T` es `'perro'`, el tipo será `Perro_v2`.
- Si `T` es `'gato'`, el tipo será `Gato`.

---

### 3. **Función que Usa el Tipo Condicional**

Creamos una función que acepta un animal basado en el tipo condicional:

```tsx
function seleccionAnimal<T extends 'perro' | 'gato'>(animal: SeleccionAnimal<T>) {
    console.log(animal);
}
```

**Explicación:**

- `seleccionAnimal` es una función genérica que toma un parámetro `animal` de tipo `SeleccionAnimal<T>`.
- El tipo de `animal` depende del valor de `T`.

---

### 4. **Uso de la Función**

Llamamos a la función con diferentes tipos de animales:

```tsx
// Seleccionar un perro
seleccionAnimal<'perro'>({
    edad: 12,
    ladra: true,
    nombrePerro: "Loly",
});

// Seleccionar un gato
seleccionAnimal<'gato'>({
    trepa: true,
    edad: 12,
    nombreGato: "Loly",
});
```

**Explicación:**

- Al llamar a `seleccionAnimal<'perro'>`, TypeScript espera un objeto de tipo `Perro_v2`.
- Al llamar a `seleccionAnimal<'gato'>`, TypeScript espera un objeto de tipo `Gato`.

---

## 🧐 **Conclusión**

- **Tipos condicionales**: Permiten crear tipos dinámicos basados en condiciones.
- **Flexibilidad**: Adaptan el tipo según el valor proporcionado.
- **Seguridad**: Garantizan que los tipos sean correctos en tiempo de compilación.

---

## 🚀 **Código completo**

typescript

Copy

```
// Definición de Tipos Base
type Perro_v2 = {
    nombrePerro: string;
    edad: number;
    ladra: boolean;
};

type Gato = {
    nombreGato: string;
    edad: number;
    trepa: boolean;
};

// Definición de un Tipo Condicional
type SeleccionAnimal<T extends 'perro' | 'gato'> = T extends 'perro' ? Perro_v2 : Gato;

// Función que Usa el Tipo Condicional
function seleccionAnimal<T extends 'perro' | 'gato'>(animal: SeleccionAnimal<T>) {
    console.log(animal);
}

// Uso de la Función
seleccionAnimal<'perro'>({
    edad: 12,
    ladra: true,
    nombrePerro: "Loly",
});

seleccionAnimal<'gato'>({
    trepa: true,
    edad: 12,
    nombreGato: "Loly",
});
```

---

## 📖 **Resumen de conceptos clave**

- **Tipos condicionales**: `T extends U ? X : Y`.
- **Flexibilidad**: Adaptan el tipo según el valor proporcionado.
- **Seguridad**: Garantizan que los tipos sean correctos en tiempo de compilación.

---

## 📚 **Introducción a los Enums**

En TypeScript, los **Enums** (enumeraciones) son una forma de definir un conjunto de constantes con nombres descriptivos. Son útiles cuando tienes un grupo de valores relacionados que no cambian, como días de la semana, estados de un proceso, o tipos de documentos.

### ¿Qué es el **Shape**?

El **Shape** (forma) en TypeScript se refiere a la estructura de un tipo. Por ejemplo, un objeto con propiedades específicas tiene un "shape" particular. Los Enums también tienen un "shape", ya que definen un conjunto de valores posibles.

### ¿Para qué se usan los Enums?

- **Legibilidad**: Dan significado a valores que de otro modo serían números o strings.
- **Seguridad**: Limitan los valores posibles, evitando errores.
- **Mantenibilidad**: Facilitan cambios futuros, ya que los valores están centralizados.

---

## 🧑‍💻 **Código: Enums en TypeScript**

### 1. **Constante con Shape**

Antes de usar Enums, podemos definir un objeto con un "shape" específico:

```tsx
const NI = {
    ARG: 'dni',
    ES: 'nif',
};
```

**Explicación:**

Aquí, `NI` es un objeto con dos propiedades: `ARG` y `ES`. Este enfoque es útil, pero no ofrece la seguridad de tipos que proporcionan los Enums.

---

### 2. **Alias de Tipos**

Podemos crear alias de tipos para mejorar la legibilidad:

```tsx
type ARG = string; // Alias para un tipo string
type NITYPE = "dni" | "nif"; // Alias para un tipo union de strings
```

**Explicación:**

`NITYPE` es un tipo que solo permite los valores `"dni"` o `"nif"`. Esto es útil, pero aún no es tan claro como un Enum.

---

### 3. **Definición de un Enum**

Ahora, definimos un Enum para representar los tipos de documentos:

```tsx
enum NIENUM {
    ARG = 'dni',
    ES = 'nif',
}
```

**Explicación:**

`NIENUM` es un Enum que define dos valores: `ARG` y `ES`. Cada valor está asociado a un string (`'dni'` y `'nif'`).

---

### 4. **Uso del Enum**

Podemos usar el Enum como un tipo y acceder a sus valores:

```tsx
const dni = NIENUM.ARG; // ✅ dni
```

**Explicación:**

Aquí, `dni` es igual a `'dni'`, pero con la seguridad de que proviene de un Enum.

---

### 5. **Función que usa un Enum**

Definimos una función que acepta un valor del Enum:

```tsx
const dimeELNI = (ni: NIENUM) => console.log(ni);
```

**Ejemplos de uso**

```tsx
dimeELNI(NIENUM.ARG); // ✅ "dni"
dimeELNI(NI); // ❌ Error: No se puede asignar un objeto al tipo `NIENUM`
dimeELNI("dni"); // ❌ Error: No se puede asignar un string al tipo `NIENUM`
```

**Explicación:**

La función `dimeELNI` solo acepta valores del Enum `NIENUM`. Esto garantiza que solo se pasen valores válidos.

---

### 6. **Comparación con Objetos y Strings**

- **Objeto `NI`**: No es compatible con el Enum, aunque tenga propiedades similares.
- **String `"dni"`**: Tampoco es compatible, porque no es un valor del Enum.

**Ejemplo:**

```tsx
dimeELNI(NIENUM.ARG); // ✅ Correcto
dimeELNI(NI); // ❌ Error
dimeELNI("dni"); // ❌ Error
```

**Explicación:**

Los Enums proporcionan un nivel adicional de seguridad y claridad que los objetos y strings no ofrecen.

---

## 🧐 **Conclusión**

- **Enums**: Son ideales para definir conjuntos de valores relacionados y constantes.
- **Seguridad**: Limitan los valores posibles, evitando errores comunes.
- **Legibilidad**: Hacen el código más claro y mantenible.

---

## 🚀 **Código completo**

```tsx
// Constante con Shape
const NI = {
    ARG: 'dni',
    ES: 'nif',
};

// Alias de Tipos
type ARG = string;
type NITYPE = "dni" | "nif";

// Definición de un Enum
enum NIENUM {
    ARG = 'dni',
    ES = 'nif',
}

// Uso del Enum
const dni = NIENUM.ARG; // ✅ "dni"

// Función que usa un Enum
const dimeELNI = (ni: NIENUM) => console.log(ni);

// Ejemplos de uso
dimeELNI(NIENUM.ARG); // ✅ "dni"
dimeELNI(NI); // ❌ Error
dimeELNI("dni"); // ❌ Error
```

---

## 📖 **Resumen de conceptos clave**

- **Enums**: Conjuntos de valores constantes con nombres descriptivos.
- **Shape**: La estructura de un tipo, como un objeto o un Enum.
- **Seguridad**: Los Enums limitan los valores posibles, evitando errores.

---

## 📚 **Introducción a `as const` y Tipado Preciso**

En TypeScript, el **tipado preciso** es esencial para garantizar que nuestro código sea seguro y predecible. Una herramienta poderosa para lograr esto es `as const`, que convierte un valor en un tipo literal inmutable. Esto es especialmente útil cuando queremos trabajar con valores específicos y evitar que TypeScript infiera tipos más amplios.

### ¿Qué es `as const`?

- **Inmutabilidad**: `as const` convierte un objeto o array en un tipo literal inmutable, lo que significa que sus propiedades y valores no pueden cambiar.
- **Precisión**: Ayuda a TypeScript a inferir tipos más específicos, lo que mejora la seguridad y claridad del código.

### ¿Para qué se usa?

- **Enums dinámicos**: Combinar enums o crear objetos que actúen como enums.
- **Tipos literales**: Asegurar que los valores sean exactamente lo que esperamos, sin inferencias amplias.

---

## 🧑‍💻 **Código: `as const` y Tipado Preciso**

### 1. **Tipos Dependientes de Propiedades**

Creamos un tipo que depende de una propiedad específica de otro tipo:

```tsx
type Dependant<T extends { property: any }> = T["property"];
```

**Explicación:**

El tipo `Dependant` extrae el tipo de la propiedad `property` de un objeto `T`. Esto es útil cuando queremos que un tipo dependa de otro.

### Ejemplo de uso:

```tsx
type Independant = {
    property: string;
};

const dependant: Dependant<Independant> = "1"; // ✅ Correcto, `dependant` es de tipo `string`
```

---

### 2. **Combinación de Enums con `as const`**

Combinamos dos enums y los convertimos en un objeto inmutable usando `as const`:

```tsx
enum Numbers1 {
    NUMBER1 = "number1",
    NUMBER2 = "number2",
}

enum Numbers2 {
    NUMBER3 = "number3",
}

const myNumbers = { ...Numbers1, ...Numbers2 } as const;
```

**Explicación:**

`myNumbers` es un objeto que combina los valores de `Numbers1` y `Numbers2`. Al usar `as const`, TypeScript infiere que `myNumbers` es inmutable y tiene valores literales específicos.

---

### 3. **Obtención de Valores de Enums**

Extraemos los valores de `myNumbers` y los almacenamos en un array:

```tsx
const mixValues = Object.values(myNumbers); // ✅ ["number1", "number2", "number3"]
```

**Explicación:**

`mixValues` es un array que contiene los valores de los enums combinados. TypeScript infiere que es un array de strings literales.

---

### 4. **Creación de un Tipo a partir de los Valores**

Creamos un tipo que representa los valores posibles de `mixValues`:

```tsx
type MixNumbers = (typeof mixValues)[number];
```

**Explicación:**

`MixNumbers` es un tipo que puede ser `"number1"`, `"number2"` o `"number3"`. Esto es útil para restringir valores en funciones o propiedades.

---

### 5. **Uso del Tipo en un Objeto**

Definimos un objeto cuyas claves son los valores de `MixNumbers`:

```tsx
type Enums = {
    [key in MixNumbers]: string;
};
```

**Explicación:**

`Enums` es un tipo que requiere que todas las claves sean `"number1"`, `"number2"` o `"number3"`, y que sus valores sean strings.

---

### 6. **Impresión de Resultados**

Mostramos los resultados en la consola:

```tsx
console.log(myNumbers, "myNumbers"); // { NUMBER1: 'number1', NUMBER2: 'number2', NUMBER3: 'number3' }
console.log("mixValues", mixValues); // ["number1", "number2", "number3"]
```

**Explicación:**

Esto nos permite ver cómo se combinan los enums y cómo se extraen sus valores.

---

## 🧐 **Conclusión**

- **`as const`**: Convierte valores en tipos literales inmutables, mejorando la precisión del tipado.
- **Tipos dependientes**: Permiten crear tipos que dependen de propiedades específicas.
- **Enums dinámicos**: Combinar enums y extraer sus valores es fácil con `as const`.

---

## 🚀 **Código completo**

```tsx
// Tipos Dependientes de Propiedades
type Dependant<T extends { property: any }> = T["property"];

type Independant = {
    property: string;
};

const dependant: Dependant<Independant> = "1"; // ✅ Correcto, `dependant` es de tipo `string`

// Combinación de Enums con `as const`
enum Numbers1 {
    NUMBER1 = "number1",
    NUMBER2 = "number2",
}

enum Numbers2 {
    NUMBER3 = "number3",
}

const myNumbers = { ...Numbers1, ...Numbers2 } as const;

// Obtención de Valores de Enums
const mixValues = Object.values(myNumbers); // ✅ ["number1", "number2", "number3"]

// Creación de un Tipo a partir de los Valores
type MixNumbers = (typeof mixValues)[number];

// Uso del Tipo en un Objeto
type Enums = {
    [key in MixNumbers]: string;
};

// Impresión de Resultados
console.log(myNumbers, "myNumbers"); // { NUMBER1: 'number1', NUMBER2: 'number2', NUMBER3: 'number3' }
console.log("mixValues", mixValues); // ["number1", "number2", "number3"]
```

---

## 📖 **Resumen de conceptos clave**

- **`as const`**: Convierte valores en tipos literales inmutables.
- **Tipos dependientes**: Extraen tipos de propiedades específicas.
- **Enums dinámicos**: Combinan enums y extraen sus valores.

---

## 📚Transpilación

### Qué es la transpilación?

Proceso que hacemos dentro de nuestros proyectos.
yo tengo un lenguaje de alto nivel, y lo transformo a otro de alto nivel.
Typescript -> Javascript
alto nivel -> alto nivel

Recordemos que typescript es un superset de javascript, extiende sus funcionalidades.
Pero bien, el browser no entiende typescript, por lo que necesitamos transpilarlo a javascript.
mediante por ejemplo los bundlers, webpack, parcel, rollup, turbopack etc.

---