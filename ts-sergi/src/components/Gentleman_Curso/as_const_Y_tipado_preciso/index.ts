//hagamos un tipo que dependa de una property para el resultado de la función

type Dependant<T extends {property:any}>= T["property"];

type Independant = {
    property:string;
}

const dependant:Dependant<Independant> = "1"; // const dependant: string

enum Numbers1 {
    "NUMBER1" = "number1",
    "NUMBER2" = "number2",
}

enum Numbers2 {
    "NUMBER3" = "number3",
    
}
//juntamos los enums
const myNumbers = {...Numbers1, ...Numbers2} as const; // al ponerle as const, se convierte en un objeto inmutable

//obtenemos los valores de los enums
const mixValues = Object.values(myNumbers)


type MixNumbers = (typeof mixValues)[number];

type Enums ={
    [key in MixNumbers]:string;
}

console.log(myNumbers, "myNumbers");//{ NUMBER1: 'number1', NUMBER2: 'number2', NUMBER3: 'number3' }
console.log("mixValeus", mixValues);//[ 'number1', 'number2', 'number3' ]

 