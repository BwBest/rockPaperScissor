'use strict';

let computerScore = 0;
let playerScore = 0;
let playerChoice;

const rockRef = document.querySelector('#rock');
const paperRef = document.querySelector('#paper');
const scissorRef = document.querySelector('#scissor');

function getComputerChoice(){
	switch(Math.floor(Math.random()*3)){
		case 0:
			console.log("computer chose rock");
			return 0;
		case 1:
			console.log("computer chose paper");
			return 1;
		case 2:
			console.log("computer chose scissor");
			return 2;
	}
}

function getPlayerChoice(e){
	// let pChoice = prompt("Choose rock, paper or scissors");
	// pChoice = pChoice.toLowerCase();
    const pChoice = e.currentTarget.getAttribute('id');
	switch(pChoice){
		case "rock":
			console.log("player chose rock");
			playerChoice = 0;
            break;
		case "paper":
			console.log("player chose paper");
			playerChoice = 1;
            break;
		case "scissor":
			console.log("player chose scissor");
			playerChoice = 2;
            break;
		default:
			return Math.floor(Math.random()*3);
	}
}

function decideWinner(playerSelection, computerSelection){
	// 0 = rock, 1 = paper, 2 = scissor
	if(playerSelection === 0){ // ROCK
		if(computerSelection === 0){
			alert("It's a draw");
		}
		if(computerSelection === 1){
			alert("Computer wins! (computer chose paper)");
			computerScore++;
		}
		if(computerSelection === 2){
			alert("You win! (computer chose scissor)");
			playerScore++;
		}
	}
	if(playerSelection === 1){ // PAPER
		if(computerSelection === 0){
			alert("You win! (computer chose rock)");
			playerScore++;
		}
		if(computerSelection === 1){
			alert("It's a draw");
		}
		if(computerSelection === 2){
			alert("Computer wins! (computer chose scissor)");
			computerScore++;
		}
	}
	if(playerSelection === 2){ // SCISSOR
		if(computerSelection === 0){
			alert("Computer wins! (computer chose rock)");
			computerScore++;
		}
		if(computerSelection === 1){
			alert("You win! (computer chose paper)");
			playerScore++;
		}
		if(computerSelection === 2){
			alert("It's a draw");
		}
	}

	console.log("Player score: " + playerScore, "Computer score: " + computerScore);
}

function playRound(playerSelection, computerSelection){
	decideWinner(playerSelection, computerSelection);
}

function game(){
	// while(computerScore < 5 && playerScore < 5){
	// 	playRound(getPlayerChoice(),getComputerChoice());
	// }
}

game();

rockRef.addEventListener('click', getPlayerChoice);
paperRef.addEventListener('click', getPlayerChoice);
scissorRef.addEventListener('click', getPlayerChoice);