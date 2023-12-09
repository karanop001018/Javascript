let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };


// btn1.onclick = (e) => {
//     console.log(e);
// };

// ===================================================
/*
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};


let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log('You are inside the div');
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};
*/
// ====================================================


// btn1.onclick = () => {
//     console.log("Handler2");
// };




// NOTE:------
// =========================================================
/* If we print the same thing using both inline(in html) and in javascript then the priority will be given to the code written in javascript.

btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}

If we write the same-thing(means same function) twice(in js) then the last one will overwrite the previous one

Event Object: It is a special object that has details about the event.   
All event handlers have access to the Event Object's properties and methods.


*/







// Event Listeners:----
// (i) node.addEventListener(event,callback)
// (ii) node.removeEventListener(event,callback)
// Note: the callback refrence should be same to remove

//Using event-listeners we can do multiple work using same event
btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked - handler1");
    // console.log(evt);
    // console.log(evt.type);

});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler2");
});

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - handler4");
});

//This creates a new memory of same name (handler3) so it does not remove the first handler3
btn1.removeEventListener("click", () => {
    console.log("button1 was clicked - handler3");
});


//This time handler3 is stored in a const keyword so it is removed
btn1.removeEventListener("click", handler3);




