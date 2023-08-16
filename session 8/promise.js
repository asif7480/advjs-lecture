// A Promise is a special JavaScript object. It produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, 
// network error, and so on.

// Successful call completions are indicated by the resolve function call, and errors are indicated by the reject function call.

// Example 1

let value = true

let promise = new Promise( function( resolve, reject){
    if(value){
        resolve("Promise resolve")
    }else{
        reject("Promise reject.")
    }
})


promise
.then(function(){
    console.log("printed after resolving a promise. ");
})
.then(function(){
    console.log("printed after .then method ");
})
.catch(function(err){
    console.log(`your error is ${err}`);
})


console.log(promise);