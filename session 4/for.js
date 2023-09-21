console.log("printing hello world five time");
for(let i=1; i<= 5; i++){
    console.log("hello world");
}

console.log("printing 1 to 10 numbers with for loop");
for(let i=1; i<=10; i++){
    console.log(i);
}

console.log("printing numbers in descending order");
for(let i=5; i>=0; i--){
    console.log(i);
}


console.log("nested loop");

for(let i=1; i<=5; i++){
    console.log("outer loop start");
    console.log(i);
    console.log("---------------------");
    console.log("inner loop start");
    for(let j=0; j<=5; j++){

        console.log(j);
    }
}

console.log("Looping array values using for loop");


let arr = [1,2,3,4]

for(let i=0; i<arr[i]; i++){
    console.log(arr[i]);
}