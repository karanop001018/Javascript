let divs = document.querySelectorAll(".box");
console.log(divs); 
console.log(divs[0]); 
console.log(divs[1]); 
console.log(divs[2]); 


//Aam zindagi
// divs[0].innerText = "Unique value 1";
// divs[1].innerText = "Unique value 2";
// divs[2].innerText = "Unique value 3";

// Developer vali zindagi
let idx = 1;
for (div of divs) {
        div.innerText = `Unique value ${idx}`;
        idx++;
}