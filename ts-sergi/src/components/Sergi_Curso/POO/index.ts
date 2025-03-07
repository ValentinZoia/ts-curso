class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];
    
    constructor(nombre:string, protagonistas: string[], actores: string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;

    }

    proyectarEnCine(){
        console.log(`${this.nombre} esta siendo proyectada.`);
        console.log(`Protagonizada por ${this.protagonistas}.`);
        console.log(`Con la participacion de ${this.actores}.`);
    }
}



const protagonistas: string[] = ["Valentin Zoia", "Ben Stiller",];
const actores:string[] = ["Arnold Schwarzenegger","Brad Pitt", "Cilian Murphy"];

const pelicula = new Pelicula("Zoolander 3",protagonistas, actores);

pelicula.proyectarEnCine();