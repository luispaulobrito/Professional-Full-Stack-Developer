interface Computador{
    readonly name: string;
    ram: string;
    size?: number;

    connect?(adapter:string): void;
}

let lisa: Computador;

lisa = {
    name: 'Lisa',
    ram: '32G',

    connect(adapter:string): void{
        console.log(`Power ON. Connected to adapter ${adapter}`);
    }
}
