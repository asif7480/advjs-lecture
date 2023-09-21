// OOP: Object Oriented Progrmming


// Object
// -collection of properties and methods
// e.g: toLowerCase

// Parts of OOP
// -Object literal
// Constructor functions
// Prototypes
// Classes
// Instances (new, this)

// 4 Pillars of OOP
// -Abstraction
// -Encapsulation
// -Inheritance
// -Polymorphism

// object literal before classes and objects

const user = {
    username: "ABC",
    login: true,
    Account: 1,

    getUserDetails: function(){
        console.log(`Got user details of ${this.username}`);
        // console.log(this);
    }
}


console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function
// Allows to create muliple object with a single object literal

// e.g
// const promise = new Promise()

function User(username, login, account){
    this.username = username,
    this.login = login,
    this.account = account

    // return this
}
// -when you use a new keyword then firstly an empty object is created which is called instance
const user1 = new User("Abc", true, 2)
const user2 = new User("def", true, 3)
console.log(user1);