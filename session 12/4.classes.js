class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

    getAge = function(){
        const years = new Date().getFullYear() - this.year
        return `${this.title} is ${years} years old`
    }
}

// Instantiate an object
const book1 = new Book("1", "ABC", 2022)
console.log(book1.getSummary());