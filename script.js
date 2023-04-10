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
// Declare playGame function to play game 5 times and keep score (best of 3)
// Define variable userCounter to count user wins
// Define variable computerCounter to count computer wins
// Loop function playGame until userCounter or computerCounter === 3
// Alert player who won
*/


//Declare function getComputerChoice to get computer's selection
function getComputerChoice() {
    let random = Math.floor(Math.random()*3); // Create random number (1-10) to generate rock, paper, scissors selection
    // console.log(random);
    let computerSelection;
    if (random === 0) {
        // console.log("rock"); // If number is 0 generate "Rock"
        computerSelection = "rock";
    } else if (random === 1) {
        // console.log("paper"); // If number is 1 generate "Paper"
        computerSelection = "paper";
    } else if (random === 2) {
        // console.log("scissors"); // If number is 2 generate "Scissors"
        computerSelection = "scissors";
    }

    console.log(computerSelection);
    return computerSelection;
}

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
function playRound(playerSelection, computerSelection) {
    let winner;
    let message;
    if (playerSelection === "paper" && computerSelection === "rock") {
        // console.log("You Win! Paper beats rock.");
        winner = "user";
        message = "You Win! Paper beats rock."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        // console.log("Tie! You both chose paper.");
        winner = "none";
        message = "Tie! You both chose paper."
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        // console.log("You Lose! Scissors beat paper.");
        winner = "computer";
        message = "You Lose! Scissors beat paper.";
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        // console.log("Tie! You both chose paper.");
        winner = "none";
        message = "Tie! You both chose paper.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        // console.log("You Lose! Paper beats rock.");
        winner = "computer";
        message = "You Lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // console.log("You Win! Rock beats scissors.");
        winner = "user";
        message = "You Win! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        // console.log("You Lose! Rock beats scissors.");
        winner = "computer";
        message = "You Lose! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        // console.log("You Win! Scissors beat paper.");
        winner = "user";
        message = "You Win! Scissors beat paper.";
    } else {
        // console.log("Tie! You both chose scissors.");
        winner = "none";
        message = "Tie! You both chose scissors.";
    }
return [winner, message];
}

// console.log(playRound(getPlayerChoice(), getComputerChoice()));


// Declare function to loop playRound
function game() {
    let userCount = 0;
    let computerCount = 0;
    while (userCount < 3 && computerCount < 3) {
        [winner, message] = playRound(getPlayerChoice(), getComputerChoice());
            if (winner === "user") {
                console.log(message);
                ++userCount;
                console.log("User:", userCount, " Computer:", computerCount);
            } else if (winner === "computer") {
                console.log(message);
                ++computerCount;
                console.log("User:", userCount, " Computer:", computerCount);
            } else {
                console.log(message);
                console.log("User:", userCount, " Computer:", computerCount);
                continue;
            }
    }
}

game();

