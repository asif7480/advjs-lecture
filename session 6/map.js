const numbers = [2,4,6]

// let multipleOfTwo = numbers.map( (number) => number * 2 )

// console.log(numbers);
// console.log(multipleOfTwo);
// numbers.forEach( (number) => {
//     console.log(number + 1); 
// })

let a = numbers.map( (value, index, array) => {
    console.log(`value of array: ${value}, index of array: ${index}, array is : ${array}`);
    return value * 2
})

console.log(a);