abstract class Animal{
    constructor(private name: string){}

    abstract printSound(sound: string): void;
}

class Dog extends Animal{
    printSound(){
        console.log('Bark');
    }
}

const caramelo = new Dog('Caramelo');
caramelo.printSound();
console.log(caramelo);
