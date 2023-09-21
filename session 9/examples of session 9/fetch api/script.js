const main = document.getElementById("main")

const dataFromApi = fetch('https://jsonplaceholder.typicode.com/posts')
// console.log(dataFromApi);
// dataFromApi.then( response => console.log(response))

// dataFromApi.then( (response) => {
//     return response.json()
// }).then(people => {
//         console.log(people);
// })

dataFromApi.then( (response) => {
    return response.json()
}).then(people => {
    const names = people.map(person => person.title)
    console.log(names);  
}).catch(function(err){
    console.log(err);
})