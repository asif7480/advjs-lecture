let numericValue = 1234.232;

console.log(numericValue);

// toString method
let numToStr = numericValue.toString()
// console.log(numericValue.toString());
console.log(numToStr);

// toExponential method
// toExponential() returns a string, with a number rounded and written using exponential notation.

console.log(numericValue.toExponential());
console.log(numericValue.toExponential(1));
console.log(numericValue.toExponential(3));
console.log(numericValue.toExponential(8));

// toFixed method
console.log(numericValue.toFixed());
console.log(numericValue.toFixed(2));
console.log(numericValue.toFixed(1));
console.log(numericValue.toFixed(5));

// toPrecision
console.log(numericValue.toPrecision());
console.log(numericValue.toPrecision(2));
console.log(numericValue.toPrecision(5));

// toLocaleString
console.log(numericValue.toLocaleString());







