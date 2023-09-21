// rest  -------->used for pack elements for []{}, mostly used in functions


// function sum(...numbers){
//     console.log(numbers);
//     let sum = 0

//     for(let number of numbers){
//         sum += number
//     }
//     return sum
// }

// console.log(sum(1,2));

// used ...numbers as rest operator
// function sum(...numbers){
//     console.log(numbers);
//     let sum = 0

//     for(let number of numbers){
//         sum += number
//     }
//     return sum
// }

// console.log(sum(1,2));

// const numbers = [3,2,5,7,3,1,2,9]
// console.log(sum(numbers));

// destructuring objects using rest operator

const user = {
    name: "asif",
    city: "karachi",
    country: "pakistan"
}


const { name, ...adress } = user
console.log(name, adress);