
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
        placeholder = [];
        for (var j = 0; j < correctLyric.length; j++) {
            placeholder.push(" - ");
        }
        correctLetters = [];
        var guess = event.key;
        for (var i = 0; i < correctLyric.length; i++) {
            if (correctLyric[i] === guess) {
                correctGuess[i] = correctLyric[i];
            } else {
                console.log("Incorrect Answer")
            }
        }
        console.log("correctGuess Array: " + correctGuess);
        console.log("placeholder: " + placeholder)
})




// hooman-20 (Intro to Nested For-loops)
// hooman-22 (Intro to .split())
// hooman-27 (Intro to functions, typeof, charAt()), indexof

