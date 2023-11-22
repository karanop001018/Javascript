/*NOTE:
\n : next line
\t : tab space*/

// Strings

let str = "Welcome to Code with Karan";
let str1 = "Karan Patel";
console.log(str.length);
console.log(str1.length);
console.log(str1[0])
console.log(str1[1])
console.log(str1[2])
console.log(str1[3])
console.log(str1[4])
console.log(str1[5])
console.log(str1[6])
console.log(str1[7])
console.log(str1[8])
console.log(str1[9])
console.log(str1[10])



let obj={
    item:"pen",
    price:10,
};
console.log("The cost of",obj.item,"is",obj.price);


// Templete Literals
let a=36;
let b=63;
let c=a+b;
console.log(`Sum of ${a} and ${b} is ${c}.`) // To print text in output.

let specialString = `This is a templete literal`;
console.log(specialString);





//String methods
let s = "karan patel"
console.log(s);
console.log(s.toUpperCase());
let t = "WELCOME TO CODE WITH KARAN"
console.log(t);
console.log(t.toLowerCase());
let r = "     Hi my name is Karan Patel        ";
console.log(r);
console.log(r.trim()); //removes whitespaces(remove space from front and back)

//slice
let i = "abcdefgh";
console.log(i.slice(2,5)); //Ending value is non inclusive

//string concat
let st = "Welcome to";
let st1 = " Code with Karan";
let combo = st.concat(st1);
console.log(combo);

let g = "abcdefgh";
console.log(g.replace("a", "k"));
let h = "hello hello hello!"
console.log(h.replaceAll("lo", "p"));
console.log(h.charAt(0))
console.log(h.charAt(1))
console.log(h.charAt(2))
console.log(h.charAt(3))
console.log(h.charAt(4))