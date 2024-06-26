document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('.choice');
    const userChoiceSpan = document.getElementById('userChoice');
    const computerChoiceSpan = document.getElementById('computerChoice');
    const gameResultSpan = document.getElementById('gameResult');

    const choicesArray = ['rock', 'paper', 'scissors'];

    choices.forEach(choice => {
        choice.addEventListener('click', function() {
            const userChoice = this.getAttribute('data-choice');
            const computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
            const result = determineWinner(userChoice, computerChoice);

            userChoiceSpan.textContent = userChoice;
            computerChoiceSpan.textContent = computerChoice;
            gameResultSpan.textContent = result;
            gameResultSpan.className = '';

            if (result === 'You win!') {
                gameResultSpan.classList.add('win');
            } else if (result === 'You lose!') {
                gameResultSpan.classList.add('lose');
            } else {
                gameResultSpan.classList.add('draw');
            }
        });
    });

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a draw!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
});