//Narrowing


//dependiendo del tipo de dato que me pasen, voy a hacer una cosa u otra
//y vamos a veridicar primero con un condicional que tipo es el que llega.
function mostrarLongitud (objeto: number | string) {
   // en este scope objeto: string | number
   
    if (typeof objeto === "string") {
        //en este scope objeto: string
        return objeto.length
    }
    
    //en este scope ya es number. objeto:number
    return objeto.toString().length
}

mostrarLongitud("hola")


// Ejemplo 2 de Narrowing
interface Mario {
    company:"Nintendo",
    nombre:string,
    saltar:()=> void
}


interface Sonic {
    company:"Sega",
    nombre:string,
    correr:()=> void
}

type Personaje = Mario | Sonic

function jugar(personaje:Personaje){
    if(personaje.company === "Nintendo"){
        personaje.saltar();
    }

    if(personaje.company === "Sega"){
        personaje.correr();
    }

}

//lo mismo de arriba pero con type guard. si es que las companias no son especificadas. osea 
//que ambas interfaces no tengan un atributo distinto. como "Nintendo" y "Sega"
//entonces vamos a verificar segun su funcion (correr o saltar)

//Type Guard
//dejame comprobar si personaje es sonic mediante su funcion correr
// y esta funcion determina si es sonic o no
function checkIsSonic(personaje:Personaje):personaje is Sonic{
    return (personaje as Sonic).correr !== undefined
}
//IGUALMENTE HAY QUE EVITAR EL METODO DE TYPE GUARDS
function jugar2(personaje:Personaje){
    if(checkIsSonic(personaje)){
        personaje.correr();
    }
}

