
class Sorteo<T>{
    private ticket?: T;

    constructor(private nombre:string){}

    setTicket(ticket:T){
        this.ticket = ticket;
    }

    getTicket(){
        return this.ticket
    }

    public sortear():string{
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

let sorteo = new Sorteo<number>("Sergio");
sorteo.setTicket(1);
console.log(sorteo.sortear());

let sorteo_2 = new Sorteo<string>("Valentin");
sorteo_2.setTicket("AA05");
console.log(sorteo_2.sortear())