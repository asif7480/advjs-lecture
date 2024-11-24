let text = "this is just an example text and it is just simple";

// indexOf method
console.log(text.indexOf("just"));

// lastIndexOf method
console.log(text.lastIndexOf("just"));

// search method
console.log(text.search("example"));

// Feature	                        indexOf()	                    | search()
// Supports Regex:	                No	                            | Yes
// Case Sensitivity:	            Always case-sensitive	        | Case-sensitive unless regex i flag is used
// Search Start:	                Can specify a starting index	| Always searches from the beginning
// Use Case:	                    Simple substring searches	    | Advanced searches with patterns
// Return Value:	                Index of first occurrence or -1	| Index of first match or -1

// match method

// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

console.log(text.match("just"));
console.log(text.match(/just/));
console.log(text.match(/just/g));

// matchAll
let matchAllValue = text.matchAll(/just/g)
console.log(Array.from(matchAllValue));

// include
console.log(text.includes("example")); // returns boolean value

// startsWith
console.log(text.startsWith("this"));  // return boolean value and it is caseSensitive

// endsWith
console.log(text.endsWith("this"));  // return boolean value and it is caseSensitive
