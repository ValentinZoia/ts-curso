// Interfaces

interface Hero {
    id:string;
    name: string;
    heroName: string;
    power: string[];
    age:number;
    saludarCiudadano: (nombreCiudadano:string) => void
}

const myhero:Hero ={
    id:"1",
    name:"Peter Parker",
    heroName:"Hombre Araña",
    power:["sentido aracnido", "fuerza","agilidad","trepar","lanzar telarañas"],
    age: 17,
    saludarCiudadano: (nombreCiudadano:string) => {
        console.log(`Hola ${nombreCiudadano}, Tu buen vecino el ${myhero.heroName}` );
    }
}

myhero.saludarCiudadano("Carlitos");

//Interfaces anidadas.

interface Producto{
    id:string;
    name:string;
    precio:number;
    quantity:number;
    
}



//extender interfaces

interface Zapatilla extends Producto {
    talla: number;
    marca: string;
}

interface CarritoDeCompras {
    id:string;
    productos: Zapatilla[];
    precioTotal: () => number;
    
}
const carrito: CarritoDeCompras ={
    id:"1",
    productos: [
        {
            id:"1",
            name:"Converse top",
            precio: 100,
            quantity: 1,
            talla: 40,
            marca: "Converse"
        },
        {
            id:"2",
            name:"Adidas ultra",
            precio: 10,
            quantity: 2,
            talla:42,
            marca: "Adidas" 
        }
    ],
    precioTotal: () => 100,
    
}