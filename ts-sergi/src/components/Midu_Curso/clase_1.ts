
//tipar arrow functions

const sumar = (num1: number, num2: number):number => num1 + num2


// Type from value

const adress = {
    planet:"Earth",
    city:"Buenos Aires",
}
//extraer los tipos de un objeto con typeof
type Adress = typeof adress

const adressTwitch: Adress = {
    planet:"Mars",
    city:"Barcelona",
}

//Type from function return
//recuperar el tipo que retorna una funcion

function createPerson() {
    return {
        name:"Pedro",
        age:21
    }
} 

type Person_5 = ReturnType<typeof createPerson>
