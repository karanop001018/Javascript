// Q1: For a given array with marks of students [85,97,44,37,76,60]. Find the average marks of entire class.

// METHOD-1
/*
let marks = [85,97,44,37,76,60];
let totalMarks = (marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5]);
let avgMarks = totalMarks / (marks.length);
console.log(avgMarks);
*/

//METHOD-2
let marks = [85,97,44,37,76,60];
let sum = 0;

for(let val of marks){
    sum += val;
}
let avg = sum/marks.length;
console.log(`Average marks of the class = ${avg}`);







// Q2: For a given array with prices of 5 items [250,645,300,900,50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//METHOD-1
// let items = [250,645,300,900,50];
// let i=0;
// for(let val of items){
//     console.log(`Original price at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`Price after offer = ${items[i]}`);
//     i++;
// }
// console.log(items);


//METHOD-2
let items = [250,645,300,900,50];
let i=0;
for(let i =0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);