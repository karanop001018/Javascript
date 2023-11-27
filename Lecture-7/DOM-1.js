let div = document.querySelector("div");
console.log(div);

// ------------------------DOM - Attributes----------------------
// (i) getAttribute(attr) : to get attribut value
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));


// (ii) setAttribute(attr,value) : to set the attribute value
let paragraph = document.querySelector("p");
console.log(paragraph.setAttribute("class", "newClass"));



// (iii) node.style
let d = document.querySelector("div");
console.log(d);
console.log(d.style);




//------------NOTE:-----------
// =============================================================
//         In CSS                     In JS
// --->   color              :        color
// --->   background-color   :        backgroundColor
// --->   font-size          :        fontSize
// ==============================================================



div.style.backgroundColor = "green";
div.style.fontSize = "25px";
div.innerText = "Hello!";
// div.style.visibility = "hidden"; //Hides the printed object
