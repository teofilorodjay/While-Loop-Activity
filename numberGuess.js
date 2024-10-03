const correctNumber = Math.floor(Math.random() * 10) + 1;

let guess = 0;
while (guess !== correctNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    
    if (isNaN(guess)) {
        console.log("Please enter a valid number."); 
    } else if (guess > correctNumber) {
        console.log("Too high!");
    } else if (guess < correctNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}
