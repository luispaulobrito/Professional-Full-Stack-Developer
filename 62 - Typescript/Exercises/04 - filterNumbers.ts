function filterNumbers(numbers:number[]) {
    let evens = []
    let odd = []
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index]%2==0) {
            evens.push(numbers[index])
        }else{
            odd.push(numbers[index])
        }
    }
    return{
        evens: evens,
        odd: odd
    }
}

console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
