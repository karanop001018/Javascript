// first program
console.log("Welcome to Code with Karan");
console.log("Become a Python Developer");



// Variables
name = "Tony Stark";
age = 45;
price = 55.45
console.log("name");
console.log(age);
console.log(price);
console.log(name);
x = null;
y = undefined;
console.log(x)
console.log(y)
isFollow = true;
console.log(isFollow)
a = 36
b = 63
console.log(a, b)
// a = b
// console.log(a, b)
b = a
console.log(a, b)






// Keywords 

// Generally used keywords (var, let and const): If we not use these keywords then also it's fine but as a good programmer we should use any one of the keywords when declaring something.
//  let : Variable cannot be redeclared and updated. A block of scope variable.
//  var : Variable can be re-declared and updated. A global scope variable.
//  const: Variable cannot be re-declared or updated. A block scope variable.


// let Keyword : not re-declared but can be updated
let myName = "Karan Patel";
console.log(myName);
myName = "Omkar"
console.log(myName);

// var Keyword : can be re-declared and update
var age= 18;
console.log(age);
var age = 20;
console.log(age);

// const : can't be re-declared or update
const rice = 99.99;
console.log(rice);
// this will give error 
// rice = 77.77;
// console.log(rice);

// undefined
let kp;
console.log(kp); // undefined by default
// But if we use it in const keyword it will give error
let pk = null;
console.log(pk)














// DataTypes
// Primitive DataTypes : Number, String, Boolean, Undefined, Null, BigInt, Symbol
let z = 24;
let w = 100.5;
let d = "Karan Patel";
let c = false;
let v = undefined;
console.log(typeof z,typeof w,typeof d,typeof c, typeof v);


// BigInt
let s = BigInt('123');
console.log(s);
let m = Symbol('Hello Karan!');
console.log(m);








// Non-primative DataTypes: Objects (array, function)
// Objects: collection of values.

const student = {
    fullname : "Karan Patel",
    cgpa : 8.6,
    isPass : true
}
console.log(student);
console.log(typeof student);
console.log(student["cgpa"]);
console.log(student.fullname); //we can use any of the given methods to access the keys in given object.

//  we can change object's key values even if there is a const keyword before it.(In-short: only can update key of an object even there is const keyword used)
student['cgpa'] = student['cgpa'] + 1;
console.log(student);
console.log(student.cgpa);