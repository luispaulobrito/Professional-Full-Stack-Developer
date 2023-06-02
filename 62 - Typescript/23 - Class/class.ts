class Person {
    constructor(
        private id: number,
        private readonly firstName: string,
        private age: number){
    }

    printName(){
        console.log(`You ID and name are ${this.id} and ${this.firstName} and you are ${this.age} years old`);
    }
}

// const luis = new Person(1,'Luis',33);
// luis.printName();

class Cityzen extends Person{

    constructor(id: number, firstName: string, age: number, private ssn: string){
        super(id, firstName, age);
    }
}

// const jhon = new Cityzen(1,'Luis',33, '256546161651');
// console.log(jhon);
    
class Car{

    static MAX_NUM_OF_WHELLS = 6;

    constructor(private make: string, private model: string){
    }

    set setMake(value: string){
        this.make = value;
    }

    
    get getMake(){
        return this.make;
    }

    static carStats(mile: number){
        return{ mileage: mile, type: 'Hybrid' };
    }
}

const acura = new Car('Acura','TL');
// console.log(acura.getMake);
acura.setMake = 'Honda';
// console.log(acura.getMake);
console.log(Car.MAX_NUM_OF_WHELLS);
console.log(Car.carStats(10));


    