'use strict';

let computerScore = 0;
let playerScore = 0;
let playerChoice;

const rockRef = document.querySelector('#rock');
const paperRef = document.querySelector('#paper');
const scissorRef = document.querySelector('#scissor');
const restartRef = document.querySelector('#restart');


// TEXT and TEXT MANIPULATION
const canvasRef = document.querySelector('#canvas');
const textRef = document.querySelector('#text');
const scoreTextRef = document.querySelector('#score-text');

function changeText(string){
    textRef.textContent = string;
}

function changeScoreboard(string){
    scoreTextRef.textContent = string;
}


// GET CHOICES
function getComputerChoice(){
    return Math.floor(Math.random()*3); //0-rock, 1-paper, 2-scissor
}

function getPlayerChoice(e){
    const pChoice = e.currentTarget.getAttribute('id');
	switch(pChoice){
		case "rock":
			playerChoice = 0;
            break;
		case "paper":
			playerChoice = 1;
            break;
		case "scissor":
			playerChoice = 2;
            break;
		default:
			return Math.floor(Math.random()*3);
	}

    playRound(playerChoice, getComputerChoice());
}


//INITIATE GAME
function playRound(playerSelection, computerSelection){
	decideWinner(playerSelection, computerSelection);
}


// GAME LOGIC
function decideWinner(playerSelection, computerSelection){
	// 0 = rock, 1 = paper, 2 = scissor
	if(playerSelection === 0){ // ROCK
		if(computerSelection === 0){
			changeText("Rock v rock, It's a draw");
		}
		if(computerSelection === 1){
			changeText("Paper beats rock, Computer wins!");
			computerScore++;
		}
		if(computerSelection === 2){
			changeText("Rock beats scissor, You win!");
			playerScore++;
		}
	}
	if(playerSelection === 1){ // PAPER
		if(computerSelection === 0){
			changeText("Paper beats rock, You win!");
			playerScore++;
		}
		if(computerSelection === 1){
			changeText("Paper v paper, It's a draw");
		}
		if(computerSelection === 2){
			changeText("Scissor beats paper, Computer wins!");
			computerScore++;
		}
	}
	if(playerSelection === 2){ // SCISSOR
		if(computerSelection === 0){
			changeText("Rock beats scissor, Computer wins!");
			computerScore++;
		}
		if(computerSelection === 1){
			changeText("Scissor beats paper, You win!");
			playerScore++;
		}
		if(computerSelection === 2){
			changeText("Scissor v scissor, It's a draw");
		}
	}

	changeScoreboard(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    checkGameFinished();
}

function checkGameFinished(){
    if(playerScore >= 5) { changeText('Congratz! You Won!'); promptRestart(); }
    if(computerScore >= 5) { changeText('Oh no! Computer Won!'); promptRestart(); }
}

function promptRestart(){
    //Hide/show game game buttons
    rockRef.classList.toggle('hide');
    paperRef.classList.toggle('hide');
    scissorRef.classList.toggle('hide'); 
    //Show/hide restart button
    restartRef.classList.toggle('hide');
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    changeText('Choose one to start the game!');
    changeScoreboard('Player score: 0, Computer Score: 0');
    promptRestart();
}

rockRef.addEventListener('click', getPlayerChoice);
paperRef.addEventListener('click', getPlayerChoice);
scissorRef.addEventListener('click', getPlayerChoice);
restartRef.addEventListener('click', restartGame);