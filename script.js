let userCount = 0;
let computerCount = 0;
const results = document.querySelector(".results");
const match = document.createElement("h2");
const playAgain = document.createElement("button");


function playGame() {
    if (userCount === 3 || computerCount === 3) {
        disableButton();
        if (userCount > computerCount) {
            match.classList.add("results");
            match.textContent = "You've defeated the computer!";
            match.style.color = "green";
            results.appendChild(match);
            playAgain.classList.add("playAgain");
            playAgain.textContent = "Play again?";
            results.appendChild(playAgain);
            playAgain.addEventListener("click", enableButton);
        } else {
            match.classList.add("results");
            match.textContent = "You've been defeated by the all-powerful AI.";
            match.style.color = "red";
            results.appendChild(match);
            playAgain.classList.add("playAgain");
            playAgain.textContent = "Play again?";
            results.appendChild(playAgain);
            playAgain.addEventListener("click", enableButton);

        }
    }
}

const enableButton = () => {
    userButton[0].disabled = false;
    userButton[1].disabled = false;
    userButton[2].disabled = false;
    userCount = 0;
    computerCount = 0;
    results.removeChild(playAgain);
    results.removeChild(match);
    round.textContent = "";
    scores.textContent = "User: 0 - Computer: 0";
}

const disableButton = () => {
    userButton[0].disabled = true;
    userButton[1].disabled = true;
    userButton[2].disabled = true;
}

const round = document.querySelector(".round");
const scores = document.querySelector(".scores");

const userButton = document.querySelectorAll(".button");
userButton[0].addEventListener("click", userRock);
userButton[1].addEventListener("click", userPaper);
userButton[2].addEventListener("click", userScissors);

function userRock (event) {
    playerSelection = "rock";
    console.log(`You: ${playerSelection}`);
    [winner, message] = playRound(playerSelection, getComputerChoice());
    if (winner === "user") {
        round.textContent = `${message}`;
        ++userCount;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If player wins add 1 to player score & display latest score.
        playGame();
    } else if (winner === "computer") {
        round.textContent = `${message}`;
        ++computerCount;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If computer wins add 1 to player score & display latest score.
        playGame();
    } else {
        round.textContent = `${message}`;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If tie or bad user input, don't add any score & display latest score.
        playGame();
    }
    
}

function userPaper (event) {
    playerSelection = "paper";
    console.log(`You: ${playerSelection}`);
    [winner, message] = playRound(playerSelection, getComputerChoice());
    if (winner === "user") {
        round.textContent = `${message}`;
        ++userCount;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If player wins add 1 to player score & display latest score.
        playGame();
    } else if (winner === "computer") {
        round.textContent = `${message}`;
        ++computerCount;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If computer wins add 1 to player score & display latest score.
        playGame();
    } else {
        round.textContent = `${message}`;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If tie or bad user input, don't add any score & display latest score.
        playGame();
    }
}

function userScissors (event) {
    playerSelection = "scissors";
    console.log(`You: ${playerSelection}`);
    [winner, message] = playRound(playerSelection, getComputerChoice());
    if (winner === "user") {
        round.textContent = `${message}`;
        ++userCount;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If player wins add 1 to player score & display latest score.
        playGame();
    } else if (winner === "computer") {
        round.textContent = `${message}`;
        ++computerCount;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If computer wins add 1 to player score & display latest score.
        playGame();
    } else {
        round.textContent = `${message}`;
        scores.textContent = `User: ${userCount} - Computer: ${computerCount}`; // If tie or bad user input, don't add any score & display latest score.
        playGame();
    }
}


//Declare function getComputerChoice to get computer's selection
function getComputerChoice() {
    let random = Math.floor(Math.random()*3); // Create random number (0-3) to generate rock, paper, scissors selection
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

    console.log("Computer:", computerSelection);
    return computerSelection;
}



// Declare function to compare the inputs of user & computer
function playRound(playerSelection, computerSelection) {
    let winner;
    let message;
    if (playerSelection === "paper" && computerSelection === "rock") {
        winner = "user";
        message = "You Win! Paper beats rock." // Player chooses paper and computer chooses rock.
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        winner = "none";
        message = "Tie! You both chose paper." // Player chooses paper and computer chooses paper.
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        winner = "computer";
        message = "You Lose! Scissors beat paper."; // Player chooses paper and computer chooses scissors.
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        winner = "none";
        message = "Tie! You both chose rock."; // Player chooses rock and computer chooses rock.
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        winner = "computer";
        message = "You Lose! Paper beats rock."; // Player chooses rock and computer chooses paper.
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        winner = "user";
        message = "You Win! Rock beats scissors."; // Player chooses rock and computer chooses scissors.
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        winner = "computer";
        message = "You Lose! Rock beats scissors."; // Player chooses scissors and computer chooses rock.
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        winner = "user";
        message = "You Win! Scissors beat paper."; // Player chooses scissors and computer chooses paper.
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        winner = "none";
        message = "Tie! You both chose scissors."; // Player chooses scissors and computer chooses scissors.
    } else {
        winner = "none";
        message = "Bad user input!"; // Player chooses bad input.
    }
return [winner, message];
}