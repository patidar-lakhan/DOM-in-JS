console.log("Lets start the js....");
let randomNum = Math.round(Math.random() * 100 + 1);

console.log(randomNum);
const subt = document.getElementById("subt");
const input = document.getElementById("guessField");
const lowOrHi = document.getElementsByClassName("lowOrHi");
const remianGuess = document.getElementsByClassName("remain");
const guessSlot = document.getElementsByClassName("pre-gusses");
const startOver = document.getElementsByClassName("result");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  subt.addEventListener("click", function (e) {
    e.preventDefault();
    const inputValue = parseInt(input.value);
    console.log(inputValue);
    validateGuess(inputValue);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than or equal to 100");
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number Was ${randomNum}.`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`Congratulations you guessed it right!`);
    endgame();
  } else if (guess < randomNum) {
    displayMessage(`Too low, try again!`);
  } else if (guess > randomNum) {
    displayMessage(`Too high, try again!`);
  }
}
function displayGuess(guess) {
  console.log("i am inside displayGuess()");
  input.value = '';
  console.log(guess);
  guessSlot[0].innerHTML = guessSlot[0].innerHTML + `${guess}  `;
  numGuess++;
  remianGuess[0].innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi[0].innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    input.value = '';
    input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver[0].appendChild(p);
    playGame = false;
    newgame();
}

function newgame(){
    const newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener("click", function(e){
        randomNum = Math.round(Math.random() * 100 + 1);
        preGuess = []
        numGuess = 1;
        guessSlot.innerHTML = '';
        remianGuess.innerHTML = `${11 - numGuess}`;
        input.removeAttribute('disabled')
        startOver[0].removeChild(p);
        lowOrHi[0].innerHTML = '';

        playGame = true;
    })
}


