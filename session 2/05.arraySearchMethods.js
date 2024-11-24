let months = ["jan", "feb", "mar", "apr", "may", "june", "july", "feb"]

// indexOf // returns index
let indexValue = months.indexOf("feb")
console.log(indexValue);

// lastIndexOf
console.log(months.lastIndexOf("feb"));

// includes
console.log(months.includes("june"));

// find // returns a value

let value = months.find( (month) => month === "july")
console.log(value);

let numbers = [1,2,3,4,6,7]

let val = numbers.find( (val) => val > 5)
console.log(val);

// findIndex // returns index of found value

let friends = ["Kashif", "xyz", "Abdul Wahab", "Ali"]

let friendIndex = friends.findIndex( (friend) => friend === "xyz")
console.log(friendIndex);

// findLast
let temperatures = [30, 35, 34, 36, 39, 30, 28]

let temp = temperatures.findLast((val) => val < 39)
console.log(temp);


// findLastIndex
let anotherTemperatures = [30, 35, 34, 36, 39, 30, 28]

let tempIndex = anotherTemperatures.findLastIndex((val) => val < 39)
console.log(tempIndex);