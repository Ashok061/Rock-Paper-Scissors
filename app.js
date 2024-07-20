const userScoreElem = document.getElementById('user-score');
const compScoreElem = document.getElementById('comp-score');
const msgElem = document.getElementById('msg');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let compScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        playGame(choice.id);
    });
});

function playGame(userChoice) {
    const compChoice = getCompChoice();
    const winner = getWinner(userChoice, compChoice);

    if (winner === 'user') {
        userScore++;
        msgElem.textContent = `You win! ${capitalize(userChoice)} beats ${compChoice}.`;
    } else if (winner === 'comp') {
        compScore++;
        msgElem.textContent = `You lose! ${capitalize(compChoice)} beats ${userChoice}.`;
    } else {
        msgElem.textContent = `It's a draw! You both chose ${userChoice}.`;
    }

    userScoreElem.textContent = userScore;
    compScoreElem.textContent = compScore;
}

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'comp';
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

