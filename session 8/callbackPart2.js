// Example 1

// let data = []

// const first = () => {
//         data = ["apple", "banana", "mango"]
//         console.log("first function");
// }

// const second = () => {
//     console.log(data);
//     console.log("second function");
// }


// first()
// second()

// ------------------------------------
// Example 2

// let data = []

// const first = () => {
//     setTimeout( () => {
//         data = ["apple", "banana", "mango"]
//         console.log("first function");
//     }, 1000)
// }

// const second = () => {
//     console.log(data);
//     console.log("second function");
// }


// first()
// second()

// ------------------------------------
// Example 3

// function fetchApi (){
//     setTimeout(() => {
//         console.log("backend function");
//     }, 1000);
// }

// function frontend(){
//     console.log("frontend function");
// }


// fetchApi()
// frontend()

// ------------------------------------
// Example 4

function fetchApi (callback){
    setTimeout(() => {
        console.log("backend function");
        callback()
    }, 1000);
}

function frontend(){
    console.log("frontend function");
}

fetchApi(frontend)
// fetchApi( () =>{ console.log("frontend function") })

// ------------------------------------
// Example 5

//solving this problem using callbacks
// let data = []

// const first = (fn) => {
//     setTimeout( () => {
//         data = ["apple", "banana", "mango"]
//         console.log("first function");
//         fn()
//     }, 1000)
// }

// const second = () => {
//     console.log(data);
//     console.log("second function");
// }


// first(second)

// ------------------------------------
// Example 6

// accessing variables of second function

// const first = (fn) => {
//     let secondFnVar = "Variable of second function"
//     setTimeout( () => {
//         console.log("first function");
//         fn(secondFnVar)
//     }, 1000)
// }

// const second = (valueOfThisFn) => {
//     console.log(valueOfThisFn);
//     console.log("second function");
// }

// first(second)

