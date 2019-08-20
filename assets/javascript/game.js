
var lyrics = ["red", "green", "blue", "orange", "purple", "black", "blue", "yellow", "steamboat", "story", "song", "slider"];

var correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log("correctLyric: " + correctLyric);

var wins = 0;
var losses = 0;
var guessesRemain = 10;
var correctLetters = [];
var incorrectLetters = [];
var incorrect;
var wrongGuess = false; 
var placeholder = [];
var pressToPlay = false;
 
var domPlaceholder = document.querySelector("#placeholder");

for (var j = 0; j < correctLyric.length; j++) {
    correctLetters.push(" - ");
}

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
            }
            console.log("correctLetters Array: " + correctLetters);
            console.log("incorrect variable: " + incorrect);
            console.log("incorrectLetters Array: " + incorrectLetters);
            console.log("guessesRemain: " + guessesRemain) 
    }
})


// hooman-20 (Intro to Nested For-loops)
// hooman-22 (Intro to .split())
// hooman-27 (Intro to functions, typeof, .charAt(), .indexOf()

// added counter for guesses remain

