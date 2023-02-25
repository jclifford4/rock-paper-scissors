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

function checkWinner(playerScore, computerScore, winValue)
{
    console.log(playerScore);
    if (playerScore === winValue)
        return 'Congratulations, You Win!';
    else if (computerScore === winValue)
        return 'Sorry, Computer Wins...';
}

function displayRoundWinResult(winner, element)
{
    console.log(winner);
    if (winner === 0)
    {
        element.classList.add('win');
        return 'W';

    }
    else if (winner === 1)
    {
        element.classList.add('lose');
        return 'L';
    }

    element.classList.add('tie');
    return 'Tie';
}







const body = document.querySelector('#body');


const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
resultDiv.setAttribute('style', 'width: 200; height: 100;');

// Query All the buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{ button.classList.add('Choicebutton')});


// Button Listener for all buttons
console.log(buttons);
buttons.forEach(button => {

    button.addEventListener('click', playRound);
    

});

const scoresContainer = document.querySelector('#scores');


const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

playerScore.classList.add('score');
computerScore.classList.add('score');

scoresContainer.appendChild(playerScore);
scoresContainer.appendChild(computerScore);

        
// Query all displays for miniChoice
const selectDisplayContainer = document.querySelector('.display');


console.log(selectDisplayContainer);



const selectDisplays = document.querySelectorAll('.display div');
// console.log(selectDisplays);

const playerSelectImg = document.createElement('img');
const computerSelectImg = document.createElement('img');

// console.log(selectDisplays[0]);

const h1 = document.querySelector('h1');
h1.textContent = 'Select an option to begin!';











// Display the mini player choice
function displayPlayerChoice(choice)
{
    let imagePath = `./images/${choice.toLowerCase()}.png`;
    playerSelectImg.src = imagePath;
    selectDisplays[0].appendChild(playerSelectImg);
}

function displayComputerChoice(choice)
{
    let imagePath = `./images/${choice.toLowerCase()}.png`;
    computerSelectImg.src = imagePath;
    selectDisplays[1].appendChild(computerSelectImg);
}

function getImageSourceFromChoice(choice)
{
    return `./images/${choice.toLowerCase()}.png`
}




var playerScoreVal = 0;
var computerScoreVal = 0;
       
// The Loop of the Game.
function playRound(e) {
    
    var winScore = 5;
    var running = true;

    playerChoice = e.target.id;
    displayPlayerChoice(playerChoice);
    computerChoice = getComputerChoice();
    displayComputerChoice(computerChoice);
    selectDisplayContainer.classList.add('select-display-container');
    h1.style.display = 'none';

    const historyContainer = document.createElement('div');
    historyContainer.classList.add('history-container');


    const playerHistoryDiv = document.createElement('div');
    const computerHistoryDiv = document.createElement('div');
    const roundResultDiv = document.createElement('div');

    playerHistoryDiv.classList.add('picture-container');
    computerHistoryDiv.classList.add('picture-container');

    const playerHistoryImg = document.createElement('img');
    const computerHistoryImg = document.createElement('img');



    playerHistoryImg.src = getImageSourceFromChoice(playerChoice);
    computerHistoryImg.src = getImageSourceFromChoice(computerChoice);
    
    console.log(playerHistoryImg.src);


    playerHistoryDiv.appendChild(playerHistoryImg);
    computerHistoryDiv.appendChild(computerHistoryImg);

    historyContainer.appendChild(playerHistoryDiv);
    historyContainer.appendChild(roundResultDiv);
    historyContainer.appendChild(computerHistoryDiv);

    body.appendChild(historyContainer);
    


    

    
    


    var roundWinner = generateRoundOutcome(playerChoice, computerChoice);
    roundResultDiv.textContent = displayRoundWinResult(roundWinner, roundResultDiv);
    console.log(roundWinner);
    
    // Increment scores.
    if (roundWinner === 0)
        ++playerScoreVal;
    else if (roundWinner === 1)
        ++computerScoreVal;

    // Update element with the associated score.
    playerScore.textContent = `${playerScoreVal}`;
    computerScore.textContent = `${computerScoreVal}`;

    var gameWinner = checkWinner(playerScoreVal, computerScoreVal, winScore);
    
    // Display the Game Winner.
    if (gameWinner !== undefined){
        
        h1.textContent = `${gameWinner}`;
        h1.style.display = 'block';
        h1.style.fontSize = '70px';
    }

    // Remove Listener if round cap has been reached.
    if (playerScoreVal === winScore || computerScoreVal === winScore)
    {
        buttons.forEach(button => button.removeEventListener('click', playRound));
    }
    
    // body.appendChild(resultDiv);
}




