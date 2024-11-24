let username = "Asif Ahmed Khan";
// length method
let length = username.length
console.log(`Length of string is: ${length}`);

// character at
let charOnIndex = username.charAt(0)
console.log(`On 0 index: ${charOnIndex}`);

// at method
let atIndex = username.at(3)
console.log(`At 3 index value is: ${atIndex}`);

// difference between charAt method and at method in js
// Feature:	            charAt()	     |  at()
// Negative Indices: 	Not supported    |	Supported
// Out-of-Bounds:	    Returns ""	     |  Returns undefined
// Return Type:	        Always a string  |	String or undefined
// Use Case:	        Basic indexing   |	Advanced indexing with negative support

// accessing a particular index
let indexValue = username[2]
console.log(`Value of 2 index is: ${indexValue}`);

// slice method
let slicedString = username.slice(20,5)
console.log(`Slice string is: ${slicedString}`);

// substring method
let substring = username.substring(1,5)
console.log(`SubString value is: ${substring}`);

// Feature:	                slice()	                    | substring()
// Negative Indices:	    Supported	                | Not supported (treated as 0)
// Index Swapping:	        Doesn't swap indices	    | Automatically swaps start and end if start > end
// Out-of-Bounds Handling:	Returns empty string	    | Returns empty string
// Use Case	More versatile: (supports negative indices)	| Simpler, basic use cases

// toUppercase method
let uppercaseStr = username.toUpperCase()
console.log(`Uppercase string is: ${uppercaseStr}`);

// toLowercase method
let lowercaseStr = username.toLowerCase()
console.log(`Uppercase string is: ${lowercaseStr}`);

// string concatination
let lastname = "(Dominator)"
let concatStr = username.concat(" ",lastname)
console.log(`Concat string is: ${concatStr}`);

// trim string
let trimStr = "    I am dominator  "
let normalStr = trimStr.trim()
console.log(`trim to norml string: ${normalStr}`);

// pad start

let value = "a"
let padStr = value.padStart(4,"-")
console.log(`pad start string is: ${padStr}`);
console.log(`pad start string is: ${username.padStart(20, "0")}`);

// pad end

let anothervalue = "a"
let padEnd = value.padStart(4,"-")
console.log(`pad start string is: ${padEnd}`);
console.log(`pad start string is: ${username.padEnd(20, "0")}`);

// repeat string
let repeatedStr = username.repeat(3)
console.log(`Repeated string is: ${repeatedStr}`);

// replace method
let replaceStr = username.replace("Asif", "Kashif")
console.log(`Replaced string is: ${replaceStr}`);

// replace all method
let replaceAllStr = repeatedStr.replaceAll("Asif", "Kashif")
console.log(`string with Replace all string is: ${replaceAllStr}`);

// split method

let usernameInArray = username.split(" ")
console.log(usernameInArray);