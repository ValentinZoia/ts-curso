//Object o Records
const myObject: Object ={
    name:"Valen"
}

const myObjectV2 :Record<string, string> = {};//Record<key, value>
myObjectV2.name = "Valen";
myObjectV2.numero = 24; //Error el tipo number no se puede asignar a string. el value debe ser string

//tuplas
const myObjectV3 : Record<string, string | number> = {}
myObjectV3.name = "Valen";
myObjectV3.age = 19;

//Promesas

const myPromise = async():Promise<string> =>{
    return await new Promise((res, _rej)=>{
        setTimeout(()=>{
            res("hola");
        }, 2000)
    })
}

myPromise().then((res)=>console.log(res));

//Compuestos
const myNewObject:{
    name:string,
    age:number
} ={
name:"Valen",
age:19
}