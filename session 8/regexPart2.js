const myStr = 'colo+r'
const myStr2 = 'abcf'
// * = 0 or more
// + = 1 or more
// ? = 0 or 1
// {n} exactly n number of times
// {n,z} from n to z number of times
// [0-9]  any number between 0 to 9, we can also short form i.e \d
// [a-z]  any number between a to z
// [A-Z]  any number between A to Z
// [0-9a-zA-Z-_] any number from 0 to 9 or alphabet from a to z or A to Z or any symbol such as +&-_ etc
// [\d] any digit from 0 to 9 i.e [0-9]
// [\w] any word from a to z or A to Z or 0 to 9 or _ i.e [0-9a-zA-Z_]
// [\W] alternate of \w
// [^a-e] used as a negation and cannot accept from a to e
 

// const regex = /colo{2,4}r/
// const regex = /colo[\d+]r/
const regex = /abc[^a-e]?/
const test = regex.test(myStr2)
console.log(test);