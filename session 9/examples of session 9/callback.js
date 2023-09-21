//A callback function is a function that is passed as an argument in another function.
//This technique allows a function to call another function 

// Example 1

// function callbackFunc(value){
//     console.log(value);
// }

// function functionOne(){
//     callbackFunc("value1")
// }
// function functionTwo(){
//     callbackFunc("value2")
// }


// functionOne()
// functionTwo()
// ---------------------
// Example 2

// const message = () => {
//     console.log("Printed the value after some seconds.");
// }


// setTimeout(message, 2000)

// ---------------------

// Example 3

const arr = [1,2,3,4,5]

const iterateArrayValue = () => {
    arr.forEach( (arr_values) => console.log(arr_values))
}

setTimeout(iterateArrayValue, 1000)
