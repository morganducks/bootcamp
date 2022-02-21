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

const animals = [
        'horse',
        'dog',
        'fish',
        'cat',
        'bird'
    ];
    
    
    //****************************************************************************************************************/
    // get firstAnimal and secondAnimal
    //    then put the REST of the animals in a new array called otherAnimals
    // ... = REST OPERATOR, IT GRABS US THE REST OF A DATA SET:
//     const [firstAni, secondAni, thirdAnimal, ...otherAnimals] = animals;
    
//     console.log(otherAnimals);

  
let person = {
    firstName: 'Billy',
    lastName: 'Bob',
    email: 'bob@email.com',
    username: 'BillyB',
    password: 'hmmmmmm',
};

const personCopy = { ...person };

console.log(personCopy, "Original: ", person);



--------------------------------------
const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.value.length < 8) {
            setPasswordError("Passwords must be 8 characters")
        }
        else {
            setPasswordError("")
            
        }
    }


    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else {
            setConfirmPasswordError("")
        }
    }



    
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else {
            setConfirmPasswordError("")
        }
    }

    
    <label>Password:</label>
    <input type="text" onChange={(e) => 
      handlePassword(e)} />
   {
   passwordError ?
   <p>{passwordError}</p>
   :null
}
</div>
<div>
    <label>Confirm Password:</label>
    <input type="text" onChange={(e) => { 
        handleConfirmPassword(e)
  }} />

   {
   confirmPasswordError ?
   <p>{confirmPasswordError}</p>
   :null
}