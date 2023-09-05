console.log("connected");

console.log(document.getElementById("idExample"));
// console.log(document.getElementById("idExample").innerText);

console.log("-------------------------------");

console.log(document.getElementsByClassName("classExample"));

console.log("-------------------------------");

console.log(document.getElementsByTagName("p"));

console.log("-------------------------------");

console.log(document.querySelector("#idExample"));
console.log(document.querySelector(".classExample"));
console.log(document.querySelectorAll(".classExample"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));


// adding data using dom

let value = document.getElementById("idExample")
// value.innerHTML = "<h1>text coming from js file.</h1>"
// value.innerText = "<h1>text coming from js file.</h1>"

// value.style.backgroundColor = 'black'
// value.style.color = 'red'
// value.style.padding = '16px'
// value.style.fontSize = '14px'

// basic text format change program

let inputValue = document.getElementById("input").value
let output = inputValue

alert(output)