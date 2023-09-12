// callback hell

function firstFn(callback){
    setTimeout( () => {
        console.log("first function called after 1 seconds.");
        callback()
    }, 1000)
}

function secondFn(callback){
    setTimeout( () => {
        console.log("Second function called after 2 seconds.");
        callback()
    }, 2000)
}
function thirdFn(callback){
    setTimeout( () => {
        console.log("Third function called after 3 seconds.");
        callback()
    }, 3000)
}

function fourthFn(callback){
    setTimeout( ()=> {
        console.log("Fourth function called after 4 seconds");
        callback()
    }, 4000)
}

function fifthFn(){
    setTimeout( () => {
        console.log("Fifth function called at once");
    })
}


firstFn(function(){
    secondFn(function(){
        thirdFn(function(){
            fourthFn(function(){
                fifthFn()
            })
        })
    })
})