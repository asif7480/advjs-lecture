// promises
// used for making async tasks, api calls, DB calls, cryptography, network calls 

// example 1
// ------------------------------------------------------
// const promiseOne = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// example 2
// ------------------------------------------------------

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })


// example 3
// ------------------------------------------------------

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Asif", email: "a.a.khan@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// example 4
// ------------------------------------------------------

// let promise = new Promise( (resolve, reject) => {
//     let value = true
//     if(value){
//         console.log("promise called");
//         resolve("promise resolved.")
//     }else{
//         reject("promise reject.")
//     }
// })

// console.log(promise);
// promise
// .then( firstFn)
// .catch( (err) => console.log(`Err: ${err}`))


// example 5
// ------------------------------------------------------

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "asif", password: "123"})
        } else {
            reject('ERROR: kuch to galat hy')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))


