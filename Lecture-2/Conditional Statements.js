//Conditional Statements


// 1
let age = 18;
if (age >= 18) {
    console.log("You can vote");
}
if(age<18){
    console.log("You CANNOT vote");
}


// 2
let mode = "pink";
let color;

if(mode === 'dark'){
    color = "black";
}
else if (mode ==="blue"){
    color = "blue";
}
else if(mode === "pink"){
    color = "pink";
}
else{
    color = "white";
}
console.log(color);




// 3
mode = "dark";
if(mode === "dark") console.log(mode);



// 4 (Ternary operator)
age = 18
console.log(age>=18 ? "Adult" : "Still Minor");
// If age is greater or equal to 18 then print Adult or else print Still Minor.



//MDA Docs
// Switch Statement