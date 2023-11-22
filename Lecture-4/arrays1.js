// Arrays : Collection of items.
let marks = [97,81,54,42,55,80,97,100];
console.log(marks);
console.log(marks.length); // length : array property

let heros = ["Ironman","Spiderman","Captian America","Hulk","Black Widow","Scarlet Witch","Thor","Loki","Doctor Strange","Antman","Nebula","Rocket"];
console.log(heros);
console.log(heros.length);
console.log(typeof(heros))

//Array Indices
let marvel = ["Ironman","Spiderman","Captian America","Hulk","Black Widow","Scarlet Witch","Thor","Loki","Doctor Strange","Antman","Nebula","Rocket"];
console.log(marvel[0]);
console.log(marvel[1]);
console.log(marvel[2]);
console.log(marvel[3]);
console.log(marvel[4]);
console.log(marvel[5]);
console.log(marvel[6]);
console.log(marvel[7]);
console.log(marvel[8]);
console.log(marvel[9]);
console.log(marvel[10]);
console.log(marvel[11]);
// If you try to do slicing in strings then it will not change because strings in javascript are immutable whereas arrays are mutable.
console.log('\n\n');
// Array using for loop
for(let idx=5; idx<marvel.length; idx++){
    console.log(marvel[idx]);
}


console.log('\n\n');
console.log('\n\n');
console.log('\n\n');
// Array using for-of loop
for(let hero of marvel){
    console.log(hero);
}


console.log('\n\n');
console.log('\n\n');
let cities = ["delhi","pune","vadodara","ahmedabad","hyderabad"]
for(let city of cities){
    console.log(city.toUpperCase());
}
