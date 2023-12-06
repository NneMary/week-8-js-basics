//Develop a program that generates a random number between 1 and 100
//Allow the user to guess the number and provide feedback on 
//whether the guess is too high, too low, or correct.

let correctNumber = Math.floor(Math.random() *100);
console.log(correctNumber);

let userGuess;

function randomNumber(min, max) {
    if(userGuess < correctNumber) {
        console.log('Too low')

    }else if(userGuess > correctNumber){
        console.log('Too high')

    }else{
        console.log('correct')
    }


}

userGuess = 50;

randomNumber(1, 100);

