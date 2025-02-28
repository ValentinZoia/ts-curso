//----tipos e interfaces----

type PaymentMethodType = "debito" | "credito" | "efectivo";

//declarar interfaz, es buena practica ponerle I al inicio
interface IPeoductoBase{
    price:number;
    paymentMethod:PaymentMethodType;//usamos el tipo que declaramos arriba
    nameClient:string;
}


//declarar tipo, es buena practica ponerle Type al final
type ProductoBaseType = { 
    price:number;
    paymentMethod:PaymentMethodType;//usamos el tipo que declaramos arriba
    nameClient:string;
}

//Herencia
/*
Podemos heredar atributos entre interfaces y tipos.
Es diferente si queremos que sea de un tipo a de una interfaz-

En interfaz se usa extends, para heredar atributos de otra interfaz.

En types se usa & para heredar/combinar atributos de otro tipo.
*/

interface IFisica extends IPeoductoBase {
    //heredamos los atributos de la interfaz IPeoductoBase, los comento para ver como seria completo
    //price:number;
    //paymentMethod:PaymentMethodType;
    //nameClient:string;
    productName: string;
    clientAdress:string;
    quantity:number;
}

type VirtualType = ProductoBaseType & {
    templateName: string;
    format: 'jpg' | 'png' | 'pdf';
}

//implementarlos
class ProductoFisico implements IFisica {
    price:number = 500;
    paymentMethod: PaymentMethodType = "efectivo";
    nameClient: string = "Juan";
    productName: string = "Bicicleta";
    clientAdress: string = "Calle falsa 123";
    quantity: number = 1;
    
}
 

class ProductoVirtual implements VirtualType {
    price:number = 100;
    paymentMethod: PaymentMethodType = "credito";
    nameClient: string = "Valen";
    templateName: string = "Template 1";
    format: 'jpg' | 'png' | 'pdf' = "jpg";
}