/*

Algorithm for rock, paper, scissors game

// Declare function getComputerChoice to get computer's selection
// Define variable computerSelection to store computer's selection
// Declare function getPlayerchoice to get player's selection
// Define variable playerSelection to store user's selection
// Prompt user for a selection
// Verify correct input for selection
// If bad input, alert user and prompt for a correct input
// If input is good, store it in variable playerSelection
// Delcare function compareChoice to determine winner of the game
// Compare computerSelection and playerSelection
// If computerSelection beats playerSelection, alert user of a loss
// If computerSelection === playerSelection, alert user of a tie
// If computerSelection loses to playerSelection, alert user of a win

*/

//Declare function getComputerChoice to get computer's selection
function getComputerChoice() {
    const random = Math.floor(Math.random()*10) + 1; // Create random number (1-10) to generate rock, paper, scissors selection
    console.log(random);
    if (random <= 3) {
        console.log("rock"); // If number is <= 3 generate "Rock"
    } else if (random <= 6) {
        console.log("paper"); // If number is <= 6 generate "Paper"
    } else if (random <= 9) {
        console.log("scissors"); // If number is <= 9 generate "Scissors"
    } else {
        getComputerChoice(); // If number is 10, run the function again to get another number
    }
}

getComputerChoice();