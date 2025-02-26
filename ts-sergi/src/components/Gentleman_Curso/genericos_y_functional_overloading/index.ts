// generico

const metodoT = <T>(argumento: T): T => argumento;

const t = metodoT<number>(2);
const t2 = metodoT<string>("1")

interface Saludar<T>{
    saludar(persona: T): string;
}

const personaje:Saludar<string> ={
    saludar(x){
        return `Hola ${x}`;
    }
}

const perro:Saludar<number> = {
    saludar(x){
        return `Hola ${x} veces`;
    }

}

console.log(personaje.saludar("Sergi")); //Hola Sergi
console.log(perro.saludar(2));//Hola 2 veces

//functional overloading
interface PersonaT{
    name:string;
    saludar(x:string):string;
}

interface Perro {
    raza:string;
    saludar(x:number):number;
}

function metodoStringONumber(x:PersonaT):string;
function metodoStringONumber(x:Perro):number;
function metodoStringONumber(x: PersonaT | Perro):string | number{
    if("raza" in x){
        
        return x.saludar(34);
    }
    if("name" in x){
        
        return x.saludar("como va");
    }
    return x;
}

const Empleado1:PersonaT = {
    name:"Sergi",
    saludar(x){
        return `Hola ${this.name} ${x}`;
    }
}

const Mascota1:Perro = {
    raza:"Pitbull",
    saludar(x){
        return x;
    }
}


console.log(metodoStringONumber(Empleado1) )
console.log(metodoStringONumber(Mascota1) ); 


enum Claves {
    name="name",
    raza="raza",
}

type Mamal = {
    [key in Claves]:string;
}
// type Mamal = {
//     name: string;
//     raza: string;
// }