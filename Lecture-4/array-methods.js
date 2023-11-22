// Array Methods

let foodItems = ["potato","apple","litchi","tomato"]
console.log(foodItems);
foodItems.push("Banana");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("Deleted ",deletedItem);


let marks = [55,88,22,39,100];
console.log(marks);
console.log(marks.toString());




let marvel = ["Ironman","Thor","Captian America"];
let dc = ["Batman","Superman"];
let IndianHeros = ["Shaktiman","Krish"];
// let heros = marvel.concat(dc);
let heros = marvel.concat(dc,IndianHeros);
console.log(heros);
marvel.unshift("SpiderMan"); //Adds at starting.
console.log(marvel);
let val = dc.shift();
console.log("Deleted ",val);
console.log(dc);

//Slice Method
let marvel_hero = ["Ironman","Thor","Captian America","Spider-Man","Antman","Black Widow","Doctor Strange"];
console.log(marvel_hero.slice(0,4));
console.log(marvel_hero);

//Splice Method
let array = [1,2,3,4,5,6,7,8,9];
array.splice(2,2,101,102);// (position index 2, delete 2 indexes, replace (101,102) in the deleted ones)
console.log(array);

// Add element using splice
array.splice(2,0,100);// (position index 2, delete 0 indexes, insert (100) at index 2)
console.log(array);
// Delete element using splice
array.splice(5,1);// (position index 5, delete 1 element)
console.log(array);
// Replace element using splice
array.splice(8,1,63);
console.log(array);

// NOTE: If we put nothing in splice i.e., [array.splice(2);] then there will be no change in the array.
array.splice(2); //Deletes all the elements starting from index 2 and the original array changes.
console.log(array);



