//Loops

//For loop
for(let count = 1; count <= 1000; count++){
    console.log("Welcome to Code with Karan");
}
console.log("Loop has ended.");


for(let i = 1; i <= 5; i++){
    console.log("i = ",i);
}
console.log("Loop has ended.");




//Calculate sum of 1 to n
let sum = 0;
let n = prompt("Enter number:");
for (let i=0; i<=n; i++) {
    sum = sum + i;
}
console.log("sum = ",sum);





//While Loop
let i = 1;
while(i<=5){
    console.log("i = ",i);
    i++;
}



// Do-While loop
let j = 20;
do{
    console.log("Welcome to Code with Karan!");
    j++;
}
while(j<=10);

let k = 1;
do{
    console.log("k = ",k);
    k++;
}
while(k<=5);







//For-of loop
let str = "Javascript";
let size = 0;
for(let i/*generally "val" is used instead of "i"*/ of str){
    //iterator -> characters
    //here the iterator is "i".
    console.log("i = ",i);
    size++;
}
console.log("String size = ",size);



//For-in loop

let student={
    name: "Karan Patel",
    age: 18,
    cgpa: 7.5,
    isPass: true,
};
for(let key in student){
    console.log("key = ",key,"value = ",student[key]);
}
