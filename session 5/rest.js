// rest operator
// example
// function add (n1,n2){
//     console.log(n1 + n2);
// }

// add(2,3)
// add(2,3,1)
// add(2,3,4,5)

// using rest operator
// here we use rest operator as an argument in function parameter to accept as many values as input, then rest operator
// will convert those values in an array (object) and we use for in loop to iterate the values of object.
function add(...args){
    let sum = 0 
    for(let i in args){
        sum += args[i]
    }
    console.log(sum);

    // we can also use for of loop to iterate the values of objects
    // for(let i of args){
    //     sum += i;

    // }
    // console.log(sum);
}

add(2,1)
add(2,5,1)
add(2,2,1,1,1)