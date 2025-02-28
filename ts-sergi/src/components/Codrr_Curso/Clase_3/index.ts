/*
------GENERICOS------
Que son los genericos?
Podemos entender los genericos como una especie de "plantilla" de
codigo, mediante la cual podemos aplicar un tipo de datos determinado
a varios puntos de nuestro codigo.

Donde usarlos?
    - Una interface
    - Un tipo
    - Una funcion (tradicional o flecha)
    - Una clase
*/

interface MyGenericInterface<T> {
    myGenericType: T;
}

const example: MyGenericInterface<string> = {
    myGenericType: 'string'
}

//---Su uso en funciones---
function getValue<T>(value: T) {
    console.log(value)
}

getValue(`Hola soy un texto de tipo ${typeof "Hola"}`);

const getValueFlecha = <T>(value: T) => {
    console.log(value)
}

getValueFlecha(2)

//---Su uso en tipos y clases---
type MyGenericType<T> = {
    myGenericType: T;
}

class GenericClass<T> {
    value!:T
    constructor(value: {new(): T}) {
        this.value = new value();
    }
}

class Valentin {
    public name:string = "Valentin"
    public age:number = 19
}

class Maria {
    public nameMAria:string = "Maria"
    public ageMaria:number = 20
}

class Greet extends GenericClass<Valentin> {
    constructor(){
        super(Valentin)
    }

    public greet():void{
        console.log(`Hello ${this.value.name}`)
    }
}