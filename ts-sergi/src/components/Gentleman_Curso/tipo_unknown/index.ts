//unknown vs any

let numero: any = 1;
numero = "2"; // ✅ al ser de tipo any, puedo asignar cualquier tipo de dato

//type assertion
let numero2:number = 1;
const texto:string = numero2 as string;//⛔ ERROR: La conversión del tipo "number" al tipo "string" puede ser un error

let numeroUnknown:unknown = 1;
const texto2:string = numeroUnknown as string;//✅ No hay error, pero no es seguro
const texto3:string = <string>numeroUnknown;//✅ No hay error, pero no es seguro

//el unknown a diferencia del any, nos obliga a castearlo a un tipo de dato concreto
//para poder trabajar con el, (as string, as number, <string>, <number>, etc)
//si yo no tuviera el 'as string', daria un error:
const texto4:string = numeroUnknown;//⛔ ERROR: Type 'unknown' is not assignable to type 'string'

const metodoU = (texto: unknown) =>{
    //asi podemos controlar el tipo de dato que nos pasan si no sabemos que es.
    if(Array(texto)){
        return (texto as []).length;
    }

    if(String(texto)){
        return (texto as string).concat(' - hola');
    }

    if(Number(texto)){
        return (texto as number) + 1;
    }
}

