// Q1 Get user to input number using prompt.Check if the number is a multiple of 5 or not.

let a = prompt("Enter a number:");
if(a%5 === 0){
    console.log(`${a} is a multiple of 5`);
}
else{
    console.log(`${a} is not a multiple of 5`);
}


//Q2 Write a code which can give grades to students according to their scores:
// 80-100 : A
// 70-79 : B
// 60-69 : C
// 50-59 : D
// 0-49 : F




let marks = prompt("Enter your marks:");
if(marks>=80 && marks<=100){
    console.log("Your grade is A");
}
else if (marks >=70 && marks < 80){
    console.log("Your grade is B");
}
else if(marks>=60 && marks<70){
    console.log("Your grade is C");
}
else if(marks>=50 && marks<60){
    console.log("Your grade is D")
}
else if(marks===0 && marks<50){
    console.log("You failed! Your grade is F");
}
else{
    console.log("Invalid Marks!");
}