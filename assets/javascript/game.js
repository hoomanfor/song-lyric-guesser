
var lyrics = ["red", "green", "blue", "orange", "purple", "black", "blue", "yellow"];

var correctLyric = lyrics[Math.floor(Math.random() * lyrics.length)];
console.log("correctLyric: " + correctLyric);

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var correctGuess = [];
var correctLetters = [];
var placeholder = [];

var domPlaceholder = document.querySelector("#placeholder");

document.addEventListener("keyup", function() {
        for (var j = 0; j < correctLyric.length; j++) {
            placeholder.push(" - ");
        };
        for (var k = 0; k < correctLyric.length; k++) {
            if (correctLyric[k] === placeholder[k]) {
                correctLetters.push(correctLyric[k])
            } else {
                correctLetters.push(" - ");
            }
        }
        var guess = event.key;
        for (var i = 0; i < correctLyric.length; i++) {
            correctLetters.push(correctLyric[i]);
            if (correctLyric[i] === guess) {
                placeholder[i] = correctLyric[i]
            } else {
                console.log("incorrect")
            }
        }
        console.log("Placeholder Array: " + placeholder);
        console.log("correctLetters Array: " + correctLetters);
})


// hooman-20 (Intro to Nested For-loops)
// hooman-22 (Intro to .split())
// hooman-27 (Intro to functions, typeof, charAt())

