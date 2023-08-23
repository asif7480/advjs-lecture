const book1 = {
    title: "Transformers",
    author: "ABC",
    year: 2023,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book2 = {
    title: "Superman",
    author: "DEF",
    year: 2021,
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

console.log(book1.getSummary());
console.log(book2.getSummary());
// see all the values of object
// console.log(Object.values(book2));
// console.log(Object.keys(book2));