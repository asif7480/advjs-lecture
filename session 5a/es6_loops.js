// looping an array using traditional for loop
let arr = [2, 4, 6, 8]
// for(let i=0; i<=arr.length; i++){
//     console.log(arr[i]);
// }

// using foreach method to iterate array
// arr.forEach( (element) => {
//     console.log(element * element);
// })

// for of loop is a shortcut version of for loop to access array items.
// for(let i of arr){
//     console.log(i);
// }


// for in loop is used to iterate the keys of objects or index values of array
for(let i in arr){
    console.log(i);
    // for iterating values of keys in object or values of array 
    console.log(arr[i]);
}