
//A function that generates and returns rock, paper, or scissors.
function getComputerChoice(numberChoices = 3) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    
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

    
    return playerSelection;
}


// Rock Beats Scissors
// Scissors Beats Paper
// Paper Beats Rock
function generateRoundOutcome(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        
        return -1;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
        || (playerSelection === 'Paper' && computerSelection === 'Rock')
        || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        
        return 0;
    }
    else {
        
        return 1;
    }

    return -1
}

function checkWinner(playerScore, computerScore, winValue)
{
    if (playerScore === winValue)
        return 'Congratulations, You Win!';
    else if (computerScore === winValue)
        return 'Sorry, Computer Wins...';
}

function displayRoundWinResult(winner, element)
{
    
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

// Query the body
const body = document.querySelector('#body');

const resultDiv = document.createElement('div');
resultDiv.classList.add('result');
resultDiv.setAttribute('style', 'width: 200; height: 100;');

// Query All the buttons
const buttons = document.querySelectorAll('button');

// Add Classes to all buttons
buttons.forEach(button =>{ button.classList.add('Choicebutton')});


// Button Listener for all buttons
buttons.forEach(button => button.addEventListener('click', playRound));

const scoresContainer = document.querySelector('#scores');


const playerScore = document.createElement('p');
const computerScore = document.createElement('p');

playerScore.classList.add('score');
computerScore.classList.add('score');

scoresContainer.appendChild(playerScore);
scoresContainer.appendChild(computerScore);

        
// Query all displays for miniChoice
const selectDisplayContainer = document.querySelector('.display');

const selectDisplays = document.querySelectorAll('.display div');

const playerSelectImg = document.createElement('img');
const computerSelectImg = document.createElement('img');

const h1 = document.querySelector('h1');
h1.textContent = 'Select an option to begin!';


// Display the mini player choice
function displayPlayerChoice(choice)
{
    let imagePath = `./images/${choice.toLowerCase()}.png`;
    playerSelectImg.src = imagePath;
    selectDisplays[0].appendChild(playerSelectImg);
}

// Display the mini computer choice
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

// Hide the rounds <p> until a round is played.
const roundsTxt = document.querySelector('.rounds-txt');
roundsTxt.style.display = 'none';

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

    // Create content field for past rounds
    const historyContainer = document.createElement('div');
    historyContainer.classList.add('history-container');

    const totalHistoryDiv = document.querySelector('.total-history');
    const playerHistoryDiv = document.createElement('div');
    const computerHistoryDiv = document.createElement('div');
    const roundResultDiv = document.createElement('div');

    playerHistoryDiv.classList.add('picture-container');
    computerHistoryDiv.classList.add('picture-container');

    const playerHistoryImg = document.createElement('img');
    const computerHistoryImg = document.createElement('img');

    playerHistoryImg.src = getImageSourceFromChoice(playerChoice);
    computerHistoryImg.src = getImageSourceFromChoice(computerChoice);
    
    playerHistoryDiv.appendChild(playerHistoryImg);
    computerHistoryDiv.appendChild(computerHistoryImg);

    historyContainer.appendChild(playerHistoryDiv);
    historyContainer.appendChild(roundResultDiv);
    historyContainer.appendChild(computerHistoryDiv);
    totalHistoryDiv.appendChild(historyContainer);

    const footer = document.querySelector('.footer');

    roundsTxt.style.display = 'block';
    footer.before(totalHistoryDiv);
    

    var roundWinner = generateRoundOutcome(playerChoice, computerChoice);
    roundResultDiv.textContent = displayRoundWinResult(roundWinner, roundResultDiv);
    
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
}




