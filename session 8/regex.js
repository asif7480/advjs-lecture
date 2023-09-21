//what is regular expression
//regular expression is a thing that mostly works with strings and you can take any value from that string.
// regular expression is case sensitive.

// example
// const myStr = 'Hellooskgsjdkgb world'
// const myStr2 = 'Hello'
// const myStr3 = 'xtest123tt4325'
// const myRegex = /worldd$/  //matches that string must end with world
// const myRegex = /^Hello/   //matches that string must start with Hello

// const myRegex = /test123/ //matches that the string must start with and end with hello

// $ symbol is used to amtch the ending value of input string  
// ^ symbol is used to match the starting value of input string
// const result = myRegex.test(myStr)
// const result = myRegex.test(myStr3)
// console.log(result );


// repeating pattrens in regex
// operators
// Repeating operator * = 0 or more e.g: fl, fol ,fooool
// Repeating operaotr + = 1 or more e.g: fol, fool, fooool but not fl etc  
// zero or one ? = 0 or 1 e.g: colour, color but not colouur, coloxr  
// any thing . = anything must be present e.g: colo.r means colo must be present rest can be anything. i.e colo1r, colourxr but not repeating values colo11r
// anything can be present or cannot be present .* = repeated or nothing e.g: coloruuuuur, color

const value = 'colou2r '
// const myRegexVar = /fo*l/
// const myRegexVar = /fo+l/
const myRegexVar = /colou.r/

const output = myRegexVar.test(value)
console.log(output);