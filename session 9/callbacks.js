// basic example of callback

// synchronous programming
function one(){
    console.log("one");
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}

// asynchronous programming

// callbacks

function one(){
    setTimeout( () => {
        console.log("one");        
    },3000)

}
function two(){
    setTimeout(() => {
        console.log("two");
    }, 2000);
}
function three(){
    setTimeout(() => {
        console.log("three");        
    }, 1000);

}

one()
two()
three()
