// Some more Array Methods

// MAP Method : Syntax : arr.map(callbackFnx(value,index,array))
//While using map we generally use value we rarely use index and array as per above given syntax.

// let nums = [36,63,112,113];

// nums.map((val)=>{
//     console.log(val);
// });


//We can also create new array containing the same values of the original array using Map Method.

// let num = [22,66,44,58,55,76,842,85,5,14];
// let newArr = num.map((val) => {
//     return val;
// })
// console.log(newArr); 

// Original array : num = [22,66,44,58,55,76,842,85,5,14];
// New Array : newArr = [22,66,44,58,55,76,842,85,5,14];


// let num = [22,66,44,58,55,76,842,85,5,14];
// let newArr = num.map((val) => {
//     return (val*val); //Square values of original array numbers in new array
// })
// console.log(newArr); 










//Filter Method : Creates a new array of elements that give true for a condition/filter.
//Example :
// let newArr = arr.filter((val) => {
//     return val%2 === 0;
// })


// let array = [22,55,44,11,33,66,77,99,88];
// let evenArray = array.filter((val) => {
//     return val%2 === 0;
// })
// console.log(evenArray);








//Reduce Method : Performs some operations & reduces the  array to a single value.It returns that single value.

let numbers = [1,2,3,5,4];
const output = numbers.reduce((result,current) => {
    return result + current;
})
console.log(output);




