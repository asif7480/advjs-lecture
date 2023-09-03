const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//foreach
// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }

//foreach
// companies.forEach((company) => {
//     console.log(company.name);
// })

// ages.forEach((age) => {
//     console.log(`${age}`);
// })


// filteration with for loop

// let canDrive = []

// for(let i=0; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrive.push(ages[i])
//     }
// }

// console.log(canDrive);

// filteration using filter method

// let canDrive = ages.filter( (age) => {
//     if(age >= 21){
//         return true
//     }
// })

// let canDrive = ages.filter( (age) => age >= 21)

// console.log(canDrive);

// second example

// filter company detail

// example 1
// let retailCompanies = companies.filter( (company) => company.category === "Retail")

// console.log(retailCompanies);


// // example 2
// let eightiesCompanies = companies.filter( (company) => company.start >= 1980 && company.start <= 1990)

// console.log(eightiesCompanies);

// // example 3
// let lastedTenYears = companies.filter( (company) => company.end-company.start >= 10)

// console.log(lastedTenYears);

// map method

// example 1
// create array of company name

// let companyNames = companies.map( (company) => company.name)

// console.log(companyNames);

// sort method

// example 1
// let sortedCompanies = companies.sort( (a, b) => {
//     if(a.start > b.start){
//         return 1
//     }else{
//         return -1
//     }
// } )

// let sortedCompanies = companies.sort( (a,b) => a.start > b.start ? 1 : -1)

// console.log(sortedCompanies);

// example 2

// let sortAges = ages.sort((a,b) => a - b)
// console.log(sortAges);

// let sumAges = 0;

// for(let i=0; i<=ages[i]; i++){
//     sumAges += ages[i]
// }

// console.log(sumAges);
let ageSum = ages.reduce( (total, age) => {
   return  total + age
}, 0)

console.log(ageSum);