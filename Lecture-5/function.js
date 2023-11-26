// Functions : Block of code that performs a specific task, can be invoked whenever needed.
//Functions reduce redundancy(repeatition) in a code i.e., coding habit

function myFunction(){
    console.log("Welcome to Code with Karan!!");
    console.log("We are learning JS");
}
myFunction();


// In function definition the variable is called parameter and in function call the variable is called argument.
function welcome(msg,n){
    //parameter -> input
    console.log(msg,n);
    // console.log(msg*n); //It gives NaN(NOT A NUMBER)because it's Invalid.
}
welcome("Welcome to Javascript Tutorial!!",5); // Argument




// sum of 2 numbers
function sum(a,b){
    console.log(a+b);
    // console.log(a-b);
    // console.log(a*b);
    // console.log(a/b);
}
sum(36,63);


function add(x,y){
    // parameters are local variables(x,y) with block scope i.e., applicable within the curly braces.
    s = x+y;
    return s; // any code after return statement will never execute.
}
// add(3,4); //doesn't print
let val = add(3,4);
console.log(val);


const arrowSum = (d,e)=>{
    console.log(d+e);
};
arrowSum(40,60);
console.log(arrowSum);
