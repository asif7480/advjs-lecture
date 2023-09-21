// spread -----> used for unpacks elements for []{}


// copying elements of array using spread operator

// const numbers = [1,2,3]
// const newNumbers = [...numbers]

// console.log(newNumbers);

// merging two arrays using spread operator
// const arr1 = [1,3,5]
// const arr2 = [2,4,6]

// const arr3 = [...arr1, ...arr2]
// console.log(arr3);

// compose array

// const oldNumber = [3,2,7]
// const newNumber = [9,5,4]

// const composedArray = [100, ...oldNumber, 3,...newNumber, 350]
// console.log(composedArray);

// working with string


// const channel = "codeWithAsif"
// console.log([...channel]);

// working with object 

// clone (shallow)-------> copy nested objects or array in another array
// copying one object value from one object to another object
const order = {
    id: 1,
    date: '1/2/2023',
    customerName: "abc",
    items: ["apple", "orange", "mango"]
}

const updatedOrder = {
    ...order
}

order.items.push("banana")
console.log(updatedOrder);


// merge two objects using spread operator

const user = {
    name: "asif",
    city: "dubai"
}

const address = {
    street: 'main-street'
}

const newUser = { ...user, ...address}
console.log(newUser);