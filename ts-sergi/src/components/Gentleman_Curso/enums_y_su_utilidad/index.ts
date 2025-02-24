/*
INTRODUCCIÓN A LOS ENUMS


*/



//constante con shape
const NI ={
    ARG:'dni',
    ES:'nif',
}

type ARG = string; //alias

type NITYPE = "dni" | "nif"

//podemos usarlo como tipo
enum NIENUM {
    ARG = 'dni',
    ES = 'nif',
}

const dni = NIENUM.ARG

const dimeELNI = (ni:NIENUM) => console.log(ni)

dimeELNI(NIENUM.ARG)//✅ dni
dimeELNI(NI)//No se puede asignar un argumento de tipo "{ ARG: string; ES: string; }" al parámetro de tipo "NIENUM".
dimeELNI("dni")//❌

//por mas que sea un string, no es un NIENUM