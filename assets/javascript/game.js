
var lyrics = ["red", "green", "blue", "orange", "purple", "black", "blue", "yellow", "steamboat", "story", "song", "slider"];

var correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log("correctLyric: " + correctLyric);

var wins = 0;
var losses = 0;
var guessesRemain = 10;
var correctLetters = [];
var incorrectLetters = [];
var incorrect;
var numCorrect = 0; 

var domWord = document.querySelector("#word");
var domGuessCount = document.querySelector("#guess-count");


function newGame() {
    correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
    guessesRemain = 10;
    domGuessCount.innerHTML = 9;
    correctLetters = [];
    incorrectLetters = [];
    console.log("correctLyric: " + correctLyric);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
}

function setHyphens() {
    for (var j = 0; j < correctLyric.length; j++) {
        correctLetters.push(" _ ");
        domWord.innerHTML = correctLetters.join("");
    }
}

setHyphens()
domWord.innerHTML = correctLetters.join("");

document.addEventListener("keyup", function() {
        var guess = event.key.toLowerCase();
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            for (var i = 0; i < correctLyric.length; i++) {
                if (correctLyric[i] === guess) {
                    correctLetters[i] = guess;
                    guessesRemain = guessesRemain - 1;
                    domGuessCount.innerHTML = guessesRemain; 
                } 
            }
            if (correctLyric.indexOf(guess) === -1 && incorrectLetters.indexOf(guess) === -1) {
                incorrect = guess;
                guessesRemain = guessesRemain - 1;
                domGuessCount.innerHTML = guessesRemain; 
                incorrectLetters.push(incorrect);
            }  
            if (guessesRemain === 0) {
                losses = losses + 1;
                newGame();
                setHyphens();
            }
            if (correctLetters.indexOf(" _ ") === -1) {
                wins = wins + 1;
                newGame();
                setHyphens();
            }

            domWord.innerHTML = correctLetters.join("");

            console.log("correctLetters Array: " + correctLetters);
            console.log("incorrect variable: " + incorrect);
            console.log("incorrectLetters Array: " + incorrectLetters);
            console.log("guessesRemain: " + guessesRemain);
    }
})

// Vanilla Javascript methods to remember:
// .split() - typeof - .charAt() - .indexOf() - nested for-loops


