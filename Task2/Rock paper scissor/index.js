// Get elements
const choices = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset-btn');

const options = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
        updateUI(playerChoice, computerChoice, result);
    });
});

resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getResult(player, computer) {
    if (player === computer) return "It's a Tie!";
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You Win! 🎉";
    } else {
        return "You Lose!";
    }
}

function updateUI(player, computer, result) {
    playerChoiceDisplay.textContent = `You chose: ${player}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computer}`;
    resultDisplay.textContent = `Result: ${result}`;
}

function resetGame() {
    playerChoiceDisplay.textContent = "You chose:";
    computerChoiceDisplay.textContent = "Computer chose:";
    resultDisplay.textContent = "Result:";
}
