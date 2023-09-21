let obj = {
    // attributes or properties in object
    name: "A.A.Khan",
    profession: "blockchain engineering",
    contact: 24242125,
    experience: 4,
    languages: ["solidity", "typescript", "rust", "golang", "javascript"],
    // methods in object
    info : function(){
        return `
                Hi, My name is: ${this.name}
                My profession is: ${this.profession}
                My experience in my profession is: ${this.experience}
                My first programming language was ${this.languages[4]}
                Currently I love to work in ${this.languages[0]} programming language.
                `
    }


}

console.log(obj);

console.log(obj.name);
console.log(obj.profession);
console.log(obj.contact);
console.log(obj.experience);

console.log(obj.info());