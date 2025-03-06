/*
Conditional Types - Tipos Condicionales
Es un tipo que espera una definicion especifica el cual va a actuar de una 
forma u otra, dependiendo de la misma.
*/

type Perro_v2 ={
    nombrePerro: string;
    edad:number;
    ladra: boolean,
}

type Gato ={
    nombreGato: string;
    edad:number;
    trepa: boolean,
}

type SeleccionAnimal<T extends 'perro' | 'gato'> = T extends 'perro' ? Perro_v2 : Gato;

function seleccionAnimal<T extends 'perro' | 'gato'>(animal:SeleccionAnimal<T>) {
    console.log(animal)
}

//si le paso el tipo pedro, tengo que ver solo los argumentos de tipo perro
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