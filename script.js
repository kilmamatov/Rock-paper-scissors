const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const result_p = document.getElementById('result-text');
const choices_div = document.querySelectorAll('.choice');

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function convertToWord(choice) {
    if (choice === 'rock') return "Rock";
    if (choice === 'paper') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    result_p.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! 🎉`;
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.textContent = compScore;
    result_p.textContent = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You lose. 😢`;
}

function draw(userChoice, computerChoice) {
    result_p.textContent = `It's a draw! Both chose ${convertToWord(userChoice)}.`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

choices_div.forEach(choice => choice.addEventListener('click', function() {
    game(this.id);
}));
