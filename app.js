/*
A function that generates and returns rock, paper, or scissors.
*/
function getComputerChoice(numberChoices = 3) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    // console.log(choices[Math.floor(Math.random() * numberChoices)]);
    return choices[Math.floor(Math.random() * numberChoices)];
}

// Returns the Player's Choice.
function getPlayerChoice(e) {

    let playerSelection = e.target.innerText;
    while ((playerSelection !== 'Rock' ||
        playerSelection !== 'Paper' ||
        playerSelection !== 'Scissors')) {
        if (playerSelection === 'Rock' ||
            playerSelection === 'Paper' ||
            playerSelection === 'Scissors') {
            return playerSelection;
        }
        // playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissors'!");
    }

    return playerSelection;
    // return button.innerText;

}

// Logs The Score.
function getScoreBoard(player, computer) {
    console.log(`Player: ${player} \tComputer: ${computer}`);
}

// Rock Beats Scissors
// Scissors Beats Paper
// Paper Beats Rock
function generateRoundOutcome(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log(`Tie, ${playerSelection} and ${computerSelection} Are The Same`);
        return -1;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
        || (playerSelection === 'Paper' && computerSelection === 'Rock')
        || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        console.log(`You Win ${playerSelection} Beats ${computerSelection}`);
        return 0;
    }
    else {
        console.log(`You Lose ${playerSelection} Does Not Beat ${computerSelection}`);
        return 1;
    }

    return -1
}

// Returns the 
function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore)
        return 'Player Wins!';
    else if (computerScore > playerScore)
        return 'Computer Wins!';
    else
        return "Tie!";
}






const body = document.querySelector('#body');
body.setAttribute('style', 'background: grey;');

const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
resultDiv.setAttribute('style', 'width: 200; height: 100;');

// Query All the buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{ button.classList.add('Choicebutton')})

console.log(buttons);
buttons.forEach(button => 
        button.addEventListener('click', playRound));



// The Loop of the Game.
function playRound(e) {
    var playerScore = 0;
    var computerScore = 0;

    playerChoice = getPlayerChoice(e);
    computerChoice = getComputerChoice();

    var roundWinner = generateRoundOutcome(playerChoice, computerChoice);

    if (roundWinner === 0)
        ++playerScore;
    else if (roundWinner === 1)
        ++computerScore;

    var gameWinner = getWinner(playerScore, computerScore);
    console.log(`The ${gameWinner} Wins!`);
    resultDiv.textContent = `${gameWinner}`;
    body.appendChild(resultDiv);
}