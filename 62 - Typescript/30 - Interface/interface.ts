interface Computer{
    name: string;
    ram: string;
    size: number;

    connect(adapter:string): void;
}

let latitude: Computer;

latitude = {
    name: 'Latitude',
    ram: '32G',
    size: 15,

    connect(adapter:string): void{
        console.log(`Power ON. Connected to adapter ${adapter}`);
    }
}

latitude.connect('Adapter 1')
console.log(latitude);

interface HttpConnection{
    createConnection(url: string):void;
}

class MakeConnection implements HttpConnection{
    private headers: string[];
    private body: string;
    
    constructor(headers: string[], body: string){
        this.headers = headers;
        this.body = body;
    }

    createConnection(url: string): void {
        console.log(`Connection created to ${url}`);
    }
}

interface Patient{
    name: string;
}

interface Client extends Patient{
    rating: number;
}

class Tenant implements Client{
    rating: number;
    name: string;
    
    constructor(rating: number, name: string){
        this.rating = rating;
        this.name = name;
    }
}