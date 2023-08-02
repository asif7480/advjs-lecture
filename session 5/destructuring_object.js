// simple object
let user = {
    name: "asif",
    age: 25,
    city: "karachi"
}

// destructuring object
 let { name, age, city } = user
// for destructuring object variable name must be same as property name

console.log(name);
console.log(age);
console.log(city);

// using aliases as name of destructure object value
let { name: n, age: a, city: c} = user
console.log(n, c, a);