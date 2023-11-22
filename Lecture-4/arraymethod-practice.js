// Q1: Create an array to store companies- "Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"
// a) Remove the first company from the array
// b) Remove Uber and add Ola in its place
// c) Add Amazon at the end

//SOLUTION:-----

// a) Remove the first company from the array

// let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(0,1);
//or
//companies.shift();
// console.log(companies);



// b) Remove Uber and add Ola in its place

// let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(2,1,"Ola");
// console.log(companies);



// c) Add Amazon at the end

let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(6,0,"Amazon");
//or
companies.push("Amazon");
console.log(companies);




