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
// Delcare function compareSelection to determine winner of the game
// Compare computerSelection and playerSelection
// If computerSelection beats playerSelection, alert user of a loss
// If computerSelection === playerSelection, alert user of a tie
// If computerSelection loses to playerSelection, alert user of a win
*/

/*
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
*/

// Declare function getPlayerChoice to get player's selection
function getPlayerChoice() {
    const playerInput = prompt("Enter rock, paper, or scissors:"); // Prompt user for entry
    const playerInputLower = playerInput.toLowerCase(); // Convert input string to lowercase
    let playerSelection;
    if (playerInputLower === "rock" || playerInputLower === "paper" || playerInputLower === "scissors") {
        playerSelection = playerInputLower; // If user input is "rock", "paper", or "scissors", store entry in variable playerSelection
    } else {
        alert("Not a valid entry!"); // If input is not "rock", "paper", or "scissors", alert user
        getPlayerChoice(); // Run function again to ask for correct input
    }
    console.log(playerSelection);
    return playerSelection;
}





// Declare function to compare the inputs of user & computer