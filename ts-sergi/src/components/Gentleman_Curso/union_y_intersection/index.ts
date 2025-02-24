// union y intersection, mas utilizados

type A = string | number
//interseccion
//son los elementos que se comparten entre los dos. entre string y number


type B = string & number
//union
//son los elementos que se suman entre los dos. entre string y number

const c: B = 4//❌
const d: A = 4//✅

interface Alumno  {
    nombre:string;
    nota:number;

}

interface Profesor {
    nombre:string;
    legajo:string;
}

type AlumnoUProfesor = Alumno & Profesor;//union

type AlumnoOProfesor = Alumno | Profesor;//interseccion

const persona2: AlumnoOProfesor = {
    nombre:'Sergio',
    nota:10,  
}//es posible porque cumple con el tipo de Alumno. Y es un OR. Puede ser tanto Alumno como Profesor


const persona3: AlumnoOProfesor = {
    nombre:'Sergio',
}//No es posible. No es ni Alumno ni Profesor. No cumple con el tipo

const metodo4 =(persona:AlumnoOProfesor)=>{
    persona.nota//no puedo trabajar con nota, porque profesor no tiene nota. y no se que me van a pasar como parametro
    persona.legajo//no puedo trabajar con legajo, porque Alumno no tiene legajo. y no se que me van a pasar como parametro
    persona.nombre//si puedo trabajar con nombre, porque tanto Alumno como Profesor tienen nombre
}



const persona4: AlumnoUProfesor = {
    nombre:'Sergio',
    nota:10,
    
}//No es posible. No cumple con el tipo. El tipo es un AND, debe cumplir tanto conmo 
//Alumno como con Profesor. Y en este caso le falta la propiedad legajo del tipo Profesor

const persona5: AlumnoUProfesor = {
    nombre:'Sergio',
    nota:10,
    legajo:'1234'
}//Es posible. Cumple con el tipo. Es un AND. Cumple con Alumno y con Profesor

const metodo5 =(persona:AlumnoUProfesor)=>{
 persona.nota//puedo trabajar con nota, porque es un AND. por parametro me van a pasar un objeto que cumple con Alumno y con Profesor
 persona.legajo//puedo trabajar con legajo, porque es un AND. por parametro me van a pasar un objeto que cumple con Alumno y con Profesor
 persona.nombre//puedo trabajar con nombre, porque es un AND. por parametro me van a pasar un objeto que cumple con Alumno y con Profesor
}