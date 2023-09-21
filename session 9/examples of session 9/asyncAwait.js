// const posts = [
//     { title:  "Title 1", body: "Some random text of title 1"},
//     { title:  "Title 2", body: "Some random text of title 2"}
// ]

// // Example of callback
// // -------------------------------
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach( (post) => {
//             // output += post.title
//             console.log(post.title);

//             // output +=`<li>${post.title}</li>`
//         });
//         // document.body.innerHTML = output;
//         // console.log(output);
//     }, 1000);
// }

// function createPost( post, callback ){
//     setTimeout( () => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// // getPosts()

// createPost({ title: "Title 3", body: "Some random text of title 3"}, getPosts)

// -------------------------------
// Example of promises
// -------------------------------


// const posts = [
//     { title:  "Title 1", body: "Some random text of title 1"},
//     { title:  "Title 2", body: "Some random text of title 2"}
// ]

// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach( (post) => {
//             // output += post.title
//             console.log(post.title);

//             // output +=`<li>${post.title}</li>`
//         });
//         // document.body.innerHTML = output;
//         // console.log(output);
//     }, 1000);
// }

// function createPost( post){
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push(post)
//             const error = false

//             if( !error ){
//                 resolve()
//             }else{
//                 reject("Error: Something went wrong")
//             }
//         }, 2000)
//     }) 

// }

// getPosts()

// createPost({ title: "Title 3", body: "Some random text of title 3"})
// .then(getPosts)
// .catch( (err) => console.log(err))


// -------------------------------
// Example of async await
// -------------------------------


const posts = [
    { title:  "Title 1", body: "Some random text of title 1"},
    { title:  "Title 2", body: "Some random text of title 2"}
]

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach( (post) => {
            // output += post.title
            console.log(post.title);

            // output +=`<li>${post.title}</li>`
        });
        // document.body.innerHTML = output;
        // console.log(output);
    }, 1000);
}

function createPost( post){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post)
            const error = false

            if( !error ){
                resolve()
            }else{
                reject("Error: Something went wrong")
            }
        }, 2000)
    }) 

}
// createPost({ title: "Title 3", body: "Some random text of title 3"})
// .then(getPosts)
// .catch( (err) => console.log(err))

async function init(){
   await createPost({ title: "Title 3", body: "Some random text of title 3"})

    getPosts()
}

init()