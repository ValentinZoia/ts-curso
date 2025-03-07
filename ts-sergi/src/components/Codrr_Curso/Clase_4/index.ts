//Programación Orientada a Objetos en TypeScript
import { v4 as uuid } from 'uuid';


//abstract significa que esa clase no va a poder ser 
//instanciada, solo va a poder ser heredada
abstract class User {
    //protected significa que solo se puede acceder desde la propia clase
    protected id:string = uuid();
    protected name!:string;
    protected role!: "teacher" | "student";

    //al poner abstract, estamos diciendo que este método
    //siempre va a tener que ser implementado en las clases
    //las cuales hereden esta clase.
    abstract getDataUser(): void
}

class Teacher extends User{
    private course!:string//solo lo puedo usar dentro de la clase, por tener el private
    constructor(name:string, course:string){
        //con el super ya estoy llamando al constructor de la clase padre
        super();
        this.name = name
        this.role = "teacher" 
        this.course = course
    }
    
   public getDataUser(): void{
        console.log(
            {
                ...this,
            }
        )
    }
    
}

class Student extends User{
    constructor(name:string){
        super();
        this.name = name
        this.role = "student"
    }

    private courses: string[] = [];

    public addCourse(course:string):void{
        this.courses.push(course)
    }
    
    public getDataUser(): void{
        console.log(
            {
                ...this,
            }
        )
    }
    
}

const newTeacher = new Teacher("Sergi", "React");
newTeacher.getDataUser();

const newStudent = new Student("Valen");
newStudent.getDataUser();
newStudent.addCourse("Framer Motion");
newStudent.getDataUser();
