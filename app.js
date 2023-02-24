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

    let choiceID = e.target.id;
    let playerSelection;
    
    // while ((playerSelection !== 'Rock' ||
    //     playerSelection !== 'Paper' ||
    //     playerSelection !== 'Scissors')) {
    //     if (playerSelection === 'Rock' ||
    //         playerSelection === 'Paper' ||
    //         playerSelection === 'Scissors') {
    //         return playerSelection;
    //     }
    //     // playerSelection = prompt("Type 'Rock', 'Paper', or 'Scissors'!");
    // }
    if (choiceID === 1)
        playerSelection =  'Rock';
    else if(choiceID === 2)
        playerSelection = 'Paper';
    else if(choiceID === 3)
        playerSelection = 'Scissors';

    console.log(`Choice: ${choiceID}`);
    
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
// function getWinner(playerScore, computerScore) {
//     if (playerScore > computerScore)
//         return 'Player Wins!';
//     else if (computerScore > playerScore)
//         return 'Computer Wins!';
//     else
//         return "Tie!";
// }

function checkWinner(playerScore, computerScore, winValue)
{
    console.log(playerScore);
    if (playerScore === winValue)
        return 'Congratulation, You Win!';
    else if (computerScore === winValue)
        return 'Sorry, Computer Wins!';
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




const scoresContainer = document.querySelector('#scores');
// scoresContainer.setAttribute('style', 'background: blue; min-height: 100; width: 200');

// body.append(scoresContainer);




const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

playerScore.classList.add('score');
computerScore.classList.add('score');

// playerScore.textContent = 'Score';
// computerScore.textContent = 'Score';


scoresContainer.appendChild(playerScore);
scoresContainer.appendChild(computerScore);

        
        
var playerScoreVal = 0;
var computerScoreVal = 0;
       
        // The Loop of the Game.
function playRound(e) {
    
    var winScore = 5;
    var running = true;

    playerChoice = e.target.id;
    computerChoice = getComputerChoice();

    var roundWinner = generateRoundOutcome(playerChoice, computerChoice);

    if (roundWinner === 0)
        ++playerScoreVal;
    else if (roundWinner === 1)
        ++computerScoreVal;


    playerScore.textContent = `${playerScoreVal}`;
    computerScore.textContent = `${computerScoreVal}`;

    var gameWinner = checkWinner(playerScoreVal, computerScoreVal, winScore);
    
    if (gameWinner !== undefined)
        resultDiv.textContent = `${gameWinner}`;
    body.appendChild(resultDiv);
}




