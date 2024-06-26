document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('gameBoard');
    const movesCounter = document.getElementById('moves');
    const timer = document.getElementById('timer');
    
    const cardsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cards = [...cardsArray, ...cardsArray];
    let moves = 0;
    let flippedCards = [];
    let matchedCards = 0;
    let gameStarted = false;
    let time = 0;
    let interval;

    shuffle(cards);
    createBoard();

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createBoard() {
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.value = card;
            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });
    }

    function flipCard() {
        if (!gameStarted) {
            gameStarted = true;
            interval = setInterval(() => {
                time++;
                timer.textContent = time;
            }, 1000);
        }

        if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
            this.classList.add('flipped');
            this.textContent = this.dataset.value;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    }

    function checkForMatch() {
        moves++;
        movesCounter.textContent = moves;

        const [card1, card2] = flippedCards;

        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add('matched');
            card2.classList.add('matched');
            matchedCards += 2;

            if (matchedCards === cards.length) {
                clearInterval(interval);
                setTimeout(() => alert(`Congratulations! You completed the game in ${time} seconds and ${moves} moves.`), 500);
            }

            flippedCards = [];
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                card1.textContent = '';
                card2.textContent = '';
                flippedCards = [];
            }, 1000);
        }
    }
});
