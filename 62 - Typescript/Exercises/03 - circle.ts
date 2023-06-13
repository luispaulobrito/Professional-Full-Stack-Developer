// Create a TypeScript class called Circle with the following properties and methods:

// Property: radius of type number
// Method: calculateArea() that calculates and returns the area of the circle (use the formula A = πr^2)

class Circle {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    calculateArea(){
        let area: number = 0;
        return{
            area: Math.PI*(this.radius * this.radius)
        }
    }
}

const Circulo1 = new Circle(10);
console.log(Circulo1);
console.log(Circulo1.calculateArea());
