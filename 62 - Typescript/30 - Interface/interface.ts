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
