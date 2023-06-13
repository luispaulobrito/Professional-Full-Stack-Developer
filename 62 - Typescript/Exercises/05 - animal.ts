class AnimalExercico {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    makeSound(sound: string){
        console.log(`The animal ${this.name} makes ${sound}`);
    }
}

const coelho = new AnimalExercico("coelho");
console.log(coelho);
console.log(coelho.makeSound('Guen!'));

