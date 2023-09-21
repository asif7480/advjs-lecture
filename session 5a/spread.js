// function add(name, ...args){
// /,/     let sum = 0;
//     for(let i of args){
//         sum += i
//     }

//     console.log(name);
//     (sum!=0)?console.log(sum): console.log("no numeric value inputted in function"); 
// }

// // let arr = [1,2,3]
// let arr = [1,2,3]
// // here we use spread operator in function to unpack array values in function parameter
// add("asif", ...arr)

// second example
// let arr1 = [2,4,6,8,10]
// let arr2 = [20, 10]
// console.log(2,3,...arr2, ...arr1,32);

// third example
let obj1 = {
    name: "asif"
}

let obj2 = {
    email: "a.a.khan"
}

let obj3 = {...obj1, ...obj2}
console.log(obj3);