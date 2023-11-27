// Q1: Create a new button element. Give it a text "click me", background color of red and text color of white. Insert the button as the first element inside the body tag

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);





// Q2: Create a <p> tag in html, give it a class & some styling. Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwriter the class name when you add a new one? Solve this problem using classList.

let para = document.querySelector("p");
// classList = para.setAttribute("class", "newClass");

//ADD:---
para.classList.add("newClass");
console.log(para.classList);

//REMOVE:---
// para.classList.remove("newClass");
// console.log(para.classList);