// simple array
// let user = ["asif", 22, "karachi"]
// destructuring array
// let [name, age =21, city] = user

// console.log(name);
// console.log(age);
// console.log(city);

// destructuring multi dimensional array
// let user = ["asif", 22, "karachi", ["Male", 25000]]
// let [name, age, city, [gender, salary]] = user

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);

// using rest operator in destructuring
// let user = ["asif", 22, "karachi"]
// let [name, ...args] = user

// console.log(name);
// console.log(...args);

// destructuring array in function parameter
// function user([name, age, city]){
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }


// user(["ali", 18, "lahore"])
// user(["aslam", 22, "karachi"])

// assigning function in destructure values of array

function user(){
    return ["Asif", 23, "karachi"]
}

let [name, age, city] = user()
console.log(name, age, city);