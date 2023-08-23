class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}

class Magzine extends Book {
    constructor(title, author, year, month){
        super(title, author, year)
        this.month = month
    }
}

const magzine1 = new Magzine("Transformers", "ABC", 2022, 5)
// console.log(magzine1);
console.log(magzine1.getSummary());