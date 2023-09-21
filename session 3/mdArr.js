// multiDimensional array is an array which contains array inside an array 
// you can access individual value by first accessing the first value and then the index of another array present inside it.


let mdArr = [1,2,3, ["a", "b", ["i", "ii"]]]

// prints entire md arr
console.log(mdArr);

// accessing single element in that array

console.log(mdArr[3][1]);