{/*
INTRODUCCION A LOS UNION TYPES 
En TypeScript, los Union Types permiten que un valor pueda ser de uno de varios
tipos. Sin embargo, en este ejemplo, no estamos usando union types directamente,
sino que estamos viendo cómo TypeScript verifica que un objeto cumpla con la
"forma" (shape) de una clase o interfaz. Esto se conoce como duck typing
(si camina como un pato y suena como un pato, entonces es un pato).

En este caso, tanto la clase Persona como la interfaz PersonaInterface tienen 
la misma forma, por lo que un objeto de tipo Persona puede ser asignado a una 
variable de tipo PersonaInterface.
    
*/}






class Persona {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Método para obtener el nombre
    getName(): string {
        return this.name;
    }

    // Método para establecer el nombre
    setName(name: string): void {
        this.name = name;
    }
}

interface PersonaInterface {
    name: string;
    getName(): string;
    setName(name: string): void;
}

// 🧠 Union de tipos (Duck Typing)
//  Crear una instancia de la clase Persona
const persona:Persona = new Persona("Sergio");

//Asignar la instancia a una variable de tipo PersonaInterface
let personaPosible: PersonaInterface = persona;
console.log(personaPosible.getName()); //✅ "Sergio"
/*
Explicación:
Aquí, persona es una instancia de la clase Persona,
pero como tiene la misma forma("shape") que PersonaInterface, 
TypeScript permite asignarla a una variable de tipo PersonaInterface.
*/



//🚨 Ejemplo 2: Error por falta de métodos

//Objeto que no cumple con la interfaz. Le falta el método getName
const personA = {
    name: "alan",
    setName(name:string):void {
        this.name = name;
    }
}

//Función que espera un objeto de tipo PersonaInterface
const senData = (persona: PersonaInterface): void => {
    console.log(persona.getName());
}

senData(personA); //⛔ ERROR: Property 'getName' is missing in type '{ name: string; setName(name: string): void; }' but required in type 'PersonaInterface'.ts(2345)

//lo correcto seria tener un objeto que cumpla con la interface
const personaB = {
    name: "alan",
    getName(): string {
        return this.name;
    },
    setName(name: string): void {
        this.name = name;
    }
}

senData(personaB); //✅ "alan"

