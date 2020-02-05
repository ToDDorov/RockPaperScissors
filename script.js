const posibilities = ["rock", "paper", "scissors"];
let playerWins = 0;
let botWins = 0;
let result = null;

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener('click', (e) => {
    if (playerWins == 5 || botWins == 5) return;

    const computerSelection = computerPlay();
    const playerSelection = e.toElement.dataset.key;

    const outcome = playRound(playerSelection, computerSelection);

    if (outcome != null) {
        if (outcome.includes("Win")) {
            playerWins++;
        } else if (outcome.includes("Lose")) {
            botWins++;
        }
    }

    if (playerWins == 5 || botWins == 5) {
        if (playerWins > botWins) {
            result = "Player Won!";
        } else if (playerWins < botWins) {
            result = "Bot Won!";
        } else {
            result = "Yay! Its a Draw.";
        }
    }

    const roundResult = document.querySelector('#result');
    roundResult.textContent = result == null ? outcome : result;

    const playerScore = document.querySelector('#playerWins');
    playerScore.textContent = playerWins.toString();

    const botScore = document.querySelector('#botWins');
    botScore.textContent = botWins.toString();
}));

// game();

function computerPlay() {
    return posibilities[Math.floor(Math.random() * posibilities.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == null) {
        return;
    }

    let playerChoice = playerSelection.toLowerCase();

    if (!posibilities.includes(playerChoice)) {
        console.log(`Such choice doesnt exit: ${playerChoice}. Choose from ${posibilities}`);
        return;
    }

    if (playerChoice == computerSelection) {
        return "It\`s a Draw!";
    } else {
        switch (playerChoice) {
            case "rock":
                if (computerSelection == "scissors") {
                    return "You Win! Rock beats Scissors";
                } else {
                    return "You Lose! Paper beats Rock";
                }
                break;
            case "paper":
                if (computerSelection == "rock") {
                    return "You Win! Paper beats Rock";
                } else {
                    return "You Lose! Scissors beats Paper";
                }
                break;
            case "scissors":
                if (computerSelection == "paper") {
                    return "You Win! Scissors beats Paper";
                } else {
                    return "You Lose! Rock beats Scissors";
                }
                break;
        }
    }
}

function game() {
    let playerWins = 0;
    let botWins = 0;
    let rounds = 5;

    do {
        const playerSelection = prompt("Choose between rock, paper and scissors: ");
        const computerSelection = computerPlay();

        const outcome = playRound(playerSelection, computerSelection);

        if (outcome != null) {
            rounds--;

            console.log(outcome);

            if (outcome.includes("Win")) {
                playerWins++;
            } else if (outcome.includes("Lose")) {
                botWins++;
            }
        }
    } while (rounds != 0);

    console.log(`Player wins ${playerWins} || Bot wins ${botWins}`);

    if (playerWins > botWins) {
        console.log("Player Won!");
    } else if (playerWins < botWins) {
        console.log("Bot Won!");
    } else {
        cosnole.log("Yay! Its a Draw.");
    }
}