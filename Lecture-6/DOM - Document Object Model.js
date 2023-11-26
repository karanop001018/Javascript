// console.log : used to print something
// console.dir : used to print properties an methods of document

// If we visualize structure of DOM it is like a tree



console.log("Hello!");
alert("🔥🔥🔥Welcome to code with Karan🔥🔥🔥")
// console.dir(window.document)
// console.log(document.body)
// console.dir(document.body)
// document.body.childNodes[3].innerText = "WELCOME"
let button = document.getElementById("myId");
console.log(button);

// --------------------DOM Manipulation--------------------

// (i) Selecting with id:----
let heading = document.getElementById("heading"); 
console.dir(heading);
console.log(heading);


// (ii) Selecting with class
let headings = document.getElementsByClassName("heading-class");
console.dir(headings);
console.log(headings);


//(iii) Selecting with tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);


//(iv) Query Selector (return nodelist)
let firstElement = document.querySelector("p"); // gives very 1st element
console.dir(firstElement);

let allElement = document.querySelectorAll("p"); //gives all elements named "p".
console.dir(allElement);




console.dir(document.body.firstChild);



// --------------DOM Manipulation (Properties)----------------
// tagName : returns tag for element nodes 
// innerText : returns the text content of the element and all its children
// innerHTML : returns inner HTML markup of an element
// textContent : returns textual content even for hidden elements 