
var lyrics = ["red", "green", "blue", "orange", "purple", "black", "blue", "yellow"];

var correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log("correctLyric: " + correctLyric);

var wins = 0;
var losses = 0;
var guesses = 10;
var correctGuess = [];
var correctLetters = [];
var placeholder = [];

var domPlaceholder = document.querySelector("#placeholder");

for (var j = 0; j < correctLyric.length; j++) {
    correctGuess.push(" - ");
}


document.addEventListener("keyup", function() {
        var guess = event.key;
        for (var i = 0; i < correctLyric.length; i++) {
            if (correctLyric[i] === guess) {
                correctGuess[i] = guess;
            }
        }
        console.log("correctGuess Array: " + correctGuess);
})




// hooman-20 (Intro to Nested For-loops)
// hooman-22 (Intro to .split())
// hooman-27 (Intro to functions, typeof, charAt()), indexof

