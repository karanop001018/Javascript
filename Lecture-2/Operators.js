// comments
// console.log("Hello World")


//Operators
let a = 36;
let b = 63;
let c = a + b;
console.log(c);
a++;
console.log(a)
b--;
console.log(b);


// Arithmetic Operators
let x = 100;
let y = 2;
console.log("x=", x, "&y=", y);
console.log("x + y = ",x+y);
console.log("x - y = ",x-y);
console.log("x * y = ",x*y);
console.log("x / y = ",x/y);
console.log("x % y = ",x%y);
console.log("x ** y = ",x**y);


//Unary Operator
let z = 60;
let w = 80;
console.log("x=", x, "&y=", y);
w++;
console.log("w = ",w);
z--;
console.log("z = ",z);
console.log("z++ = ",z++);
console.log("z = ",z);
console.log("--w = ",--w);
console.log("w = ",w);




//Assignment Operator (=, +=, -=, *=, %=, **=)
let q = 5;
let e = 6;

q = 4;
console.log("q = ",q);
q += 4;
console.log("q = ",q);
q -= 4;
console.log("q = ",q);
q *= 4;
console.log("q = ",q);
q %= 4;
console.log("q = ",q);
q **= 4;
console.log("q = ",q);





//Comparision Operators (==, !=, ===, !==, >, >=, <, <=)
let s = 55;
let t = 37;
console.log("s==t is ",s==t);
console.log("s!=t is ",s!=t);
console.log("s===t is ",s===t); //It is a strict version of == i.e., s and t must be of same datatypes. It s is int and t is string then it will give false.
console.log("s!==t is ",s!==t);
console.log("s>t is ",s>t);
console.log("s<t is ",s<t);
console.log("s>t is ",s>t);
console.log("s<=t is ",s<=t);
console.log("s>=t is ",s>=t);






//Logical Operators (&&, ||, !)
let k = 3;
let p = 6;
let cond1 = k>p;
let cond2 = k===3;
console.log("cond1 && cond2 is ",cond1 && cond2); //true if both are true
console.log("cond1 || cond2 is ",cond1 || cond2); //true if any one is true
console.log("!(cond1 < cond2) is ",!(k < p));
console.log("!(cond1 === cond2) is ",!(k === 3));
console.log("!(cond1 !== cond2) is ",!(k !== 3));