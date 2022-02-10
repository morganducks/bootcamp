const getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
                return userInput;
        } else {
                console.log('Error')
        }
};

const getComputerChoice = () => {
        randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
                case 0:
                        return 'rock';
                case 1:
                        return 'paper'
                case 2:
                        return 'scissors'
        }
};


const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
                return 'The game is a tie!'
        }
        if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                        return 'sorry, the computer won'
                } else {
                        return 'you won!'
                }
        }
        if (userChoice === 'paper') {
                if (computerChoice === 'scissors') {
                        return 'sorry, the computer won'
                } else {
                        return 'you won!'
                }
        }
        if (userChoice === 'scissors') {
                if (computerChoice === 'rock') {
                        return 'sorry, the computer won'
                } else {
                        return 'you won!'
                }
        }
}


playGame = () => {
        let userChoice = getUserChoice('rock');
        console.log(userChoice + 'test');
        let computerChoice = getComputerChoice();
        console.log(computerChoice + 'comp');
        console.log(determineWinner(userChoice, computerChoice));
}


playGame();