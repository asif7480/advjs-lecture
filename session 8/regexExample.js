// requirement xxxx-xxxxxxx
// const contact = '0321-1234567'
const contact = '+92321-1234567'
// * = 0 or more
// + = 1 or more
// ? = 0 or 1

// const regex = /^\d{4}\d{7}$/
const regex = /^(\+92|0)\d{3}-?\d{7}$/
const result = regex.test(contact)
console.log(result);