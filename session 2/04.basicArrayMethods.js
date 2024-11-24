let values = [1,2,3,4];

// length
let length = values.length // return number
console.log(length);

// toString
let arrToStr = values.toString() // returns string
console.log(arrToStr);

// push: adds new element in last index of array
// return length of array after adding new value
values.push(2) 
console.log(values);

// pop: removes element from last index of array
// return element that is remove from array
values.pop()
console.log(values);

// unshift: adds one element from the start index of array
values.unshift(12)
console.log(values);

// shift: removes one element from the start index of array
values.shift()
console.log(values);

// concat
let names = ["abc", "def"]
let concatArr = values.concat(names) 
console.log(concatArr);

// flat 
let myArr = [[1,2], [3,5], [7,4]]
let simpleArr = myArr.flat()
console.log(simpleArr);

// flatmap
let arr2 = [2,3, 2, 5]
let newArr2 = arr2.flatMap( (x) => [x, x*2])
console.log(newArr2);

// slice
let fruits = ["mango", "cherry", "banana", "orange", "apple"]
let sliceArr = fruits.slice(0,3) // starts from 0 and slice till 1 index. 2 is exclusive.
console.log(fruits);
console.log(sliceArr);

// splice
let months = ["Jan", "Feb", "Mar", "Apr", "june", "july", "august"]
// splice(start, deleteCountValue, newValue1, newValue2, newValue3)
let spliceMonths = months.splice(2,2, "newValue1", "newValue2")
console.log(months);
console.log(spliceMonths);

// toString
console.log(values.toString());

// join
console.log(values.join("-"));


// at
let arrValue = values.at(2)
console.log(arrValue);