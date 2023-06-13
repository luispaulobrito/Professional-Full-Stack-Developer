interface Calculate{
    (number1: number, number2: number): number;
}

let cal: Calculate;

cal = (a:number, b:number) => {
    return a+b;
}

console.log(cal(10,5));
