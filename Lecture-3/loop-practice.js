// Q1: Print all even numbers from 0 to 100.
//Even numbers
for(let i=0; i<=100; i++){
    if(i%2==0){
    console.log(i);
    }
}

//Odd numbers
for(let i=0; i<=100; i++){
    if(i%2!==0){
    console.log(i);
    }
}








// Q2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value.

let n = 18;
let userNumber = prompt("Guess the number:");
while(userNumber!= n){
    userNumber = prompt("You entered wrong number.\nGuess again:");
}
console.log("Congratulations!!, you entered right number.");