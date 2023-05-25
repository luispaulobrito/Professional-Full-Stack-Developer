function add(a:number, b:number) {
    return a+b; 
}
console.log(add(9,8));

let multiply = (a:number, b:number) => a*b;
console.log(multiply(2,8));

let div = (a:number, b:number) : number => {
    return a/b;
}
console.log(div(9,2));

function formatName(name:string, lastName?:string): string { //com o ? nós definimos que o parâmetro é opcional
    return `${name} ${lastName}`;
}
console.log(formatName('Luis Paulo', 'Lima de Brito'));
console.log(formatName('José'));

function formatName2(name:string, lastName = 'Unknown'){ 
    return `${name} ${lastName}`;
}
console.log(formatName2('Luis Paulo', 'Lima de Brito'));
console.log(formatName2('José'));

function printNames(name:string, ...allTheRest: string[]) {
    return name + ' ' + allTheRest.join(' ');
}

console.log(printNames('Luis', 'Lima', 'Pedro', 'José'));


