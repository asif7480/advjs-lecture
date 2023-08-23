// Constructor
function Book(title, author, year){
    this.title = title,
    this.author = author,
    this.year = year,
    this.getSummary= function(){
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// Instantiate an object
const book1 = new Book("1", "abc", 2022)
const book2 = new Book("2", "def", 2021)

console.log(book1.author);