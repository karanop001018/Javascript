// ----------------------DOM Attributes--------------------------
// Insert Elements

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!"
console.log(newBtn);
console.log(newBtn.innerText);



// NOTE:-----
// ==============================================================
// (i) node.append(el) : adds at the end of node(inside)
// (ii) node.prepend(el) : adds at the start of Node(inside)
// (iii) node.brfore(el) : adds before the node(outside)
// (iv) node.after(el) : adds after the node (outside)
// ===============================================================


// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

let p = document.querySelector("p");
p.after(newBtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> H1, I am new!</i>";
document.querySelector("body").prepend(newHeading);


// Delete Elements
// node.remove() : removes the node
newHeading.remove();

