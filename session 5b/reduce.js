let arr = [1, 5, 2]

let reduceArr = arr.reduce( (preValue, currValue) => {
    return preValue + currValue -1 
})

console.log(reduceArr);

