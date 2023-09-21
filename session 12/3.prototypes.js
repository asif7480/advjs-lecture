// Constructor
function Book(title, author, year){
    this.title = title,
    this.author = author,
    this.year = year

}
    // this.getSummary= function(){
    //     return `${this.title} was written by ${this.author} in ${this.year}`
    // }

// get summary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

// get age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}

// Instantiate an object
const book1 = new Book("1", "abc", 2022)
const book2 = new Book("2", "def", 2021)

console.log(book1.getSummary());
console.log(book1.getAge());