// Q1: We are given array of marks of students. Filter out the marks of students  that scored 90+.

// let marks = [68,99,100,44,88,91,56,93,78];
// let newMarks = marks.filter((val) => {
//     return val>90;
// })
// console.log(newMarks);




// Q2: Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce method to calculate sum of all numbers in array.
//Use the reduce method to calculate product of all numbers in array.


// Take a number n as input from user. Create an array of numbers from 1 to n.
let n = prompt("Enter a number: ");
let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);

//Use the reduce method to calculate sum of all numbers in array.
let sum = arr.reduce((result,current) => {
    return result + current;
})
console.log(sum);

//Use the reduce method to calculate product(factorial) of all numbers in array.
let factorial = arr.reduce((result, current) => {
    return result*current;
})
console.log(factorial);





