
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

var domPlaceholder = document.querySelector("#placeholder");

function newGame() {
    correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
    guessesRemain = 10;
    correctLetters = [];
    incorrectLetters = [];
    console.log("correctLyric: " + correctLyric);
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
}

function setHyphens() {
    for (var j = 0; j < correctLyric.length; j++) {
        correctLetters.push(" - ");
    }
}

setHyphens()

document.addEventListener("keyup", function() {
        var guess = event.key.toLowerCase();
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            for (var i = 0; i < correctLyric.length; i++) {
                if (correctLyric[i] === guess) {
                    correctLetters[i] = guess;
                } 
            }
            if (correctLyric.indexOf(guess) === -1 && incorrectLetters.indexOf(guess) === -1) {
                incorrect = guess;
                guessesRemain = guessesRemain - 1; 
                incorrectLetters.push(incorrect);
            } else if (guessesRemain === 0) {
                losses = losses + 1;
                newGame();
                setHyphens();
            }
            if (correctLetters.indexOf(" - ") === -1) {
                wins = wins + 1;
                newGame();
                setHyphens();
            }
            console.log("correctLetters Array: " + correctLetters);
            console.log("incorrect variable: " + incorrect);
            console.log("incorrectLetters Array: " + incorrectLetters);
            console.log("guessesRemain: " + guessesRemain);
    }
})

// Vanilla Javascript methods to remember:
// .split() - typeof - .charAt() - .indexOf() - nested for-loops


