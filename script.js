function computerPlay() {
    // generate computer output
    let play = Math.floor((Math.random() * 3) + 1);
    switch (play) {
        case 1: 
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, compSelection) {
    if (playerSelection == compSelection) {
        return "Tie!"
    }
    switch (playerSelection) {
        case "rock":
            if (compSelection == "paper") {
                return "You lose! Paper beats Rock.";
                break;
            }
            else {
                return "You win! Rock beats Scissors.";
                break;
            }
        case "paper":
            if (compSelection == "scissors") {
                return "You lose! Scissors beats Paper.";
                break;
            }
            else {
                return "You win! Paper beats Rock."
                break;
            }
        case "scissors":
            if (compSelection == "rock") {
                return "You lose! Rock beats Scissors.";
                break;
            }
            else {
                return "You win! Scissors beats Paper";
                break;
            }
        }
    }

function declareWinner(name) {
    const winner = document.createElement('h1');
    content.classList.add('winner');
    winner.style.color = 'red';
    winner.textContent = `${name} won!`;
    container.appendChild(winner);
}


    function game(btn) {      
         playerSelection = btn;
         compSelection = computerPlay();
         content.textContent =playRound(playerSelection, compSelection);
         result = content.textContent;
         console.log(result);
         container.appendChild(content);

        if ((result.slice(0, 5)) == "You w") {
            playerScore += 1;
        }
        else if ((result.slice(0, 5)) == "You l") {
            compScore += 1;
        }
        console.log(playerScore);
        console.log(compScore);
        score.textContent = `Player: ${playerScore}, Computer: ${compScore}`;
        container.appendChild(score);

        if (playerScore == 5) {
            content.textContent = "";
            playerScore = 0;
            compScore = 0;
            declareWinner("You");
        }
        else if (compScore == 5) {
            content.textContent = "";
            playerScore = 0;
            compScore = 0;
            declareWinner("The computer");
        }

    }
const container = document.querySelector('#result');
const content = document.createElement('div');
const score = document.createElement('div');
content.classList.add('content');
score.classList.add('score');

let compSelection = "";
let playerSelection = "";
let playerScore = 0;
let compScore = 0;
let result = " ";
const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
        button.addEventListener('click', () => {
            game(button.id);
            });
        });