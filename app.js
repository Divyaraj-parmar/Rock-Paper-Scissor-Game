const game = () => {
    let pScore = 0;
    let cScore = 0;
    //start game
    const startGame = () => {
        const playBtn = document.querySelector('.intro-button');
        const introScreen = document.querySelector('.intro');
        const gameScreen = document.querySelector('.game-arena');
        const scoreScreen = document.querySelector('.score')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            gameScreen.classList.add('fadeIn');
            scoreScreen.classList.add('fadeIn')

        });
    }
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        //Computer's Options
        const computerOptions = ['rock', 'paper', 'scissors'];
       
        hands.forEach(hand=>{
             hand.addEventListener('animationend',function(){
                 this.style.animation = '';
             });
        });
        options.forEach(Option => {
            Option.addEventListener('click', function () {
                const choiceIndex = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceIndex];
                //Compare hands Function
                 compareHands(this.textContent , computerChoice);
                // Upadate images
                playerHand.src = `./hands/${this.textContent}.png`;
                computerHand.src = `./hands/${computerChoice}.png`;

                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";
            })
        });
    }
    // Update Score:
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore ;
        computerScore.textContent = cScore;

    }

    const compareHands = (playerChoice, computerChoice) => {
        const result = document.querySelector('.result');
        // Checking For Tie.
        if (playerChoice === computerChoice) {
            result.textContent = 'Tie.';
            updateScore();
            return;
        }
        // Checking for Rock
        if (playerChoice === 'rock') {

            if (computerChoice === 'scissors') {
                result.textContent = 'You Won !!!';
                ++pScore;
                updateScore();
                return;
            } else {
                result.textContent = 'Computer Won. Better Luck Next Time !';
                ++cScore;
                updateScore();
                return;
            }
        }
        // Checking for paper
        if (playerChoice === 'paper') {

            if (computerChoice === 'scissors') {
                result.textContent = 'Computer Won. Better Luck Next Time !';
                updateScore();
                ++cScore;
                return;
            } else {
                result.textContent = 'You Won !!!';
                ++pScore;
                updateScore();
                return;
            }
        }
        // Checking for scissors
        if (playerChoice === 'scissors') {

            if (computerChoice === 'rock') {
                result.textContent = 'Computer Won. Better Luck Next Time !';
                ++cScore;
                updateScore();
                return;
            } else {
                result.textContent = 'You Won !!!';
                ++pScore;
                updateScore();
                return;
            }
        }

    }
    //Functions calls
    startGame();
    playMatch();
}

//Start the game by calling this function
game();